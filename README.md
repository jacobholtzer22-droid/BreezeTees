# Breeze Tees

A clean, modern, responsive landing page for the custom t-shirt brand **Breeze Tees** — *Wear Your Vibe*.

## Features

- **Hero section** — Branding, tagline, and full-width featured t-shirt image
- **Product gallery** — Grid of t-shirt designs with hover effects; click for details
- **Product cards** — Image, name, description, price
- **Add-to-cart** — Client-side state (no backend)
- **Sticky header** — Logo + nav: Home, Shop, About, Contact
- **Mobile-first** — Responsive layout with Tailwind CSS
- **Dark/light mode** — Toggle in header
- **Filtering** — By collection and sort (price, name)
- **Modal** — Product details, size/color/quantity, add to cart

## Tech Stack

- React 18 + Vite
- Tailwind CSS v4
- Component-based structure

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Project Structure

```
src/
  components/     # UI components
  context/        # Theme & Cart state
  data/           # Product data (replace images with your own)
  App.jsx
  main.jsx
  index.css
```

## Adding Your Images

Edit `src/data/products.js` and replace the `PLACEHOLDER` URL or each product’s `image` with your t-shirt image paths (e.g. in `public/`).

## Build

```bash
npm run build
npm run preview
```
