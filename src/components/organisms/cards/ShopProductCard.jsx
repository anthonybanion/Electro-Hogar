import { useState } from 'react';
import Button from '../../atoms/Button';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../../contexts/CartContext';
import { sweetTimer } from '../../../utility/sweetAlert';

const ShopProductCard = ({ product }) => {
    const { addToCart } = useCart();
    const { name, image, price } = product;
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();

    const handleAddToCart = () => {
        if (quantity < 1) return;
        const productToAdd = { ...product, quantity };
        console.log("Producto a agregar al carrito:", productToAdd);
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

    const handleClick = () => {
        navigate(`/productos/${product.id}`);
    };

    return (
        <div className="bg-white border border-gray-200 rounded-xl shadow-md w-full max-w-md p-2 lg:p-4 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xs sm:text-sm lg:text-lg truncate font-semibold m-2 text-center">{name}</h3>
            <img
                src={image}
                alt={`Imagen de ${name}`}
                className="w-full aspect-square object-cover rounded-md"
            />
            <p className="text-sm sm:text-lg lg:text-xl font-semibold lg:font-bold mt-2 text-green-600 text-center">${price}</p>
            <div className="flex items-center justify-center mt-2 sm:mt-4">
                <button className="bg-gray-950 text-xs sm:text-base text-white cursor-pointer w-4 sm:w-6 lg:w-8 h-4 sm:h-6 lg:h-8 flex items-center justify-center rounded-full mr-1 sm:mr-2 hover:bg-gray-800" onClick={subtractQuantity}>
                    -
                </button>
                <span className="text-sm lg:text-lg font-semibold mx-1 sm:mx-2">{quantity}</span>
                <button className="bg-gray-950 text-xs sm:text-base text-white cursor-pointer w-4 sm:w-6 lg:w-8 h-4 sm:h-6 lg:h-8 flex items-center justify-center rounded-full ml-1 sm:ml-2 hover:bg-gray-800" onClick={addQuantity}>+</button>
            </div>
            <div className="flex items-center justify-center mt-2 sm:mt-4 gap-1 sm:gap-3 text-[10px] sm:text-xs lg:text-sm">
                <Button
                    textButton="Comprar"
                    className="bg-gray-950 text-white cursor-pointer hover:bg-gray-800 px-1 sm:px-3 py-1 rounded-xl w-full"
                    onClick={handleAddToCart}
                />
                <Button
                    textButton="Ver detalles"
                    className="bg-white text-gray-950 cursor-pointer text-nowrap border border-gray-950 hover:bg-gray-100 px-1 sm:px-3 py-1 rounded-xl w-full"
                    onClick={handleClick}
                />
            </div>
        </div>
    );
};

export default ShopProductCard;