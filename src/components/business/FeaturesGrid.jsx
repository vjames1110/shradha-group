function FeaturesGrid({ features }) {
  return (
    <section className="pb-32 bg-white">
      <div className="container-custom">

        <div
          className="
            grid
            sm:grid-cols-2
            lg:grid-cols-3
            gap-6
          "
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="
                bg-[#f8f6f2]
                rounded-[28px]
                p-8
                border
                border-black/5
              "
            >

              <h3 className="text-2xl mb-4">
                {feature.title}
              </h3>

              <p className="text-muted leading-relaxed">
                {feature.description}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default FeaturesGrid;