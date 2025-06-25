import NavLink from '../atoms/NavLink';

const NavigationMenu = ({ isMobile = false }) => {
  const links = ['Inicio', 'Nosotros', 'Contacto', 'Productos', 'Carrito'];

  return (
    <ul className={`flex ${isMobile ? 'flex-col mt-4 space-y-2' : 'space-x-6'}`}>
      {links.map((label) => (
        <li key={label}>
          <NavLink>{label}</NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavigationMenu;
