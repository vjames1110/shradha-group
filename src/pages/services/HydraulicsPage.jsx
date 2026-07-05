import HydraulicSolutions from "../../components/business/hydraulics/HydraulicSolutions"

import BusinessHero from "../../components/business/BusinessHero";
import BusinessOverview from "../../components/business/BusinessOverview";

// import hydraulicImage from "../../assets/images/services/hydraulics/hydraulic-system.webp"
// import authorizedImage from "../../assets/images/services/hydraulics/authorized-solutions.webp"
// import suspensionImage from "../../assets/images/services/hydraulics/suspension.webp"

import hydraulicHeroImage from "../../assets/images/services/hydraulics/hydraulic-system.webp"



function HydraulicsPage() {
  return (
    <>
      <BusinessHero
        title="Hydraulics Systems & Solutions"
        subtitle="Industrial hydraulic and suspension solutions for modern engineering operations."
        image={hydraulicHeroImage}
        highlights={[
          "Wipro Hydraulic Systems",
          "40+ Service Locations",
          "Genuine Spare Parts",
        ]}
      />

      <BusinessOverview
        heading="Industrial Hydraulic Excellence"
        description="Shradha Group provides complete hydraulic tipping solutions including Wipro Tipping Kits, hydraulic spare parts, installation support, maintenance services and nationwide service assistance. Our solutions are trusted across mining, infrastructure, construction, fly ash transportation, coal logistics and commercial transportation industries."
      />

      <HydraulicSolutions />
    </>
  );
}

export default HydraulicsPage;
