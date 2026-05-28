import BusinessHero from "../../components/business/BusinessHero";
import BusinessOverview from "../../components/business/BusinessOverview";
import FeaturesGrid from "../../components/business/FeaturesGrid";

const features = [
  {
    title: "Industrial Logistics",
    description:
      "Reliable logistics and transportation solutions for industrial operations.",
  },

  {
    title: "Fleet Operations",
    description:
      "Efficient fleet management ensuring timely business deliveries.",
  },

  {
    title: "Supply Chain Support",
    description:
      "Integrated transportation systems supporting industrial supply chains.",
  },

  {
    title: "Nationwide Services",
    description:
      "Transportation solutions serving multiple industrial regions.",
  },

  {
    title: "Operational Reliability",
    description:
      "Consistent and dependable logistics management services.",
  },

  {
    title: "Business Efficiency",
    description:
      "Transport systems designed for operational productivity and growth.",
  },
];

function TransportPage() {
  return (
    <>
      <BusinessHero
        title="Transport & Logistics Services"
        subtitle="Efficient industrial transport and logistics solutions supporting business continuity."
        image="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3"
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