import { useOutletContext } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./styles/shop.module.css";

function DisplayCartItems({ cart }) {
  let totalPrice = 0;
  for (let i = 0; i < cart.length; i++) {
    totalPrice += cart[i].totalPrice;
  }

  const generateCartRows = cart.map((item) => (
    <li key={item.key}>
      <div className={styles.cartRow}>
        <div>{item.title}</div>
        <div>${item.price}</div>
        <div>Qty: {item.qty}</div>
        <div>Sub Total: ${item.totalPrice}</div>
      </div>
      <hr className={styles.separator} />
    </li>
  ));

  return (
    <ul className={styles.cartDisplay}>
      {generateCartRows}
      <li className={styles.totalPrice}>Total: ${totalPrice}</li>
    </ul>
  );
}

DisplayCartItems.propTypes = {
  cart: PropTypes.array.isRequired,
};

export default function Cart() {
  const [cart] = useOutletContext();
  return <DisplayCartItems cart={cart} />;
}
