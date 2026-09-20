"use client";

import { useRef, useState, type FormEvent } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { contact } from "@/data/contact";

export default function ContactForm() {
  const { t } = useLanguage();
  const busy = useRef(false);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error" | "limited">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy.current) return;
    busy.current = true;
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        signal: AbortSignal.timeout(20000),
      });
      if (response.status === 429) {
        setStatus("limited");
      } else if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      busy.current = false;
    }
  }

  return (
    <form className="contact-box contact-form" onSubmit={submit} aria-label={t.formTitle} aria-describedby="contact-privacy" aria-busy={status === "sending"}>
      <h3>{t.formTitle}</h3>
      <p className="small">{t.formRequired}</p>
      <fieldset disabled={status === "sending"}>
        <legend className="visually-hidden">{t.formTitle}</legend>
        <div className="row g-3">
          <div className="col-sm-6">
            <label className="form-label" htmlFor="contact-name">{t.formName} *</label>
            <input className="form-control" id="contact-name" name="name" autoComplete="name" required maxLength={120} />
          </div>
          <div className="col-sm-6">
            <label className="form-label" htmlFor="contact-email">{t.formEmail} *</label>
            <input className="form-control" id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} />
          </div>
          <div className="col-sm-6">
            <label className="form-label" htmlFor="contact-company">{t.formCompany}</label>
            <input className="form-control" id="contact-company" name="company" autoComplete="organization" maxLength={160} />
          </div>
          <div className="col-sm-6">
            <label className="form-label" htmlFor="contact-phone">{t.formPhone}</label>
            <input className="form-control" id="contact-phone" name="phone" type="tel" autoComplete="tel" maxLength={40} />
          </div>
          <div className="col-12">
            <label className="form-label" htmlFor="contact-message">{t.formMessage} *</label>
            <textarea className="form-control" id="contact-message" name="message" rows={6} required maxLength={5000} />
          </div>
        </div>
        <div className="contact-trap" aria-hidden="true">
          <label htmlFor="contact-website">Website</label>
          <input id="contact-website" name="website" tabIndex={-1} autoComplete="off" />
        </div>
        <p className="small mt-3" id="contact-privacy">{t.formPrivacy}</p>
        <button className="btn btn-accent" type="submit">{status === "sending" ? t.formSending : t.formSend}</button>
      </fieldset>
      <div role="status" aria-live="polite" aria-atomic="true">
        {status === "success" && <p className="contact-feedback mb-0">{t.formSuccess}</p>}
        {(status === "error" || status === "limited") && (
          <p className="contact-feedback mb-0">{status === "limited" ? t.formLimited : t.formError} <a className="contact-email" href={`mailto:${contact.email}`}>{contact.email}</a></p>
        )}
      </div>
    </form>
  );
}
