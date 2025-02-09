import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const ProductCarousel = () => {
  const shirts = [
    {
      name: "Camisa Universitária Farmácia - Drogaria",
      price: "R$ 59,90",
      discountPrice: "R$ 56,91",
      discount: "5% no PIX",
      image: "https://cdn.awsli.com.br/2500x2500/679/679489/produto/62548680/13-186fd36c6d.jpg", // Substitua por imagens reais
    },
    {
      name: "Camisa Universitária Fisioterapia - Meio Sonho",
      price: "R$ 59,90",
      discountPrice: "R$ 56,91",
      discount: "5% no PIX",
      image: "https://cdn.awsli.com.br/2500x2500/679/679489/produto/62548680/13-186fd36c6d.jpg",
    },
    {
      name: "Camisa Universitária Biomedicina - Bioanálise",
      price: "R$ 59,90",
      discountPrice: "R$ 56,91",
      discount: "5% no PIX",
      image: "https://cdn.awsli.com.br/2500x2500/679/679489/produto/62548680/13-186fd36c6d.jpg",
    },
    {
      name: "Camisa Universitária Pedagogia - Princípios",
      price: "R$ 59,90",
      discountPrice: "R$ 56,91",
      discount: "5% no PIX",
      image: "https://cdn.awsli.com.br/2500x2500/679/679489/produto/62548680/13-186fd36c6d.jpg",
    },
    {
      name: "Camisa Universitária Odontologia - Dentada Violenta",
      price: "R$ 59,90",
      discountPrice: "R$ 56,91",
      discount: "5% no PIX",
      image: "https://via.placeholder.com/200",
    },
    {
      name: "Camisa Universitária Medicina Veterinária - Já dizia o Ditado",
      price: "R$ 59,90",
      discountPrice: "R$ 56,91",
      discount: "5% no PIX",
      image: "https://via.placeholder.com/200",
    },
  ];

  return (
    <div className="py-12 bg-gray-100">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
        Vetores de Camisas Universitárias
      </h2>
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
        className="max-w-6xl mx-auto"
      >
        {shirts.map((shirt, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden text-center p-4">
              {/* Imagem da Camisa */}
              <img src={shirt.image} alt={shirt.name} className="w-full h-40 object-cover mb-4" />
              {/* Nome da Camisa */}
              <h3 className="text-lg font-bold text-gray-800 mb-2">{shirt.name}</h3>
              {/* Preço Original */}
              <p className="text-sm text-gray-500 line-through mb-2">{shirt.price}</p>
              {/* Preço com Desconto */}
              <p className="text-xl font-bold text-red-600 mb-2">{shirt.discountPrice}</p>
              {/* Desconto */}
              <p className="text-sm text-green-600 font-bold mb-4">{shirt.discount}</p>
              {/* Botão de Compra */}
              <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors">
                COMPRAR
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductCarousel;