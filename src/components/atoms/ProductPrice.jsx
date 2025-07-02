const ProductPrice = ({ price, className = "text-md font-bold text-green-600" }) => (
  <p className={className}>${price}</p>
);

export default ProductPrice;