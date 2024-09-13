import { Outlet, useOutletContext } from "react-router-dom";
import styles from "./styles/shop.module.css";

export default function Home() {
  const [cart, setCart] = useOutletContext();

  return (
    <>
      <h1 className={styles.heading}>Let&apos;s get it started in here!</h1>
      <Outlet context={[cart, setCart]} />
    </>
  );
}
