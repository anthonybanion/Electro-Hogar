import logo from '../../assets/logo.png'; 

const Logo = () => {
  return (
    <div className="flex items-center gap-2 pr-2">
      <img
        src={logo}
        alt="Electro Hogar Logo"
        className="h-10 w-auto"
      />
      <span className="hidden sm:block text-2xl font-bold text-white">
        Electro Hogar
      </span>
    </div>

  );
};

export default Logo;
