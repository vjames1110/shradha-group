import BusinessHero from "../../components/business/BusinessHero";
import FeaturesGrid from "../../components/business/FeaturesGrid";
import { ArrowUpRight } from "lucide-react";

import ddgsImage from "../../assets/images/services/cattlefeed/ddgs-cattlefeed.webp"
import agriImage from "../../assets/images/services/cattlefeed/agriculture-commodities.webp"
import feedImage from "../../assets/images/services/cattlefeed/sustainable-feed.webp"

import cattlefeedImage from "../../assets/images/services/cattlefeed/cattlefeed.jpg";

const features = [
  {
    title: "DDGS Supply",
    image: ddgsImage,
    shortDescription: "High-quality cattle nutrition.",
    fullDescription:
      "Supplying premium DDGS products for healthy livestock development.",

    applications: [
      "Dairy Farms",
      "Livestock Operations",
      "Feed Distribution",
    ],
  },

  {
    title: "Agricultural Commodities",
    image: agriImage,
    shortDescription: "Reliable commodity sourcing.",
    fullDescription:
      "Providing agricultural products supporting modern farming practices.",

    applications: [
      "Agriculture",
      "Feed Industry",
      "Rural Enterprises",
    ],
  },

  {
    title: "Sustainable Feed Solutions",
    image: feedImage,
    shortDescription: "Environmentally responsible nutrition.",
    fullDescription:
      "Promoting sustainable livestock growth through quality feed products.",

    applications: [
      "Dairy Farming",
      "Poultry",
      "Animal Nutrition",
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
