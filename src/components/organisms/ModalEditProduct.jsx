import { useState, useEffect } from "react";
import { useProductsContext } from "../../contexts/ProductsContext";

const ModalEditProduct = ({ isOpen, onClose, productId, onProductUpdated }) => {
  const { fetchProductById, updateProduct } = useProductsContext();
  const [form, setForm] = useState({
    name: "",
    image: "",
    description: "",
    price: "",
    stock: ""
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen && productId) {
      fetchProductById(productId).then(product => {
        setForm(product);
      });
    }
  }, [isOpen, productId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.image || !form.description || !form.price || !form.stock) {
      alert("Todos los campos son obligatorios.");
      return;
    }

    setLoading(true);
    try {
      const updated = await updateProduct(form);
      onProductUpdated(updated);
      onClose();
    } catch (err) {
      console.error("Error actualizando producto:", err);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-tl from-blue-300 via-blue-500 to-blue-800 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg w-[90%] max-w-lg">
        <h2 className="text-xl font-bold mb-4">Editar Producto</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Nombre"
            className="w-full border-1 border-gray-400 p-1 rounded-xl" />
          <input
            name="image"
            value={form.image}
            onChange={handleChange}
            placeholder="URL de Imagen"
            className="w-full border-1 border-gray-400 p-1 rounded-xl" />
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Descripción"
            className="w-full border-1 border-gray-400 p-1 rounded-xl" />
          <input
            name="price"
            value={form.price}
            onChange={handleChange}
            placeholder="Precio"
            type="number"
            className="w-full border-1 border-gray-400 p-1 rounded-xl" />
          <input
            name="stock"
            value={form.stock}
            onChange={handleChange}
            placeholder="Stock"
            type="number"
            className="w-full border-1 border-gray-400 p-1 rounded-xl" />

          <div className="flex justify-end gap-2 pt-4">
            <button type="button" onClick={onClose} className="bg-gray-300 px-4 py-2 rounded cursor-pointer hover:bg-gray-400">Cancelar</button>
            <button type="submit" disabled={loading} className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-700">
              {loading ? "Guardando..." : "Guardar cambios"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalEditProduct;