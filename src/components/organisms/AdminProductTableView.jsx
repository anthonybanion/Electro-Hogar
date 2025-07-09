import { useProductsContext } from "../../contexts/ProductsContext";
import AdminProductTable from "../molecules/AdminProductTable";
import { useEffect, useState } from "react";
import LoadingSpinner from "../atoms/LoadingSpinner";

const AdminProductTableView = () => {

    const { products, fetchProducts, refreshProducts } = useProductsContext();
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
    }, [refreshProducts]);

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
                <>
                    <AdminProductTable products={products} />
                </>
        );
    }
};

export default AdminProductTableView;