# UniTracker Landing Page

A conversion-optimized landing page for UniTracker, a tool for university students to track exams, credits (CFU), and deadlines. Built to validate the product idea through email waitlist sign-ups before development.

## Features

- **Hero Section:** Clear value proposition with waitlist sign-up form and social proof counter
- **Pain Points Section:** Three common student struggles (scattered spreadsheets, forgotten deadlines, no clear overview)
- **Features Showcase:** Three core product capabilities (real-time credit dashboard, automatic reminders, instant weighted GPA calculator with what-if simulations)
- **Call-to-Action:** Secondary sign-up section with dark variant styling
- **Waitlist API:** Server-side email capture endpoint with JSON file storage
- **Responsive Design:** Fully responsive layout for mobile and desktop
- **Vercel-Ready:** Optimized for one-click deployment on Vercel

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 3 + tailwindcss-animate
- **UI Components:** shadcn/ui (Radix UI + class-variance-authority)
- **Icons:** Lucide React

## Getting Started

### Prerequisites

- Node.js >= 18

### Installation

```bash
git clone <repository-url>
cd unitracker-landing
npm install
```

### Running the App

```bash
# Development server
npm run dev

# Production build
npm run build
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

### Deploy to Vercel

**Option 1 -- Dashboard:**
1. Create an account on [Vercel](https://vercel.com)
2. Click "New Project"
3. Import the GitHub repository
4. Vercel auto-detects Next.js and deploys

**Option 2 -- CLI:**
```bash
npm i -g vercel
vercel
```

## Project Structure

```
unitracker-landing/
├── app/
│   ├── page.tsx                 # Landing page (Hero, Pain Points, Features, CTA, Footer)
│   ├── layout.tsx               # Root layout with meta tags and fonts
│   ├── globals.css              # Global styles
│   └── api/
│       └── waitlist/
│           └── route.ts         # Email capture API endpoint
├── components/
│   ├── WaitlistForm.tsx         # Email sign-up form component (light/dark variants)
│   └── ui/                     # shadcn/ui base components
├── data/
│   └── waitlist.json           # Email storage (gitignored)
├── tailwind.config.ts
├── package.json
└── tsconfig.json
```

## Waitlist API

The `/api/waitlist` endpoint captures email addresses and stores them in a local JSON file (`data/waitlist.json`).

For production use, consider replacing with:
- **Supabase:** Add `SUPABASE_URL` and `SUPABASE_KEY` environment variables
- **Google Sheets:** Use Google Sheets API for low-code storage
- **Database:** PostgreSQL, MongoDB, or any preferred database

## Notes

- The landing page is designed for idea validation with a target of 50+ sign-ups in 7 days.
- The waitlist form component supports both light and dark variants for use in different sections.
- All content is optimized for Italian university students, addressing specific pain points like CFU tracking and weighted GPA calculations.
- The page includes semantic HTML and proper meta tags for SEO.
