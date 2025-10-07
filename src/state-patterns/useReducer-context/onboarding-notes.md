# Onboarding Notes: useReducer + useContext Pattern

Welcome!
This module is part of the **React Practice Series**, and here we’ll explore how to manage global state in a clean and scalable way using two powerful hooks: `useReducer` (for state logic) and `useContext` (for sharing that state across components).

---

## What you’ll learn

- Centralize your app’s logic with a reducer
- Share state easily between components using context
- Build a custom hook (`useCart`) for safe and simple access
- Keep **UI** and **logic** separate for better scalability

Think of this as a lightweight alternative to Redux—perfect when your app needs global state but doesn’t need all the extra setup.

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
├── CartApp.tsx                 ← Entry point that wires everything together
├── README.md                   ← Technical overview and usage
└── onboarding-notes.md         ← This file

```

Each file has a clear role, and together they form a simple but powerful pattern.

---

## How the data flows

1. `CartProvider` initializes state with `useReducer`
2. It wraps the app and shares `{ state, dispatch }` through `CartContext`
3. Components call `useCart()` to read state or send actions
4. Actions like `ADD_ITEM`, `REMOVE_ITEM`, `CLEAR_CART` are handled in `cartReducer.ts`

This flow makes state changes predictable and easy to follow.

---

## How you can extend it

- Add new actions like `UPDATE_QUANTITY`
- Save the cart in **localStorage** or sync it with a backend
- Handle **loading and error states** with an extended reducer (e.g. `useAsyncReducer`)
- Compare this setup with tools like **Zustand** or **Redux Toolkit**

---

## Collaboration tips

- Keep reducer functions **pure and predictable**
- Use `useCart()` instead of accessing context directly
- Document each action type and its expected payload
- Keep UI components clean, with well-defined props and comments

---

## Why this matters (interview-ready takeaways)

- Ideal for apps that need **global state without Redux overhead**
- Encourages **separation of concerns**, a key software design principle
- Once logic is modular, it’s easier to migrate to advanced state tools later

---

👉 In short: this is a simple, scalable approach to managing state in React. Great for practice, production prototypes, or as a stepping stone to more advanced state management solutions.

---

## Comparing Patterns: What comes next?

This module shows how to manage global state with `useReducer` and `useContext`—a clean, lightweight alternative to Redux. But what if your app grows and needs async logic, middleware, or dev tools?

That’s where **Redux Toolkit** comes in.

| Pattern                   | Setup Complexity | Async Support | Dev Tools | Ideal Use Case                      |
| ------------------------- | ---------------- | ------------- | --------- | ----------------------------------- |
| `useReducer + useContext` | Low              | Manual        | No        | Small/medium apps, onboarding demos |
| **Redux Toolkit**         | Medium           | Built-in      | Yes       | Scalable apps with complex logic    |
| Zustand                   | Very Low         | Built-in      | Optional  | Lightweight global state            |

👉 Up next: [Redux Toolkit →](../redux-toolkit/onboarding-notes.md)
