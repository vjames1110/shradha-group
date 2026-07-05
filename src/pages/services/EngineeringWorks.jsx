import BusinessHero from "../../components/business/BusinessHero";
import BusinessOverview from "../../components/business/BusinessOverview";
import EngineeringCapabilities from "../../components/business/engineering/EngineeringCapabilities";
import EngineeringProcess from "../../components/business/engineering/EngineeringProcess";
import EngineeringSolutions from "../../components/business/engineering/EngineeringSolutions";
import EquipmentHandled from "../../components/business/engineering/EquipmentHandled";

import fabricationImage from "../../assets/images/services/engineering/fabrication.jpg";


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

      <EngineeringCapabilities />

      <EngineeringSolutions />

      <EquipmentHandled />

      <EngineeringProcess />

    </>
  );
}

export default EngineeringWorks;
