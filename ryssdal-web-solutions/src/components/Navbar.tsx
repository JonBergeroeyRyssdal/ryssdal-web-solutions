"use client";

import { useLanguage } from "@/components/LanguageProvider";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Link from "next/link";
import { useRef, useState } from "react";



export default function Navbar() {
  const { t, language } = useLanguage();
  const links = [[t.services, `/${language}#tjenester`], [t.projects, `/${language}#prosjekter`], [t.about, `/${language}#om`], [t.contact, `/${language}#kontakt`]];
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  return (
    <header className="site-header">
      <nav className="navbar navbar-expand-xl py-3" aria-label={t.menu}
        onKeyDown={(event) => {
          if (event.key === "Escape" && isOpen) {
            setIsOpen(false);
            toggleRef.current?.focus();
          }
        }}>
        <div className="container">
          <Link className="navbar-brand site-brand fw-semibold" href={`/${language}`} onClick={() => setIsOpen(false)} aria-label={`Ryssdal Web Solutions – ${t.home}`}>
            <span className="brand-symbol" aria-hidden="true">R /</span>
            <span>RYSSDAL<span className="brand-subtitle">WEB SOLUTIONS</span></span>
          </Link>
          <LanguageSwitcher />
          <button ref={toggleRef} className="navbar-toggler" type="button" aria-controls="main-navigation" aria-expanded={isOpen} aria-label={isOpen ? t.closeMenu : t.openMenu} onClick={() => setIsOpen((open) => !open)}>
            <span className="navbar-toggler-icon" aria-hidden="true" />
          </button>
          <div id="main-navigation" className={`collapse navbar-collapse${isOpen ? " show" : ""}`}>
            <ul className="navbar-nav ms-auto mt-3 mt-xl-0 align-items-xl-center">
              {links.map(([label, href]) => <li className="nav-item" key={href}><Link className={`nav-link${href === `/${language}#kontakt` ? " nav-contact" : ""}`} href={href} onClick={() => setIsOpen(false)}>{label}</Link></li>)}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

