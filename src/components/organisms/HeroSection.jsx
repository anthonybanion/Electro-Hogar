import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const HeroSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const images = [
    "https://http2.mlstatic.com/D_NQ_NP_632305-MLA70092755552_062023-OO.webp",
    "https://http2.mlstatic.com/D_NQ_NP_716066-MLA54292814332_032023-OO.webp",
    "https://http2.mlstatic.com/D_NQ_NP_912694-MLA69494416737_052023-OO.webp",
  ];

  return (
    <section className="w-full overflow-hidden px-2 sm:px-4">
  <div className="relative w-full max-w-screen-xl mx-auto rounded-lg overflow-hidden aspect-[16/5]">
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="w-full h-full"
    >
      {images.map((src, idx) => (
        <SwiperSlide key={idx}>
          <img
            src={src}
            alt={`Slide ${idx}`}
            className="w-full h-full object-contain"
            onLoad={() => setImageLoaded(true)}
          />
        </SwiperSlide>
      ))}
    </Swiper>

    {imageLoaded}
  </div>
</section>

  );
};

export default HeroSection;


