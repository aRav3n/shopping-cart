import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./styles/shop.module.css";

const addItemToCart = (item, cart, setCart) => {
  let newCart;
  let alreadyInCart = false;
  cart === undefined ? (newCart = []) : (newCart = cart);
  for (let i = 0; i < newCart.length; i++) {
    if (!alreadyInCart) {
      if (newCart[i].description === item.description) {
        newCart[i].qty++;
        alreadyInCart = true;
      }
    }
  }
  if (!alreadyInCart) {
    newCart.push(item);
  }
  console.log(newCart);
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

  return returnObject;
};

function ProductCard({
  title,
  price,
  description,
  rating,
  imageURL,
  cart,
  setCart,
}) {
  function addToCart() {
    const object = createProductObject(
      title,
      price,
      description,
      rating,
      imageURL
    );
    addItemToCart(object, cart, setCart);
  }
  return (
    <button type="button" className={styles.card} onClick={addToCart}>
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
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired,
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
};

function ProductsList({ cart, setCart }) {
  // https://fakestoreapi.com/products
  const [productsList, setProductsList] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products", { mode: "cors" })
      .then((response) => response.json())
      .then((response) => setProductsList(response))
      .catch((error) => console.error(error));
  }, []);

  if (productsList === null) {
    return <h1>Loading...</h1>;
  }

  function SampleCard() {
    return (
      <ProductCard
        title="Mountain Panel Loader 22L"
        price="260"
        description="Your grab-n-go trail bag, sized for everyday use across any terrain, be it Yosemite granite or NYC pavement."
        rating="4.9"
        imageURL="https://evergoods.us/cdn/shop/files/MOUNTAIN-PANEL-LOADER-22L-BLACK-MPL22-WATER-BOTTLE-POCKET-min_1_5000x.png"
        cart={cart}
        setCart={setCart}
      />
    );
  }

  return (
    <>
      <h2>Click on an item to add it to your cart</h2>
      <div className={styles.container}>
        <SampleCard />
        <SampleCard />
        <SampleCard />
      </div>
    </>
  );
}

ProductsList.propTypes = {
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
};

export default function Products() {
  const [cart, setCart] = useOutletContext();
  return <ProductsList cart={cart} setCart={setCart} />;
}
