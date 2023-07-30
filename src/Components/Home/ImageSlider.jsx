import "./ImageSlider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {

  const images = [
    "https://skybuybd.com/_next/static/media/banner1.5083d11c.jpg",
    "https://skybuybd.com/_next/static/media/appbanner.547a82f7.jpg",
    "https://skybuybd.com/_next/static/media/shipping_charge_banner.39a7d489.jpg",
    "https://skybuybd.com/_next/static/media/banner2.be864aa1.jpg",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div>
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
    </div>
  );
};

export default ImageSlider;
