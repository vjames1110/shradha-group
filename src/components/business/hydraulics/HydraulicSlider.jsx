import { Swiper, SwiperSlide } from "swiper/react";

import {
  Navigation,
  Pagination,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function HydraulicSlider({ items }) {
  return (
    <Swiper
      modules={[
        Navigation,
        Pagination,
        Autoplay,
      ]}
      navigation
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 4000,
      }}
      loop
      className="rounded-[28px] overflow-hidden"
    >
      {items.map((slide, index) => (
        <SwiperSlide key={index}>
          <div>
            <img
              src={slide.image}
              alt={slide.title}
              className="
                w-full
                h-[400px]
                object-cover
              "
            />

            <div className="p-8">
              <h3 className="text-3xl mb-4">
                {slide.title}
              </h3>

              {slide.description && (
                <p className="text-slate-600 leading-relaxed">
                  {slide.description}
                </p>
              )}

              {slide.applications && (
                <div className="mt-8 flex flex-wrap gap-3">
                  {slide.applications.map(
                    (application, idx) => (
                      <span
                        key={idx}
                        className="
                          px-4
                          py-2
                          rounded-full
                          bg-blue-50
                          text-blue-700
                        "
                      >
                        {application}
                      </span>
                    )
                  )}
                </div>
              )}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default HydraulicSlider;