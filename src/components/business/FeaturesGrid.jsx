import { useState } from "react";
import { motion } from "framer-motion";

import ServiceDetailModal from "./ServiceDetailModal";

function FeaturesGrid({ features }) {
  const [selectedFeature, setSelectedFeature] =
    useState(null);

  return (
    <section className="pb-32 bg-gradient-soft">
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
              transition={{
                duration: 0.3,
              }}
              onClick={() =>
                setSelectedFeature(feature)
              }
              className="
                group
                relative
                h-[450px]
                overflow-hidden
                rounded-[32px]
                cursor-pointer
                shadow-soft
              "
            >
              {/* IMAGE */}
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

              {/* OVERLAY */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#0f172a]/95
                  via-[#1e3a8a]/45
                  to-transparent
                "
              />

              {/* GLOW */}
              <div
                className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-500
                  bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,0.35),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.30),transparent_35%)]
                "
              />

              {/* CONTENT */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  w-full
                  p-8
                  text-white
                "
              >
                {/* BADGE */}
                <span
                  className="
                    inline-block
                    px-4
                    py-2
                    mb-5
                    text-xs
                    uppercase
                    tracking-[3px]
                    rounded-full
                    bg-white/10
                    border
                    border-white/20
                    backdrop-blur-xl
                  "
                >
                  Shradha Group
                </span>

                {/* TITLE */}
                <h3
                  className="
                    text-3xl
                    mb-4
                  "
                >
                  {feature.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="
                    text-white/80
                    leading-relaxed
                    mb-6
                  "
                >
                  {feature.shortDescription}
                </p>

                {/* CTA */}
                <div
                  className="
                    inline-flex
                    items-center
                    gap-2
                    font-medium
                    text-blue-300
                    group-hover:text-white
                    transition-all
                  "
                >
                  Learn More

                  <span
                    className="
                      group-hover:translate-x-1
                      transition-transform
                    "
                  >
                    →
                  </span>
                </div>
              </div>

              {/* BORDER GLOW */}
              <div
                className="
                  absolute
                  inset-0
                  rounded-[32px]
                  border
                  border-white/10
                  group-hover:border-blue-400/40
                  transition-all
                "
              />
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