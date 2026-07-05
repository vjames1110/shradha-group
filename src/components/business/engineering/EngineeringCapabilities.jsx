import { motion } from "framer-motion";
import { BadgeCheck, Clock3, Cog, Handshake, ShieldCheck, Wrench } from "lucide-react";

const reasons = [
  { icon: Wrench, title: "Specialist Workmanship", description: "Experienced technicians for dependable repair, modification, and fabrication work." },
  { icon: ShieldCheck, title: "Quality First", description: "Careful inspection, strong materials, and disciplined quality checks at every stage." },
  { icon: Cog, title: "Complete Solutions", description: "Mechanical, structural, alignment, painting, and equipment work under one roof." },
  { icon: Clock3, title: "Timely Execution", description: "Practical planning and responsive service to reduce vehicle and equipment downtime." },
  { icon: BadgeCheck, title: "Reliable Standards", description: "Repairs and modifications completed with safety, durability, and performance in mind." },
  { icon: Handshake, title: "Long-Term Support", description: "Clear communication and dependable assistance before, during, and after every job." },
];

function EngineeringCapabilities() {
  return (
    <section className="py-20 md:py-24 bg-slate-50">
      <div className="container-custom">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Why Choose Us</span>
          <h2 className="mt-4 text-4xl md:text-5xl">Built Around Quality & Reliability</h2>
          <p className="mx-auto mt-5 max-w-2xl text-slate-600 leading-relaxed">
            Practical engineering expertise, responsive service, and workmanship designed to keep your operations moving.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="group rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_10px_35px_rgba(15,23,42,0.05)] hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_18px_45px_rgba(37,99,235,0.10)]"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-primary group-hover:bg-primary group-hover:text-white">
                  <Icon size={21} />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="text-sm leading-6 text-slate-600">{item.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default EngineeringCapabilities;
