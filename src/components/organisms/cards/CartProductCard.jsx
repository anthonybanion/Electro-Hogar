import { useState } from 'react';
import Button from '../../atoms/Button';
import { useNavigate } from 'react-router-dom';
import { sweetTimer } from '../../../utility/sweetAlert';
import { useCart } from '../../../contexts/CartContext';
import SocialIcon from '../../atoms/SocialIcon';

const CartProductCard = ({ product }) => {
    const { deleteProductFromCart, updateCart } = useCart();
    const { name, image, price, quantity } = product;
    const [currentQuantity, setQuantity] = useState(quantity);
    const navigate = useNavigate();
    const TrashIcon = <SocialIcon
        as="i"
        iconClass="bi bi-trash"
    />


    function addQuantity() {
        setQuantity(prevQuantity => prevQuantity + 1);
        const updatedProduct = { ...product, quantity: currentQuantity + 1 };
        updateCart(updatedProduct);
    }

    function subtractQuantity() {
        // Evita que la cantidad sea menor a 1
        if (currentQuantity <= 1) return;
        setQuantity(prevQuantity => prevQuantity > 1 ? prevQuantity - 1 : 1);
        const updatedProduct = { ...product, quantity: currentQuantity - 1 };
        updateCart(updatedProduct);
    };

    const handleClick = () => {
        navigate(`/productos/${product.id}`);
    };


    function handleDeleteProductCart() {
        deleteProductFromCart(product.id);
        sweetTimer("Producto eliminado del carrito");
    }


    return (
        <div className="flex flex-row justify-between items-center max-w-[750px] bg-white border border-gray-200 rounded-xl shadow-md p-1 m-1 md:mx-auto">
            <img
                src={image}
                alt={`Imagen de ${name}`}
                className="w-28 sm:w- aspect-square object-cover rounded-md"
            />
            <h3 className="text-xs sm:text-base md:text-lg font-semibold text-center max-w-[70px] sm:max-w-[100px]">{name}</h3>
            <p className="text-xs sm:text-base md:text-lg font-semibold text-center">${price}</p>
            <div className="text-xs sm:text-base md:text-lg font-semibold flex items-center justify-center border border-gray-400 rounded-xl">
                <button className="w-6 sm:w-8 h-6 sm:h-8 flex items-center justify-center mr-1 sm:mr-2 cursor-pointer " onClick={subtractQuantity}>
                    -
                </button>
                <span className="mx-0 sm:mx-3">{currentQuantity}</span>
                <button className="w-6 sm:w-8 h-6 sm:h-8 flex items-center justify-center ml-1 sm:ml-2 cursor-pointer" onClick={addQuantity}>+</button>
            </div>
            <div>
                <Button
                    className="cursor-pointer hover:text-red-500"
                    textButton=""
                    icon={TrashIcon}
                    onClick={handleDeleteProductCart} />
            </div>
        </div>
    );
};

export default CartProductCard;