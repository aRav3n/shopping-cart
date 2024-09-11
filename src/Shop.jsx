import { Outlet } from "react-router-dom";
import styles from "./styles/shop.module.css";

export default function Home() {
  return (
    <>
      <h1 className={styles.heading}>Let&apos;s get it started in here!</h1>
      <Outlet />
    </>
  );
}
