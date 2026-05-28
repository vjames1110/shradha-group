import { motion } from "framer-motion";

import servicesData from "../../data/servicesData";

import SectionHeading from "../common/SectionHeading";

import { fadeUp, staggerContainer } from "../../utils/motionVariants";

import { Link } from "react-router-dom";

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
        <Link to={servicesData[0].link} className="w-full">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="
            grid
            sm:grid-cols-2
            lg:grid-cols-3
            gap-6
          "
        >
          {servicesData.map((service) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.id}
                variants={fadeUp}
                className="
                  group
                  bg-white
                  rounded-[28px]
                  p-8
                  border
                  border-black/5
                  shadow-soft
                  hover:-translate-y-2
                  transition-all
                  duration-500
                "
              >

                {/* ICON */}
                <div
                  className="
                    w-16
                    h-16
                    rounded-2xl
                    bg-primary/10
                    flex
                    items-center
                    justify-center
                    mb-8
                    group-hover:bg-primary
                    transition-all
                  "
                >
                  <Icon
                    className="
                      w-8
                      h-8
                      text-primary
                      group-hover:text-black
                      transition-all
                    "
                  />
                </div>

                {/* TITLE */}
                <h3 className="text-2xl mb-4">
                  {service.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-muted leading-relaxed">
                  {service.description}
                </p>

              </motion.div>
            );
          })}
        </motion.div>
        </Link>

      </div>
    </section>
  );
}

export default ServiceSection;