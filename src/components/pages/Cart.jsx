import DefaultLayout from "../uiTemplates/DefaultLayout"
import { useAuth } from "../../contexts/AuthContext"
import { Navigate } from "react-router-dom"
import { useCart } from "../../contexts/CartContext"
import CartProductCard from "../organisms/cards/CartProductCard"

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
                {productsCart.map(product => (
                    <CartProductCard key={product.id} product={product} />
                ))}
            </div>
        </DefaultLayout>
    )
}

export default Cart