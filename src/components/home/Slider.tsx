'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

const Slider = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-white text-3xl text-center">Our Users</div>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={2}
        loop={true}
        speed={3000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 8
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          1440: {
            slidesPerView: 5,
            spaceBetween: 30
          }
        }}
        className="my-10"
      >
        {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
          <SwiperSlide key={num}>
            <div className="bg-white border rounded-md p-2 flex items-center justify-center" style={{ width: '140px', height: '75px' }}>
              <img
                src={`/images/slide${num}.png`}
                alt={`Logo ${num}`}
                style={{ width: '130px', height: '65px', objectFit: 'contain' }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;