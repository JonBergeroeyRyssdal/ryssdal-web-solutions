"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
import { showProjects } from "@/data/projects";

export default function Navbar() {
  const links = [["Tjenester", "/#tjenester"], ...(showProjects ? [["Prosjekter", "/#prosjekter"]] : []), ["Om meg", "/#om"], ["Spørsmål og svar", "/#sporsmal"], ["Kontakt", "/#kontakt"]];
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
          <Link className="navbar-brand site-brand fw-semibold" href="/" onClick={() => setIsOpen(false)} aria-label="Ryssdal Web Solutions – Hjem">
            <Image className="brand-logo" src="/ryssdal-logo.svg" alt="Ryssdal Web Solutions" width={268} height={56} />
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

