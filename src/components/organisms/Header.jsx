import { useState } from 'react';
import Logo from '../atoms/Logo';
import SearchInput from '../atoms/SearchInput';
import NavigationMenu from '../molecules/NavigationMenu';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-gray-950 px-6 py-4 sticky top-0 z-10">
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
    </header>
  );
};

export default Header;