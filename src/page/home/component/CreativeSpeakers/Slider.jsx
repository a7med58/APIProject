import React from "react";
import { Autoplay } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import CreativeSpeakers from "../../../../design-system/component/CreativeSpeakers";
import dataSpeaker from "../../../../design-system/component/CreativeSpeakers/DataSpeaker";

export default function Slider() {
  return (
    <Swiper
      autoplay={{
        delay: 2500,
        disableOnInteraction: true,
      }}
      modules={[Autoplay]}
      spaceBetween={50}
      slidesPerView={4}
    >
      {dataSpeaker.map((item) => {
        return (
          <SwiperSlide key={item.id}>
            <CreativeSpeakers
              companyname={item.companyname}
              nationality={item.nationality}
              alt={item.alt}
              img={item.img}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
