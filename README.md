# Ryssdal Web Solutions

Next.js App Router, TypeScript og Bootstrap 5. Nettsiden er kun på norsk.

## Utvikling

```powershell
npm.cmd install
npm.cmd run dev
```

Åpne `/` på adressen terminalen viser. Gamle adresser (`/nb`, `/en` og `/es`) videresendes til `/`.

## Hvor endrer jeg hva?

- `src/app/page.tsx`: rekkefølgen på seksjonene.
- `src/app/layout.tsx`: felles layout og SEO-metadata.
- `src/data/services.ts`: tjenester, priser og lengre tekst for Services-komponenten.
- `src/data/contact-form.ts`: tekster og statusmeldinger for ContactForm-komponenten.
- `src/data/projects.ts`: prosjekter med `title`, `category`, `description` og valgfri `href`. Kategorier: Kundeprosjekt, Demoprosjekt eller Studieprosjekt.
- `src/data/contact.ts`: e-post og telefonnummer.
- `src/components/home/`: seksjonene Hero, Services, About og Contact. FAQ, Process og SolutionExamples er beholdt, men vises ikke på forsiden.
- `src/components/Projects.tsx`: prosjektoversikten.
- `src/components/Navbar.tsx` og `Footer.tsx`: meny og footer.
- `src/components/ui/`: felles seksjoner, overskrifter, kort og lenker.
- `src/app/globals.css`: farger, typografi og responsivt design.
- `src/lib/site.ts`: domenet fra `SITE_URL`.
- `src/app/sitemap.ts` og `robots.ts`: sitemap og søkemotorinnstillinger.

Korte tekster ligger direkte i komponentene som viser dem. Større innholdsmengder har egne datafiler for den aktuelle komponenten. SEO-tittel og metabeskrivelse redigeres i `src/app/layout.tsx`. Bare menyen og kontaktskjemaet trenger klientkomponenter for interaktivitet.

## Produksjon og kontroller

Kopier `.env.example` til `.env.local` og sett `SITE_URL` til det faktiske domenet før produksjonsbygg, for eksempel `https://ditt-domene.no`. Verdien skal bare inneholde protokoll og domene, uten sti, query eller fragment. Lokalt brukes `http://localhost:3000` hvis variabelen mangler.

```powershell
npm.cmd run lint
npm.cmd test
npm.cmd run build
npm.cmd start
```

## Kontaktskjema og Resend

Kontaktskjemaet sender via `POST /api/contact` til adressen i `src/data/contact.ts`. Ingen henvendelser lagres i en egen database eller skrives til applikasjonslogger. E-posten inneholder navn, e-post, firma, telefon og melding. Reply-To settes til besøkendes adresse slik at du kan svare direkte.

1. Opprett en Resend-konto og verifiser avsenderdomenet med DNS-postene Resend oppgir. Se https://resend.com/docs/dashboard/domains/introduction.
2. Opprett en API-nøkkel med tilgang til sending. Sett `RESEND_API_KEY` i `.env.local` og i hostingtjenestens miljøvariabler. Ikke legg nøkkelen i kildekode eller bruk `NEXT_PUBLIC_`.
3. Sett `CONTACT_FROM_EMAIL` til en adresse på det verifiserte domenet, for eksempel `Ryssdal Web Solutions <nettside@ryssdalwebsolutions.no>`. Mottakeren er `jon@ryssdalwebsolutions.no`.
4. Sett `SITE_URL` til nettstedets faktiske origin (også riktig port ved lokal testing). Start serveren på nytt etter endringene. Hosting må støtte Next.js-serverruter; statisk eksport er ikke tilstrekkelig.
5. Send en test fra skjemaet etter oppsett. Kontroller mottak i innboksen, eventuell søppelpost og at Svar går til avsenderen. Resends aksept av meldingen er ikke en garanti for levering til innboksen.

Ved manglende oppsett eller sendefeil vises en feilmelding og direkte e-postlenke; teksten i skjemaet beholdes. Skjemaet har servervalidering, størrelsesgrense, et skjult spamfelt, kontroll av origin og maksimalt fem sendeforsøk per minutt per serverprosess. Dette er enkel spambeskyttelse: telleren nullstilles ved omstart og deles ikke mellom serverinstanser. Bruk hostingtjenestens rate limiting på `/api/contact` eller CAPTCHA hvis trafikk/spam krever sterkere beskyttelse. Origin-kontroll alene stopper ikke automatiserte klienter.

Resend og e-postleverandøren behandler meldingsinnholdet selv om nettsiden ikke har egen database. Avklar lagring og sletting i disse tjenestene og tilpass personverninformasjonen til faktisk praksis.

API-kontrakt: https://resend.com/docs/api-reference/emails/send-email.
