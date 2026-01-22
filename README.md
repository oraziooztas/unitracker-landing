# UniTracker Landing Page

Landing page per validare l'idea UniTracker - tool per studenti universitari che traccia esami, CFU e scadenze.

## Stack

- Next.js 16
- Tailwind CSS
- shadcn/ui
- TypeScript

## Sviluppo locale

```bash
npm install
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000)

## Deploy su Vercel

### Metodo 1: Deploy automatico

1. Crea un account su [Vercel](https://vercel.com)
2. Clicca "New Project"
3. Importa il repository GitHub
4. Vercel rileva automaticamente Next.js e configura il deploy

### Metodo 2: CLI Vercel

```bash
npm i -g vercel
vercel
```

## API Waitlist

L'endpoint `/api/waitlist` salva le email in un file JSON locale (`data/waitlist.json`).

**Per produzione**, considera:
- **Supabase**: Aggiungi variabile `SUPABASE_URL` e `SUPABASE_KEY`
- **Google Sheets**: Usa Google Sheets API
- **Database**: PostgreSQL, MongoDB, etc.

## Struttura

```
unitracker-landing/
├── app/
│   ├── page.tsx          # Landing page
│   ├── layout.tsx        # Meta tags + fonts
│   └── api/waitlist/
│       └── route.ts      # Email capture API
├── components/
│   ├── ui/               # shadcn components
│   └── WaitlistForm.tsx  # Form component
├── data/
│   └── waitlist.json     # Email storage (gitignored)
└── tailwind.config.ts
```

## Validazione

Obiettivo: **50+ iscrizioni in 7 giorni**

### Canali di promozione
- r/universitaly
- Gruppi Telegram studenti
- LinkedIn
- Instagram stories
- Passa parola

## Metriche da tracciare

- Visite totali
- Tasso di conversione (visite → iscrizioni)
- Fonte traffico
- Scroll depth
