import { motion } from "framer-motion";
import { Eye, Target, Zap } from "lucide-react";

function VisionMission() {
  const cards = [
    {
      id: 1,
      icon: <Eye size={40} />,
      title: "Our Vision",
      description: "To be the leading industrial solutions provider, delivering exceptional value through innovation, reliability, and customer-centric engineering across all sectors.",
      highlight: "Innovation & Reliability",
    },
    {
      id: 2,
      icon: <Target size={40} />,
      title: "Our Mission",
      description: "To provide comprehensive industrial, hydraulic, engineering, transport, and agricultural solutions that empower business growth and operational efficiency.",
      highlight: "Operational Excellence",
    },
    {
      id: 3,
      icon: <Zap size={40} />,
      title: "Our Values",
      description: "Integrity, innovation, customer focus, operational excellence, and sustainable growth form the foundation of our business practices.",
      highlight: "Trusted Partnership",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* HEADING */}
        <div className="text-center mb-20">
          <span className="uppercase tracking-[4px] text-primary text-sm font-medium">
            Why Shradha Group
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight mt-4 mb-6">
            Vision, Mission & Values
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            We're committed to delivering excellence through every solution we provide
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              whileHover={{ y: -10 }}
              className="
                relative
                group
                p-8
                rounded-4xl
                border
                border-slate-200
                bg-linear-to-br
                from-white
                to-slate-50
                hover:shadow-[0_25px_60px_rgba(37,99,235,0.15)]
                transition-all
                duration-500
              "
            >
              {/* GLOW */}
              <div
                className="
                  absolute
                  inset-0
                  rounded-4xl
                  bg-linear-to-br
                  from-primary/5
                  to-transparent
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-500
                  pointer-events-none
                "
              />

              {/* CONTENT */}
              <div className="relative z-10">
                {/* ICON */}
                <div
                  className="
                    w-16
                    h-16
                    rounded-2xl
                    bg-linear-to-br
                    from-primary/20
                    to-secondary/20
                    flex
                    items-center
                    justify-center
                    text-primary
                    mb-6
                    group-hover:scale-110
                    transition-transform
                    duration-300
                  "
                >
                  {card.icon}
                </div>

                {/* TITLE */}
                <h3 className="text-2xl font-bold mb-4 text-text">
                  {card.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-muted leading-relaxed mb-6">
                  {card.description}
                </p>

                {/* HIGHLIGHT */}
                <div
                  className="
                    inline-flex
                    px-4
                    py-2
                    rounded-full
                    bg-primary/10
                    text-primary
                    text-sm
                    font-medium
                  "
                >
                  {card.highlight}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default VisionMission;
