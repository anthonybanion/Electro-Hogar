const NavLink = ({ children, href = "#" }) => {
  return (
    <a
      href={href}
      className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors duration-200"
    >
      {children}
    </a>
  );
};

export default NavLink;
