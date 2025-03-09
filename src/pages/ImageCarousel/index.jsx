import{ useRef } from 'react';

const ImageCarousel = () => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -280, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 280, behavior: 'smooth' });
    }
  };

  const images = [
    {
      src: "/img/ciclismo_verde.png",
      alt: "Ciclismo Verde",
      name: "Camisa Ciclismo Verde",
      oldPrice: "R$ 89,90",
      price: "R$ 79,90"
    },
    {
      src: "/img/ciclismo_azul.png",
      alt: "Ciclismo Azul",
      name: "Camisa Ciclismo Azul",
      oldPrice: "R$ 89,90",
      price: "R$ 79,90"
    },
    {
      src: "/img/ciclismo_verde.png",
      alt: "Ciclismo Verde Especial",
      name: "Camisa Ciclismo Verde Especial",
      oldPrice: "R$ 99,90",
      price: "R$ 89,90"
    },
    {
      src: "/img/ciclismo_azul.png",
      alt: "Ciclismo Azul Premium",
      name: "Camisa Ciclismo Azul Premium",
      oldPrice: "R$ 99,90",
      price: "R$ 89,90"
    },
    {
      src: "/img/ciclismo_verde.png",
      alt: "Ciclismo Verde Pro",
      name: "Camisa Ciclismo Verde Pro",
      oldPrice: "R$ 109,90",
      price: "R$ 99,90"
    }
  ];

  return (
    <div className="max-w-[75vw] mx-auto py-8">
      {/* Título do Carrossel */}
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Produtos Populares
      </h2>
      
      {/* Carrossel */}
      <div 
        ref={carouselRef} 
        className="flex overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {images.map((image, index) => (
          <div 
            key={index} 
            className="flex-none w-[280px] mx-2 bg-white rounded-2xl shadow-md p-4 transition-transform duration-300 hover:-translate-y-1 snap-center"
          >
            {/* Imagem */}
            <div className="rounded-lg overflow-hidden">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-48 object-cover"
              />
            </div>
            
            {/* Informações do produto */}
            <div className="flex flex-col justify-between h-36 mt-2">
              <h3 className="text-xl font-bold text-[#e64529] text-center my-2">
                {image.name}
              </h3>
              <span className="text-sm text-gray-500 line-through text-center flex-grow">
                {image.oldPrice}
              </span>
              <div className="bg-[#e64529] text-white py-2 px-4 rounded-lg text-center text-lg font-bold mt-2">
                {image.price}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Botões de navegação */}
      <div className="flex justify-center mt-4 space-x-4">
        <button 
          onClick={scrollLeft}
          className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors duration-300"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6 text-[#e64529]" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M15 19l-7-7 7-7" 
            />
          </svg>
        </button>
        <button 
          onClick={scrollRight}
          className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors duration-300"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6 text-[#e64529]" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5l7 7-7 7" 
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
