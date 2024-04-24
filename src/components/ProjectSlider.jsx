import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { projectSliderSettings } from "../data/projectSliderSettings";
import projectDetails from "../data/projectDetails";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function ProjectSlider() {
  return (
    <div className="relative z-[20]">
      <Swiper {...projectSliderSettings}>
        <SliderButtons />
        {projectDetails.map((step, i) => (
          <SwiperSlide key={i}>
            <div className="opp-card mx-2 my-10 h-[32rem] hover:scale-[1.025] hover:cursor-pointer px-[1rem] pb-[1rem] pt-[1.3rem] p-4 sm:p-6 md:p-8 flex flex-col gap-4 rounded-lg border border-solid border-blue-700 text-center cursor-pointer group hover:border-blue-400 duration-200">
              <a
                href={step.href}
                target="_blank"
                className="flex flex-col gap-4"
              >
                <div className="bg-slate-950 grid place-items-center px-4 text-5xl md:text-6xl -mt-10 sm:-mt-12 md:-mt-14 lg:-mt-16 mx-auto duration-200">
                  {step.icon}
                </div>
                {!step.live ? (
                  <img className="rounded-md" src={step.mainImg} alt="" />
                ) : (
                  <a href={step.live} target="_blank">
                    <img className="rounded-md" src={step.mainImg} alt="" />
                  </a>
                )}
                <div className="flex gap-3 justify-center items-center">
                  {step.devfolio && (
                    <a href={step.devfolio} target="_blank" rel="noopener noreferrer">
                      <img className="w-10 h-10" src="/devfolio.png" alt="" />
                    </a>
                  )}
                  <h3 className="font-medium text-xl sm:text-2xl md:text-3xl">
                    {step.name}
                  </h3>
                </div>
                <p>
                  {step.head} {step.type}
                  <strong className="text-blue-400">
                    {" "}
                    {step.techStack}
                  </strong>{" "}
                  {step.content}
                </p>
              </a>
              <div className="flex-1 flex justify-betweeen gap-4 items-end">
                <div className="ml-auto cursor-pointer hover:text-slate-950 duration-200 relative after:absolute after:top-0 after:h-0 after:right-full after:bg-white after:w-full after:h-full after:duration-200 hover:after:translate-x-full after:z-[-1] overflow-hidden">
                  {step.live && (
                    <a
                      href={step.live}
                      target="_blank"
                      className="flex gap-2 items-center"
                    >
                      View Live <FaArrowRight />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flex justify-center gap-[1rem] pt-4">
      <button
        className="Welcome-box-2 text-2xl py-2 px-3 text-blue-600 border-none bg-gray-100 cursor-pointer"
        onClick={() => swiper.slidePrev()}
      >
        <FaArrowLeft />
      </button>
      <button
        className="Welcome-box-2 text-2xl py-2 px-3 text-blue-600 border-none bg-gray-100 cursor-pointer"
        onClick={() => swiper.slideNext()}
      >
        <FaArrowRight />
      </button>
    </div>
  );
};
