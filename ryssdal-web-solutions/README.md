# Ryssdal Web Solutions

Bedriftsside bygget med Next.js App Router, TypeScript og Bootstrap 5.

## Lokal utvikling

```powershell
npm.cmd install
npm.cmd run dev
```

Åpne adressen som terminalen viser (vanligvis http://localhost:3000).

## Kontroller og produksjon

```powershell
npm.cmd run lint
npm.cmd run build
npm.cmd start
```

## Innhold og struktur

### Legge til prosjekter

Legg til objekter i `projects`-listen i `src/data/projects.ts`. Hvert prosjekt har `title`, `category`, `description` og valgfri `href`. Filen inneholder et kommentert eksempel. Prosjektkort vises automatisk når listen har innhold; frem til da vises «Prosjekter kommer her». Bruk kategorien Kundeprosjekt, Demoprosjekt eller Studieprosjekt etter hva prosjektet er.

- `src/app/page.tsx`: metadata og rekkefølgen på forsidens seksjoner.
- `src/components/home/`: Hero, Services, SolutionExamples, Process, About, FAQ og Contact. Rediger tekst og struktur i den aktuelle seksjonskomponenten.
- `src/components/Projects.tsx`: prosjektseksjonen.
- `src/components/ui/`: gjenbrukbare byggeklosser for seksjoner, overskrifter, kort og lenker.
- `src/data/faq.ts`: spørsmål og svar.
- `src/data/services.ts`: tjenestebeskrivelser og punktlister.
- `src/data/process.ts`: trinnene i arbeidsprosessen.
- `src/data/contact.ts`: e-post og telefon, delt mellom Contact og Footer.
- `src/app/layout.tsx`: felles layout, norsk språk og metadata for søk og deling.
- `src/app/globals.css`: egne stiler, farger, typografi og mobiltilpasning etter Bootstrap.
- `src/components/Navbar.tsx`: Bootstrap-navbar med React-styrt mobilmeny.
- `src/components/Footer.tsx`: kontaktinformasjon og opphavsrett.
- `src/app/icon.svg`: nettstedets ikon.

Kontaktlenkene åpner brukerens e-postprogram eller telefon. Ingen skjemaopplysninger samles inn på nettstedet. FAQ bruker native details/summary. Eksempler beskriver mulige løsninger og er ikke kundereferanser.

### Gjenbrukbare komponenter

- `Section`: semantisk seksjon med Bootstrap-container. `headingId` peker til overskriftens ID; valgfri `id` brukes til menylenker. Standardklasse er `section-space`; en eksplisitt `className` erstatter denne.
- `SectionHeading`: liten overtekst og h2-overskrift. Støtter JSX i overskriften, for eksempel linjeskift. Hero beholder sin egen h1.
- `ContentCard`: felles kort for tjenester og prosjekter med etikett, tittel, beskrivelse, valgfritt innhold og handlingslenke.
- `ArrowLink`: vanlig lenke med dekorativ pil som skjules for skjermlesere. Støtter standard lenkeattributter, inkludert CSS-klasser og tilgjengelighetsnavn.

Seksjonskomponentene setter sammen byggeklossene og bestemmer kolonneoppsett. Behold særegne elementer lokalt fremfor å lage nye abstraksjoner for hvert HTML-element. De delte komponentene er serverkomponenter og trenger ingen ekstra klient-JavaScript.

Før offentlig lansering: bekreft tjenestetilbud og kontaktinformasjon, legg til organisasjonsnummer når foretaket er registrert, og konfigurer endelig domene for canonical-URL og sitemap. Oppdater kontaktopplysninger i `src/data/contact.ts` ved endringer.

### Forenklet forside

Forsiden viser Hero, Services, Projects, About og Contact. Menyen har fire valg: Tjenester, Prosjekter, Om meg og Kontakt. FAQ, Process og SolutionExamples er beholdt som komponenter, men vises ikke på forsiden. Tjenestene er samlet i tre korte beskrivelser i src/data/services.ts.


### Språk

Språkvelgeren tilbyr norsk (nb), engelsk (en) og spansk (es). Rediger synlige tekster i `src/i18n/nb.ts`, `en.ts` og `es.ts`. TypeScript krever samme tekstnøkler på alle språk. `src/data/services.ts` setter sammen tjenestene fra valgt språk.

`LanguageProvider` håndterer språkvalg, dokumentets språk og sidetittel. `LanguageSwitcher` viser knappene. Valget lagres lokalt i nettleseren; hvis lagring blokkeres, fungerer byttet fortsatt for gjeldende besøk. Første servervisning er norsk. Oversettelsene deler URL, og servermetadata for søk og deling er fortsatt norske. Egne språkadresser og hreflang kan legges til ved behov.

Prosjekter kan få `translations: { en: { title: "...", description: "..." }, es: { title: "...", description: "..." } }`. Originalteksten brukes når en oversettelse mangler. De inaktive FAQ-, prosess- og eksempelkomponentene er ikke oversatt.

Synlige seksjoner bruker nå klientkontekst for språkbytte. De delte UI-komponentene er uten egen tilstand og følger klientgrensen når de importeres fra disse seksjonene.
