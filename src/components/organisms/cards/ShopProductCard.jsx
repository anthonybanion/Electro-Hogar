import  { useState } from 'react';
import Button from '../../atoms/Button';

const ShopProductCard = ({ product }) => {
    const { name, image, price } = product;
    const [quantity, setQuantity] = useState(1);

    function addQuantity() {
        setQuantity(prevQuantity => prevQuantity + 1);
    }

    function subtractQuantity() {
        setQuantity(prevQuantity => prevQuantity > 1 ? prevQuantity - 1 : 1);
    }

    return (
        <div className="bg-white rounded-xl shadow-md max-w-[500px] p-4 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-lg font-semibold m-3 text-center">{name}</h3>
            <img
                src={image}
                alt={`Imagen de ${name}`}
                className="w-full aspect-square object-cover rounded-md"
            />
            <p className="text-xl font-bold mt-2 text-green-600 text-center">${price}</p>
            <div className="flex items-center justify-center mt-4">
                <button className="bg-gray-950 text-white w-8 h-8 flex items-center justify-center rounded-full p-2 mr-2 hover:bg-gray-800" onClick={subtractQuantity}>-</button>
                <span className="text-lg font-semibold mx-2">{quantity}</span>
                <button className="bg-gray-950 text-white w-8 h-8 flex items-center justify-center rounded-full p-2 ml-2 hover:bg-gray-800" onClick={addQuantity}>+</button>
            </div>
            <div className="flex items-center justify-center mt-4 gap-3 text-sm font-sans">
                <Button
                    textButton="Comprar"
                    className="bg-gray-950 text-white hover:bg-gray-800 px-3 py-2 rounded-xl w-full"
                />
                <Button
                    textButton="Ver detalles"
                    className="bg-white text-gray-950 border border-gray-950 hover:bg-gray-100 px-3 py-2 rounded-xl w-full"
                />
            </div>
        </div>
    );
};

export default ShopProductCard;