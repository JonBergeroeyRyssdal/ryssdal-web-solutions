"use client";

import Link from "next/link";
import { useRef, useState } from "react";

const links = [
  ["Tjenester", "/#tjenester"],
  ["Prosjekter", "/#prosjekter"],
  ["Om meg", "/#om"],
  ["Kontakt", "/#kontakt"],
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  return (
    <header className="site-header">
      <nav className="navbar navbar-expand-xl py-3" aria-label="Hovedmeny"
        onKeyDown={(event) => {
          if (event.key === "Escape" && isOpen) {
            setIsOpen(false);
            toggleRef.current?.focus();
          }
        }}>
        <div className="container">
          <Link className="navbar-brand site-brand fw-semibold" href="/" onClick={() => setIsOpen(false)} aria-label="Ryssdal Web Solutions – hjem">
            <span className="brand-symbol" aria-hidden="true">R /</span>
            <span>RYSSDAL<span className="brand-subtitle">WEB SOLUTIONS</span></span>
          </Link>
          <button ref={toggleRef} className="navbar-toggler" type="button" aria-controls="main-navigation" aria-expanded={isOpen} aria-label={isOpen ? "Lukk meny" : "Åpne meny"} onClick={() => setIsOpen((open) => !open)}>
            <span className="navbar-toggler-icon" aria-hidden="true" />
          </button>
          <div id="main-navigation" className={`collapse navbar-collapse${isOpen ? " show" : ""}`}>
            <ul className="navbar-nav ms-auto mt-3 mt-xl-0 align-items-xl-center">
              {links.map(([label, href]) => <li className="nav-item" key={href}><Link className={`nav-link${href === "/#kontakt" ? " nav-contact" : ""}`} href={href} onClick={() => setIsOpen(false)}>{label}</Link></li>)}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
