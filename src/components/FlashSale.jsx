import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { GrNext, GrPrevious } from "react-icons/gr";
import "swiper/css";

const FlashSale = ({ item }) => {
  const [swiper, setSwiper] = useState(null);

  return (
    <>
      <div className="w-full h-fit flex justify-center items-center mt-8 flex-col ">
        <div className="w-[95%] bg-linear-to-r from-ink-900 via-ink-700 to-ink-600 flex flex-col gap-4 md:flex-row md:gap-0 h-fit pt-5 pb-5 ">
          <div className="md:w-[50%] w-full">
            <h1 className="font-bold text-white text-2xl md:text-4xl pl-5">
              Flash Sale
            </h1>
            <p className=" text-white w-[90%] pl-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="md:w-[50%] w-full flex justify-center items-center">
            <div className="flex gap-5 justify-center items-center">
              <div className="w-12 h-12 bg-white shadow shadow-black flex justify-center items-center text-2xl rounded-[10px]">
                00
              </div>
              <div className="w-12 h-12 bg-white shadow shadow-black flex justify-center items-center text-2xl rounded-[10px]">
                00
              </div>
              <div className="w-12 h-12 bg-white shadow shadow-black flex justify-center items-center text-2xl rounded-[10px]">
                00
              </div>
            </div>
          </div>
        </div>

        {/* product grid */}
        <div className="relative w-[95%] bg-linear-to-r from-ink-900 via-ink-700 to-ink-600 h-fit py-6 px-10 md:px-14">
          {/* left button (center of grid) */}
          <button
            onClick={() => swiper?.slidePrev()}
            aria-label="Previous"
            className="absolute left-1 md:left-3 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full w-9 h-9 md:w-12 md:h-12 md:flex justify-center items-center text-lg md:text-2xl shadow shadow-black hidden"
          >
            <GrPrevious />
          </button>

          <Swiper
            onSwiper={setSwiper}
            modules={[Autoplay]}
            loop
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
          >
            {item.map((item) => {
              const discount = Math.round(
                ((item.price - item.salePrice) / item.price) * 100,
              );
              return (
                <SwiperSlide key={item.id}>
                  <div className="bg-white rounded-lg overflow-hidden">
                    <div className="relative">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-64 object-cover"
                      />
                      <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                        -{discount}%
                      </span>
                    </div>
                    <div className="p-3">
                      <h3 className="text-base md:text-lg font-bold text-ink-900">
                        {item.title}
                      </h3>
                      <div className="flex items-baseline gap-2 mt-1">
                        <span className="text-lg font-bold text-red-600">
                          Rs. {item.salePrice.toLocaleString()}
                        </span>
                        <span className="text-sm text-gray-400 line-through">
                          Rs. {item.price.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* right button (center of grid) */}
          <button
            onClick={() => swiper?.slideNext()}
            aria-label="Next"
            className="absolute right-1 md:right-3 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full w-9 h-9 md:w-12 md:h-12  justify-center items-center text-lg md:text-2xl shadow shadow-black hidden md:flex"
          >
            <GrNext />
          </button>
        </div>
      </div>
    </>
  );
};

export default FlashSale;
