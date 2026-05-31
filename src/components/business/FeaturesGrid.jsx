import { useState } from "react";

import { motion } from "framer-motion";

import ServiceDetailModal from "./ServiceDetailModal";

function FeaturesGrid({ features }) {
  const [selectedFeature, setSelectedFeature] =
    useState(null);

  return (
    <section className="pb-32 bg-[#f8f6f2]">

      <div className="container-custom">

        <div
          className="
            grid
            sm:grid-cols-2
            lg:grid-cols-3
            gap-8
          "
        >

          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -10,
              }}
              onClick={() =>
                setSelectedFeature(feature)
              }
              className="
                group
                relative
                h-[420px]
                overflow-hidden
                rounded-[30px]
                cursor-pointer
                shadow-lg
              "
            >

              <img
                src={feature.image}
                alt={feature.title}
                className="
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-110
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/90
                  via-black/30
                  to-transparent
                "
              />

              <div
                className="
                  absolute
                  bottom-0
                  p-8
                  text-white
                "
              >

                <h3
                  className="
                    text-3xl
                    mb-3
                  "
                >
                  {feature.title}
                </h3>

                <p className="text-white/80 mb-5">
                  {feature.shortDescription}
                </p>

                <span
                  className="
                    inline-flex
                    items-center
                    text-primary
                    font-medium
                  "
                >
                  Learn More →
                </span>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

      <ServiceDetailModal
        isOpen={!!selectedFeature}
        onClose={() =>
          setSelectedFeature(null)
        }
        feature={selectedFeature}
      />

    </section>
  );
}

export default FeaturesGrid;