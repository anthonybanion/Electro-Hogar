import { useParams } from "react-router-dom";
import { useProductsContext } from "../../contexts/ProductsContext";
import { useEffect, useState } from "react";
import ProductDetailCard from "../organisms/cards/ProductDetailCard";

const ProductDetail = () => {
  const { id } = useParams(); // <- ID de la URL
  const { selectedProduct, fetchProductById } = useProductsContext();
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        await fetchProductById(id); // <- PASAMOS ID
      } catch (err) {
        setError("Hubo un problema al cargar el producto.");
      } finally {
        setCargando(false);
      }
    };

    loadProduct();
  }, [id]);

  if (cargando) {
    return <p className="text-gray-500 text-center">Cargando producto...</p>;
  }

  if (error) {
    return <h1 className="text-red-600 text-center">{error}</h1>;
  }

  if (!selectedProduct) {
    return <p className="text-gray-500 text-center">Producto no encontrado.</p>;
  }

  return (
    <>
      <ProductDetailCard product={selectedProduct} />
    </>
  );
};

export default ProductDetail;