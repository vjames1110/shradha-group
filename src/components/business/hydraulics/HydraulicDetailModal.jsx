import {
  AnimatePresence,
  motion,
} from "framer-motion";

import { X } from "lucide-react";

import HydraulicSlider from "./HydraulicSlider";

function HydraulicDetailModal({
  isOpen,
  onClose,
  item,
}) {
  if (!item) return null;

  const isNetwork =
    item.id === "service-network";

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
              bg-black/70
              backdrop-blur-lg
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
              max-w-6xl
              max-h-[90vh]
            "
          >
            <div
              className="
                bg-white
                rounded-[36px]
                overflow-hidden
                max-h-[90vh]
                overflow-y-auto
              "
            >
              <div className="flex justify-between items-center p-8 border-b">
                <h2 className="text-4xl">
                  {item.title}
                </h2>

                <button
                  onClick={onClose}
                  className="
                    w-12
                    h-12
                    rounded-full
                    bg-slate-100
                    flex
                    items-center
                    justify-center
                  "
                >
                  <X />
                </button>
              </div>

              <div className="p-8">
                {!isNetwork ? (
                  <HydraulicSlider
                    items={item.sliderItems}
                  />
                ) : (
                  <>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="
                        w-full
                        rounded-[24px]
                        mb-10
                      "
                    />

                    <p
                      className="
                        text-lg
                        text-slate-600
                        mb-10
                      "
                    >
                      {item.description}
                    </p>

                    <div
                      className="
                        flex
                        flex-wrap
                        gap-4
                      "
                    >
                      {item.states.map(
                        (state, index) => (
                          <span
                            key={index}
                            className="
                              px-5
                              py-3
                              rounded-full
                              bg-gradient-to-r
                              from-blue-50
                              to-violet-50
                              border
                              border-blue-100
                              text-slate-700
                            "
                          >
                            {state}
                          </span>
                        )
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default HydraulicDetailModal;