"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { contactFormText } from "@/data/contact-form";
import { contact } from "@/data/contact";

export default function ContactForm() {
  const busy = useRef(false);
  const confirmation = useRef<HTMLDivElement>(null);
  const nameInput = useRef<HTMLInputElement>(null);
  const focusNewMessage = useRef(false);
  const [sentEmail, setSentEmail] = useState("");
  const [submittedHeight, setSubmittedHeight] = useState<number>();
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error" | "limited">("idle");

  useEffect(() => {
    const target = status === "success" ? confirmation.current : focusNewMessage.current ? nameInput.current : null;
    if (!target) return;
    focusNewMessage.current = false;
    target.focus({ preventScroll: true });
    target.scrollIntoView({ block: "start", behavior: "instant" });
  }, [status]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy.current) return;
    busy.current = true;
    const form = event.currentTarget;
    setSubmittedHeight(form.getBoundingClientRect().height);
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
        setSentEmail(String(data.email).trim());
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

  if (status === "success") {
    const [beforeEmail, afterEmail] = contactFormText.successReply.split("{email}");
    return (
      <div className="contact-box contact-form contact-success" style={{ minHeight: submittedHeight }} ref={confirmation} tabIndex={-1} aria-labelledby="contact-success-title" aria-describedby="contact-success-description">
        <span className="contact-success-icon" aria-hidden="true">✓</span>
        <h3 id="contact-success-title">{contactFormText.successTitle}</h3>
        <p id="contact-success-description">{beforeEmail}<strong>{sentEmail}</strong>{afterEmail}</p>
        <button className="btn btn-accent" type="button" onClick={() => {
          focusNewMessage.current = true;
          setSentEmail("");
          setStatus("idle");
        }}>{contactFormText.sendAnother}</button>
      </div>
    );
  }

  return (
    <form className="contact-box contact-form" onSubmit={submit} aria-label={contactFormText.title} aria-describedby="contact-privacy" aria-busy={status === "sending"}>
      <div className="contact-form-heading">
        <span className="contact-form-symbol" aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="3" /><path d="m3 7 9 6 9-6" /></svg>
        </span>
        <div><h3>{contactFormText.title}</h3><p className="small mb-0">{contactFormText.required}</p></div>
      </div>
      <fieldset disabled={status === "sending"}>
        <legend className="visually-hidden">{contactFormText.title}</legend>
        <div className="row g-4">
          <div className="col-sm-6">
            <label className="form-label" htmlFor="contact-name">{contactFormText.name} *</label>
            <input ref={nameInput} className="form-control" id="contact-name" name="name" placeholder="Ditt navn" autoComplete="name" required maxLength={120} />
          </div>
          <div className="col-sm-6">
            <label className="form-label" htmlFor="contact-email">{contactFormText.email} *</label>
            <input className="form-control" id="contact-email" name="email" type="email" placeholder="navn@bedrift.no" autoComplete="email" required maxLength={254} />
          </div>
          <div className="col-sm-6">
            <label className="form-label" htmlFor="contact-company">{contactFormText.company}</label>
            <input className="form-control" id="contact-company" name="company" placeholder="Bedrift eller organisasjon" autoComplete="organization" maxLength={160} />
          </div>
          <div className="col-sm-6">
            <label className="form-label" htmlFor="contact-phone">{contactFormText.phone}</label>
            <input className="form-control" id="contact-phone" name="phone" type="tel" placeholder="Ditt telefonnummer" autoComplete="tel" maxLength={40} />
          </div>
          <div className="col-12">
            <label className="form-label" htmlFor="contact-subject">{contactFormText.subject} *</label>
            <input className="form-control" id="contact-subject" name="subject" placeholder="For eksempel ny nettside eller booking" required maxLength={160} />
          </div>
          <div className="col-12">
            <label className="form-label" htmlFor="contact-message">{contactFormText.message} *</label>
            <textarea className="form-control" id="contact-message" name="message" placeholder="Fortell litt om hva du trenger hjelp til. Det er helt greit om du ikke har alle detaljene ennå." rows={5} required maxLength={5000} />
          </div>
        </div>
        <div className="contact-trap" aria-hidden="true">
          <label htmlFor="contact-website">Website</label>
          <input id="contact-website" name="website" tabIndex={-1} autoComplete="off" />
        </div>
        <div className="contact-form-footer">
          <p className="small mb-0" id="contact-privacy">{contactFormText.privacy}</p>
          <button className="btn btn-accent" type="submit">{status === "sending" ? contactFormText.sending : contactFormText.send}<span aria-hidden="true">↗</span></button>
        </div>
      </fieldset>
      <div role="status" aria-live="polite" aria-atomic="true">
        {(status === "error" || status === "limited") && (
          <p className="contact-feedback mb-0">{status === "limited" ? contactFormText.limited : contactFormText.error} <a className="contact-email" href={`mailto:${contact.email}`}>{contact.email}</a></p>
        )}
      </div>
    </form>
  );
}
