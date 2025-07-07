import { createContext, useState, useEffect } from 'react';
import { useContext } from 'react';

// Create the CartContext
export const CartContext = createContext();

// Cart provider
export function CartProvider({ children }) {
    const [productsCart, setProductsCart] = useState(() => {
        const stored = localStorage.getItem("cart");
        return stored ? JSON.parse(stored) : [];
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(productsCart));
    }, [productsCart]);

    const getTotalItems = () => {
        return productsCart.reduce((acc, p) => acc + p.quantity, 0);
    };

    const getTotalPrice = () => {
        return productsCart.reduce((acc, p) => acc + (p.price * p.quantity), 0);
    };

    const productExists = (id) => {
        return productsCart.some((p) => p.id === id);
    }

    const getCartUpdated = (product) => {
        const quantityToAdd = product.quantity || 1;
        return productsCart.map((p) =>
            p.id === product.id
                ? { ...p, quantity: p.quantity + quantityToAdd }
                : p
        );
    };

    const addToCart = (product) => {
        const exists = productExists(product.id);
        const quantityToAdd = product.quantity || 1;

        if (exists) {
            setProductsCart(getCartUpdated(product));
        } else {
            const newProduct = { ...product, quantity: quantityToAdd };
            setProductsCart([...productsCart, newProduct]);
        }
    };

    const emptyCart = () => {
        setProductsCart([]);
    };

    function deleteProductFromCart(id) {
        const newCart = productsCart.filter((p) => p.id !== id);
        setProductsCart(newCart);
    }

    const updateCart = (updatedProduct) => {
        const newCart = productsCart.map((p) => {
            if (p.id === updatedProduct.id) {
                return { ...p, quantity: updatedProduct.quantity };
            }
            return p;
        });
        setProductsCart(newCart);
    };

    return (
        <CartContext.Provider value={{
            productsCart,
            addToCart,
            emptyCart,
            deleteProductFromCart,
            updateCart,
            getTotalItems,
            getTotalPrice,
            getCartUpdated
        }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => useContext(CartContext);