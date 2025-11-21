# ModeStudy - Education Platform (Starter)

This is a starter Vite + React + Tailwind project implementing a modern education UI as requested.
Features:
- Center top "ModeStudy" with animated color gradient.
- Dark / Light toggle (top-right), persisted to localStorage.
- Search bar on Home to filter batches.
- Batch -> Subject -> Chapter -> Lecture pages with routing.
- Lecture page embeds video (YouTube); "Mark as complete" checkbox persists progress in localStorage.
- Basic notes/DPP/quiz placeholders and progress percentage on chapter page.

How to run locally:
1. `npm install`
2. `npm run dev`
Then open http://localhost:5173

You can deploy this repo to Vercel (select the folder and Vercel will build using `npm run build`).

This is a focused starter scaffold. You can expand quizzes, DPP uploads, analytics dashboard, and server-backed storage later.