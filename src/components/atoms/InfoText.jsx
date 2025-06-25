const InfoText = ({ title, description }) => (
  <div>
    <h3 className="font-semibold">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

export default InfoText;
