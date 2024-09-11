import { Outlet } from "react-router-dom";
import Nav from "./Navbar";
import styles from "./styles/shop.module.css";

export default function Home() {
  return (
    <>
      <Nav />
      <h1 className={styles.heading}>Let&apos;s get it started in here!</h1>
      <Outlet />
    </>
  );
}
