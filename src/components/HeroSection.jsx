import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-cards";
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper/modules"; // Import Autoplay module
import Sdata from "./Slider/slider";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center xl:h-[100vh]  h-[80dvh]" >
      <Swiper
        cssMode={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Add autoplay configuration
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]} // Add Autoplay module
        className="mySwiper"
      >
        {Sdata.map((data) => (
          <SwiperSlide key={data.id}>
            <div className=" grid md:grid-cols-3 w-full items-center grid-cols-1">
              <div className="col-span-2">
                <h1 className="xl:text-[5rem] md:text-[3rem] lg:text-[3rem] text-5rem font-bold container">{data.title}</h1>
              </div>
              <div className="flex flex-col items-center justify-center">
              <img src={data.cover} alt={data.title} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;
