import { motion } from "framer-motion";

import SectionHeading from "../common/SectionHeading";

import { fadeUp } from "../../utils/motionVariants";

function DirectorMessage() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div
          className="
            grid
            lg:grid-cols-2
            gap-16
            items-center
          "
        >
          {/* IMAGE */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="
    relative
    w-full
    max-w-[520px]
    mx-auto
    p-1
  "
          >
            {/* FRAME */}
            <div
              className="
      absolute
      inset-0
      border
      border-primary/30
      rounded-[32px]
    "
            />

            {/* IMAGE */}
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a"
              alt="Director"
              className="
      relative
      z-10
      w-full
      h-[350px]
      sm:h-[420px]
      lg:h-[500px]
      object-cover
      rounded-[32px]
      shadow-soft
      bg-white
    "
            />
          </motion.div>

          {/* CONTENT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SectionHeading
              subtitle="Leadership Vision"
              title="Driven By Trust, Quality & Long-Term Excellence"
              description="Shradha Group continues to build strong industrial partnerships through innovation, reliability, engineering expertise, and customer-focused business solutions."
            />

            <div className="space-y-6 text-muted leading-relaxed text-lg">
              <p>
                Our vision is to establish Shradha Group as a trusted industrial
                and engineering leader delivering excellence across every
                business vertical we operate in.
              </p>

              <p>
                Through strategic growth, advanced engineering capabilities, and
                customer satisfaction, we aim to create long-term sustainable
                value for industries, businesses, and communities.
              </p>
            </div>

            {/* SIGNATURE */}
            <div className="mt-10">
              <h4 className="text-2xl">Mr. Ankit Khandelwal</h4>

              <p className="text-primary mt-2">Founder & Managing Director</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default DirectorMessage;
