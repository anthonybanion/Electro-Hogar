const Button = ({
  onClick,
  type = "button",
  textButton,
  className = "bg-gray-900 text-white py-2 rounded hover:bg-gray-800",
  icon
}) => {
  return (
    <button onClick={onClick} className={className} type={type}>
      {icon && <span className="icon mr-2">{icon}</span>}
      {textButton}
    </button>
  );
};

export default Button;