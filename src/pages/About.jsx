function About() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-linear-to-br from-slate-50 via-white to-blue-50 pt-40 pb-28">
      <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="container-custom">
        {/* Heading */}
        <div className="relative max-w-4xl mb-16">
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
          <div className="bg-white/90 rounded-[28px] p-8 md:p-10 shadow-soft border border-blue-100/70">
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
          <div className="bg-white/90 rounded-[28px] p-8 md:p-10 shadow-soft border border-blue-100/70">
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
