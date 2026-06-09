import BusinessHero from "../../components/business/BusinessHero";
import BusinessOverview from "../../components/business/BusinessOverview";
import FeaturesGrid from "../../components/business/FeaturesGrid";

import hydraulicImage from "../../assets/images/services/hydraulics/hydraulic-system.webp"
import authorizedImage from "../../assets/images/services/hydraulics/authorized-solutions.webp"
import suspensionImage from "../../assets/images/services/hydraulics/suspension.webp"

import wiproAuthorizedImage from "../../assets/images/services/hydraulics/wiproAuthorized.png";



const features = [
  {
    title: "Hydraulic Systems",

    image: hydraulicImage,

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

    image: authorizedImage,

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

    image: suspensionImage,

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
        title="Hydraulics & Axel"
        subtitle="Industrial hydraulic and suspension solutions for modern engineering operations."
        image={wiproAuthorizedImage}
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
