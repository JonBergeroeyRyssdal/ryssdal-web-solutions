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
