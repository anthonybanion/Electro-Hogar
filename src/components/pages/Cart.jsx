import DefaultLayout from "../uiTemplates/DefaultLayout"
import { useAuth } from "../../contexts/AuthContext"
import { Navigate } from "react-router-dom"

const Cart = () => {
    const { user } = useAuth()

     if (!user) {
        return (
            <Navigate to="/login" replace />
        )
    }

    return (
        <DefaultLayout>
            <h1 className="text-black mt-80">Carrito</h1>
        </DefaultLayout>
    )
}

export default Cart