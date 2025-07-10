import DefaultLayout from "../uiTemplates/DefaultLayout"
import { useAuth } from "../../contexts/AuthContext"
import { Navigate } from "react-router-dom"
import { useCart } from "../../contexts/CartContext"
import CartProductCard from "../organisms/cards/CartProductCard"
import CartFooter from "../molecules/CartFooter"
import { useNavigate } from "react-router-dom"
import Button from "../atoms/Button"
import PayModalForm from "../organisms/PayModalForm"
import { useState } from "react"

const Cart = () => {
    const { user } = useAuth()
    const { productsCart } = useCart()
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        navigate(`/productos/`);
    };

    const handleOpenModal = () => {
        setShowModal(true);
    };

    if (!user) {
        return (
            <Navigate to="/login" replace />
        )
    }

    return (
        <DefaultLayout>
            <div>
                {productsCart.length > 0 ? (
                    <>
                        {productsCart.map(product => (
                            <CartProductCard key={product.id} product={product} />
                        ))}
                        <CartFooter
                            onCheckout={handleOpenModal}
                        />
                    </>
                ) : (
                    <div className="flex flex-col justify-center items-center">
                    <p className="text-gray-500 sm:text-xl md:text-3xl text-center mt-20">
                        No hay productos en el carrito
                    </p>
                    <Button
                    textButton="Ver Productos"
                    className="bg-green-700 text-white text-xs md:text-lg text-center font-mono hover:bg-green-600 cursor-pointer px-4 py-2 mt-10 rounded-lg"
                    onClick={handleClick} />
                    </div>
                )}
            </div>
             <PayModalForm
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                />
        </DefaultLayout>
    )
}

export default Cart