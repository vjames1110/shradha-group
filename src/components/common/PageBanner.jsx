import { motion } from "framer-motion";

function PageBanner({ 
  title, 
  subtitle, 
  backgroundImage = null,
  height = "h-[500px]",
}) {
  return (
    <section className={`relative ${height} overflow-hidden flex items-center`}>
      {/* Background Image */}
      {backgroundImage && (
        <img
          src={backgroundImage}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {/* Overlay Gradient */}
      <div
        className="
          absolute
          inset-0
          bg-linear-to-r
          from-[#0f172a]/85
          via-[#1e3a8a]/70
          to-secondary/20
        "
      />

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="container-custom">
          <motion.div
            className="max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1
              className="
                text-white
                text-5xl
                sm:text-6xl
                md:text-7xl
                lg:text-[5.5rem]
                leading-[1.05]
                mb-6
                font-bold
              "
            >
              {title}
            </h1>

            {subtitle && (
              <p
                className="
                  text-white/85
                  text-lg
                  md:text-xl
                  leading-relaxed
                  max-w-3xl
                "
              >
                {subtitle}
              </p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default PageBanner;
