import { Outlet } from "react-router-dom";
import { useState } from "react";
import Nav from "./Navbar";

export default function App() {
  const emptyCart = [];
  const [cart, setCart] = useState(emptyCart);

  return (
    <>
      <Nav cart={cart} />
      <Outlet context={[cart, setCart]} />
    </>
  );
}
