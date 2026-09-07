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
- `src/data/services.ts`: tjenestebeskrivelser og punktlister.
- `src/data/process.ts`: trinnene i arbeidsprosessen.
- `src/data/contact.ts`: e-post og telefon, delt mellom Contact og Footer.
- `src/app/layout.tsx`: felles layout, norsk språk og metadata for søk og deling.
- `src/app/globals.css`: egne stiler, farger, typografi og mobiltilpasning etter Bootstrap.
- `src/components/Navbar.tsx`: Bootstrap-navbar med React-styrt mobilmeny.
- `src/components/Footer.tsx`: kontaktinformasjon og opphavsrett.
- `src/app/icon.svg`: nettstedets ikon.

Kontaktlenkene åpner brukerens e-postprogram eller telefon. Ingen skjemaopplysninger samles inn på nettstedet. FAQ bruker native details/summary. Eksempler beskriver mulige løsninger og er ikke kundereferanser.

Før offentlig lansering: bekreft tjenestetilbud og kontaktinformasjon, legg til organisasjonsnummer når foretaket er registrert, og konfigurer endelig domene for canonical-URL og sitemap. Oppdater kontaktopplysninger i `src/data/contact.ts` ved endringer.
