import Home from "./components/pages/Home"
import Login from "./components/pages/Login"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./components/pages/Products";
import Cart from "./components/pages/Cart";
import ProductDetailsPage from "./components/pages/ProductDetailsPage";
import Admin from "./components/pages/Admin";
import RequireAdmin from "./components/atoms/RequireAdmin";
import ScrollToTop from "./components/atoms/ScrollTop";

function App() {

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/carrito" element={<Cart />} />
        <Route path="/productos/:id" element={<ProductDetailsPage />} />
        <Route
          path="/admin"
          element={
            <RequireAdmin>
              <Admin />
            </RequireAdmin>
          }
        />
      </Routes>
    </Router>
  );
}

export default App