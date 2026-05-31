import BusinessHero from "../../components/business/BusinessHero";
import BusinessOverview from "../../components/business/BusinessOverview";
import FeaturesGrid from "../../components/business/FeaturesGrid";

const features = [
  {
    title: "Hydraulic Systems",

    image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c",

    shortDescription: "Industrial hydraulic solutions.",

    fullDescription:
      "Advanced hydraulic systems designed for heavy industrial applications, ensuring efficiency, reliability, and operational excellence.",

    applications: [
      "Mining Equipment",
      "Manufacturing Plants",
      "Infrastructure Projects",
    ],
  },

  {
    title: "Authorized Solutions",

    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952",

    shortDescription: "Trusted hydraulic partnerships.",

    fullDescription:
      "Authorized hydraulic support and engineering solutions backed by trusted industrial partnerships.",

    applications: [
      "OEM Support",
      "Industrial Operations",
      "Technical Services",
    ],
  },

  {
    title: "Suspension Excellence",

    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",

    shortDescription: "Reliable suspension technology.",

    fullDescription:
      "Premium suspension solutions enhancing vehicle stability and operational performance.",

    applications: [
      "Commercial Vehicles",
      "Heavy Equipment",
      "Logistics Fleets",
    ],
  },
];

function HydraulicsPage() {
  return (
    <>
      <BusinessHero
        title="Hydraulic Systems & Services"
        subtitle="Industrial hydraulic and suspension solutions for modern engineering operations."
        image="https://images.unsplash.com/photo-1504307651254-35680f356dfd"
        highlights={[
          "Wipro Authorized Solutions",
          "Hendrickson Excellence",
          "24/7 Technical Support",
        ]}
      />

      <BusinessOverview
        heading="Industrial Hydraulic Excellence"
        description="Shradha Group delivers reliable hydraulic systems and industrial engineering support through trusted partnerships and high-quality technical expertise tailored for modern industrial applications."
      />

      <FeaturesGrid features={features} />
    </>
  );
}

export default HydraulicsPage;
