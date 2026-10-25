import { contact } from "@/data/contact";

export default function Footer() {
  return (
    <footer className="site-footer mt-auto">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-5">
            <p className="fw-semibold mb-1">Ryssdal Web Solutions</p>
            <p className="mb-0">Nettsider og digitale løsninger for bedrifter, organisasjoner og foreninger.</p>
          </div>
          <div className="col-md-4">
            <p className="fw-semibold mb-1">Forretningsadresse</p>
            <address className="mb-0">
              c/o Jon Bergerøy Ryssdal<br />
              Vogts gate 13B<br />
              1532 Moss, Norge
            </address>
          </div>
          <div className="col-md-3">
            <p className="fw-semibold mb-1">Kontakt</p>
            <div className="d-flex flex-column gap-1">
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
              <a href={`tel:${contact.phone}`}>{contact.phoneLabel}</a>
            </div>
          </div>
        </div>
        <div className="footer-business-details">
          <span>Org.nr. 938 533 318 · Enkeltpersonforetak</span>
          <small>© {new Date().getFullYear()} Jon Ryssdal</small>
        </div>
      </div>
    </footer>
  );
}
