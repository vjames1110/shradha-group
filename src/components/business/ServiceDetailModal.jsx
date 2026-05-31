import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="
              fixed
              inset-0
              bg-black/50
              backdrop-blur-md
              z-[100]
            "
          />

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
            }}
            className="
              fixed
              top-1/2
              left-1/2
              -translate-x-1/2
              -translate-y-1/2
              z-[110]
              w-[95%]
              max-w-4xl
            "
          >
            <div
              className="
                bg-white
                rounded-[32px]
                overflow-hidden
                shadow-2xl
              "
            >

              <img
                src={feature.image}
                alt={feature.title}
                className="
                  h-[300px]
                  w-full
                  object-cover
                "
              />

              <div className="p-8">

                <div className="flex justify-between">

                  <h2 className="text-4xl">
                    {feature.title}
                  </h2>

                  <button onClick={onClose}>
                    <X />
                  </button>

                </div>

                <p className="mt-6 text-muted leading-relaxed">
                  {feature.fullDescription}
                </p>

                <div className="mt-8">

                  <h3 className="text-xl mb-4">
                    Applications
                  </h3>

                  <ul className="space-y-3">

                    {feature.applications.map(
                      (item, index) => (
                        <li key={index}>
                          • {item}
                        </li>
                      )
                    )}

                  </ul>

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