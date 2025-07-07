import { useNavigate } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import Button from "../atoms/Button";
import { SweetConfirm } from "../../utility/sweetAlert";
import SocialIcon from "../atoms/SocialIcon";

const CartFooter = ({ onCheckout }) => {
    const { getTotalItems, getTotalPrice, emptyCart } = useCart();
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/productos/`);
    };

    return (
        <div className="flex flex-col justify-between items-center p-4 max-w-[750px] m-1 md:mx-auto">
            <div>
                <p className="text-md md:text-lg font-semibold">Productos: {getTotalItems()}</p>
                <p className="text-lg md:text-xl font-semibold">Total: ${getTotalPrice().toFixed(2)}</p>
            </div>
            <div className="flex flex-row justify-center items-center gap-2 w-full mt-4">
                <Button
                    textButton="Vaciar carrito"
                    className="bg-red-500 text-white text-sm md:text-base items-center hover:bg-red-600 px-4 py-2 rounded-lg"
                    onClick={async () => {
                        const confirmed = await SweetConfirm();
                        if (confirmed) {
                            emptyCart();
                        }
                    }}
                />

                <Button
                    textButton="Seguir comprando"
                    className="bg-gray-950 text-white text-sm md:text-base hover:bg-gray-800 px-4 py-2 rounded-lg"
                    onClick={handleClick} />
                <Button
                    textButton="Finalizar compra"
                    className="bg-green-500 text-white text-sm md:text-base hover:bg-green-600 px-4 py-2 rounded-lg"
                    onClick={onCheckout} />
            </div>
        </div>
    );
}

export default CartFooter;