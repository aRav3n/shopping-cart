import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import Nav from "./Navbar";

export default function App() {
  const emptyCart = [];
  const [cart, setCart] = useState(emptyCart);
  const [itemAdded, setItemAdded] = useState(false);

  useEffect(() => {
    if (cart.length > 0) {
      setItemAdded(true);
      const timer = setTimeout(() => {
        setItemAdded(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [cart]);

  return (
    <>
      <Nav cart={cart} />
      <Outlet context={{ cart, setCart, itemAdded }} />
    </>
  );
}
