import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle } from "lucide-react";

function ServiceDetailModal({
  isOpen,
  onClose,
  feature,
}) {
  if (!feature) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* BACKDROP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="
              fixed
              inset-0
              bg-[#0f172a]/70
              backdrop-blur-lg
              z-[100]
            "
          />

          {/* MODAL */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.92,
              y: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.92,
              y: 40,
            }}
            transition={{
              duration: 0.35,
            }}
            className="
              fixed
              top-1/2
              left-1/2
              -translate-x-1/2
              -translate-y-1/2
              z-[110]
              w-[95%]
              max-w-5xl
              max-h-[90vh]
            "
          >
            <div
              className="
                bg-white
                rounded-[36px]
                overflow-hidden
                shadow-[0_30px_80px_rgba(0,0,0,0.25)]
                max-h-[90vh]
                overflow-y-auto
              "
            >
              {/* HERO IMAGE */}
              <div className="relative h-[340px]">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="
                    w-full
                    h-full
                    object-cover
                  "
                />

                {/* OVERLAY */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#0f172a]/90
                    via-[#1e3a8a]/30
                    to-transparent
                  "
                />

                {/* GLOW */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.30),transparent_35%),radial-gradient(circle_at_top_right,rgba(124,58,237,0.30),transparent_35%)]
                  "
                />

                {/* CLOSE BUTTON */}
                <button
                  onClick={onClose}
                  className="
                    absolute
                    top-6
                    right-6
                    w-12
                    h-12
                    rounded-full
                    bg-white/20
                    backdrop-blur-xl
                    border
                    border-white/20
                    flex
                    items-center
                    justify-center
                    text-white
                    hover:bg-white/30
                    transition-all
                  "
                >
                  <X size={22} />
                </button>

                {/* TITLE OVER IMAGE */}
                <div
                  className="
                    absolute
                    bottom-8
                    left-8
                    right-8
                  "
                >

                  <h2
                    className="
                      text-white
                      text-4xl
                      md:text-5xl
                    "
                  >
                    {feature.title}
                  </h2>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-8 lg:p-10">
                {/* DESCRIPTION */}
                <p
                  className="
                    text-slate-600
                    text-lg
                    leading-relaxed
                    mb-10
                  "
                >
                  {feature.fullDescription}
                </p>

                {/* APPLICATIONS */}
                <div>
                  <h3
                    className="
                      text-2xl
                      mb-6
                    "
                  >
                    Applications
                  </h3>

                  <div
                    className="
                      flex
                      flex-wrap
                      gap-4
                    "
                  >
                    {feature.applications?.map(
                      (item, index) => (
                        <div
                          key={index}
                          className="
                            flex
                            items-center
                            gap-2
                            px-5
                            py-3
                            rounded-full
                            bg-gradient-to-r
                            from-blue-50
                            to-violet-50
                            border
                            border-blue-100
                          "
                        >
                          <CheckCircle
                            size={18}
                            className="text-blue-600"
                          />

                          <span className="text-slate-700">
                            {item}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* CTA */}
                <div
                  className="
                    mt-10
                    flex
                    flex-wrap
                    gap-4
                  "
                >
                  <button
                    className="
                      px-8
                      py-4
                      rounded-full
                      text-white
                      font-medium
                      bg-gradient-to-r
                      from-blue-600
                      to-violet-600
                      hover:scale-105
                      transition-all
                    "
                  >
                    Contact Us
                  </button>

                  <button
                    onClick={onClose}
                    className="
                      px-8
                      py-4
                      rounded-full
                      border
                      border-slate-200
                      hover:bg-slate-50
                    "
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default ServiceDetailModal;