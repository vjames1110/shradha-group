import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, ImagePlus, X } from "lucide-react";
import { Link } from "react-router-dom";

// Importing Solutions Image
import trailerServiceImage from "../../../assets/images/services/engineering/trailer-repairing.png";
import heightExtensionImage from "../../../assets/images/services/engineering/height-extension.png";
import boxRepairingImage from "../../../assets/images/services/engineering/box-repairing.png";
import chasisReplacementImage from "../../../assets/images/services/engineering/chasis-replacement.png";
import paintingImage from "../../../assets/images/services/engineering/painting.png";
import agriculturalEquipmentImage from "../../../assets/images/services/engineering/agricultural.png";
import wheelAlignmentImage from "../../../assets/images/services/engineering/wheelAlignment.png";

const solutions = [
  { title: "Accidental Trailer Repairing", image: trailerServiceImage, description: "Complete structural and mechanical restoration for accident-damaged trailers.", points: ["Damage assessment", "Structural repair", "Final safety inspection"] },
  { title: "Height Extension", image: heightExtensionImage, description: "Engineered body and side-wall height extensions matched to operating requirements.", points: ["Requirement planning", "Precision fabrication", "Reinforced finishing"] },
  { title: "Box Repairing", image: boxRepairingImage, description: "Repair and strengthening of tipper and trailer boxes for reliable heavy-duty use.", points: ["Panel replacement", "Welding and reinforcement", "Surface finishing"] },
  { title: "Chassis Replacement", image: chasisReplacementImage, description: "Professional chassis inspection, repair, and replacement for commercial vehicles.", points: ["Alignment inspection", "Chassis fitting", "Quality validation"] },
  { title: "Painting", image: paintingImage, description: "Industrial-grade preparation and painting for trailers, tippers, and equipment.", points: ["Surface preparation", "Protective coating", "Professional finish"] },
  { title: "Agricultural Equipment", image: agriculturalEquipmentImage, description: "Fabrication, modification, and repair support for agricultural machinery.", points: ["Custom fabrication", "Equipment repair", "Functional testing"] },
  { title: "Wheel Alignment", image: wheelAlignmentImage, description: "Accurate alignment support for trailers and heavy commercial vehicles.", points: ["Alignment diagnosis", "Precision correction", "Tyre-wear optimization"] },
];

function ImagePlaceholder({ compact = false }) {
  return (
    <div className={`flex w-full flex-col items-center justify-center bg-linear-to-br from-slate-100 via-blue-50 to-slate-200 text-slate-400 ${compact ? "h-28" : "h-full"}`}>
      <ImagePlus size={compact ? 24 : 38} strokeWidth={1.5} />
      <span className="mt-2 text-[10px] font-semibold uppercase tracking-[0.16em]">Add image</span>
    </div>
  );
}

function SolutionImage({ solution }) {
  if (!solution.image) return <ImagePlaceholder />;

  return (
    <img
      src={solution.image}
      alt={solution.title}
      className="h-full w-full object-cover"
    />
  );
}

function EngineeringSolutions() {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (!selected) return undefined;
    const closeOnEscape = (event) => event.key === "Escape" && setSelected(null);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selected]);

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-custom">
        <div className="mb-12 max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Our Complete Solutions</span>
          <h2 className="mt-4 text-4xl md:text-5xl">From Repair To Complete Restoration</h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">Explore our vehicle, trailer, fabrication, and agricultural equipment solutions.</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => (
            <motion.button
              type="button"
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              onClick={() => setSelected(solution)}
              className="group overflow-hidden rounded-[24px] border border-slate-200 bg-white text-left shadow-[0_12px_40px_rgba(15,23,42,0.06)] hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-[0_22px_55px_rgba(37,99,235,0.12)]"
            >
              <div className="h-52 overflow-hidden">
                <SolutionImage solution={solution} />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-slate-900">{solution.title}</h3>
                <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-primary">View solution <ArrowUpRight size={16} /></div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true" aria-label={selected.title}>
            <motion.button type="button" aria-label="Close solution details" className="absolute inset-0 bg-slate-950/75 backdrop-blur-sm" onClick={() => setSelected(null)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
            <motion.div initial={{ opacity: 0, y: 24, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 16, scale: 0.98 }} className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-[28px] bg-white shadow-2xl">
              <div className="grid md:grid-cols-[0.9fr_1.1fr]">
                <div className="h-64 overflow-hidden md:h-auto md:min-h-[500px]">
                  <SolutionImage solution={selected} />
                </div>
                <div className="p-7 md:p-10">
                  <button type="button" aria-label="Close" onClick={() => setSelected(null)} className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200"><X size={19} /></button>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Engineering Solution</span>
                  <h2 className="mt-4 pr-10 text-3xl md:text-4xl">{selected.title}</h2>
                  <p className="mt-5 leading-7 text-slate-600">{selected.description}</p>
                  <div className="mt-7 space-y-3">
                    {selected.points.map((point) => <div key={point} className="flex items-center gap-3 text-sm text-slate-700"><CheckCircle2 size={18} className="text-primary" />{point}</div>)}
                  </div>
                  <Link to="/contact" className="mt-9 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-dark">Discuss your requirement <ArrowUpRight size={17} /></Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default EngineeringSolutions;
