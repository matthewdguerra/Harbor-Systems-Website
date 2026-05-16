# Harbor Systems Website

Premium Next.js 15 rebuild for Harbor Systems LLC.

## Stack

- Next.js App Router
- React
- Tailwind CSS
- Framer Motion
- Claude API through `app/api/chat/route.js`
- Vercel-ready deployment

## Requirements

- Node.js 20.11+ (see `.nvmrc`)
- npm 10+

## Local Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Production build:

```bash
npm run build
npm start
```

## Environment

Copy `.env.example` to `.env.local`:

```env
ANTHROPIC_API_KEY=your_api_key_here
ANTHROPIC_MODEL=claude-sonnet-4-20250514
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

The chatbot shows a configuration message until `ANTHROPIC_API_KEY` is set.

## Brand assets

The site uses `public/logo.svg` and `app/icon.svg` (lighthouse mark). Replace these with your official Harbor Systems logo files if you have higher-fidelity brand assets.

## Deployment (Vercel)

1. Push this repository to GitHub.
2. Import the repository into Vercel (Next.js is auto-detected).
3. Set environment variables:
   - `ANTHROPIC_API_KEY` (required for live chat)
   - `ANTHROPIC_MODEL` (optional)
   - `NEXT_PUBLIC_SITE_URL` (your production URL, for Open Graph metadata)
4. Deploy.
