import NavLink from '../atoms/NavLink';

const NavigationMenu = ({ isMobile = false }) => {
  const links = [
    { label: 'Inicio', path: '/' },
    { label: 'Productos', path: '/productos' },
    { label: 'Ingresar', path: '/login' },
    { label: 'Carrito', path: '/carrito' },
  ];

  return (
    <ul className={`flex ${isMobile ? 'flex-col mt-4 space-y-2' : 'space-x-6'}`}>
      {links.map(({ label, path }) => (
        <li key={label}>
          <NavLink to={path}>{label}</NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavigationMenu;