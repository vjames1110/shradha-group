import BusinessHero from "../../components/business/BusinessHero";
import BusinessOverview from "../../components/business/BusinessOverview";
import FeaturesGrid from "../../components/business/FeaturesGrid";

import fleetImage from "../../assets/images/services/transport/fleet-trasnportation.webp"
import panIndiaImage from "../../assets/images/services/transport/pan-India.webp"
import scmImage from "../../assets/images/services/transport/supply-chain.webp"

import transportImage from "../../assets/images/services/transport/transport.jpg";


const features = [
  {
    title: "Fleet Transportation",
    image: fleetImage,
    shortDescription: "Reliable logistics solutions.",
    fullDescription:
      "Professional transportation services supporting industrial and commercial operations.",

    applications: [
      "Industrial Goods",
      "Construction Materials",
      "Commercial Logistics",
    ],
  },

  {
    title: "Pan India Logistics",
    image: panIndiaImage,
    shortDescription: "Nationwide delivery network.",
    fullDescription:
      "Efficient logistics management ensuring timely deliveries across India.",

    applications: [
      "Manufacturing",
      "Distribution",
      "Supply Chains",
    ],
  },

  {
    title: "Supply Chain Support",
    image: scmImage,
    shortDescription: "Optimized transportation planning.",
    fullDescription:
      "Supporting business operations through efficient supply chain logistics.",

    applications: [
      "Warehousing",
      "Industrial Operations",
      "Commercial Trade",
    ],
  },
];

function TransportPage() {
  return (
    <>
      <BusinessHero
        title="Transport & Logistics Services"
        subtitle="Efficient industrial transport and logistics solutions supporting business continuity."
        image={transportImage}
        highlights={[
          "Pan India Logistics",
          "On-Time Deliveries",
          "Fleet-Management"
        ]}
      />

      <BusinessOverview
        heading="Reliable Transport & Logistics Operations"
        description="Shradha Group delivers dependable transportation services helping industries maintain smooth logistics operations and efficient supply chain management."
      />

      <FeaturesGrid features={features} />
    </>
  );
}

export default TransportPage;