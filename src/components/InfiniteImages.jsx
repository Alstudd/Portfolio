import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function InfiniteImages() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 200,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // arrows: false,
  };
  const images = ["ethershare.png", "financify.png", "optipick.png", "questify.png", "sarthaki.png", "ethershare.png"];
  return (
    <div className="container z-20">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="image">
            <img src={`/projects/${image}`} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
