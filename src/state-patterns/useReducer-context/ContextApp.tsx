import { CartProvider } from "./context/CartProvider";
import { AddToCartButton, CartList, CartSummary } from "./components";
import { CartItem } from "./context/cartReducer";

export const ContextApp = () => {
  const products: CartItem[] = [
    { id: "1", name: "React Book", price: 29.99, quantity: 1 },
    { id: "2", name: "TypeScript Guide", price: 34.99, quantity: 1 },
    { id: "3", name: "Frontend Stickers", price: 9.99, quantity: 1 },
  ];

  return (
    <CartProvider>
      <main style={{ padding: "2rem" }}>
        <h1>React Practice Series: useReducer + context</h1>

        <section>
          <h2>Available Products</h2>
          {products.map((product) => (
            <div key={product.id} style={{ marginBottom: "1rem" }}>
              <p>
                {product.name} - ${product.price}
              </p>
              <AddToCartButton item={product} />
            </div>
          ))}
        </section>

        <section>
          <h2>Your Cart</h2>
          <CartList />
          <CartSummary />
        </section>
      </main>
    </CartProvider>
  );
};
