import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Home from "./pages/home/Home";
import "./style.scss";
import Products from "./pages/products/Products";
import Product from "./pages/product/Product";
import Cart from "./pages/cart/Cart";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home/>}/>
            <Route path="/products">
              <Route index element={<Products />}/>
              <Route path=":productId" element={<Product />}/>
            </Route>
            <Route path="/cart">
              <Route index element={<Cart />}/>
            </Route>
            
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
