import ProductImage from "../atoms/ProductImage";
import ProductName from "../atoms/ProductName";

const CardHeader = ({ image, name }) => (
  <div className="flex flex-col items-start">
    <ProductImage src={image} alt={name} />
    <ProductName name={name} className="mt-2" />
  </div>
);

export default CardHeader;