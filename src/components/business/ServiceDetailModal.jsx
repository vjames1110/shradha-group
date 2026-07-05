import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, X } from "lucide-react";
import { Link } from "react-router-dom";

function ServiceDetailModal({ isOpen, onClose, feature }) {
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

  return (
    <AnimatePresence>
      {isOpen && feature && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true" aria-label={`${feature.title} details`}>
          <motion.button
            type="button"
            aria-label="Close service details"
            className="absolute inset-0 bg-slate-950/75 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-[28px] bg-white shadow-2xl"
          >
            <div className="grid md:grid-cols-[0.9fr_1.1fr]">
              <div className="h-64 overflow-hidden md:h-auto md:min-h-[500px]">
                <img src={feature.image} alt={feature.title} className="h-full w-full object-cover" />
              </div>
              <div className="p-7 md:p-10">
                <button type="button" aria-label="Close" onClick={onClose} className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200">
                  <X size={19} />
                </button>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Service Solution</span>
                <h2 className="mt-4 pr-10 text-3xl md:text-4xl">{feature.title}</h2>
                <p className="mt-5 leading-7 text-slate-600">{feature.fullDescription}</p>
                {feature.applications?.length > 0 && (
                  <div className="mt-7 space-y-3">
                    <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-slate-400">Applications</h3>
                    {feature.applications.map((item) => (
                      <div key={item} className="flex items-center gap-3 text-sm text-slate-700">
                        <CheckCircle2 size={18} className="shrink-0 text-primary" />{item}
                      </div>
                    ))}
                  </div>
                )}
                <Link to="/contact" onClick={onClose} className="mt-9 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-dark">
                  Discuss your requirement <ArrowUpRight size={17} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default ServiceDetailModal;
