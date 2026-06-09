import BusinessHero from "../../components/business/BusinessHero";
import BusinessOverview from "../../components/business/BusinessOverview";
import FeaturesGrid from "../../components/business/FeaturesGrid";

import customFabricationImage from "../../assets/images/services/engineering/custom-fabrication.webp"
import precisionEngImage from "../../assets/images/services/engineering/precision-engineering.webp"
import industrialProjectsImage from "../../assets/images/services/engineering/industrial-projects.webp"

import fabricationImage from "../../assets/images/services/engineering/fabrication.jpg";


const features = [
  {
    title: "Custom Fabrication",
    image: customFabricationImage,
    shortDescription: "Tailored industrial fabrication.",
    fullDescription:
      "Custom fabrication solutions built according to project specifications.",

    applications: [
      "Industrial Plants",
      "Machinery Components",
      "Infrastructure Projects",
    ],
  },

  {
    title: "Precision Engineering",
    image: precisionEngImage,
    shortDescription: "High-accuracy engineering.",
    fullDescription:
      "Engineering services focused on precision, efficiency, and durability.",

    applications: [
      "Manufacturing",
      "Industrial Systems",
      "Automation",
    ],
  },

  {
    title: "Industrial Projects",
    image: industrialProjectsImage,
    shortDescription: "End-to-end project execution.",
    fullDescription:
      "Comprehensive engineering project planning and execution services.",

    applications: [
      "Factories",
      "Processing Plants",
      "Infrastructure",
    ],
  },
];

function EngineeringWorks() {
  return (
    <>
      <BusinessHero
        title="Engineering & Fabrication Works"
        subtitle="Precision engineering and industrial fabrication solutions built for reliability and performance."
        image={fabricationImage}
        highlights={[
          "Custom Fabrication",
          "Precision Engineering",
          "Industrial Projects"
        ]}
      />

      <BusinessOverview
        heading="Engineering Excellence & Fabrication Expertise"
        description="Shradha Group provides industrial engineering and fabrication services delivering precision-driven manufacturing support and operational excellence across multiple sectors."
      />

      <FeaturesGrid features={features} />
    </>
  );
}

export default EngineeringWorks;