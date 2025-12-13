# Entrance Exam Prep — IOE & MBBS (Minimal)

This is a minimal interactive web app for practicing IOE (engineering) and MBBS entrance exam concepts.

Quick start (Windows PowerShell):

```powershell
cd \workspace\edu-entrance-prep
npm install
npm run dev
```

Open the dev URL shown by Vite (usually http://localhost:5173).

Backend (optional) — run to enable sync between clients and server:

```powershell
cd \workspace\edu-entrance-prep\server
npm install
npm start
# server listens on http://localhost:4000 and exposes /api/lessons and /api/progress
```

What's included:
- `src/data/lessons.json`: JSON-driven lessons + quizzes
- `src/components/Quiz.jsx`: simple quiz engine that saves progress to `localStorage`
- `src/App.jsx`: lesson list and navigation

Next steps I can take:
- Add more lesson content for IOE and MBBS
- Add spaced-repetition scheduling and user accounts (backend)
- Improve styling and add mobile responsiveness

