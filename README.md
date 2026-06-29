# NourishWell — Personalized Diet & Nutrition Coaching

NourishWell is a personalized diet and nutrition coaching platform that builds science-backed,
sustainable meal plans around your real life — your health profile, dietary preferences, budget,
cooking time, and goals.

This demo site is built around a real client journey: a 23-year-old flexitarian targeting a
sustainable mild weight-loss goal (55 kg → 50 kg over ~16 weeks) with a front-loaded weekday
structure, relaxed weekends, and a Rs 3k–5k monthly food budget.

## Tech Stack

- React 18
- React Router v6 (createBrowserRouter)
- Tailwind CSS 3
- Vite 5
- Axios

## Getting Started

```bash
npm install
cp .env.example .env
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Environment Variables

| Variable | Description |
| --- | --- |
| `VITE_API_URL` | Base URL for the backend API used by the axios client |

## Pages

- **Home** — hero, approach, features, CTA
- **How It Works** — the 4-phase coaching journey
- **Meal Plans** — sample weekly plan, macros, and meal structure
- **About** — mission and methodology
- **Contact** — get-started form
