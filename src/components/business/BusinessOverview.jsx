function BusinessOverview({
  heading,
  description,
}) {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">

        <div className="max-w-4xl">
          <span className="uppercase tracking-[4px] text-primary text-sm">
            Business Overview
          </span>

          <h2
            className="
              text-4xl
              md:text-5xl
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
              text-muted
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