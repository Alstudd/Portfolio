import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imageDetails from "@/data/imageDetails";
import Image from "next/image";

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
    pauseOnHover: false,
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
    pauseOnHover: false,
  };
  return (
    <div>
      <div className="lg:block hidden container z-20">
        <Slider {...laptopSettings}>
          {imageDetails.map((image, index) => (
            <div key={index} className="image p-2">
              <Image
                width={600}
                height={500}
                className="object-cover rounded-xl h-[500px] w-[600px]"
                src={`/hackathons/${image}`}
                alt={`Image ${index + 1}`}
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="lg:hidden block container z-20 w-[300px] sm:w-fit">
        <Slider {...mobileSettings}>
          {imageDetails.map((image, index) => (
            <div key={index} className="image p-2">
              <Image
                width={300}
                height={300}
                className="rounded-xl object-cover h-[300px] sm:h-[500px] w-full"
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
