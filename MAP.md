# MAP — Project Overview

> Landing page con waitlist per UniTracker — dashboard universitaria per tracciare esami, CFU e media ponderata, rivolta a studenti italiani.

## Struttura

```
unitracker-landing/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                 # Landing completa: hero, pain points, features, CTA
│   └── api/
│       └── waitlist/
│           └── route.ts         # POST/GET waitlist — salva email in data/waitlist.json
├── components/
│   ├── WaitlistForm.tsx         # Form email con varianti (default/dark)
│   └── ui/                      # shadcn/ui components
├── data/
│   └── waitlist.json            # Email raccolte (file-based)
├── public/
├── package.json
├── tailwind.config + postcss
└── node_modules/
```

## File chiave

| File | Cosa fa |
|------|---------|
| `app/page.tsx` | Landing page completa: hero con badge "In arrivo 2025", pain points (Excel/scadenze/no visione), features (CFU/reminder/media), doppia CTA |
| `app/api/waitlist/route.ts` | POST: raccoglie email con validazione + deduplication, salva in JSON. GET: ritorna count |
| `package.json` | Next.js 16, radix-ui/react-slot, clsx, tailwind-merge, lucide-react |

## Entry Points

| Azione | Comando |
|--------|---------|
| Dev | `npm run dev` |
| Build | `npm run build` |
| Start | `npm run start` |
| Lint | `npm run lint` |

## Convenzioni

- **Linguaggio:** TypeScript
- **Stile:** Tailwind CSS 3 con colori custom `primary-*`
- **Database:** File JSON locale (`data/waitlist.json`) — non adatto a deploy Vercel
- **Deploy:** N/A (waitlist file-based incompatibile con serverless)

## Note

- Il badge "In arrivo nel 2025" e' obsoleto — aggiornare a 2026
- Il contatore "+100 studenti" e' hardcodato in HTML — reso dinamico leggendo l'API GET waitlist
- Per deploy su Vercel: migrare waitlist a Supabase o Neon (senza modificare il design)
- L'app UniTracker vera e propria non esiste ancora — questa e' solo la landing/waitlist
