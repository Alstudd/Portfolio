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
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  var mobileSettings = {
    dots: false,
    infinite: true,
    speed: 200,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  const images = [
    "hackanova2.0-1.jpg",
    "hackanova2.0-2.jpg",
  ];
  return (
    <div>
      <div className="lg:block hidden container z-20"> 
        <Slider {...laptopSettings}>
          {images.map((image, index) => (
            <div key={index} className="image p-2">
              <img
                className="rounded-xl"
                src={`/hackathons/${image}`}
                alt={`Image ${index + 1}`}
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="lg:hidden block container z-20 md:w-[600px] sm:w-[500px] w-[300px]"> 
        <Slider {...mobileSettings}>
          {images.map((image, index) => (
            <div key={index} className="image p-2">
              <img
                className="rounded-xl"
                src={`/hackathons/${image}`}
                alt={`Image ${index + 1}`}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
