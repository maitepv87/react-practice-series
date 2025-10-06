import { CartProvider } from "./context/CartProvider";

export const App = () => {
  return (
    <CartProvider>
      <h1>App</h1>
    </CartProvider>
  );
};
