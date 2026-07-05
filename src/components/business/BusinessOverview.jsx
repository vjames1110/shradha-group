function BusinessOverview({
  heading,
  description,
}) {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-white">
      <div className="absolute -right-32 top-0 h-80 w-80 rounded-full bg-blue-100/60 blur-3xl" />
      <div className="container-custom">

        <div className="relative max-w-5xl border-l-2 border-primary/30 pl-6 md:pl-10">
          <span className="uppercase tracking-[0.22em] text-primary text-xs font-semibold">
            Business Overview
          </span>

          <h2
            className="
              text-4xl
              md:text-5xl lg:text-6xl
              mt-4
              mb-8
              leading-tight
            "
          >
            {heading}
          </h2>

          <p
            className="
              text-lg
              text-slate-600 max-w-4xl
              leading-relaxed
            "
          >
            {description}
          </p>
        </div>

      </div>
    </section>
  );
}

export default BusinessOverview;
