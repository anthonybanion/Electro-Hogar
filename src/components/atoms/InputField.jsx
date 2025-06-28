const InputField = ({ label, type, value, onChange, name }) => (
  <label className="flex flex-col gap-1 text-sm">
    {label}
    <input
      className="border p-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required
    />
  </label>
);

export default InputField;