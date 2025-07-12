import { useProductsContext } from "../../contexts/ProductsContext";
import { useEffect, useState } from "react";
import ShopProductCard from "../organisms/cards/ShopProductCard";
import LoadingSpinner from "../atoms/LoadingSpinner";
import { useSearch } from "../../contexts/SearchContext";

const Shop = () => {
    const { products, fetchProducts } = useProductsContext();
    const [cargando, setCargando] = useState(true)
    const [error, setError] = useState(null)
    const { search, order, category } = useSearch();

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

    let filteredProducts = products.filter((product) => {
        return product.name.toLowerCase().includes(search.toLowerCase());
    });

    if (order === "asc") {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (order === "desc") {
        filteredProducts.sort((a, b) => b.price - a.price);
    }

    // Categoría (simulada por nombre)
    if (category === "Remera") {
        filteredProducts = filteredProducts.filter((product) =>
            product.name.toLowerCase().includes("remera") ||
            product.name.toLowerCase().includes("musculosa")
        );
    } else if (category === "Pantalon") {
        filteredProducts = filteredProducts.filter((product) =>
            product.name.toLowerCase().includes("pantalón") ||
            product.name.toLowerCase().includes("babucha") ||
            product.name.toLowerCase().includes("jean") ||
            product.name.toLowerCase().includes("calza")
        );
    }

    if (cargando) {
        return <div className="mt-20">
            <LoadingSpinner size="w-20 h-20" color="border-blue-800" />
        </div>;
    } else if (error) {
        return <h1>{error}</h1>
    } else if (filteredProducts.length === 0) {
        return <p className="text-gray-500 text-center">No hay productos disponibles.</p>;
    } else {
        return (
            <div className="grid w-full grid-cols-2 justify-items-center md:grid-cols-3 xl:grid-cols-4 gap-4 my-5 px-2">
                {filteredProducts.map((product) => (
                    <ShopProductCard key={product.id} product={product} />
                ))}
            </div>
        );
    }
};

export default Shop;