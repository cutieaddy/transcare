# TransCare

A comprehensive resource supporting transgender individuals with verified information, provider directories, and guidance for every step of the transition journey.

## Getting started

### Prerequisites

- **Node.js** 18+ (download from [nodejs.org](https://nodejs.org/))
- **npm** (comes with Node.js)

### Installation

1. Open a terminal and navigate to the project folder:
   ```bash
   cd transcare
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for production

```bash
npm run build
npm start
```

## Deployment

This project is ready to deploy on **Vercel** (recommended):

1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click "New Project" and select your repository
4. Click "Deploy" — Vercel will auto-detect Next.js and configure everything

Other hosting options: Netlify, Railway, or any platform that supports Node.js.

## Project structure

```
transcare/
├── public/                    # Static assets (logo, images)
├── src/
│   ├── app/                   # Next.js App Router pages
│   │   ├── layout.js          # Root layout (nav, footer, theme)
│   │   ├── page.js            # Homepage
│   │   ├── globals.css        # Global styles and CSS variables
│   │   ├── getting-started/   # Transition information pages
│   │   ├── providers/         # Provider directory with map
│   │   ├── resources/         # External resources and links
│   │   ├── contact/           # Contact/feedback form
│   │   └── account/           # Account sign-in/sign-up
│   ├── components/            # Reusable components
│   │   ├── Navbar.js          # Navigation bar
│   │   ├── Footer.js          # Site footer with sitemap
│   │   ├── ThemeProvider.js   # Light/dark mode context
│   │   ├── EscapeHandler.js   # Emergency exit (Esc key)
│   │   ├── ProviderMap.js     # Leaflet interactive map
│   │   └── ProviderCard.js    # Provider display card
│   └── data/
│       └── providers.json     # Provider directory data (304 entries)
├── package.json
├── tailwind.config.js
├── next.config.js
└── README.md
```

## Features

### V1 (current)
- Light/dark mode with system preference detection
- Emergency escape (Esc key → google.com)
- Responsive design (mobile + desktop)
- Provider directory with search, filtering, and sorting
- Interactive Leaflet map with city clustering
- Getting Started guides (social, legal, medical, surgical)
- Resources page with links to guidelines, funding, legal help
- Contact/feedback form
- Account pages (UI ready, backend pending)

### Planned
- Supabase integration for user accounts and bookmarking
- Multi-language support
- Screen reader / text-to-speech
- Video content and study links
- Post-operative photo galleries

## Database setup (next step)

When ready to add user accounts and dynamic data:

1. Create a free account at [supabase.com](https://supabase.com)
2. Create a new project
3. Add your Supabase URL and anon key to `.env.local`:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your-project-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```
4. Install the Supabase client: `npm install @supabase/supabase-js`

## Tech stack

- **Framework**: Next.js 14 (React, App Router)
- **Styling**: Tailwind CSS + CSS Variables
- **Map**: Leaflet + React-Leaflet
- **Font**: Inter (Google Fonts)
- **Database**: Supabase (planned)
- **Deployment**: Vercel (recommended)

## License

This project is built with care for the transgender community. All rights reserved.
