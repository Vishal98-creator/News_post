import React from "react";
import Slider from "react-slick";
import CarBGImg from "../../assets/images/musicGirl.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ImageSlider() {
  const ii = [CarBGImg, CarBGImg, CarBGImg, CarBGImg, CarBGImg];

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div style={{ paddingTop: '10px', width: '100%' }}>
      <Slider {...settings}>
        {ii.map((img, i) => (
          <div key={i}>
            <div style={{ borderRadius: "12px" }}>
              <img
                src={img}
                alt={`img-${i}`}
                loading="lazy"
                style={{ borderRadius: "12px", width: '100%', height: 'auto' }}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
