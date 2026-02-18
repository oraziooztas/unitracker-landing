# DEVLOG

Log cronologico di decisioni, problemi e lezioni per questo progetto.

---

## [2026-02-18] — Sync docs iniziale

**Cosa fatto:**
- Landing page completa per UniTracker — app di tracciamento universitario (esami, CFU, media ponderata)
- Next.js 16 con App Router, Tailwind CSS, componenti UI custom (shadcn/radix-ui)
- Landing page funzionante con hero, pain points, feature list e due form waitlist (hero + CTA section)
- API route `/api/waitlist` implementata: salva email in `data/waitlist.json` localmente con deduplication e validazione
- Posizionamento chiaro: "Non perdere mai più una scadenza universitaria — traccia esami, CFU e media ponderata in un'unica dashboard. Basta Excel."

**Decisioni prese:**
- Waitlist file-based (JSON locale) invece di Supabase/DB — rapido da implementare per una landing
- Nessuna dipendenza esterna per email collection — tutto autocontenuto
- Design orientato a studenti universitari italiani (testo in italiano)

**Problemi incontrati:**
- Nessuno (sync iniziale)

**Lezioni apprese:**
- La landing page è ben costruita con tre sezioni chiave: problema, soluzione, CTA
- Il contatore "+100 studenti in attesa" nella landing è hardcodato — da rendere dinamico con l'API
- L'API waitlist salva su filesystem — non funzionerà su Vercel (read-only) senza DB esterno

**Prossimi passi:**
- Migrare la waitlist da file JSON a Supabase o simile per supportare deploy su Vercel
- Rendere dinamico il contatore studenti in attesa
- Sviluppare l'app UniTracker vera e propria (questa e' solo la landing)
