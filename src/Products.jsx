import { useEffect, useState } from "react";
import styles from "./styles/shop.module.css";

function ProductCard({ title, price, description, rating, imageURL }) {
  return (
    <button type="button" className={styles.card}>
      <img src={imageURL} alt={title} />
      <h2>{title}</h2>
      <p>${price}</p>

      {/* star source: https://www.alt-codes.net/star_alt_code.php */}
      <p>★{rating}/5</p>

      <p>{description}</p>
    </button>
  );
}

function ProductsList() {
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
        <SampleCard />
        <SampleCard />
        <SampleCard />
      </div>
    </>
  );
}

export default function Products() {
  return <ProductsList />;
}
