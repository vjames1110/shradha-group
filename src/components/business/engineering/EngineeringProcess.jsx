import { motion } from "framer-motion";

function EngineeringProcess() {
  const steps = [
    {
      id: 1,
      step: "01",
      title: "Consultation",
      description: "Detailed discussion of requirements, specifications, and project objectives with your team.",
      icon: "📋",
    },
    {
      id: 2,
      step: "02",
      title: "Design & Planning",
      description: "Expert engineering team creates detailed designs and project plans tailored to your needs.",
      icon: "🎨",
    },
    {
      id: 3,
      step: "03",
      title: "Manufacturing",
      description: "State-of-the-art machinery and skilled workforce execute production with precision and quality.",
      icon: "⚙️",
    },
    {
      id: 4,
      step: "04",
      title: "Quality Control",
      description: "Rigorous testing and inspection at every stage ensures compliance and reliability.",
      icon: "✓",
    },
    {
      id: 5,
      step: "05",
      title: "Delivery",
      description: "Timely and safe delivery of finished products with comprehensive documentation.",
      icon: "📦",
    },
    {
      id: 6,
      step: "06",
      title: "Support",
      description: "Ongoing technical support and after-sales service to ensure optimal performance.",
      icon: "🤝",
    },
  ];

  return (
    <section className="section-padding bg-linear-to-b from-slate-50 via-white to-blue-50">
      <div className="container-custom">
        {/* HEADING */}
        <div className="text-center mb-20">
          <span className="uppercase tracking-[4px] text-primary text-sm font-medium">
            Our Process
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight mt-4 mb-6">
            Engineering Project Execution
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            A systematic, quality-driven approach ensuring successful project delivery every time
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative">
          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            {/* Connecting Line */}
            <div
              className="
                absolute
                top-16
                left-0
                right-0
                h-1
                bg-linear-to-r
                from-primary/0
                via-primary/50
                to-primary/0
                z-0
              "
            />

            {/* Steps Grid */}
            <div className="grid grid-cols-6 gap-8 relative z-10">
              {steps.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className="flex flex-col items-center"
                >
                  {/* Circle with Number */}
                  <div
                    className="
                      relative
                      w-24
                      h-24
                      rounded-full
                      bg-white
                      border-4
                      border-primary
                      flex
                      items-center
                      justify-center
                      shadow-premium
                      mb-8
                      group
                    "
                  >
                    <span className="text-3xl text-primary font-bold">
                      {item.step}
                    </span>

                    {/* Animated Glow */}
                    <div
                      className="
                        absolute
                        inset-0
                        rounded-full
                        border-4
                        border-primary/30
                        group-hover:scale-125
                        transition-transform
                        duration-500
                      "
                    />
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-2 text-text">
                      {item.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile/Tablet Timeline */}
          <div className="lg:hidden space-y-8">
            {steps.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="flex gap-6"
              >
                {/* Timeline Marker */}
                <div className="flex flex-col items-center">
                  <div
                    className="
                      w-16
                      h-16
                      rounded-full
                      bg-linear-to-br
                      from-primary
                      to-secondary
                      flex
                      items-center
                      justify-center
                      text-white
                      font-bold
                      text-lg
                      shrink-0
                    "
                  >
                    {item.step}
                  </div>

                  {index < steps.length - 1 && (
                    <div className="w-1 h-24 bg-linear-to-b from-primary to-primary/0 mt-2" />
                  )}
                </div>

                {/* Content */}
                <div className="pb-8">
                  <h3 className="text-xl font-bold mb-2 text-text">
                    {item.title}
                  </h3>
                  <p className="text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default EngineeringProcess;
