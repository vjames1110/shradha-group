function BusinessHero({
  title,
  subtitle,
  image,
}) {
  return (
    <section className="relative h-[70vh] min-h-[600px] overflow-hidden">

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
      <div className="absolute inset-0 bg-black/60" />

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container-custom">

          <div className="max-w-4xl text-white">

            <span className="uppercase tracking-[5px] text-primary text-sm md:text-base">
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
              {title}
            </h1>

            <p
              className="
                text-lg
                md:text-xl
                text-white/80
                max-w-2xl
                leading-relaxed
              "
            >
              {subtitle}
            </p>

          </div>

        </div>
      </div>

    </section>
  );
}

export default BusinessHero;