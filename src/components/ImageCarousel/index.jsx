
import Slider from 'react-slick';

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="relative z-50">
      <Slider {...settings}>
        <div className="p-4">
          <img src="public/img/ciclismo_verde.png" alt="Imagem 1" className="elative m-4 w-[230px] h-[324px] cursor-pointer group" />
        </div>
        <div className="p-4">
          <img src="public/img/ciclismo_azul.png" alt="Imagem 2" className="elative m-4 w-[230px] h-[324px] cursor-pointer group" />
        </div>
        <div className="p-4">
          <img src="public/img/ciclismo_verde.png" alt="Imagem 3" className="elative m-4 w-[230px] h-[324px] cursor-pointer group" />
        </div>
        <div className="p-4">
          <img src="public/img/ciclismo_azul.png" alt="Imagem 4" className="elative m-4 w-[230px] h-[324px] cursor-pointer group" />
        </div>
      </Slider>
    </div>
  );
};

export default ImageCarousel;
