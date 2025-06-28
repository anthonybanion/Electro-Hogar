import { Link } from "react-router-dom";

const NavLink = ({ to, children }) => {
  return (
    <Link to={to} className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors duration-200">
      {children}
    </Link>
  );
};

export default NavLink;
