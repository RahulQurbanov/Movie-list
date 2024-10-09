import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Product from "./components/Product";
import ProductDetail from "./components/ProductDetail";

const router = createBrowserRouter([
  { path: "/", element: <Product /> },
  { path: "/product/:id", element: <ProductDetail /> },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
