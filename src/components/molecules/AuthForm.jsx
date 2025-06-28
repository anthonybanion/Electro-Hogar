import InputField from "../atoms/InputField";

const AuthForm = ({ email, password, onChange, onSubmit, buttonText }) => (
  <form onSubmit={onSubmit} className="flex flex-col gap-4 w-full max-w-sm">
    <InputField
      label="Correo electrónico"
      type="email"
      name="email"
      value={email}
      onChange={onChange}
    />
    <InputField
      label="Contraseña"
      type="password"
      name="password"
      value={password}
      onChange={onChange}
    />
    <button
      type="submit"
      className="bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
    >
      {buttonText}
    </button>
  </form>
);

export default AuthForm;