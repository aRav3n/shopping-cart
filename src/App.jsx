import { Outlet } from "react-router-dom";
import Nav from "./Navbar";

export default function App() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}
