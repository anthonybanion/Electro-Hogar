const ProductName = ({ name, className = "text-lg font-semibold text-gray-800 truncate" }) => (
  <h2 className={className}>{name}</h2>
);

export default ProductName;