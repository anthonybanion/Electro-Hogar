import { useProductsContext } from "../../contexts/ProductsContext";
import { useEffect, useState } from "react";
import ShopProductCard from "../organisms/cards/ShopProductCard";
import LoadingSpinner from "../atoms/LoadingSpinner";
import { div } from "framer-motion/client";

const Shop = () => {
    const { products, fetchProducts } = useProductsContext();
    const [cargando, setCargando] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const loadProducts = async () => {
            try {
                await fetchProducts();
            } catch (err) {
                setError('Hubo un problema al cargar los productos.');
            } finally {
                setCargando(false);
            }
        };

        loadProducts();
    }, []);

    if (cargando) {
        return <div className="mt-20">
            <LoadingSpinner size="w-20 h-20" color="border-blue-800" />
        </div>;
    } else if (error) {
        return <h1>{error}</h1>
    } else if (products.length === 0) {
        return <p className="text-gray-500 text-center">No hay productos disponibles.</p>;
    } else {
        return (
            <div className="grid max-w-[1700px] grid-cols-1 justify-items-center sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto my-5">
                {products.map((product) => (
                    <ShopProductCard key={product.id} product={product} />
                ))}
            </div>
        );
    }
};

export default Shop;