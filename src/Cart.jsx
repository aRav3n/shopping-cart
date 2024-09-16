import { useOutletContext } from "react-router-dom";
import { useState } from "react";
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

function PayNow() {
  const [displayMessage, setDisplayMessage] = useState(false);

  function showMessage() {
    setDisplayMessage(true);
  }

  function Message() {
    if (displayMessage) {
      return (
        <p className={styles.message}>
          You can&apos;t actually buy these items. This is a project built for
          The Odin Project curriculum! Check out the lessons{" "}
          <a
            href="https://www.theodinproject.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            here
          </a>
          !
        </p>
      );
    }
  }

  return (
    <>
      <button type="button" className={styles.payButton} onClick={showMessage}>
        Pay Now!
      </button>
      <Message />
    </>
  );
}

export default function Cart() {
  const { cart } = useOutletContext();
  return (
    <>
      <DisplayCartItems cart={cart} />
      <PayNow />
    </>
  );
}
