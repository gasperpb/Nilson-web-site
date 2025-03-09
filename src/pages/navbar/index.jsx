import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navbar = () => {
  // TODOS os useState hooks devem ser declarados aqui no início
  const [showCategories, setShowCategories] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);  // Movido para cá

  // useEffect deve vir logo após os hooks de estado
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Constantes e outras lógicas vêm depois de todos os hooks
  const categorias = [
    "Abadás", "Agro", "Animes", "Artes Marciais", "Católica", 
    "Ciclismo", "Desenho Animado", "Dia das Mães", "Dia dos Pais", 
    "Divertidas", "Festa Junina", "Filmes e Séries", "Funko Pop", 
    "Futebol", "Game", "Infantil", "Jogos Internos", "Mockups", 
    "Moldes", "Motocross", "Música", "Natal", "Original Style", 
    "Páscoa", "Pesca", "Quebrada", "Religião", "Super Heróis", 
    "Templates", "Terceirão", "Torcida"
  ];

  // Agrupa categorias para exibição em colunas
  const categoriasAgrupadas = [];
  for (let i = 0; i < categorias.length; i += 8) {
    categoriasAgrupadas.push(categorias.slice(i, i + 8));
  }

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white text-gray-800 shadow-md py-2' 
        : 'bg-transparent text-white py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/img/logo1.png" 
              alt="Logo" 
              className="h-10 w-auto"
            />
          </Link>

          {/* Menu principal */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium hover:text-red-600 transition-colors duration-200">
              Home
            </Link>

            {/* Menu Dropdown de Categorias */}
            <div className="relative group">
              <button 
                onClick={() => setShowCategories(!showCategories)} 
                className="flex items-center font-medium group-hover:text-red-600 transition-colors duration-200"
              >
                Categorias
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`h-4 w-4 ml-1 transition-transform ${showCategories ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {showCategories && (
                <div className="absolute top-full left-0 mt-2 w-[720px] bg-white rounded-lg shadow-xl z-50 border-t-2 border-red-600">
                  <div className="p-6">
                    <div className="flex justify-between">
                      {categoriasAgrupadas.map((grupo, idx) => (
                        <div key={idx} className="flex-1">
                          {grupo.map((categoria) => (
                            <Link 
                              key={categoria} 
                              to={`/categorias/${categoria.toLowerCase().replace(/ /g, "-")}`}
                              className="block py-1.5 px-2 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded transition-colors duration-200"
                              onClick={() => setShowCategories(false)}
                            >
                              {categoria}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 pt-4 border-t border-gray-200 flex justify-center">
                      <Link 
                        to="/categorias" 
                        className="inline-flex items-center text-red-600 hover:text-red-800 font-medium transition-colors duration-200"
                        onClick={() => setShowCategories(false)}
                      >
                        Ver todas as categorias
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link to="/sobre" className="font-medium hover:text-red-600 transition-colors duration-200">
              Sobre
            </Link>
            <Link to="/servicos" className="font-medium hover:text-red-600 transition-colors duration-200">
              Serviços
            </Link>
            <Link to="/contato" className="font-medium hover:text-red-600 transition-colors duration-200">
              Contato
            </Link>
            
            {/* Botão de busca */}
            <button className="text-gray-500 hover:text-red-600 transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>

          {/* Menu mobile */}
          <div className="md:hidden">
            <button 
              className="p-2 rounded-md outline-none focus:border-gray-400 focus:border"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Menu mobile dropdown */}
            {showMobileMenu && (
              <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200">
                <div className="px-2 pt-2 pb-3 space-y-1">
                  <Link 
                    to="/" 
                    className="block px-3 py-2 rounded-md text-gray-700 font-medium hover:bg-red-50 hover:text-red-600"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    Home
                  </Link>
                  <Link 
                    to="/categorias" 
                    className="block px-3 py-2 rounded-md text-gray-700 font-medium hover:bg-red-50 hover:text-red-600"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    Categorias
                  </Link>
                  <Link 
                    to="/sobre" 
                    className="block px-3 py-2 rounded-md text-gray-700 font-medium hover:bg-red-50 hover:text-red-600"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    Sobre
                  </Link>
                  <Link 
                    to="/servicos" 
                    className="block px-3 py-2 rounded-md text-gray-700 font-medium hover:bg-red-50 hover:text-red-600"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    Serviços
                  </Link>
                  <Link 
                    to="/contato" 
                    className="block px-3 py-2 rounded-md text-gray-700 font-medium hover:bg-red-50 hover:text-red-600"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    Contato
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;