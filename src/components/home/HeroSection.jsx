import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, EffectFade } from "swiper/modules";

import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/effect-fade";

import heroSlides from "../../data/heroSlides";

function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        loop={true}
        speed={1200}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        className="h-full"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-screen">
              {/* BACKGROUND IMAGE */}
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-white/80" />

              {/* CONTENT */}
              <div className="relative z-10 h-full flex items-center">
                <div className="container-custom">
                  <motion.div
                    className="max-w-4xl text-black/90"
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <span className="uppercase tracking-[5px] text-black/90 text-sm md:text-base">
                      Shradha Group
                    </span>

                    <h1
                      className="
                        text-5xl
                        sm:text-6xl
                        md:text-7xl
                        lg:text-8xl
                        leading-tight
                        mt-6
                        mb-6
                      "
                    >
                      {slide.title}
                    </h1>

                    <p
                      className="
                        text-lg
                        md:text-xl
                        text-black/90
                        max-w-2xl
                        leading-relaxed
                      "
                    >
                      {slide.subtitle}
                    </p>

                    {/* CTA */}
                    <div className="flex flex-wrap gap-4 mt-10">
                      <button
                        className="
                          px-8
                          py-4
                          bg-primary
                          text-black
                          font-medium
                          rounded-full
                          hover:scale-105
                          transition-all
                        "
                      >
                        Explore Services
                      </button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default HeroSection;
