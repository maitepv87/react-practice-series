import { Provider } from "react-redux";
import { store } from "./store/store";
import { AddToCartButton, CartList, CartSummary } from "./components";
import { CartItem } from "./store/slices/cartSlice";

export const ReduxApp = () => {
  const products: CartItem[] = [
    { id: "1", name: "React Book", price: 29.99, quantity: 1 },
    { id: "2", name: "TypeScript Guide", price: 34.99, quantity: 1 },
    { id: "3", name: "Frontend Stickers", price: 9.99, quantity: 1 },
  ];

  return (
    <Provider store={store}>
      <main style={{ padding: "2rem" }}>
        <h1>React Practice Series: Cart Module</h1>

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
    </Provider>
  );
};
