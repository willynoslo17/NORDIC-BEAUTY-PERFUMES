# Sjekkliste VOEC / MVA — Bellafru

Intern sjekkliste. Betaling, Stripe og kassen er ikke endret.

Det som allerede står på nettstedet, er gjentatt nedenfor som observasjon. Det er ikke et nytt tall. Alt som ikke kan leses ut av repoet, står som por confirmar.

## Allerede publisert på nettstedet

- Prisene er oppgitt inkludert 25 % MVA.
- Frakt i Norge er oppgitt som 79 kr per ordre. EU/EØS og Peru har egne beløp på siden om frakt.
- Selger i bunntekst og kjøpsvilkår: Bellafru, varemerke for Martinez Lozano Internasjonal Handel, org.nr 935 407 095 MVA, Norbygata 19, 0187 Oslo, Norge.
- Kassen er stengt i koden (`CHECKOUT_ENABLED` er false både i butikken og i `functions/api/create-checkout-session.ts`). Denne listen endrer ikke det.

## Por confirmar

- Om foretaket faktisk står i Merverdiavgiftsregisteret nå, og om «MVA» i org.nr-linjen på nettstedet fortsatt er dekkende.
- Om salg til forbrukere i Norge skal behandles som innenlands MVA, som VOEC, eller etter en annen ordning.
- VOEC-nummer. Det finnes ikke i repoet.
- Gjeldende terskel, satser og hvilke varer som faller inn under VOEC. Ingen terskel eller sats utover det som allerede står på nettstedet er skrevet inn her.
- Om parfyme, kosmetikk eller elektriske skjønnhetsapparater har egne avgifts- eller produktregler i tillegg til MVA.
- Om varer som sendes fra lager utenfor Norge gjør kunden, selgeren eller noen andre til importør, og om det utløser toll eller importmva. Fraktsiden sier allerede at mottakerlandet kan kreve toll.
- Om kvitteringen fra Stripe og ordrebekreftelsen skal vise grunnlag, sats og selgers MVA-nummer. Malen i `docs/ordrebekreftelse-mal.md` har plass til MVA-linjen, men den er ikke koblet til utsending.
- Om VOEC krever en annen oppbevaringstid enn de 5 årene personvernet allerede oppgir for regnskapsbilag etter bokføringsloven.

## Ikke gjort

- Ingen endring av nøkkelkontrollen i `create-checkout-session.ts`.
- Ingen nøkler, satser eller registreringsnumre er lagt inn.
- Ingen e-post er sendt, og Make er ikke endret.
