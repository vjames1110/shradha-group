import BusinessHero from "../../components/business/BusinessHero";
import BusinessOverview from "../../components/business/BusinessOverview";
import FeaturesGrid from "../../components/business/FeaturesGrid";

const features = [
  {
    title: "Premium Steel Supply",
    description:
      "High-quality industrial steel products for commercial and engineering applications.",
  },

  {
    title: "Industrial Partnerships",
    description:
      "Reliable partnerships supporting large-scale industrial steel requirements.",
  },

  {
    title: "Allied Engineering",
    description:
      "Integrated engineering support solutions for industrial projects.",
  },

  {
    title: "Bulk Distribution",
    description:
      "Efficient steel procurement and nationwide distribution services.",
  },

  {
    title: "Quality Assurance",
    description:
      "Strict quality standards ensuring reliable industrial-grade materials.",
  },

  {
    title: "Long-Term Reliability",
    description:
      "Trusted steel trading operations focused on business continuity.",
  },
];

function SteelTradingPage() {
  return (
    <>
      <BusinessHero
        title="Steel Trading & Allied Engineering"
        subtitle="Reliable industrial steel trading solutions supporting engineering and infrastructure growth."
        image="https://images.unsplash.com/photo-1517048676732-d65bc937f952"
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