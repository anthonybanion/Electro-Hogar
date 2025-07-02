import { useState } from "react";
import AuthForm from "../molecules/AuthForm";
import { useAuth } from "../../contexts/AuthContext";
import { sweetTimer } from "../../utility/sweetAlert";
import { useNavigate } from "react-router-dom";
import Button from "../atoms/Button";
import SocialIcon from "../atoms/SocialIcon";

const LoginRegister = () => {
  const { login, register, loginGoogleAccount } = useAuth();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const GoogleIcon = <SocialIcon
      as="i"
      iconClass="bi bi-google"
      bgColor="bg-white"
      textColor="text-[#3c4043]"
      label="Google"
      size="2"
    />

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError("");
  };

  const validateForm = () => {
    if (!formData.email || !formData.password) {
      setError("Por favor completá todos los campos.");
      return false;
    }
    if (formData.password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      if (isRegister) {
        await register(formData.email, formData.password);
        sweetTimer("Cuenta creada con éxito");
        setIsRegister(false);
      } else {
        await login(formData.email, formData.password);
        sweetTimer("Bienvenido!");
        navigate('/');
      }
    } catch (err) {
      console.error("Error:", err);
      console.log("Error completo:", JSON.stringify(err, null, 2));

      const errorCode = err?.code || ""; // evitar undefined

      switch (errorCode) {
        case "auth/invalid-credential":
          setError("Usuario o contraseña incorrectos.");
          break;
        case "auth/email-already-in-use":
          setError("Este correo ya está en uso.");
          break;
        case "auth/invalid-email":
          setError("Correo inválido.");
          break;
        case "auth/missing-password":
          setError("La contraseña es obligatoria.");
          break;
        default:
          setError("Ocurrió un error. Intentá nuevamente.");
      }
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginGoogleAccount();
      sweetTimer("Sesión iniciada con Google");
      navigate("/");
    } catch (err) {
      setError("Error al iniciar sesión con Google.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">
          {isRegister ? "Crear cuenta" : "Iniciar sesión"}
        </h1>

        {error && (
          <p className="text-red-500 text-sm text-center mb-4">{error}</p>
        )}

        <AuthForm
          email={formData.email}
          password={formData.password}
          onChange={handleChange}
          onSubmit={handleSubmit}
          button={<Button type="submit" textButton={isRegister ? "Registrarse" : "Ingresar"} />}
        />
        <Button className="flex justify-center items-center gap-2 w-full mt-4 bg-red-500 text-white py-2 rounded hover:bg-red-600" textButton="Ingresar con Google" icon={GoogleIcon} onClick={handleGoogleLogin} />
        
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