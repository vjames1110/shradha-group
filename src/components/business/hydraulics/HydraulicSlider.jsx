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
      className="engineering-modal-slider overflow-hidden"
    >
      {items.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="grid min-h-[500px] md:grid-cols-[0.9fr_1.1fr]">
            <div className="h-64 overflow-hidden md:h-auto">
              <img src={slide.image} alt={slide.title} className="h-full w-full object-cover" />
            </div>

            <div className="p-7 md:p-10">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Hydraulic Solution</span>
              <h3 className="mt-4 text-2xl md:text-3xl mb-4 pr-8">
                {slide.title}
              </h3>

              {slide.description && (
                <p className="text-slate-600 leading-relaxed">
                  {slide.description}
                </p>
              )}

              {slide.applications && (
                <div className="mt-8 space-y-3">
                  {slide.applications.map(
                    (application, idx) => (
                      <div
                        key={idx}
                        className="
                          flex items-center gap-3 text-sm text-slate-700
                        "
                      >
                        <span className="h-2 w-2 rounded-full bg-primary" />{application}
                      </div>
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
