import { useEffect, useState } from "react";

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
  return <h1>Content loaded!</h1>
}

export default function Products() {
  return <ProductsList />;
}
