import { motion } from "framer-motion";

import { useEffect, useState } from "react";

const stats = [
  {
    id: 1,
    number: 15,
    suffix: "+",
    label: "Years Experience",
  },

  {
    id: 2,
    number: 120,
    suffix: "+",
    label: "Industrial Clients",
  },

  {
    id: 3,
    number: 5,
    suffix: "+",
    label: "Business Sectors",
  },

  {
    id: 4,
    number: 98,
    suffix: "%",
    label: "Client Satisfaction",
  },
];

function AnimatedCounter({ value, suffix }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const duration = 2000;

    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= value) {
        setCount(value);

        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

function StatCard({ item, index }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay: index * 0.2,
      }}
      className="
        relative
        overflow-hidden
        rounded-[30px]
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        p-10
        text-center
        hover:-translate-y-2
        transition-all
        duration-500
      "
    >

      {/* GLOW */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-primary/10
          to-transparent
          pointer-events-none
        "
      />

      {/* NUMBER */}
      <h2
        className="
          relative
          z-10
          text-5xl
          md:text-6xl
          font-semibold
          text-primary
          mb-5
        "
      >
        <AnimatedCounter
          value={item.number}
          suffix={item.suffix}
        />
      </h2>

      {/* LABEL */}
      <p
        className="
          relative
          z-10
          text-white/70
          uppercase
          tracking-[3px]
          text-sm
        "
      >
        {item.label}
      </p>

    </motion.div>
  );
}

function KPISection() {
  return (
    <section className="section-padding bg-[#111111] text-white">

      <div className="container-custom">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">

          <span
            className="
              uppercase
              tracking-[5px]
              text-primary
              text-sm
            "
          >
            Company Performance
          </span>

          <h2
            className="
              text-4xl
              md:text-5xl
              mt-6
              mb-6
              leading-tight
            "
          >
            Delivering Industrial Excellence
          </h2>

          <p
            className="
              text-white/70
              text-lg
              leading-relaxed
            "
          >
            Shradha Group delivers trusted engineering,
            hydraulic, steel, transport, and agricultural
            solutions with long-term industrial excellence.
          </p>

        </div>

        {/* GRID */}
        <div
          className="
            grid
            sm:grid-cols-2
            lg:grid-cols-4
            gap-8
          "
        >

          {stats.map((item, index) => (
            <StatCard
              key={item.id}
              item={item}
              index={index}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default KPISection;