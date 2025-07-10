import Button from "../atoms/Button";
import { useProductsContext } from "../../contexts/ProductsContext";
import { SweetConfirm } from "../../utility/sweetAlert";
import { useState } from "react";
import ModalEditProduct from "../organisms/ModalEditProduct";

const AdminProductTable = ({ products }) => {
  const { deleteProduct, triggerRefresh } = useProductsContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);

  const handleEditClick = (productId) => {
    setSelectedProductId(productId);
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    const confirmed = await SweetConfirm(
      {
        text: "Vas a eliminar este producto",
        confirmButtonText: "Eliminar",
        text2: "El producto ha sido eliminado."
      }
    );
    if (confirmed) {
      await deleteProduct(id);
      triggerRefresh();
    }
  };

  return (
    <>
      <div className="w-full max-w-[1400px] overflow-x-auto mx-auto my-5 border-1">
        {/* Cabecera */}
        <div className="grid grid-cols-9 sm:grid-cols-12 gap-3 font-bold py-2 px-4 text-xs sm:text-sm text-white bg-slate-800">
          <div className="col-span-1">ID</div>
          <div className="col-span-2">Nombre</div>
          <div className="col-span-2">Imagen</div>
          <div className="hidden sm:block col-span-3">Descripción</div>
          <div className="col-span-2 sm:col-span-1">Precio</div>
          <div className="hidden sm:block col-span-1">Stock</div>
          <div className="col-span-2">Acciones</div>
        </div>

        {/* Lista de productos */}
        {products.map((product) => (
          <div key={product.id} className="grid grid-cols-9 sm:grid-cols-12 gap-3 items-center border-b py-2 px-4 text-xs sm:text-sm">
            <div className="col-span-1">{product.id}</div>
            <div className="col-span-2">{product.name}</div>
            <div className="col-span-2">
              <img
                src={product.image}
                alt={product.name}
                className="h-20 w-20 object-cover rounded"
              />
            </div>
            <div className="hidden sm:block col-span-3 truncate">{product.description}</div>
            <div className="col-span-2 sm:col-span-1">${product.price}</div>
            <div className="hidden sm:block col-span-1">{product.stock}</div>
            <div className="col-span-2 flex flex-col sm:flex-row gap-2">
              <Button
                textButton="Editar"
                className="bg-yellow-500 text-white px-2 py-1 rounded text-xs lg:text-sm cursor-pointer hover:bg-yellow-600"
                onClick={() => handleEditClick(product.id)}
              />
              <Button
                textButton="Eliminar"
                className="bg-red-500 text-white px-2 py-1 rounded text-xs lg:text-sm cursor-pointer hover:bg-red-600"
                onClick={() => handleDelete(product.id)}
              />
            </div>
          </div>
        ))}
      </div>
      {/* Modal para editar producto */}
      {isModalOpen && (
        <ModalEditProduct
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          productId={selectedProductId}
          onProductUpdated={() => {
            triggerRefresh(); // recargar lista
            setIsModalOpen(false);
          }}
        />
      )}
    </>
  );
};

export default AdminProductTable;