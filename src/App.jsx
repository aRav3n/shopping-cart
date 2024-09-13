import { Outlet } from "react-router-dom";
import { useState } from "react";
import Nav from "./Navbar";

export default function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <Nav cart={cart} />
      <Outlet context={[cart, setCart]} />
    </>
  );
}
