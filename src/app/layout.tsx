import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteUrl } from "@/lib/site";

const title = "Nettsider for bedrifter og organisasjoner | Ryssdal Web Solutions";
const description = "Jeg lager nettsider og digitale løsninger for små og mellomstore bedrifter, organisasjoner og foreninger. Jeg samarbeider med kunder i Østfold, resten av Norge og internasjonalt.";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title,
  description,
  verification: {
    google: "XZUk7LHIahsRmU4qu7B_rGXgzcJRjxyadGLauDtk6V0",
  },
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: siteUrl.href,
    locale: "nb_NO",
    type: "website",
    siteName: "Ryssdal Web Solutions",
  },
  twitter: { card: "summary", title, description },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nb">
      <body className="d-flex flex-column">
        <a className="skip-link" href="#main-content">Hopp til innhold</a>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
