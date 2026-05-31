import BusinessHero from "../../components/business/BusinessHero";
import BusinessOverview from "../../components/business/BusinessOverview";
import FeaturesGrid from "../../components/business/FeaturesGrid";

const features = [
  {
    title: "Custom Fabrication",
    image: "FABRICATION_IMAGE",
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
    image: "PRECISION_IMAGE",
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
    image: "PROJECT_IMAGE",
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
        image="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122"
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