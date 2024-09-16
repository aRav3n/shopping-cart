import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";
import styles from "./styles/shop.module.css";

const addItemToCart = (item, cart, setCart) => {
  let alreadyInCart = false;
  const newCart = cart.map((cartItem) => {
    if (cartItem.description === item.description) {
      alreadyInCart = true;
      return {
        ...cartItem, // create a copy of the cart item
        qty: cartItem.qty + 1,
        totalPrice: (cartItem.qty + 1) * cartItem.price,
      };
    }
    return cartItem;
  });

  // If the item wasn't already in the cart, add it
  if (!alreadyInCart) {
    newCart.push({ ...item, qty: 1, totalPrice: item.price });
  }

  // Update the cart state
  setCart(newCart);
};

const createProductObject = (title, price, description, rating, imageURL) => {
  const returnObject = {};

  returnObject.title = title;
  returnObject.price = price;
  returnObject.description = description;
  returnObject.rating = rating;
  returnObject.imageURL = imageURL;
  returnObject.qty = 1;
  returnObject.totalPrice = price * 1;
  returnObject.key = uuid();

  return returnObject;
};

function ProductCard(item, cart, setCart) {
  const title = item.title;
  const price = item.price;
  const description = item.description;
  const rating = item.rating;
  const imageURL = item.imageURL;

  function addToCart() {
    addItemToCart(item, cart, setCart);
  }

  return (
    <button
      type="button"
      className={styles.card}
      onClick={addToCart}
      key={title}
    >
      <img src={imageURL} alt={title} />
      <h2>{title}</h2>
      <p>${price}</p>

      {/* star source: https://www.alt-codes.net/star_alt_code.php */}
      <p>★{rating}/5</p>

      <p>{description}</p>
    </button>
  );
}

ProductCard.propTypes = {
  item: PropTypes.object.isRequired,
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
};

function ProductsList({ cart, setCart, itemAdded }) {
  const [productsList, setProductsList] = useState(null);

  const pushJsonToArray = (jsonObject) => {
    const newArray = [];
    for (let i = 0; i < jsonObject.length; i++) {
      const item = jsonObject[i];
      const itemObject = createProductObject(
        item.title,
        item.price,
        item.description,
        item.rating.rate,
        item.image
      );
      newArray.push(itemObject);
    }
    setProductsList(newArray);
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products", { mode: "cors" })
      .then((response) => response.json())
      .then((response) => pushJsonToArray(response))
      .catch((error) => console.error(error));
  }, []);

  if (productsList === null) {
    return <h1>Loading...</h1>;
  }

  function DisplayProductsList() {
    const listItems = productsList.map((item) =>
      ProductCard(item, cart, setCart)
    );

    return (
      <div className={styles.container}>
        {listItems}
        <div
          className={
            itemAdded ? styles.overlayVisible : styles.overlayInvisible
          }
        >
          <p>Added to cart!</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <h2>Click on an item to add it to your cart</h2>
      <DisplayProductsList />
    </>
  );
}

ProductsList.propTypes = {
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
  itemAdded: PropTypes.bool.isRequired,
};

export default function Products() {
  const {cart, setCart, itemAdded} = useOutletContext();
  return <ProductsList cart={cart} setCart={setCart} itemAdded={itemAdded} />;
}
