import { useState } from 'react';
import Logo from '../atoms/Logo';
import SearchInput from '../atoms/SearchInput';
import NavigationMenu from '../molecules/NavigationMenu';
import { motion } from 'framer-motion';
import { slideIn } from '../../utility/animation';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.header className="bg-gray-950 px-6 py-4 fixed top-0 left-0 right-0 z-10"
    variants={slideIn("up", 0.3)} initial="initial" animate="animate">
      <div className="flex items-center justify-between">
        <Logo />

        {/* Desktop search + nav */}
        <div className="hidden md:flex items-end flex-col lg:flex-row gap-4 mt-4 md:mt-0">
          <SearchInput />
          <NavigationMenu />
        </div>

        {/* Toggle button mobile */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white"
          aria-label="Toggle navigation"
        >
          {mobileOpen ? '✖' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden mt-4">
          <SearchInput />
          <NavigationMenu isMobile />
        </div>
      )}
    </motion.header>
  );
};

export default Header;
