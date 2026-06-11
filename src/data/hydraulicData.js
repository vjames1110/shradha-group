import tippingKitCardImage from "../assets/images/services/hydraulics/heroCard.png";

// Tipping section image
import tippingImage1 from "../assets/images/services/hydraulics/dfe-cover.png";
import tippingImage2 from "../assets/images/services/hydraulics/dfe-eye.png";
import tippingImage3 from "../assets/images/services/hydraulics/ubtc.png";

// Spare section Image

import sparePartsCardImage from "../assets/images/services/hydraulics/sparePartsCardImage.png";
import ptoImage from "../assets/images/services/hydraulics/ptoImage.png";
import powerPackImage from "../assets/images/services/hydraulics/powerPacks.png";
import tankImage from "../assets/images/services/hydraulics/hydraulicTanks.png";
import hoseImage from "../assets/images/services/hydraulics/hoses.png";
import adaptorImage from "../assets/images/services/hydraulics/adapters.png";
import cabinValveImage from "../assets/images/services/hydraulics/ccv.png";
import knockOffValveImage from "../assets/images/services/hydraulics/kov.png";
import bodyLockImage from "../assets/images/services/hydraulics/bodyLock.png";
import mountingBracketImage from "../assets/images/services/hydraulics/mb.png";

// Service Network

import serviceNetworkImage from "../assets/images/services/hydraulics/serviceNetwork.png";

// Application Section

import applicationCardImage from "../assets/images/services/hydraulics/applicationCard.png";
import flyAshImage from "../assets/images/services/hydraulics/flyAsh.png";
import coalImage from "../assets/images/services/hydraulics/coalTransportation.png";
import crusherImage from "../assets/images/services/hydraulics/stoneCrusher.png";
import sandImage from "../assets/images/services/hydraulics/sandTransport.png";
import ironImage from "../assets/images/services/hydraulics/ironOre.png";
import commercialImage from "../assets/images/services/hydraulics/commercialTransportation.png";

const hydraulicSolutions = [
  {
    id: "tipping-kits",
    title: "Wipro Tipping Kits",
    image: tippingKitCardImage,

    description:
      "Premium hydraulic tipping solutions for heavy-duty transportation.",

    sliderItems: [
      {
        title:
          "Diamond Front End Telescopic Cylinder - 2 Cover Type",

        image: tippingImage1,

        description:
          "High-performance telescopic cylinder designed for commercial tipping vehicles.",

        applications: [
          "Fly Ash",
          "Coal",
          "Sand",
        ],
      },

      {
        title:
          "Diamond Front End Telescopic Cylinder - 2 Eye Type",

        image: tippingImage2,

        description:
          "Heavy-duty hydraulic solution for demanding transportation environments.",

        applications: [
          "Stone Crusher",
          "Iron Ore",
        ],
      },

      {
        title:
          "Under Body Tipping Cylinder",

        image: tippingImage3,

        description:
          "High strenght precision tubes, outer rams ground, polished and super finished, self-lubricating non-metallic bushes at rod eyes and end covers.",

        applications: [
          "Stone Crusher",
          "Iron Ore",
          "Coal Transport"
        ],
      },
    ],
  },

  {
    id: "spare-parts",

    title: "Spare Parts",

    image: sparePartsCardImage,

    description:
      "Comprehensive hydraulic spare parts inventory.",

    sliderItems: [
      {
        title: "Power Take Off (PTO)",
        image: ptoImage,
        description:
          "Reliable PTO systems for hydraulic applications.",
      },

      {
        title: "Power Packs",
        image: powerPackImage,
        description:
          "Industrial hydraulic power packs.",
      },

      {
        title: "Hydraulic Tanks",
        image: tankImage,
        description: "Seam welded, powder coated, foot strap mounting ranging from 10 to 250 litres.",        
      },

      {
        title: "Hoses",
        image: hoseImage,
        description: "Suction and pressure hoses -1/2, 3/4, 1, 1-1/2,1-3/4 inch sizes",
      },

      {
        title: "Adaptors",
        image: adaptorImage,
        description: "Metric and BSP threads",
      },

      {
        title: "Cabin Control Valve",
        image: cabinValveImage,
        description: "FET-3 position and UBT-4 position air control valves.",
      },

      {
        title: "Knock Off Valve",
        image: knockOffValveImage,
        description: "Pneumatic stroke limiter",
      },

      {
        title: "Body Lock",
        image: bodyLockImage,
        description: "For front end tipper",
      },

      {
        title: "Mounting Brackets",
        image: mountingBracketImage,
        description: "Casting bracket with non-metallic & SG bushing",
      },
    ],
  },

  {
    id: "service-network",

    title: "Service Network",

    image: serviceNetworkImage,

    description:
      "Extensive service support network spanning over 40 locations across India ensuring rapid assistance, maintenance support and genuine spare parts availability.",

    states: [
      "Chhattisgarh",
      "Madhya Pradesh",
      "Maharashtra",
      "Odisha",
      "Jharkhand",
      "Rajasthan",
      "Gujarat",
    ],
  },

  {
    id: "applications",

    title: "Applications",

    image: applicationCardImage,

    description:
      "Industries and operations served by our hydraulic solutions.",

    sliderItems: [
      {
        title: "Fly Ash Transportation",
        image: flyAshImage,
        description: "Hydraulic tipping solutions used for bulk fly ash transportation",
      },

      {
        title: "Coal Transportation",
        image: coalImage,
        description: "Hydraulic tipping solutions used for coal transportation",
      },

      {
        title: "Stone Crusher",
        image: crusherImage,
        description: "Hydraulic tipping solutions used for stone crushing and loading solutions",
      },

      {
        title: "Sand Transportation",
        image: sandImage,
        description: "Hydraulic tipping loading and excavation solutions for Sand Transportation",
      },

      {
        title: "Iron Ore Transportation",
        image: ironImage,
        description: "Hydraulic tipping solutions used for bulk iron ore transportation",
      },

      {
        title: "Commercial Transportation",
        image: commercialImage,
        description: "Hydraulic tipping solutions used for commercial & line transportation",
      },
    ],
  },
];

export default hydraulicSolutions;
