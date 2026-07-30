import { motion } from "framer-motion";

function BusinessHero({ title, subtitle, image, highlights = [] }) {
  return (
    <section className="relative h-[88svh] min-h-[620px] overflow-hidden bg-slate-950">
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
          brightness-[1.1]
          contrast-[1.08]
          saturate-[1.12]
        "
      />

      {/* OVERLAY */}
      <div
        className="
    absolute
    inset-0
    bg-linear-to-r
    from-[#071326]/64
    via-[#0b2850]/30
    via-48%
    to-transparent
  "
      />

      <div
        className="
    absolute
    inset-0
    bg-linear-to-t
    from-black/12
    via-transparent
    to-transparent
  "
      />

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container-custom">
          <motion.div
            className="max-w-4xl text-white pt-24"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <h1
              className="
                max-w-xs
                sm:max-w-full
                break-words
                text-[2.1rem]
                sm:text-6xl
                md:text-7xl
                lg:text-[5rem]
                leading-[1.08]
                sm:leading-[1.05]
                mt-6
                mb-6
                drop-shadow-[0_4px_24px_rgba(0,0,0,0.48)]
              "
            >
              {title}
            </h1>

            <p
              className="
                text-lg
                md:text-xl
                text-white/78
                max-w-2xl
                leading-relaxed
                drop-shadow-[0_3px_16px_rgba(0,0,0,0.44)]
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
    bg-linear-to-r
    from-cyan-400
    to-blue-500
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
        bg-white/10
        backdrop-blur-xl
        border
        border-white/20
        rounded-2xl
        px-5
        py-4
        shadow-[0_15px_50px_rgba(0,0,0,0.12)]
      "
                >
                  <p
                    className="
          text-sm
          font-medium
          text-white/90
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
