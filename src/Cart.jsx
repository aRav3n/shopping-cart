import { useOutletContext } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./styles/shop.module.css";

function DisplayCartItems() {}

export default function Cart() {
  const [cart, setCart] = useOutletContext();
  return <h1>Cart</h1>;
}
