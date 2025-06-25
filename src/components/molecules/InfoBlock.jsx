import InfoIcon from '../atoms/InfoIcon';
import InfoText from '../atoms/InfoText';

const InfoBlock = ({ icon, title, description }) => (
  <div className="flex items-center gap-3">
    <InfoIcon name={icon} />
    <InfoText title={title} description={description} />
  </div>
);

export default InfoBlock;