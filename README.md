# Ryssdal Web Solutions

Next.js App Router, TypeScript og Bootstrap 5.

## Utvikling

```powershell
npm.cmd install
npm.cmd run dev
```

Åpne `/nb`, `/en` eller `/es` på adressen terminalen viser. `/` videresendes til `/nb`.

## Produksjon og kontroller

Kopier `.env.example` til `.env.local` og sett `SITE_URL` til det faktiske domenet, for eksempel `https://ditt-domene.no`, før produksjonsbygg. Verdien skal bare inneholde protokoll og domene, uten sti, query eller fragment. Lokalt brukes `http://localhost:3000` hvis variabelen mangler. Ikke publiser med localhost som SITE_URL.

```powershell
npm.cmd run lint
npm.cmd test
npm.cmd run build
npm.cmd start
```

## Språk og SEO

- `src/app/[lang]/layout.tsx`: HTML-språk, servergenererte metadata og felles layout.
- `src/app/[lang]/page.tsx`: rekkefølgen på seksjonene.
- `src/i18n/nb.ts`, `en.ts`, `es.ts`: oversettelser. `title` brukes som SEO-tittel og `heroText` som metabeskrivelse.
- `src/i18n/config.ts`: støttede språk og ordbøker.
- `src/i18n/seo.ts`: domene og alternative språkadresser.
- `src/app/sitemap.ts` og `robots.ts`: sitemap med alle tre språk og lenke fra robots.txt.

Hver språkadresse har egen canonical, oversatt tittel og beskrivelse, Open Graph- og Twitter-metadata samt gjensidige hreflang-lenker. Norsk er x-default. Språkknappene er vanlige navigasjonslenker. Nettadressen bestemmer språk også ved direkte besøk, omlasting og deling. Det tidligere localStorage-valget brukes ikke lenger.

`LanguageProvider` får språk og oversettelser fra serverlayouten. Den endrer ikke HTML-språk eller metadata i etterkant. Unsupported språk gir 404. Forsidens seksjonslenker beholder valgt språk.

## Komponenter og innhold

- `components/home/`: synlige seksjoner Hero, Services, About og Contact. FAQ, Process og SolutionExamples er beholdt, men ikke vist eller oversatt.
- `components/Projects.tsx`: prosjektoversikt og tomtilstand.
- `components/ui/Section.tsx`: seksjon med Bootstrap-container og kobling til overskrift.
- `components/ui/SectionHeading.tsx`: overtekst og h2.
- `components/ui/ContentCard.tsx`: kort med tittel, beskrivelse og valgfritt innhold.
- `components/ui/ArrowLink.tsx`: lenke med dekorativ pil.
- `data/services.ts`: setter sammen tjenester fra språkfilen.
- `data/contact.ts`: felles kontaktinformasjon.
- `app/globals.css`: farger, typografi og responsivt design.

## Prosjekter

Legg prosjekter i `src/data/projects.ts` med `title`, `category`, `description` og valgfri `href`. Bruk Kundeprosjekt, Demoprosjekt eller Studieprosjekt. Legg til `translations: { en: { title: "...", description: "..." }, es: { title: "...", description: "..." } }` for oversatte prosjekttekster. Originalteksten brukes dersom oversettelse mangler.

Kontaktlenkene åpner e-post eller telefon. Foretakets organisasjonsnummer legges til når registreringen er klar.

## Kontaktskjema og Resend

Skjemaet på alle tre språk sender via `POST /api/contact` til adressen i `src/data/contact.ts`. Ingen henvendelser lagres i en egen database eller skrives til applikasjonslogger. E-posten inneholder navn, e-post, firma, telefon og melding. Reply-To settes til besøkendes adresse slik at du kan svare direkte.

1. Opprett en Resend-konto og verifiser avsenderdomenet med DNS-postene Resend oppgir. Se https://resend.com/docs/dashboard/domains/introduction.
2. Opprett en API-nøkkel med tilgang til sending. Sett `RESEND_API_KEY` i `.env.local` og i hostingtjenestens miljøvariabler. Ikke legg nøkkelen i kildekode eller bruk `NEXT_PUBLIC_`.
3. Sett `CONTACT_FROM_EMAIL` til en adresse på det verifiserte domenet, for eksempel `Ryssdal Web Solutions <nettside@ryssdalwebsolutions.no>`. Mottakeren er `jon@ryssdalwebsolutions.no`.
4. Sett `SITE_URL` til nettstedets faktiske origin (også riktig port ved lokal testing). Start serveren på nytt etter endringene. Hosting må støtte Next.js-serverruter; statisk eksport er ikke tilstrekkelig.
5. Send en test fra skjemaet etter oppsett. Kontroller mottak i innboksen, eventuell søppelpost og at Svar går til avsenderen. Resends aksept av meldingen er ikke en garanti for levering til innboksen.

Ved manglende oppsett eller sendefeil vises en feilmelding og direkte e-postlenke; teksten i skjemaet beholdes. Skjemaet har servervalidering, størrelsesgrense, et skjult spamfelt, kontroll av origin og maksimalt fem sendeforsøk per minutt per serverprosess. Dette er enkel spambeskyttelse: telleren nullstilles ved omstart og deles ikke mellom serverinstanser. Bruk hostingtjenestens rate limiting på `/api/contact` eller CAPTCHA hvis trafikk/spam krever sterkere beskyttelse. Origin-kontroll alene stopper ikke automatiserte klienter.

Resend og e-postleverandøren behandler meldingsinnholdet selv om nettsiden ikke har egen database. Avklar lagring og sletting i disse tjenestene og tilpass personverninformasjonen til faktisk praksis.

API-kontrakt: https://resend.com/docs/api-reference/emails/send-email.
