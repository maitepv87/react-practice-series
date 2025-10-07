# Onboarding Notes: Zustand Pattern

Welcome!  
This module is part of the **React Practice Series**, and here we’ll explore how to manage global state using **Zustand**, a minimalistic and intuitive state management library for React.

---

## What you’ll learn

- Create a global store with `create()`
- Define state and actions in one place
- Access and update state without a Provider
- Keep UI and logic cleanly separated

Zustand is perfect for small to medium apps that need global state without the setup of Redux or Context.

---

## Folder structure

Here’s how the folder is organized:

```
useReducer-context/
├── context/
│   ├── CartContext.tsx         ← Defines the context object
│   ├── CartProvider.tsx        ← Wraps the app and provides state + dispatch
│   ├── cartReducer.ts          ← Contains reducer logic and initial state
│   ├── useCartContext.ts       ← Custom hook to consume context safely
│   └── actionTypes.ts          ← Centralized constants for action type strings
├── actions/
│   └── cartActions.ts          ← Action creators for dispatching typed actions
├── components/
│   ├── AddToCartButton.tsx     ← UI button to add items to cart
│   ├── CartSummary.tsx         ← Displays total and clear cart button
│   └── CartList.tsx            ← Lists items in the cart with remove buttons
├── ContextApp.tsx                 ← Entry point that wires everything together
├── README.md                   ← Technical overview and usage
└── onboarding-notes.md         ← This file

```

---

## How the data flows

1. `store.ts` defines state and actions using `create()`
2. Components call `useCartStore()` to access state and dispatch actions
3. No Provider needed — Zustand works out of the box
4. Actions like `addItem`, `removeItem`, `clearCart` update the store directly

This flow is simple, intuitive, and avoids boilerplate.

---

## How you can extend it

- Add derived state (e.g. `cartTotal`) directly in the store
- Persist state with `zustand/middleware` and `localStorage`
- Split store into multiple slices (e.g. `userStore`, `productStore`)
- Compare this setup with Redux Toolkit or useReducer

---

## Collaboration tips

- Use clear, descriptive names for state and actions
- Keep store logic pure and predictable
- Avoid overusing Zustand for deeply nested or relational state
- Document each action’s intent and expected payload

---

## Why this matters (interview-ready takeaways)

- Ideal for apps that need **global state with minimal setup**
- Encourages **clarity**, **modularity**, and **direct access**
- Great for prototypes, onboarding demos, and small-to-medium production apps

---

## Comparing Patterns: What came before?

This module builds on previous patterns like `useReducer + useContext` and `Redux Toolkit`. Here’s how they compare:

| Pattern                   | Setup Complexity | Async Support | Dev Tools | Ideal Use Case                      |
| ------------------------- | ---------------- | ------------- | --------- | ----------------------------------- |
| `useReducer + useContext` | Low              | Manual        | No        | Small/medium apps, onboarding demos |
| Redux Toolkit             | Medium           | Built-in      | Yes       | Scalable apps with complex logic    |
| **Zustand**               | Very Low         | Built-in      | Optional  | Lightweight global state            |

👉 Previously: [Redux Toolkit →](../redux-toolkit/onboarding-notes.md)
