import { Outlet } from "react-router-dom";
import Nav from "./Navbar";
import styles from "./styles/shop.module.css";

export default function Home() {
  return (
    <>
      <Nav />
      <h1 className={styles.heading}>Shopping</h1>
      <div className={styles.container}>
        <Outlet />
      </div>
    </>
  );
}
