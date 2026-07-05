import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/effect-fade";

import heroSlides from "../../data/heroSlides";

function HeroSection() {
  const navigate = useNavigate();
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        loop={true}
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="h-full"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-screen">
              {/* VIDEO */}
              <video
                autoPlay
                muted
                loop
                playsInline
                className="
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-cover
                  brightness-[1.08]
                  contrast-[1.15]
                  saturate-[1.2]
                "
              >
                <source src={slide.video} type="video/mp4" />
              </video>

              {/* PRIMARY OVERLAY */}
              <div
                className="
                  absolute
                  inset-0
                  bg-linear-to-r
                  from-[#0f172a]/65
                  via-[#1e3a8a]/40
                  to-secondary/20
                "
              />

              {/* GLOW LAYER */}
              <div
                className="
                  absolute
                  inset-0
                  bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.35),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(124,58,237,0.30),transparent_40%)]
                "
              />

              {/* CONTENT */}
              <div className="relative z-10 h-full flex items-center">
                <div className="container-custom">
                  <motion.div
                    className="max-w-5xl"
                    initial={{
                      opacity: 0,
                      y: 40,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 1,
                    }}
                  >
                    {/* BADGE */}

                    {/* HEADING */}
                    <motion.h1
                      animate={{
                        y: [0, -8, 0],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="
                        text-white
                        text-5xl
                        sm:text-6xl
                        md:text-7xl
                        lg:text-[5.5rem]
                        leading-[1.05]
                        mb-8
                        max-w-5xl
                      "
                    >
                      {slide.title}
                    </motion.h1>

                    {/* SUBTITLE */}
                    <p
                      className="
                        text-white/85
                        text-lg
                        md:text-xl
                        leading-relaxed
                        max-w-3xl
                      "
                    >
                      {slide.subtitle}
                    </p>

                    {/* CTA */}
                    <div
                      className="
                          flex
                          flex-col
                          sm:flex-row
                          gap-4
                          mt-12
                          "
                    >
                      <button
                        onClick={() =>
                          document.getElementById("services")?.scrollIntoView({
                            behavior: "smooth",
                          })
                        }
                        className="
                          w-full
                          sm:w-auto
                          px-8
                          py-4
                          rounded-full
                         text-white
                          font-medium
                          bg-linear-to-r
                         from-blue-600
                         via-blue-500
                         to-violet-600
                          hover:scale-105
                          hover:shadow-[0_15px_50px_rgba(59,130,246,0.35)]
                          transition-all
                          duration-300
                        "
                      >
                        Explore Services
                      </button>

                      <button
                        onClick={() => navigate("/contact")}
                        className="
                          w-full
                          sm:w-auto
                          px-8
                          py-4
                          rounded-full
                          border
                         border-white/20
                         bg-white/10
                          backdrop-blur-xl
                         text-white
                         hover:bg-white/20
                          transition-all
                          duration-300
                        "
                      >
                        Contact Us
                      </button>
                    </div>

                    {/* BOTTOM ACCENT */}
                    <div
                      className="cultu
                        mt-16
                        w-32
                        h-1
                        rounded-full
                        bg-linear-to-r
                        from-blue-500
                        via-violet-500
                        to-purple-500
                      "
                    />
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
