import BusinessHero from "../../components/business/BusinessHero";
import BusinessOverview from "../../components/business/BusinessOverview";
import FeaturesGrid from "../../components/business/FeaturesGrid";

const features = [
  {
    title: "Industrial Fabrication",
    description:
      "Precision fabrication services for industrial engineering operations.",
  },

  {
    title: "Custom Engineering",
    description:
      "Tailored engineering solutions designed for industrial businesses.",
  },

  {
    title: "Mechanical Expertise",
    description:
      "Advanced mechanical support and engineering consultation services.",
  },

  {
    title: "Plant Infrastructure",
    description:
      "Engineering systems supporting industrial infrastructure development.",
  },

  {
    title: "Manufacturing Support",
    description:
      "Reliable manufacturing and fabrication assistance for projects.",
  },

  {
    title: "Technical Precision",
    description:
      "Accurate and efficient engineering execution for industrial applications.",
  },
];

function EngineeringWorks() {
  return (
    <>
      <BusinessHero
        title="Engineering & Fabrication Works"
        subtitle="Precision engineering and industrial fabrication solutions built for reliability and performance."
        image="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122"
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