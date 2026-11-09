import { useState } from "react";
import { GrPrevious, GrNext } from "react-icons/gr";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const NavSlider = ({ images, interval = 3000 }) => {
  const [swiper, setSwiper] = useState(null);

  return (
    <div className="relative w-full overflow-hidden bg-ink-900">
      <Swiper
        slidesPerView={1}
        onSwiper={setSwiper}
        modules={[Autoplay]}
        loop
        autoplay={{ delay: interval, disableOnInteraction: false }}
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <img src={src} alt="" className="block w-full h-140 object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* gradient overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-linear-to-b from-ink-900/70 via-transparent to-ink-900/20" />

      <button
        onClick={() => swiper?.slidePrev()}
        aria-label="Previous slide"
        className="absolute top-1/2 left-4 z-20 -translate-y-1/2 text-white text-2xl hidden md:block"
      >
        <GrPrevious />
      </button>
      <button
        onClick={() => swiper?.slideNext()}
        aria-label="Next slide"
        className="absolute top-1/2 right-4 z-20 -translate-y-1/2 text-white text-2xl hidden md:block"
      >
        <GrNext />
      </button>
    </div>
  );
};

export default NavSlider;
