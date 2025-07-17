import { useNavigate } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import Button from "../atoms/Button";
import { SweetConfirm } from "../../utility/sweetAlert";

const CartFooter = ({ onCheckout }) => {
    const { getTotalItems, getTotalPrice, emptyCart } = useCart();
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/productos/`);
    };

    const handleEmptyCart = async () => {
        const confirmed = await SweetConfirm(
            {
                text: "Vas a vaciar el carrito de compras",
                confirmButtonText: "Vaciar carrito",
                text2: "El carrito ha sido vaciado."
            }
        );
        if (confirmed) {
            emptyCart();
        }
    };

    return (
        <div className="flex flex-col justify-between p-4 max-w-[750px] m-1 md:mx-auto">
            <div>
                <p className="text-md md:text-lg lg:text-xl font-semibold font-sans">Productos: {getTotalItems()}</p>
                <p className="text-lg md:text-xl lg:text-2xl font-semibold font-sans">Total: ${getTotalPrice().toFixed(2)}</p>
            </div>
            <div className="grid grid-cols-3  gap-2 w-full mt-4">
                <Button
                    textButton="Vaciar carrito"
                    className="span-1 bg-red-500 text-white text-xs md:text-base h-full cursor-pointer hover:bg-red-600 px-4 py-2 rounded-lg"
                    onClick={handleEmptyCart}
                />

                <Button
                    textButton="Seguir comprando"
                    className="span-2 bg-blue-500 text-white text-xs md:text-base h-full cursor-pointer hover:bg-blue-600 px-4 py-2 rounded-lg"
                    onClick={handleClick} />
                <Button
                    textButton="Finalizar compra"
                    className="span-3 bg-[#1e1e1e] text-white text-xs md:text-base h-full cursor-pointer hover:bg-black px-4 py-2 rounded-lg"
                    onClick={onCheckout} />
            </div>
        </div>
    );
}

export default CartFooter;