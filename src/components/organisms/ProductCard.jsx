import CardHeader from "../molecules/CardHeader";
import ProductInfo from "../molecules/ProductInfo";
import QuantityControls from "../molecules/QuantityControls";
import CardFooter from "../molecules/CardFooter";
import Button from "../atoms/Button";

const ProductCard = ({
  variant,
  name,
  image,
  price,
  description,
  quantity = 1,
  onViewDetails,
  onAddToCart,
  onRemoveFromCart,
  onIncrease,
  onDecrease,
  onEdit,
  onDelete
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 max-w-xs w-full flex flex-col justify-between">
      {/* Header */}
      <CardHeader image={image} name={name} />

      {/* Info */}
      <ProductInfo price={price} description={description} />

      {/* Controles de cantidad */}
      {(variant === "shop" || variant === "cart") && (
        <QuantityControls
          quantity={quantity}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
        />
      )}

      {/* Footer: Botones */}
      <CardFooter>
        {variant === "featured" && (
          <Button textButton="Ver detalles" onClick={onViewDetails} />
        )}

        {variant === "shop" && (
          <>
            <Button textButton="Ver detalles" onClick={onViewDetails} />
            <Button textButton="Agregar al carrito" onClick={onAddToCart} />
          </>
        )}

        {variant === "cart" && (
          <>
            <Button
              textButton="Eliminar"
              onClick={onRemoveFromCart}
              className="bg-red-500 text-white hover:bg-red-600 py-1 px-3 rounded"
            />
          </>
        )}

        {variant === "admin" && (
          <>
            <Button textButton="Editar" onClick={onEdit} />
            <Button
              textButton="Eliminar"
              onClick={onDelete}
              className="bg-red-500 text-white hover:bg-red-600 py-1 px-3 rounded"
            />
          </>
        )}
      </CardFooter>
    </div>
  );
};

export default ProductCard;