import BusinessHero from "../../components/business/BusinessHero";
import BusinessOverview from "../../components/business/BusinessOverview";
import FeaturesGrid from "../../components/business/FeaturesGrid";

const features = [
  {
    title: "Structural Steel Supply",
    image: "STEEL_IMAGE",
    shortDescription: "Premium steel distribution.",
    fullDescription:
      "Supplying high-quality structural steel products for industrial and infrastructure projects.",

    applications: [
      "Industrial Construction",
      "Warehouses",
      "Infrastructure",
    ],
  },

  {
    title: "Bulk Industrial Orders",
    image: "BULK_STEEL_IMAGE",
    shortDescription: "Large-scale steel procurement.",
    fullDescription:
      "Reliable sourcing and distribution for large industrial requirements.",

    applications: [
      "Factories",
      "Engineering Projects",
      "Industrial Expansion",
    ],
  },

  {
    title: "Allied Engineering Support",
    image: "ENGINEERING_STEEL_IMAGE",
    shortDescription: "Technical steel solutions.",
    fullDescription:
      "Engineering support ensuring optimal steel selection and application.",

    applications: [
      "Industrial Design",
      "Project Planning",
      "Fabrication",
    ],
  },
];

function SteelTradingPage() {
  return (
    <>
      <BusinessHero
        title="Steel Trading & Allied Engineering"
        subtitle="Reliable industrial steel trading solutions supporting engineering and infrastructure growth."
        image="https://images.unsplash.com/photo-1517048676732-d65bc937f952"
        highlights={[
          "Steel Supply",
          "Bulk Industrial Supply",
          "Reliable Distribution"
        ]}
      />

      <BusinessOverview
        heading="Reliable Industrial Steel Solutions"
        description="Shradha Group delivers dependable steel trading and engineering support services helping industries achieve operational efficiency, project reliability, and long-term industrial growth."
      />


      <FeaturesGrid features={features} />
    </>
  );
}

export default SteelTradingPage;