import React, { useState } from "react";
import AuthForm from "../molecules/AuthForm";
import { useAuth } from "../../contexts/AuthContext";

const LoginRegister = () => {
  const { login, register, loginGoogleAccount } = useAuth();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isRegister, setIsRegister] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isRegister) {
      await register(formData.email, formData.password);
    } else {
      await login(formData.email, formData.password);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">
          {isRegister ? "Crear cuenta" : "Iniciar sesión"}
        </h1>
        <AuthForm
          email={formData.email}
          password={formData.password}
          onChange={handleChange}
          onSubmit={handleSubmit}
          buttonText={isRegister ? "Registrarse" : "Ingresar"}
        />
        <button
          onClick={loginGoogleAccount}
          className="w-full mt-4 bg-red-500 text-white py-2 rounded hover:bg-red-600"
        >
          Ingresar con Google
        </button>
        <p className="mt-4 text-sm text-center">
          {isRegister ? "¿Ya tenés cuenta?" : "¿No tenés cuenta?"} {" "}
          <button
            onClick={() => setIsRegister(!isRegister)}
            className="text-purple-600 hover:underline"
          >
            {isRegister ? "Ingresá aquí" : "Registrate aquí"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginRegister;