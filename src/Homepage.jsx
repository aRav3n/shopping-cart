import { Link } from "react-router-dom";
import Nav from "./Navbar";
import styles from "./styles/homepage.module.css";

export default function Home() {
  return (
    <>
      <Nav />
      <div className={styles.centeredDiv}>
        <h1>Our Story</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quia
          minima ipsam recusandae nesciunt autem? Laboriosam assumenda
          doloremque doloribus dolorem obcaecati unde aliquam consectetur neque
          vero esse earum voluptates quod perferendis fugiat optio quas omnis,
          ad ipsum ab fugit quae.
        </p>
        <p>
          So check out our <Link to="/shop/products">products</Link> and become
          a part of the legend.
        </p>
      </div>
    </>
  );
}
