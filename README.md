# Todo App

A small Persian-language task manager built as a React classroom project. It explores component state, controlled form inputs, filtering and conditional styling.

**Status: educational prototype.** The current source has a known React import issue described below. No hosted demo is provided.

## What's in the source

- Add a task with a non-empty title.
- Choose one of five task colors.
- Mark a task complete or incomplete.
- Delete tasks and search their titles.
- Display task cards in a responsive Tailwind CSS grid.

Tasks live in React state and reset on refresh. There is no backend, account system, database, local storage or cross-device synchronization. This project is separate from Aroly.

## Stack

React 19 · JavaScript / JSX · Vite 7 · Tailwind CSS 4 · ESLint 9

The application is in `src/App.jsx`; `src/main.jsx` mounts it. Vite and Tailwind integration are configured in `vite.config.js`.

## Local setup

Use Node.js 20.19+ or 22.12+ and npm, as required by the Vite version in the lockfile.

```sh
git clone https://github.com/Amirparham-code/todo-app.git
cd todo-app
npm ci
npm run dev
```

Open the local URL printed by Vite.

### Known startup issue

`src/App.jsx` currently imports `useٍEffect` from React, with an extra character in the identifier. React does not export that name, and the hook is unused. Remove that unused import in a local checkout before attempting to run or build the application. The documentation update does not change application code.

No environment variables or external API credentials are referenced by the current task-management implementation.

## Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview a completed production build locally |
| `npm run lint` | Run ESLint |

These scripts are defined in `package.json`. There is no automated test script. Build, lint and runtime checks have not been executed as part of this documentation update.

## Limitations

- No persistence: refreshing restores the initial sample tasks.
- The UI uses Font Awesome class names; icon rendering depends on a corresponding stylesheet being available.
- The import issue above prevents treating the current branch as a ready-to-run demonstration.

## Course context

The original README was created through GitHub for the **Term 3, Session 6 GitHub practice assignment**.

Project owner: Amirparham.
