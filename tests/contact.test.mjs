import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import ts from "typescript";

const source = readFileSync(new URL("../src/app/api/contact/route.ts", import.meta.url), "utf8");
const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
const valid = { name: "Test Person", email: "visitor@example.com", company: "", phone: "", subject: "New website", message: "Can you help with a website?", website: "" };

function setup(env = { SITE_URL: "https://example.com", RESEND_API_KEY: "test-key", CONTACT_FROM_EMAIL: "Website <website@example.com>" }, result = { id: "test-id" }, upstreamStatus = 200) {
  const calls = [];
  const exports = {};
  const fetch = async (url, options) => {
    calls.push({ url, ...options });
    const outcome = typeof result === "function" ? result(calls.length) : result;
    if (outcome instanceof Error) throw outcome;
    return Response.json(outcome, { status: upstreamStatus });
  };
  new Function("require", "exports", "process", "fetch", compiled)(
    () => ({ contact: { email: "jon@ryssdalwebsolutions.no" } }), exports, { env }, fetch,
  );
  const send = (payload = valid, headers = {}) => exports.POST(new Request("https://example.com/api/contact", {
    method: "POST", headers: { origin: "https://example.com", "content-type": "application/json", ...headers },
    body: typeof payload === "string" ? payload : JSON.stringify(payload),
  }));
  return { send, calls };
}

test("sends inquiry to the configured recipient and a separate copy to the validated visitor", async () => {
  const { send, calls } = setup();
  assert.equal((await send({ ...valid, company: "Example", phone: "+47 12345678", to: "attacker@example.com" })).status, 200);
  const email = JSON.parse(calls[0].body);
  assert.deepEqual(email.to, ["jon@ryssdalwebsolutions.no"]);
  assert.equal(email.reply_to, valid.email);
  assert.equal(email.subject, valid.subject);
  assert.equal(email.from, '"Test Person via Ryssdal Web Solutions" <website@example.com>');
  assert.match(email.text, /Example/);
  assert.match(email.text, /\+47 12345678/);
  assert.equal(email.html, undefined);
  assert.equal(calls.length, 2);
  const copy = JSON.parse(calls[1].body);
  assert.deepEqual(copy.to, [valid.email]);
  assert.equal(copy.from, '"Ryssdal Web Solutions" <website@example.com>');
  assert.equal(copy.reply_to, "jon@ryssdalwebsolutions.no");
  assert.match(copy.subject, /Kopi av din henvendelse/);
  assert.ok(copy.text.includes(valid.message));
  assert.equal(copy.html, undefined);
});

test("reports copy acceptance separately without losing the original inquiry", async () => {
  assert.deepEqual(await (await setup().send()).json(), { ok: true, copySent: true });
  for (const failure of [{}, new Error("copy timeout")]) {
    const { send, calls } = setup(undefined, count => count === 1 ? { id: "original" } : failure);
    const response = await send();
    assert.equal(response.status, 200);
    assert.deepEqual(await response.json(), { ok: true, copySent: false });
    assert.equal(calls.length, 2);
  }
});

test("rejects malformed, missing, oversized and injected fields without sending", async () => {
  const { send, calls } = setup();
  for (const payload of ["{", "null", "[]", {}, { ...valid, name: " " }, { ...valid, message: " " }, { ...valid, email: "invalid" }, { ...valid, email: "a@example.com\r\nBcc: x@example.com" }, { ...valid, message: "x".repeat(5001) }, { ...valid, website: "spam" }]) {
    assert.equal((await send(payload)).status, 400);
  }
  assert.equal((await send("x".repeat(24001))).status, 413);
  assert.equal(calls.length, 0);
});

test("rejects missing, empty, oversized and injected subjects", async () => {
  const { send, calls } = setup();
  for (const subject of [undefined, " ", "x".repeat(161), "Hello\r\nBcc: other@example.com"]) {
    assert.equal((await send({ ...valid, subject })).status, 400);
  }
  assert.equal(calls.length, 0);
});

test("visitor name cannot replace the authenticated sender address", async () => {
  const { send, calls } = setup();
  assert.equal((await send({ ...valid, name: 'Test "Name" <other@example.com>' })).status, 200);
  const email = JSON.parse(calls[0].body);
  assert.equal(email.from, '"Test Name other@example.com via Ryssdal Web Solutions" <website@example.com>');
  assert.equal((await send({ ...valid, name: "Test\r\nBcc: other@example.com" })).status, 400);
});

test("rejects foreign origin and unsupported content type", async () => {
  const { send, calls } = setup();
  assert.equal((await send(valid, { origin: "https://other.example.com" })).status, 403);
  assert.equal((await send(valid, { "content-type": "text/plain" })).status, 415);
  assert.equal(calls.length, 0);
});

test("missing credentials cannot report successful sending", async () => {
  const { send, calls } = setup({ SITE_URL: "https://example.com" });
  assert.equal((await send()).status, 503);
  assert.equal(calls.length, 0);
});

test("provider failures, malformed success and timeouts cannot report success", async () => {
  for (const [result, status] of [[{ message: "rejected" }, 403], [{}, 200], [new Error("timeout"), 200]]) {
    assert.equal((await setup(undefined, result, status).send()).status, 502);
  }
});

test("limits sends per process and returns retry information", async () => {
  const { send, calls } = setup();
  for (let i = 0; i < 5; i++) assert.equal((await send()).status, 200);
  const response = await send();
  assert.equal(response.status, 429);
  assert.ok(Number(response.headers.get("retry-after")) > 0);
  assert.equal(calls.length, 10);
});
