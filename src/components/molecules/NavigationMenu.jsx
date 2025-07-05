import { useAuth } from '../../contexts/AuthContext';
import NavLink from '../atoms/NavLink';

const NavigationMenu = ({ isMobile = false }) => {

  const { user, logoutUser } = useAuth();

  const handleLogout = () => {
    logoutUser();
  }

  const links = [
    { label: 'Inicio', path: '/' },
    { label: 'Productos', path: '/productos' },
    user ? { label: "Cerrar sesión", action: handleLogout } :
      { label: 'Ingresar', path: '/login' },
    { label: <i className="bi bi-cart text-white text-xl hover:text-cyan-400 transition-colors duration-200" title="Carrito"></i>, path: '/carrito' },
  ];

  return (
    <ul className={`flex ${isMobile ? 'flex-col mt-4 space-y-2' : 'space-x-6'}`}>
      {links.map(({ label, path, action }) => (
        <li key={path || label.toString()}>
          {action ? (
            <button onClick={action} className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors duration-200">{label}</button>
          ) : (
            <NavLink to={path}>{label}</NavLink>
          )}
        </li>
      ))}
    </ul>
  );
};

export default NavigationMenu;