import { useState } from "react";
import { motion } from "framer-motion";

import hydraulicSolutions from "../../../data/hydraulicData";
import HydraulicDetailModal from "./HydraulicDetailModal";

function HydraulicSolutions() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <>
      <section className="section-padding bg-gradient-soft">
        <div className="container-custom">

          <div className="text-center mb-16">
            <span className="uppercase tracking-[4px] text-primary text-sm">
              Our Solutions
            </span>

            <h2 className="text-4xl md:text-5xl mt-4">
              Hydraulic Products & Services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {hydraulicSolutions.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedItem(item)}
                className="
                  relative
                  h-[500px]
                  overflow-hidden
                  rounded-[36px]
                  cursor-pointer
                  group
                  shadow-[0_20px_60px_rgba(0,0,0,0.12)]
                "
              >
                <img
                  src={item.image}
                  alt={item.title}
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
                    from-[#0f172a]/95
                    via-[#1e3a8a]/40
                    to-transparent
                  "
                />

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
                  <h3 className="text-3xl mb-4">
                    {item.title}
                  </h3>

                  <p className="text-white/80 mb-6">
                    {item.description}
                  </p>

                  <span
                    className="
                      inline-flex
                      items-center
                      gap-2
                      text-blue-300
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
      </section>

      <HydraulicDetailModal
        isOpen={!!selectedItem}
        onClose={() => setSelectedItem(null)}
        item={selectedItem}
      />
    </>
  );
}

export default HydraulicSolutions;