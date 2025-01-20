import  { useState } from 'react';
import { Menu, X, ChevronDown, User } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isGamesDropdownOpen, setIsGamesDropdownOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleGamesDropdown = () => setIsGamesDropdownOpen(!isGamesDropdownOpen);

  return (
    <header className="bg-gray-900 text-white">
      {/* Top Bar */}
      <div className="bg-black py-2">
        <div className="container mx-auto px-4 flex justify-end">
          <button className="flex items-center space-x-2 hover:text-blue-400">
            <User size={16} />
            <span className="text-sm">Login</span>
          </button>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold text-blue-500">Blizzard</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative">
              <button
                onClick={toggleGamesDropdown}
                className="flex items-center space-x-1 hover:text-blue-400"
              >
                <span>Jogos</span>
                <ChevronDown size={16} />
              </button>
              
              {/* Games Dropdown */}
              {isGamesDropdownOpen && (
                <div className="absolute top-full left-0 w-48 bg-gray-800 rounded-md shadow-lg py-2 mt-2">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-700">World of Warcraft</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-700">Diablo IV</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-700">Overwatch 2</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-700">Hearthstone</a>
                </div>
              )}
            </div>
            <a href="#" className="hover:text-blue-400">Loja</a>
            <a href="#" className="hover:text-blue-400">Notícias</a>
            <a href="#" className="hover:text-blue-400">Suporte</a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 hover:bg-gray-800 rounded"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <a href="#" className="block hover:text-blue-400">Jogos</a>
            <a href="#" className="block hover:text-blue-400">Loja</a>
            <a href="#" className="block hover:text-blue-400">Notícias</a>
            <a href="#" className="block hover:text-blue-400">Suporte</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;