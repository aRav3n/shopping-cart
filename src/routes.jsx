import Cart from "./Cart.jsx";
import ErrorPage from "./ErrorPage.jsx";
import Home from "./Homepage.jsx";
import Products from "./Products.jsx";
import Shop from "./Shop.jsx";

const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "shop",
    element: <Shop />,
    children: [
      { path: "products", element: <Products /> },
      { path: "cart", element: <Cart /> },
    ],
  },
];

export default routes;
