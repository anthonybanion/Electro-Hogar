import InputField from "../atoms/InputField";

const AuthForm = ({ email, password, onChange, onSubmit, button }) => (
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
    {button}
  </form>
);

export default AuthForm;