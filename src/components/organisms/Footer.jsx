import mastercard from "../../assets/mastercard.png";
import visa from "../../assets/visa.png";
import naranja from "../../assets/naranja.png";
import pagofacil from "../../assets/pagofacil.png";
import SocialIconsGroup from "../molecules/SocialIconsGroup";
import logo from '../../assets/logo_red.png'; 

const Footer = () => (
  <footer className="mt-10">
    <div className="bg-gray-200 py-8 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:justify-items-center px-4">
      

      <div className="flex flex-col items-center gap-1 pr-2">
            <img
              src={logo}
              alt="Electro Hogar Logo"
              className="h-10 w-auto"
            />
            <span className="hidden sm:block text-2xl font-bold text-red-600">
              Electro Hogar
            </span>
      </div>

      {/* Formas de pago */}
      <div className="flex flex-col gap-1">
        <h2 className="text-gray-800 mb-1 text-base sm:text-lg md:text-xl font-semibold">Formas de pago</h2>
        <div className="flex gap-2 my-1">
          <img src={mastercard} alt="mastercard-logo" className="w-10 sm:w-12 h-8 md:h-10" />
          <img src={visa} alt="visa-logo" className="w-10 md:w-12 h-8 md:h-10" />
          <img src={pagofacil} alt="pagofacil-logo" className="w-10 md:w-12 h-8 md:h-10" />
        </div>
      </div>

      {/* Contacto */}
      <div className="flex flex-col gap-1 text-xs lg:text-sm 2xl:text-base text-gray-800">
        {/* Redes Sociales */}
      <SocialIconsGroup />
        
        <div><i className="bi bi-telephone"> Venta Corporativa 1127106705</i></div>
        <div><i className="bi bi-envelope"> electrohogar@gmail.com</i></div>
        <div><i className="bi bi-geo-alt">  Victor Hugo 1135 Wilde Buenos Aires </i></div>
      </div>

    </div>

    {/* Footer final */}
    <div className="bg-[#e50019] text-white px-4 py-4">
  <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row sm:justify-between sm:items-center text-xs sm:text-sm gap-4 sm:gap-2 text-center sm:text-left">
    
    {/* Lado izquierdo */}
    <div className="w-full sm:w-auto">
      2025 | Todos los derechos reservados - Electro Hogar S.A.
    </div>

    {/* Lado derecho */}
    <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-end gap-2 sm:gap-4 w-full sm:w-auto">
      <a href="#" className="hover:underline">Términos y condiciones</a>
      <a href="#" className="hover:underline">Políticas de privacidad</a>
      <a href="#" className="hover:underline">Preguntas Frecuentes</a>
      <a href="#" className="hover:underline">Legales</a>
    </div>
  </div>
</div>

  </footer>
);

export default Footer;