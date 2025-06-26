import HeroTextGroup from "../molecules/HeroTextGroup";

const HeroSection = () => {
  return (
    <section className="w-full h-[65vh] md:h-[80vh] relative">
      <img
        className="w-full h-full object-cover blur-[3px]"
        src="https://raw.githubusercontent.com/Oliver-92/images/refs/heads/main/assets/clothes/banner01.webp"
        alt="Hero banner"
      />
      <HeroTextGroup />
    </section>
  );
};

export default HeroSection;