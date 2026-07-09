import BusinessHero from "../../components/business/BusinessHero";
import FeaturesGrid from "../../components/business/FeaturesGrid";
import { ArrowUpRight } from "lucide-react";

import ddgsImage from "../../assets/images/services/cattlefeed/ddgsImage.jpeg"
import meshImage from "../../assets/images/services/cattlefeed/mesh.png"
import pelletImage from "../../assets/images/services/cattlefeed/pellet.png"

import cattlefeedImage from "../../assets/images/services/cattlefeed/cattleFeedHero.jpeg";

const features = [
  {
    title: "DDGS Supply",
    image: ddgsImage,
    shortDescription: "High-quality nutrition.",
    fullDescription:
      "Supplying corn, maize and rice-based DDGS for poultry, fish, and livestock feed development.",

    applications: [
      "Dairy Farms",
      "Livestock Operations",
      "Feed Distribution",
    ],
  },

  {
    title: "Cattle Feed Mesh",
    image: meshImage,
    shortDescription: "High-quality mesh feed for balanced cattle nutrition.",
    fullDescription:
      "Shradha group supplies premium cattle feed mesh formulated to provide a balanced combination of essential nutrients, proteins, energy, vitamins, and minerals.",

    applications: [
      "Dairy Cattle",
      "Commercial Dairy Farms",
      "Livestock Nutrition",
    ],
  },

  {
    title: "Cattle Feed Pellet",
    image: pelletImage,
    shortDescription: "Nutrient-rich pellet feed for superior livestock performance.",
    fullDescription:
      "Our cattle feed pellets are manufactured using premium-quality ingredients to ensure uniform nutrition, easy handling, and minimal feed wastage. The pelletized form improves feed intake, supports faster growth, increases milk yield, and contribution to better overall livestock health in commercial and dairy farming operations.",

    applications: [
      "Dairy farms",
      "Commercial cattle farms",
      "Milk production",
      "Livestock growth",
    ],
  },
];

function CattleField() {
  return (
    <>
      <BusinessHero
        title="DDGS & Cattle Feed Supply"
        subtitle="Reliable cattle feed solutions supporting modern agricultural and livestock operations."
        image={cattlefeedImage}
        highlights={[
          "High Quality DDGS",
          "Trusted Feed Supply",
          "Sustainale Agriculture"
        ]}
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
              We specialize in the strategic sourcing and supply of high-grade rice, 
              maize, and corn products specifically formulated to meet the evolving 
              demands of the animal nutrition sector. Our premium agricultural 
              commodities serve as foundational ingredients for poultry farming, 
              aquaculture (fish feed), and comprehensive livestock feed development, 
              ensuring optimal health, growth, and yield for your operations.
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
