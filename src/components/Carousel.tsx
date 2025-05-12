import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import f14 from "../assets/boeing737.jpg";
import f22 from "../assets/dash8.jpg";
import mirage from "../assets/tristar.jpg";

const Carousel = () => {
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
    <div style={{ maxWidth: '800px', margin: '2rem auto' }}>
      <Slider {...settings}>
        <div>
          <img src={f14} alt="Boeing 737 Aeroperú - un clásico- Escala 1:100" />
        </div>
        <div>
          <img src={f22} alt="DHC-8 LCP - Detalles increíbles - Escala 1:100" />
        </div>
        <div>
          <img src={mirage} alt="Lockheed Tristar FAucett - Edición especial - Escala 1:100" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;