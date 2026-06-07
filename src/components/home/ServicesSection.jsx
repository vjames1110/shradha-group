import { motion } from "framer-motion";

import { Link } from "react-router-dom";

import servicesData from "../../data/servicesData";

import SectionHeading from "../common/SectionHeading";

import { fadeUp, staggerContainer } from "../../utils/motionVariants";

function ServiceSection() {
  return (
    <section
      className="
              section-padding
              bg-gradient-to-b
              from-white
              via-blue-50
              to-violet-50"
    >
      <div className="container-custom">
        {/* HEADING */}
        <SectionHeading
          subtitle="Our Services"
          title="Diversified Industrial & Engineering Solutions"
          description="Shradha Group operates across multiple industrial sectors delivering reliable engineering, transport, hydraulic, steel, and agricultural solutions."
          align="center"
        />

        {/* GRID */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="
            grid
            sm:grid-cols-2
            lg:grid-cols-3
            gap-8
          "
        >
          {servicesData.map((service) => (
            <motion.div key={service.id} variants={fadeUp}>
              <Link to={service.link} className="block group">
                <div
                  className="
                    relative
                    overflow-hidden
                    rounded-[32px]
                    h-[500px]
                    border
                    border-white/20
                    shadow-xl
                    backdrop-blur-xl
                    group-hover: shadow-[0_30px_80px_rgba(59,130,246,0.25)]
                    transition-all
                    duration-500
                  "
                >
                  {/* BACKGROUND IMAGE */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="
                      absolute
                      inset-0
                      w-full
                      h-full
                      object-cover
                      group-hover:scale-110
                      transition-transform
                      duration-700
                    "
                  />

                  {/* OVERLAY */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-slate-950/95
                      via-slate-900/50
                      to-transparent
                    "
                  />

                  {/* CONTENT */}
                  <div
                    className="
                      relative
                      z-10
                      h-full
                      flex
                      flex-col
                      justify-end
                      p-8
                      text-white
                    "
                  >

                    {/* TITLE */}
                    <h3
                      className="
                        text-3xl
                        xl:text-[2rem]
                        text-white
                        font-semibold
                        leading-tight
                        mb-4
                      "
                    >
                      {service.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p
                      className="
                        text-white/85
                        leading-relaxed
                        mb-8
                      "
                    >
                      {service.description}
                    </p>

                    {/* BUTTON */}
                    <div>
                      <span
                        className="
                          inline-flex
                          items-center
                          gap-3
                          px-6
                          py-3
                          rounded-full
                         text-white
                          font-medium
                          border
                         border-white/20
                         bg-white/10
                          backdrop-blur-xl
                          group-hover:bg-gradient-to-r
                         group-hover:from-blue-600
                         group-hover:to-violet-600
                          transition-all
                          duration-300
                        "
                      >
                        Explore Service
                        <span
                          className="
                            transition-transform
                            duration-300
                            group-hover:translate-x-1
                          "
                        >
                          →
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default ServiceSection;
