import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function MyImagesStack() {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 200,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: false,
  };
  return (
    <div className="container z-20 w-[340px] sm:w-fit lg:w-[600px]">
      <Slider {...settings}>
        {[...Array(13)].map((image, index) => (
          <div key={index} className="image p-2">
            <Image
              width={340}
              height={340}
              className="object-cover rounded-xl h-[340px] sm:h-[500px] w-full"
              src={`/images/pic${index + 1}.jpg`}
              alt={`Image ${index + 1}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
