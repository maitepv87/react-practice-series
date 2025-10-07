# Onboarding Notes: Redux Toolkit Pattern

Welcome!  
This module is part of the **React Practice Series**, and here we’ll explore how to manage global state using **Redux Toolkit**, the official, modern way to write Redux logic.

---

## What you’ll learn

- Define global state with `createSlice`
- Use `configureStore` to set up Redux with minimal boilerplate
- Access state with `useSelector` and dispatch actions with `useDispatch`
- Create typed hooks (`useAppSelector`, `useAppDispatch`) for safety and clarity

Redux Toolkit simplifies Redux by removing manual reducer wiring and action creators. It’s perfect for scalable apps that need dev tools, async logic, and middleware.

---

## Folder structure

Here’s how the folder is organized:

```

```

---

## How the data flows

1. `cartSlice.ts` defines state and actions with `createSlice`
2. `store.ts` registers the slice under `cart`
3. The app is wrapped in `<Provider store={store}>`
4. Components use `useAppSelector` to read state and `useAppDispatch` to send actions

This flow is predictable, scalable, and compatible with Redux DevTools.

---

## How you can extend it

- Add async logic with `createAsyncThunk`
- Persist the cart in **localStorage** or sync with a backend
- Split slices by domain (e.g. `userSlice`, `productsSlice`)
- Add middleware for logging, analytics, or error tracking

---

## Collaboration tips

- Keep slices focused: one slice per domain
- Use typed hooks to avoid repetitive type annotations
- Document each reducer and its expected payload
- Keep UI components clean and delegate logic to slices

---

## Why this matters (interview-ready takeaways)

- Ideal for scalable apps with complex state logic
- Encourages **modularity**, **type safety**, and **tooling integration**
- Prepares you for advanced Redux patterns like middleware and async thunks

---

## Comparing Patterns: What came before?

This module builds on the previous pattern: `useReducer + useContext`. Here’s how they compare:

| Pattern                   | Setup Complexity | Async Support | Dev Tools | Ideal Use Case                      |
| ------------------------- | ---------------- | ------------- | --------- | ----------------------------------- |
| `useReducer + useContext` | Low              | Manual        | No        | Small/medium apps, onboarding demos |
| **Redux Toolkit**         | Medium           | Built-in      | Yes       | Scalable apps with complex logic    |
| Zustand                   | Very Low         | Built-in      | Optional  | Lightweight global state            |

👉 Previously: [useReducer + useContext →](../useReducer-context/onboarding-notes.md)
