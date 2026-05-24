function About() {
  return (
    <section className="min-h-screen pt-32 section-padding">
      <div className="container-custom">
        {/* Heading */}
        <div className="max-w-4xl mb-16">
          <span className="text-primary uppercase tracking-[4px] text-sm font-medium">
            About Shradha Group
          </span>

          <h1 className="text-5xl lg:text-7xl leading-tight mt-4 mb-6">
            Building Industrial Excellence Across
            Multiple Sectors
          </h1>

          <p className="text-muted text-lg leading-relaxed max-w-3xl">
            Shradha Group is a diversified business group
            delivering trusted solutions in hydraulics,
            steel trading, engineering, fabrication,
            transport, and cattle feed industries with a
            commitment to quality, innovation, and long-term
            partnerships.
          </p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Vision */}
          <div className="bg-white rounded-[24px] p-10 shadow-soft border border-black/5">
            <h2 className="text-3xl mb-6">
              Our Vision
            </h2>

            <p className="text-muted leading-relaxed">
              To become a leading industrial and engineering
              group recognized for reliability, excellence,
              and innovation across every sector we serve.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white rounded-[24px] p-10 shadow-soft border border-black/5">
            <h2 className="text-3xl mb-6">
              Our Mission
            </h2>

            <p className="text-muted leading-relaxed">
              We aim to deliver high-quality products,
              dependable services, and long-term value
              through customer-focused solutions,
              operational excellence, and ethical business
              practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;