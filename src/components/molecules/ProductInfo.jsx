import ProductPrice from "../atoms/ProductPrice";
import ProductDescription from "../atoms/ProductDescription";

const ProductInfo = ({ price, description }) => (
  <div className="flex flex-col gap-1 mt-2">
    <ProductPrice price={price} />
    <ProductDescription description={description} />
  </div>
);

export default ProductInfo;