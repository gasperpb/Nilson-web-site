import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [showCategories, setShowCategories] = useState(false);

  const categorias = [
    "Abadás", "Agro", "Animes", "Artes Marciais", "Católica", 
    "Ciclismo", "Desenho Animado", "Dia das Mães", "Dia dos Pais", 
    "Divertidas", "Festa Junina", "Filmes e Séries", "Funko Pop", 
    "Futebol", "Game", "Infantil", "Jogos Internos", "Mockups", 
    "Moldes", "Motocross", "Música", "Natal", "Original Style", 
    "Páscoa", "Pesca", "Quebrada", "Religião", "Super Heróis", 
    "Templates", "Terceirão", "Torcida"
  ];

  return (
    <nav className="fixed top-16 left-0 w-full bg-gradient-to-r from-[#e64529] via-[#ec5839] via-[#ee5d5d] via-[#f97d59] to-[#d3281c] text-white shadow-lg z-40 bg-opacity-75">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-lg font-bold"></div>
        <img src="logo.jpg" alt="Logo" className="h-8" />
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
          <li className="relative">
            <button 
              onClick={() => setShowCategories(!showCategories)} 
              className="hover:text-gray-300 flex items-center"
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
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-1 p-3">
                  {categorias.map((categoria) => (
                    <Link 
                      key={categoria} 
                      to={`/categorias/${categoria.toLowerCase().replace(/ /g, "-")}`}
                      className="text-gray-800 hover:bg-red-100 p-2 rounded text-sm"
                      onClick={() => setShowCategories(false)}
                    >
                      {categoria}
                    </Link>
                  ))}
                </div>
                <div className="p-2 border-t">
                  <Link 
                    to="/categorias" 
                    className="block text-center text-red-600 hover:text-red-800 font-medium"
                    onClick={() => setShowCategories(false)}
                  >
                    Ver todas as categorias
                  </Link>
                </div>
              </div>
            )}
          </li>
          <li><Link to="/sobre" className="hover:text-gray-300">Sobre</Link></li>
          <li><Link to="/servicos" className="hover:text-gray-300">Serviços</Link></li>
          <li><Link to="/contato" className="hover:text-gray-300">Contato</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;