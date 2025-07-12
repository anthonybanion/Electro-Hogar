import { useProductsContext } from "../../contexts/ProductsContext";
import { useEffect, useState } from "react";
import ShopProductCard from "../organisms/cards/ShopProductCard";
import LoadingSpinner from "../atoms/LoadingSpinner";
import { useSearch } from "../../contexts/SearchContext";

const Shop = () => {
    const { products, fetchProducts } = useProductsContext();
    const [load, setLoad] = useState(true)
    const [error, setError] = useState(null)
    const { search, order, category } = useSearch();
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 8;

    useEffect(() => {
        const loadProducts = async () => {
            try {
                await fetchProducts();
            } catch (err) {
                setError('Hubo un problema al cargar los productos.');
            } finally {
                setLoad(false);
            }
        };
        loadProducts();
    }, []);

    useEffect(() => {
        setCurrentPage(1);
    }, [search, category, order]);


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

    // Paginación
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    const startIndex = (currentPage - 1) * productsPerPage;
    const paginatedProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (load) {
        return <div className="mt-20">
            <LoadingSpinner size="w-20 h-20" color="border-blue-800" />
        </div>;
    } else if (error) {
        return <h1>{error}</h1>
    } else if (filteredProducts.length === 0) {
        return <p className="text-gray-500 text-center">No hay productos disponibles.</p>;
    } else {
        return (
            <>
                <div className="grid w-full grid-cols-2 justify-items-center md:grid-cols-3 xl:grid-cols-4 gap-4 my-5 px-2">
                    {paginatedProducts.map((product) => (
                        <ShopProductCard key={product.id} product={product} />
                    ))}
                </div>

                <div className="flex justify-center my-4 gap-2">
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i + 1}
                            className={`px-3 py-1 rounded-full size-8 ${currentPage === i + 1
                                ? "bg-gray-800 text-white"
                                : "bg-gray-200 hover:bg-gray-300"
                                }`}
                            onClick={() => handlePageChange(i + 1)}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>
            </>
        );
    }
};

export default Shop;