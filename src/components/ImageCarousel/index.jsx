
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
          <img src="https://via.placeholder.com/800x400" alt="Imagem 1" className="w-full h-auto" />
        </div>
        <div className="p-4">
          <img src="https://via.placeholder.com/800x400" alt="Imagem 2" className="w-full h-auto" />
        </div>
        <div className="p-4">
          <img src="https://via.placeholder.com/800x400" alt="Imagem 3" className="w-full h-auto" />
        </div>
        <div className="p-4">
          <img src="https://via.placeholder.com/800x400" alt="Imagem 4" className="w-full h-auto" />
        </div>
      </Slider>
    </div>
  );
};

export default ImageCarousel;
