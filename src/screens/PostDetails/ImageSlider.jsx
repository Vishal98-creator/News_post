import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ImageSlider({images}) {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  console.log('images: ', images);

  return (
    <div style={{ paddingTop: '10px', width: '100%' }}>
      <Slider {...settings}>
        {images?.map((img, i) => (
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
