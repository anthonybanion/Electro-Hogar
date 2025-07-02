import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProductsContext } from "../../contexts/ProductsContext";
import ProductImage from "../atoms/ProductImage";
import ProductName from "../atoms/ProductName";
import ProductPrice from "../atoms/ProductPrice";
import ProductDescription from "../atoms/ProductDescription";
import QuantityControls from "../molecules/QuantityControls";
import Button from "../atoms/Button";

const ProductDetailsSection = () => {
    const { id } = useParams();
    const { fetchProductById, selectedProduct, setSelectedProduct } = useProductsContext();
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        setSelectedProduct(null);
        fetchProductById(id);
    }, [id]);

    const increaseQuantity = () => {
        setQuantity((prev) => prev + 1);
    };

    const decreaseQuantity = () => {
        setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
    };

    if (!selectedProduct) {
        return (
            <div className="text-center py-20 text-gray-600 animate-pulse">
                Cargando producto...
            </div>
        );
    }

    return (
        <section className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
                <ProductImage src={selectedProduct.image} alt={selectedProduct.name} />
            </div>

            <div className="flex flex-col justify-center gap-4">
                <ProductName name={selectedProduct.name} />
                <ProductPrice price={selectedProduct.price} />
                <ProductDescription description={selectedProduct.description} />

                <QuantityControls
                    quantity={quantity}
                    onIncrease={increaseQuantity}
                    onDecrease={decreaseQuantity}
                />

                <Button
                    textButton="Add to Cart"
                    onClick={() => console.log("Add to cart:", selectedProduct)}
                />
            </div>
        </section>
    );
};

export default ProductDetailsSection;