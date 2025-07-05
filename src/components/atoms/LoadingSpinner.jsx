const LoadingSpinner = ({ size = "w-10 h-10", color = "border-gray-950" }) => (
  <div className="flex justify-center items-center">
    <div className={`${size} border-8 border-gray-300 ${color} rounded-full animate-spin`} />
  </div>
);

export default LoadingSpinner;