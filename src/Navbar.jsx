import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./styles/navbar.module.css";

function LinkButton({ displayName, linkTo }) {
  return (
    <Link to={linkTo}>
      <button type="button">{displayName}</button>
    </Link>
  );
}

LinkButton.propTypes = {
  displayName: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
};

export default function Navbar({ cart }) {
  const qty = cart.length;
  const cartName = `Cart - ${qty}`;
  return (
    <nav className={styles.navbar}>
      <LinkButton displayName="Home" linkTo="/" />
      <LinkButton displayName="Products" linkTo="/shop/products" />
      <LinkButton displayName={cartName} linkTo="/shop/cart" />
    </nav>
  );
}

Navbar.propTypes = {
  cart: PropTypes.array.isRequired,
};
