const ProductCard = ({ name, image, price }) => (
  <div className="min-w-[250px] bg-white shadow-md rounded-lg overflow-hidden">
    <img src={image} alt={name} className="h-48 w-full object-cover" />
    <div className="p-4">
      <h3 className="font-semibold text-lg">{name}</h3>
      <p className="text-gray-700 mt-2">${price}</p>
    </div>
  </div>
);

export default ProductCard;
