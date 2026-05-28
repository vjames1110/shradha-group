import BusinessHero from "../../components/business/BusinessHero";
import BusinessOverview from "../../components/business/BusinessOverview";
import FeaturesGrid from "../../components/business/FeaturesGrid";

const features = [
  {
    title: "Hydraulic Systems",
    description:
      "Advanced hydraulic systems for industrial and heavy-duty applications.",
  },

  {
    title: "Authorized Solutions",
    description:
      "Trusted partnership solutions with Wipro Hydraulic Systems.",
  },

  {
    title: "Suspension Excellence",
    description:
      "Hendrickson excellence solutions ensuring reliability and performance.",
  },

  {
    title: "Industrial Support",
    description:
      "Comprehensive maintenance and industrial engineering support.",
  },

  {
    title: "Technical Expertise",
    description:
      "Experienced technical professionals delivering quality engineering services.",
  },

  {
    title: "Reliable Operations",
    description:
      "Efficient and dependable operational support for businesses.",
  },
];

function HydraulicsPage() {
  return (
    <>
      <BusinessHero
        title="Hydraulic Systems & Services"
        subtitle="Industrial hydraulic and suspension solutions for modern engineering operations."
        image="https://images.unsplash.com/photo-1504307651254-35680f356dfd"
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