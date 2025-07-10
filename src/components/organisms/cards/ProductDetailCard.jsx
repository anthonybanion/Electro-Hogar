import { useState } from 'react';
import Button from '../../atoms/Button';
import { useCart } from '../../../contexts/CartContext';
import { sweetTimer } from '../../../utility/sweetAlert';

const ProductDetailCard = ({ product }) => {
    const { name, image, price, stock } = product;
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        if (quantity < 1) return;
        const productToAdd = { ...product, quantity };
        sweetTimer("Producto agregado al carrito");
        addToCart(productToAdd);
        setQuantity(1);
    };

    function addQuantity() {
        setQuantity(prevQuantity => prevQuantity + 1);
    }

    function subtractQuantity() {
        setQuantity(prevQuantity => prevQuantity > 1 ? prevQuantity - 1 : 1);
    }

    if (!product) {
        return <p className="text-gray-500 text-center">Producto no encontrado.</p>;
    }

    return (
        <div className="flex flex-col sm:flex-row sm:max-h-[800px] max-w-[1400px] bg-white rounded-xl mx-5 2xl:mx-auto py-5">
            <img
                src={image}
                alt={`Imagen de ${name}`}
                className="w-11/12 sm:w-7/12 object-cover rounded-md mx-auto"
            />
            <div className="flex flex-col p-4 gap-6 w-full">
                <h3 className="text-xl md:text-2xl font-semibold">{name}</h3>
                <div>
                    <p className="text-lg md:text-xl font-bold mt-2 text-green-600">${price}</p>
                    <p className="text-sm md:text-base text-gray-500">9 cuotas sin interés</p>
                    <p className="text-sm md:text-base text-gray-500">Envío a todo el pais</p>
                </div>
                <p className='text-sm md:text-base'>{product.description}</p>
                <p className="text-sm md:text-base text-gray-500">Cantidad disponible: {stock}</p>
                <div>
                    <p className="text-base text-gray-500">Talle</p>
                    <select className="border border-gray-300 rounded-md p-2 w-full xl:w-6/12" defaultValue="S">
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                    </select>
                </div>
                <div className="flex items-center justify-center mt-auto">
                    <button className="bg-gray-950 text-white cursor-pointer w-8 h-8 flex items-center justify-center rounded-full p-2 mr-2 hover:bg-gray-800" onClick={subtractQuantity}>-</button>
                    <span className="text-lg font-semibold mx-2">{quantity}</span>
                    <button className="bg-gray-950 text-white cursor-pointer w-8 h-8 flex items-center justify-center rounded-full p-2 ml-2 hover:bg-gray-800" onClick={addQuantity}>+</button>
                </div>
                <div className="flex items-center justify-center mt-4 gap-3 text-sm font-sans">
                    <Button
                        textButton="Comprar"
                        className="bg-gray-950 text-white cursor-pointer hover:bg-gray-800 px-3 py-2 rounded-xl w-full"
                        onClick={handleAddToCart}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProductDetailCard;