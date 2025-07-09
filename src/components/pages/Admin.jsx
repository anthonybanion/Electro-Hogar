import DefaultLayout from "../uiTemplates/DefaultLayout";
import AdminProductTableView from "../organisms/AdminProductTableView";
import Button from "../atoms/Button";
import { useState } from "react";
import { useProductsContext } from "../../contexts/ProductsContext";
import AddProductModal from "../organisms/AddProductModal";

const Admin = () => {
    const [showModal, setShowModal] = useState(false);
    const { addProduct, triggerRefresh } = useProductsContext();

    const handleAddProduct = async (product) => {
        try {
            await addProduct(product);
            triggerRefresh();
            setShowModal(false); 
    
        } catch (error) {
            console.error("Error al agregar producto:", error);
        }
    };

    return (
        <DefaultLayout>
            <h1 className="text-2xl text-center font-bold m-4">Panel de Administración</h1>
            <Button textButton="Agregar Producto"
                onClick={() => setShowModal(true)}
                className="bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 mb-4 mx-auto block rounded-2xl font-mono "
            />
            <AddProductModal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                onSubmit={handleAddProduct} />
            <AdminProductTableView />
        </DefaultLayout>
    );
};

export default Admin;