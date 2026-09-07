export default function FAQ() {
  return (
    <section className="section-space" aria-labelledby="questions-heading">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-5">
            <p className="eyebrow">FØR VI STARTER</p>
            <h2 id="questions-heading">Lurer du på noe?</h2>
          </div>
          <div className="col-lg-7 faq">
            <details>
              <summary>Hva koster en nettside eller nettløsning?</summary>
              <p>Det avhenger av innhold, funksjoner og integrasjoner. Etter en innledende samtale får du et forslag med avklart omfang og pris før vi setter i gang.</p>
            </details>
            <details>
              <summary>Må jeg vite nøyaktig hva jeg trenger?</summary>
              <p>Nei. Fortell hva som tar tid i hverdagen, eller hva du ønsker at nettsiden skal gjøre. Så finner vi et passende utgangspunkt sammen.</p>
            </details>
            <details>
              <summary>Kan vi starte med en mindre løsning?</summary>
              <p>Ja. Vi kan avgrense første versjon til det viktigste og bygge videre etter at du har tatt den i bruk.</p>
            </details>
            <details>
              <summary>Kan jeg endre innholdet på nettsiden selv?</summary>
              <p>Ja, dersom vi inkluderer et publiseringsverktøy i løsningen. Da kan du redigere for eksempel tekst, priser og bilder. Du får en gjennomgang av hvordan det brukes.</p>
            </details>
            <details>
              <summary>Kan du koble til booking eller systemene vi bruker?</summary>
              <p>Jeg undersøker om tjenestene har støtte for integrasjon og hva som kreves. Ofte kan et eksisterende bookingverktøy dekke behovet. Eventuelle abonnementer og begrensninger avklares før vi starter.</p>
            </details>
            <details>
              <summary>Hva skjer etter lansering?</summary>
              <p>Vi avtaler ansvar for drift, oppdateringer og vedlikehold. En vedlikeholdsavtale kan omfatte backup, feilretting, små innholdsendringer og teknisk hjelp. Oppgaver, responstid og pris avklares i avtalen; hosting og tredjepartskostnader spesifiseres separat.</p>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
}
