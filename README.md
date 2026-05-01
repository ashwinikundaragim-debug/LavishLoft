# LavishLoft

A Vite + React + Tailwind landing page for an interior design brand.

## Available Scripts

- `npm install`
- `npm run dev`
- `npm run build`
- `npm run preview`

## Project Structure

- `src/App.jsx` — main route layout and page transitions
- `src/main.jsx` — application entry point
- `src/index.css` — Tailwind entry styles
- `src/pages/` — routed pages for Home, Services, Portfolio, Pricing and Contact
- `src/components/` — reusable sections, navbar, footer and UI blocks

## EmailJS Setup

1. Copy `.env.example` to `.env`
2. Add your EmailJS service, template, and public key values
3. Run `npm run dev`

Environment variables:

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

## Notes

- The contact page now sends mail through EmailJS using the browser SDK.
- Portfolio images are polished with animated cards and descriptive titles.
- Navigation uses a full multi-page route layout with animate page transitions.
