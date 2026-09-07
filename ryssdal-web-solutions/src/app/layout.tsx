import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const description = "Nettsider, skreddersydde nettløsninger og integrasjoner for små bedrifter. Direkte samarbeid med utvikleren, fra første idé til ferdig løsning.";

export const metadata: Metadata = {
  title: { default: "Ryssdal Web Solutions", template: "%s | Ryssdal Web Solutions" },
  description,
  openGraph: { title: "Ryssdal Web Solutions – nettsider og digitale løsninger", description, locale: "nb_NO", type: "website", siteName: "Ryssdal Web Solutions" },
  twitter: { card: "summary", title: "Ryssdal Web Solutions", description },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
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
