"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { contact } from "@/data/contact";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="site-footer mt-auto">
      <div className="container d-flex flex-column flex-md-row justify-content-between gap-3">
        <div><p className="fw-semibold mb-1">Ryssdal Web Solutions</p><span>{t.footer}</span></div>
        <div className="d-flex flex-column gap-1"><a href={`mailto:${contact.email}`}>{contact.email}</a><a href={`tel:${contact.phone}`}>{contact.phoneLabel}</a></div>
        <small>© {new Date().getFullYear()} Jon Ryssdal</small>
      </div>
    </footer>
  );
}
