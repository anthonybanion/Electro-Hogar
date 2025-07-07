import DefaultLayout from "../uiTemplates/DefaultLayout"
import { useAuth } from "../../contexts/AuthContext"
import { Navigate } from "react-router-dom"
import { useCart } from "../../contexts/CartContext"
import CartProductCard from "../organisms/cards/CartProductCard"
import CartFooter from "../molecules/CartFooter"

const Cart = () => {
    const { user } = useAuth()
    const { productsCart } = useCart()

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
                            onCheckout={() => {
                                // Aquí puedes manejar la lógica de checkout
                                console.log("Checkout clicked")
                            }}
                        />
                    </>
                ) : (
                    <p className="text-gray-500 text-3xl text-center mt-20">
                        No hay productos en el carrito
                    </p>
                )}
            </div>
        </DefaultLayout>
    )
}

export default Cart