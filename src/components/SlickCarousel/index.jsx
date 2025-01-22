import Slider from 'react-slick';

const SlickCarousel = () => {
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
    <div className="fixed top-0 left-0 w-full z-50">
      <Slider {...settings}>
        <div className="p-4 bg-black text-white shadow-lg bg-opacity-75">
          Whatsapp : <a href="https://api.whatsapp.com/send?phone=5511955407230" target="_blank" className="underline"> 83 99418-6091</a>
        </div>
        <div className="p-4 bg-black text-white shadow-lg bg-opacity-75">
          PARCELE EM ATÉ 10X SEM JUROS
        </div>
        <div className="p-4 bg-black text-white shadow-lg bg-opacity-75">
          FRETE GRATIS A PARTIR DE 399,99
        </div>
        <div className="p-4 bg-black text-white shadow-lg bg-opacity-75">
          DESCONTO DE 7% NO PIX
        </div>
      </Slider>
    </div>
  );
};

export default SlickCarousel;
