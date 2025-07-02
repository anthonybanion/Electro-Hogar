const ProductDescription = ({ description, className = "text-sm text-gray-600 line-clamp-2" }) => (
  <p className={className}>{description}</p>
);

export default ProductDescription;