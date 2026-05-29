import BusinessHero from "../../components/business/BusinessHero";
import FeaturesGrid from "../../components/business/FeaturesGrid";
import { ArrowUpRight } from "lucide-react";

const features = [
  {
    title: "DDGS Feed Supply",
    description:
      "DDGS cattle feed solutions supporting livestock nutrition.",
  },

  {
    title: "Nutritional Quality",
    description:
      "High-quality feed products ensuring sustainable animal growth.",
  },

  {
    title: "Agricultural Support",
    description: "Reliable agricultural product supply for farming operations.",
  },

  {
    title: "Bulk Feed Distribution",
    description:
      "Efficient feed distribution services for commercial livestock businesses.",
  },

  {
    title: "Sustainable Growth",
    description: "Feed solutions focused on healthy livestock development.",
  },

  {
    title: "Trusted Supply Chain",
    description:
      "Dependable cattle feed operations serving agricultural industries.",
  },
];

function CattleField() {
  return (
    <>
      <BusinessHero
        title="DDGS Cattle Feed Supply"
        subtitle="Reliable cattle feed solutions supporting modern agricultural and livestock operations."
        image="https://images.unsplash.com/photo-1500595046743-cd271d694d30"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl">
            <span className="uppercase tracking-[4px] text-primary text-sm">
              Business Overview
            </span>

            <h2
              className="
          text-4xl
          md:text-5xl
          mt-4
          mb-8
          leading-tight
        "
            >
              Agricultural & Livestock Nutrition Solutions
            </h2>

            <p
              className="
          text-lg
          text-muted
          leading-relaxed
        "
            >
              Shradha Group supplies premium-quality DDGS cattle feed products
              supporting healthy livestock growth and sustainable agricultural
              development.
            </p>

            {/* CTA BUTTON */}
            <div className="mt-10">
              <a
                href="https://shradhapashuahaar.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="
            inline-flex
            items-center
            justify-center
            px-8
            py-4
            rounded-full
            bg-primary
            text-black
            font-medium
            hover:scale-105
            transition-all
            duration-300
            shadow-soft
          "
              >
                Visit Shradha Pashu Ahaar

                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <FeaturesGrid features={features} />
    </>
  );
}

export default CattleField;
