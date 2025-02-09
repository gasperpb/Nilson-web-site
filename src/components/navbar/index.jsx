const Navbar = () => {
  return (
    <nav className="fixed top-16 left-0 w-full bg-gradient-to-r from-[#e64529] via-[#ec5839] via-[#ee5d5d] via-[#f97d59] to-[#d3281c] text-white shadow-lg z-40 bg-opacity-75">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-lg font-bold"></div>
        <img src="logo.jpg" alt="Logo" className="h-8" />
        <ul className="flex space-x-4">
          <li><a href="#home" className="hover:text-gray-300">Home</a></li>
          <li><a href="#categories" className="hover:text-gray-300">Categorias</a></li>
          <li><a href="#about" className="hover:text-gray-300">Sobre</a></li>
          <li><a href="#services" className="hover:text-gray-300">Serviços</a></li>
          <li><a href="#contact" className="hover:text-gray-300">Contato</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;                                 333