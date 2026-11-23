# CareerOS — Career Command Center

CareerOS is a frontend-first career management workspace for students and early-career developers. Track job applications, manage interview preparation, see pipeline analytics, and keep skill development visible.

## Features

- Responsive dashboard with pipeline KPIs, activity visualization, recent applications and upcoming interviews.
- Job tracker with create, edit and delete, status filters, search, list and Kanban views.
- Move applications between stages directly from the Kanban board.
- Calendar agenda generated from application interview dates and deadlines.
- Analytics dashboard with pipeline distribution and career insights.
- Interview preparation checklist and skill development workspace.
- Dark and light themes.
- CSV import and export for portability and backups.
- Browser-local persistence using Zustand + localStorage.

## Tech stack

React 19, TypeScript, Vite, React Router, Zustand, Recharts, Lucide React and date-fns.

## Run locally (Windows PowerShell)

```powershell
# 1. Extract the project ZIP and open its folder in VS Code
cd E:\ReactProjects\careeros

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open the local URL printed by Vite (normally `http://localhost:5173`).

## Production build

```powershell
npm run build
npm run preview
```

The build script runs TypeScript project checks before creating the production bundle.

## Data and privacy

This is currently a frontend-only project. Application records and theme preference are saved in the current browser's localStorage. They are not synced between devices and are not protected by server-side authentication. Export CSV regularly to keep a backup. Do not store passwords, sensitive personal data or confidential recruiter information in this demo.

The initial dashboard includes illustrative sample records so the interface is populated on first launch. Replace or delete them with your real opportunities. Sample activity chart points and skill proficiency values are illustrative UI data, not calculated personal history.

## Project structure

```text
src/
  components/       # Shared UI components (expand as the app grows)
  features/         # Feature modules (expand as the app grows)
  lib/              # Utilities and integrations
  store/            # Zustand application state
  types/            # Shared TypeScript domain types
  App.tsx           # App shell, routes, pages and core interactions
  main.tsx          # React entry point
  styles.css        # Design system and responsive styles
```

## Roadmap

- Replace localStorage with an IndexedDB repository (Dexie) behind a repository interface.
- Add accessible drag-and-drop with keyboard alternatives.
- Add richer calendar month/week views and editable interview events.
- Add unit, integration and Playwright end-to-end tests.
- Add resume versioning and job-description keyword comparison.
- Add optional backend authentication and cross-device sync.

## Portfolio note

Only list features you have personally run, tested and can explain in an interview. This starter provides a substantial working base, but it has not been deployed or connected to a backend.
