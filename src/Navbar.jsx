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

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <LinkButton displayName="Home" linkTo="/" />
      <LinkButton displayName="Products" linkTo="/shop/products" />
      <LinkButton displayName="Cart" linkTo="/shop/cart" />
    </nav>
  );
}

