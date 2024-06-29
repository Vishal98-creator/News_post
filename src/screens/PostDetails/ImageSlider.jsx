import React from "react";
import Slider from "react-slick";
import CarBGImg from "../../assets/images/musicGirl.png";

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
    <div className="view-post-slider-conteainer" style={{paddingTop:'10px'}}>
      <Slider {...settings}>
        {ii.map((img, i) => {
          return (
            <div key={i}>
              <div style={{ width: "100%", borderRadius: "12px" }}>
                <img
                  src={img}
                  alt={`img-${i}`}
                  loading="lazy"
                  width={"100%"}
                  height={'100%'}
                  style={{ borderRadius: "12px" }}
                />
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
