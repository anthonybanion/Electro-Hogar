import { useState } from "react";
import { SweetBasic } from "../../utility/sweetAlert";
import { useCart } from "../../contexts/CartContext";
import { useNavigate } from "react-router-dom";

const PayModalForm = ({ isOpen, onClose, onSubmit }) => {
    const { emptyCart } = useCart();
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: "",
        lastname: "",
        cardNumber: "",
        cvv: "",
        expirationDate: ""
    });

    const handleChange = (e) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = () => {
        if (!form.name.trim() ||
            !form.lastname.trim() ||
            !/^[0-9]{16}$/.test(form.cardNumber) ||
            !/^[0-9]{3}$/.test(form.cvv) ||
            !/^(0[1-9]|1[0-2])\/\d{2}$/.test(form.expirationDate)) {
            SweetBasic("Error", "Por favor, completa todos los campos con un formato válido.", "error", "Aceptar");
            return;
        }

        SweetBasic("Pago realizado", "Compra finalizada con éxito.", "success", "Aceptar");
        emptyCart();
        onClose();
        navigate("/");
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gradient-to-tl from-blue-300 via-blue-500 to-blue-800 flex items-center justify-center z-50">
            <div className="flex flex-col gap-2  bg-white  rounded-xl p-6 w-[90%] max-w-lg shadow-md">
                <h2 className="text-xl font-mono font-semibold mb-4">Formulario de pago</h2>
                <input
                    name="name"
                    placeholder="Nombre"
                    onChange={handleChange}
                    className="input-style border-1 border-gray-400 p-1 rounded-xl"
                    required
                    type="text" />
                <input
                    name="lastname"
                    placeholder="Apellido"
                    onChange={handleChange}
                    className="input-style border-1 border-gray-400 p-1 rounded-xl"
                    required
                    type="text" />
                <input
                    name="cardNumber"
                    placeholder="Número de tarjeta"
                    onChange={handleChange}
                    className="input-style border-1 border-gray-400 p-1 rounded-xl"
                    required
                    type="text"
                    maxLength={16}
                    inputMode="numeric"
                />

                <input
                    name="cvv"
                    placeholder="CVV"
                    onChange={handleChange}
                    className="input-style border-1 border-gray-400 p-1 rounded-xl"
                    required
                    type="text"
                    maxLength={3}
                    inputMode="numeric"
                />
                <input
                    name="expirationDate"
                    placeholder="MM/AA"
                    onChange={handleChange}
                    className="input-style border-1 border-gray-400 p-1 rounded-xl"
                    required
                    type="text"
                    maxLength={5}
                    pattern="(0[1-9]|1[0-2])\/\d{2}"
                    title="Formato válido: MM/AA"
                />

                <div className="flex justify-end mt-4 gap-2">
                    <button onClick={onClose} className="px-3 py-1 bg-gray-300 rounded cursor-pointer hover:bg-gray-400">Cancelar</button>
                    <button onClick={handleSubmit} className="px-3 py-1 bg-blue-600 cursor-pointer text-white rounded hover:bg-blue-700">Finalizar Compra</button>
                </div>
            </div>
        </div>
    );
};

export default PayModalForm;