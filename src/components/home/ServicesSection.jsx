import { motion } from "framer-motion";

import { Link } from "react-router-dom";

import servicesData from "../../data/servicesData";

import SectionHeading from "../common/SectionHeading";

import {
  fadeUp,
  staggerContainer,
} from "../../utils/motionVariants";

function ServiceSection() {
  return (
    <section className="section-padding bg-[#f8f6f2]">
      <div className="container-custom">

        {/* HEADING */}
        <SectionHeading
          subtitle="Our Businesses"
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
            <motion.div
              key={service.id}
              variants={fadeUp}
            >

              <Link
                to={service.link}
                className="block group"
              >

                <div
                  className="
                    relative
                    overflow-hidden
                    rounded-[32px]
                    h-[500px]
                    shadow-soft
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
                      from-black/90
                      via-black/40
                      to-black/10
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

                    {/* ICON */}
                    <div
                      className="
                        w-16
                        h-16
                        rounded-2xl
                        bg-primary/20
                        backdrop-blur-md
                        flex
                        items-center
                        justify-center
                        mb-6
                      "
                    >
                      <service.icon
                        className="
                          w-8
                          h-8
                          text-primary
                        "
                      />
                    </div>

                    {/* TITLE */}
                    <h3
                      className="
                        text-3xl
                        mb-4
                        leading-tight
                      "
                    >
                      {service.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p
                      className="
                        text-white/80
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
                          gap-2
                          px-6
                          py-3
                          rounded-full
                          bg-primary
                          text-black
                          font-medium
                          group-hover:scale-105
                          transition-all
                          duration-300
                        "
                      >
                        Explore Service →
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