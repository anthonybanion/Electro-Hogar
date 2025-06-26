import HeroHeading from "../atoms/HeroHeading";
import HeroSubText from "../atoms/HeroSubText";

const HeroTextGroup = () => (
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
    <HeroHeading />
    <HeroSubText />
  </div>
);

export default HeroTextGroup;