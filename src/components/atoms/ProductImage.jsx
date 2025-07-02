const ProductImage = ({ src, alt = "Product image", className = "w-full h-48 object-cover rounded-t" }) => (
  <img src={src} alt={alt} className={className} />
);

export default ProductImage;