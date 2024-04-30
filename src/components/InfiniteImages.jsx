import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function InfiniteImages() {
  var laptopSettings = {
    dots: false,
    infinite: true,
    speed: 200,
    autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    // autoplaySpeed: 2000,
    cssEase: "linear",
  };
  var mobileSettings = {
    dots: false,
    infinite: true,
    speed: 200,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
  };
  const images = [
    "ethershare.png",
    "financify.png",
    "optipick.png",
    "questify.png",
    "sarthaki.png",
    "ethershare.png",
  ];
  return (
    <div>
      <div className="sm:hidden block container z-20">
        <Slider {...mobileSettings}>
          {images.map((image, index) => (
            <div key={index} className="image p-2">
              <img
                className="rounded-xl"
                src={`/projects/${image}`}
                alt={`Image ${index + 1}`}
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="sm:block hidden container z-20">
        <Slider {...laptopSettings}>
          {images.map((image, index) => (
            <div key={index} className="image p-2">
              <img
                className="rounded-xl"
                src={`/projects/${image}`}
                alt={`Image ${index + 1}`}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
