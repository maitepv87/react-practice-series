<!-- # React Practice Series

A curated set of modular, documented React projects designed to reinforce technical depth, onboarding clarity, and strategic frontend architecture.

## Structure

- `state-patterns/`: State management examples including:

  - `useReducer + useContext`: Global state with reducer logic and context provider
  - `Redux Toolkit`: Scalable state slices, async thunks, and store configuration
  - `Zustand`: Lightweight state management with custom hooks
  - `TanStack Query`: Data fetching, caching, and background updates

- `ts-testing/`: TypeScript patterns (discriminated unions, generics) and UI testing with Jest and React Testing Library

- `layout-system/`: Slot-based layout architecture, shared contexts, and design system foundations

- `ai-integration/`: Components consuming AI APIs (e.g., text/image generation) with fallback UX and loading boundaries

- `performance-a11y/`: Performance audits (Lighthouse), memoization, lazy hydration, and accessibility patterns (ARIA, keyboard nav)

Each folder includes teachable components, onboarding notes, and defendable patterns for interviews and collaboration. -->

# React Practice Series

A curated set of modular, documented React projects designed to reinforce technical depth, onboarding clarity, and strategic frontend architecture.

Each module focuses on a specific pattern or capability, and includes:

- Easy-to-follow components
- Clear and modular folder structure
- Notes that explain the “why” behind the code
- Takeaways useful for interviews or real projects

---

## 📦 Modules

### `state-patterns/` — Global State Management

- [`useReducer + useContext`](./src/state-patterns/useReducer-context)
  → Reducer logic + context provider for lightweight global state

- [`Redux Toolkit`](./src/state-patterns/redux-toolkit)
  → Scalable slices, async thunks, and devtools integration

- [`Zustand`](./src/state-patterns/zustand)
  → Lightweight store with direct access and optional devtools

- `TanStack Query` _(planned)_
  → Declarative data fetching, caching, and background updates

---

### `ts-testing/` — TypeScript & Testing Patterns

- Discriminated unions, generics, and type-safe UI logic
- Unit and integration tests with Jest + React Testing Library

---

### `layout-system/` — Slot-Based Layout Architecture

- Slot-based composition with shared contexts
- Design system foundations and editorial layout strategies

---

### `ai-integration/` — AI-Driven Components

- Text/image generation via AI APIs
- Prompt design, fallback UX, and loading boundaries

---

### `performance-a11y/` — Performance & Accessibility

- Lighthouse audits, memoization, lazy hydration
- ARIA roles, keyboard navigation, and focus management

---

## How to use this repo

Each folder is a standalone module with:

- `README.md`: Technical overview
- `onboarding-notes.md`: Editorial guide for onboarding and interviews
- `App.tsx`: Entry point for the demo
- `components/`: UI logic
- `store/` or `context/`: State logic

You can clone the full repo or fork individual modules to practice, teach, or showcase in interviews.

---

## Coming soon

- `forwardRef + useImperativeHandle`: Controlled interactivity
- `Accessible Modal`: Focus traps and ARIA patterns
- `state-comparison/`: Interactive comparison table and pattern selector

---

## Why this matters

This series is designed to help engineers:

- Practice advanced React patterns in isolation
- Build onboarding-friendly codebases
- Prepare for interviews with defendable architecture
- Curate a portfolio of modular, teachable projects

---

Made with clarity, curiosity, and editorial precision
