import Home from "./components/pages/Home"
import Login from "./components/pages/Login"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./components/pages/Products";
import Cart from "./components/pages/Cart";
import ProductDetailsPage from "./components/pages/ProductDetailsPage";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/carrito" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App