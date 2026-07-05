import {
  AnimatePresence,
  motion,
} from "framer-motion";
import { useEffect } from "react";

import { X } from "lucide-react";

import HydraulicSlider from "./HydraulicSlider";

function HydraulicDetailModal({
  isOpen,
  onClose,
  item,
}) {
  useEffect(() => {
    if (!isOpen) return undefined;
    const closeOnEscape = (event) => event.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen, onClose]);

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
              bg-slate-950/75
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
              z-110
              w-[95%]
              max-w-5xl
              max-h-[90vh]
            "
          >
            <div
              className="
                bg-white
                rounded-[24px] md:rounded-[30px]
                shadow-[0_30px_90px_rgba(2,6,23,0.35)]
                overflow-hidden
                max-h-[90vh]
                overflow-y-auto
              "
            >
              <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 bg-white/95 p-5 backdrop-blur-xl md:p-7">
                <h2 className="text-2xl md:text-3xl">
                  {item.title}
                </h2>

                <button
                  type="button"
                  aria-label="Close hydraulic details"
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

              <div className="p-0">
                {!isNetwork ? (
                  <HydraulicSlider
                    items={item.sliderItems}
                  />
                ) : (
                  <div className="grid min-h-[500px] md:grid-cols-[0.9fr_1.1fr]">
                    <div className="h-64 overflow-hidden md:h-auto">
                      <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                    </div>
                    <div className="p-7 md:p-10">
                      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Service Coverage</span>
                      <p className="mt-5 text-lg leading-7 text-slate-600">{item.description}</p>
                      <div className="mt-7 grid gap-3 sm:grid-cols-2">
                        {item.states.map((state) => (
                          <div key={state} className="flex items-center gap-3 text-sm text-slate-700">
                            <span className="h-2 w-2 rounded-full bg-primary" />{state}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
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
