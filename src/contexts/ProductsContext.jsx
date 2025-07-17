import { createContext, useState, useContext } from 'react';

const ProductsContext = createContext();

export function ProductsProvider({ children }) {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [refreshProducts, setRefreshProducts] = useState(false);


    const fetchProducts = () => {
        return new Promise((resolve, reject) => {
            fetch('https://68779d8edba809d901f03011.mockapi.io/products/products')
                .then((res) => res.json())
                .then((data) => {
                    setProducts(data);
                    resolve(data);
                })
                .catch((error) => {
                    console.error("Hubo un problema al cargar los productos:", error);
                    reject(error);
                });
        });
    };

    const triggerRefresh = () => setRefreshProducts(prev => !prev);

    const fetchProductById = (id) => {
        return new Promise((resolve, reject) => {
            fetch(`https://68779d8edba809d901f03011.mockapi.io/products/products/${id}`)
                .then((res) => res.json())
                .then((product) => {
                    setSelectedProduct(product);
                    resolve(product);
                })
                .catch((error) => {
                    console.error("Hubo un problema al cargar los productos:", error);
                    reject(error);
                });
        });
    };

    const addProduct = (product) => {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await fetch('https://68779d8edba809d901f03011.mockapi.io/products/products', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(product),
                });
                if (!response.ok) throw new Error('Hubo un problema al agregar el producto');
                const data = await response.json();
                resolve(data);
            } catch (error) {
                console.error(error.message);
                reject(error);
            }
        });
    };

    const updateProduct = (product) => {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await fetch(`https://68779d8edba809d901f03011.mockapi.io/products/products/${product.id}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(product),
                });
                if (!response.ok) throw new Error('Hubo un problema al actualizar el producto');
                const data = await response.json();
                resolve(data);
            } catch (error) {
                console.error(error.message);
                reject(error);
            }
        });
    };

    const deleteProduct = (id) => {

        return new Promise(async (resolve, reject) => {
            try {
                const response = await fetch(`https://68779d8edba809d901f03011.mockapi.io/products/products/${id}`, {
                    method: 'DELETE',
                });
                if (!response.ok) throw new Error('Hubo un problema al eliminar el producto');
                resolve();
            } catch (error) {
                console.error(error.message);
                reject(error);
            }
        });
    };

    return (
        <ProductsContext.Provider
            value={{
                products,
                selectedProduct,
                refreshProducts,
                triggerRefresh,
                setSelectedProduct,
                fetchProducts,
                fetchProductById,
                addProduct,
                updateProduct,
                deleteProduct,
            }}
        >
            {children}
        </ProductsContext.Provider>
    );
}

export const useProductsContext = () => useContext(ProductsContext);