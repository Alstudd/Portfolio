import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imageDetails from "@/data/imageDetails";

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
  return (
    <div>
      <div className="lg:block hidden container z-20"> 
        <Slider {...laptopSettings}>
          {imageDetails.map((image, index) => (
            <div key={index} className="image p-2">
              <img
                className="object-cover rounded-xl h-[500px] w-[600px]"
                src={`/hackathons/${image}`}
                alt={`Image ${index + 1}`}
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="lg:hidden block container z-20 w-[340px] sm:w-fit"> 
        <Slider {...mobileSettings}>
          {imageDetails.map((image, index) => (
            <div key={index} className="image p-2">
              <img
                className="rounded-xl object-cover h-[340px] sm:h-[500px] w-full"
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
