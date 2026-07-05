import { motion } from "framer-motion";
import { ArrowUpRight, Users, Calendar, TrendingUp } from "lucide-react";

function EngineeringPortfolio() {
  const projects = [
    {
      id: 1,
      title: "Industrial Steel Fabrication",
      category: "Steel Fabrication",
      client: "Fortune 500 Manufacturing",
      timeline: "8 months",
      scale: "500+ units",
      description: "Complete fabrication and installation of industrial-grade steel components for a leading automotive parts supplier.",
      highlights: ["Precision fabrication", "Quality assurance", "On-time delivery"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      title: "Mining Equipment Design",
      category: "Custom Engineering",
      client: "Regional Mining Corp",
      timeline: "6 months",
      scale: "15+ machines",
      description: "Design and manufacturing of specialized mining equipment tailored for specific operational requirements.",
      highlights: ["Custom design", "Durability tested", "Performance optimized"],
      color: "from-violet-500 to-purple-500",
    },
    {
      id: 3,
      title: "Infrastructure Components",
      category: "Infrastructure",
      client: "Government Undertaking",
      timeline: "12 months",
      scale: "1000+ parts",
      description: "Large-scale production of structural and mechanical components for national infrastructure projects.",
      highlights: ["ISO certified", "Bulk production", "Quality verified"],
      color: "from-emerald-500 to-teal-500",
    },
    {
      id: 4,
      title: "Hydraulic System Components",
      category: "Hydraulic Engineering",
      client: "Transport Fleet Operator",
      timeline: "4 months",
      scale: "200+ units",
      description: "Manufacturing and assembly of custom hydraulic components for transport industry applications.",
      highlights: ["High precision", "Performance tested", "Warranty backed"],
      color: "from-orange-500 to-red-500",
    },
    {
      id: 5,
      title: "Agricultural Processing Equipment",
      category: "Agricultural Tech",
      client: "Agri-Tech Startup",
      timeline: "10 months",
      scale: "50+ machines",
      description: "Design and fabrication of advanced agricultural processing machinery for increased efficiency.",
      highlights: ["Innovation focused", "Cost effective", "Farmer friendly"],
      color: "from-green-500 to-lime-500",
    },
    {
      id: 6,
      title: "Defense Grade Components",
      category: "Precision Engineering",
      client: "Defense Contractor",
      timeline: "9 months",
      scale: "500+ components",
      description: "High-precision manufacturing of defense-grade components meeting stringent quality and safety standards.",
      highlights: ["Ultra-precision", "Security compliant", "Zero-defect"],
      color: "from-slate-600 to-slate-800",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* HEADING */}
        <div className="text-center mb-20">
          <span className="uppercase tracking-[4px] text-primary text-sm font-medium">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight mt-4 mb-6">
            Completed Projects & Success Stories
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            Portfolio of successfully delivered engineering projects across diverse industries and applications
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{ y: -12 }}
              className="
                group
                relative
                overflow-hidden
                rounded-4xl
                border
                border-slate-200
                bg-white
                hover:shadow-premium
                transition-all
                duration-500
              "
            >
              {/* COLOR HEADER */}
              <div
                className={`
                  h-32
                  bg-linear-to-br
                  ${project.color}
                  opacity-85
                  group-hover:opacity-100
                  transition-opacity
                  duration-500
                `}
              />

              {/* CONTENT */}
              <div className="p-8">
                {/* BADGE */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    {project.category}
                  </span>
                </div>

                {/* TITLE */}
                <h3 className="text-2xl font-bold mb-2 text-text line-clamp-2">
                  {project.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-muted text-sm leading-relaxed mb-6 line-clamp-2">
                  {project.description}
                </p>

                {/* STATS */}
                <div className="space-y-3 mb-6 pb-6 border-b border-slate-100">
                  <div className="flex items-center gap-3 text-sm">
                    <Users size={16} className="text-primary" />
                    <span className="text-text">{project.client}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Calendar size={16} className="text-primary" />
                    <span className="text-text">{project.timeline}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <TrendingUp size={16} className="text-primary" />
                    <span className="text-text">{project.scale}</span>
                  </div>
                </div>

                {/* HIGHLIGHTS */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <button
                  className="
                    w-full
                    py-3
                    rounded-full
                    bg-linear-to-r
                    from-primary/10
                    to-secondary/10
                    text-primary
                    font-semibold
                    flex
                    items-center
                    justify-center
                    gap-2
                    hover:from-primary
                    hover:to-secondary
                    hover:text-white
                    transition-all
                    duration-300
                  "
                >
                  View Details
                  <ArrowUpRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EngineeringPortfolio;
