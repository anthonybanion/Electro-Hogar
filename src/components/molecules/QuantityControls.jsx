import Button from "../atoms/Button";

const QuantityControls = ({ quantity, onIncrease, onDecrease }) => (
  <div className="flex items-center gap-2 mt-2">
    <Button textButton="−" onClick={onDecrease} className="bg-gray-200 text-black px-2 py-1 rounded" />
    <span className="text-sm font-medium">{quantity}</span>
    <Button textButton="+" onClick={onIncrease} className="bg-gray-200 text-black px-2 py-1 rounded" />
  </div>
);

export default QuantityControls;