import { motion } from "framer-motion";

function BusinessHero({ title, subtitle, image, highlights = [] }) {
  return (
    <section className="relative h-[85vh] min-h-[700px] overflow-hidden">
      {/* IMAGE */}
      <img
        src={image}
        alt={title}
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
        "
      />

      {/* OVERLAY */}
      <div
        className="
    absolute
    inset-0
    bg-gradient-to-r
    from-[#f8f6f2]/95
    via-[#f8f6f2]/80
    via-40%
    to-black/20
  "
      />

      <div
        className="
    absolute
    inset-0
    bg-gradient-to-t
    from-black/20
    via-transparent
    to-transparent
  "
      />

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container-custom">
          <motion.div
            className="max-w-4xl text-[#1a1a1a]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="uppercase tracking-[5px] text-primary text-sm md:text-base">
              Shradha Group
            </span>

            <h1
              className="
                text-5xl
                sm:text-6xl
                md:text-7xl
                lg:text-[5.5rem]
                leading-[1.05]
                mt-6
                mb-6
              "
            >
              {title}
            </h1>

            <p
              className="
                text-lg
                md:text-xl
                text-black/70
                max-w-2xl
                leading-relaxed
              "
            >
              {subtitle}
            </p>

            <div
              className="
    w-24
    h-1
    mt-8
    rounded-full
    bg-gradient-to-r
    from-primary
    to-yellow-300
  "
            />

            <div
              className="
    grid
    sm:grid-cols-3
    gap-4
    mt-10
    max-w-3xl
  "
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -6,
                    scale: 1.03,
                  }}
                  className="
        bg-white/75
        backdrop-blur-xl
        border
        border-white/60
        rounded-3xl
        px-5
        py-4
        shadow-[0_15px_50px_rgba(0,0,0,0.12)]
      "
                >
                  <p
                    className="
          text-sm
          font-medium
          text-black/80
        "
                  >
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default BusinessHero;
