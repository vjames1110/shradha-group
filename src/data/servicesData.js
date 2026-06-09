import wiproAuthorizedImage from "../assets/images/services/hydraulics/wiproAuthorized.png";
import steelTradingImage from "../assets/images/services/steel/steel-trading.jpg";
import fabricationImage from "../assets/images/services/engineering/fabrication.jpg";
import transportImage from "../assets/images/services/transport/transport.jpg";
import cattlefeedImage from "../assets/images/services/cattlefeed/cattlefeed.jpg";

const servicesData = [
  {
    id: 1,
    title: "Hydraulic Systems",
    description:
      "Authorized solutions for Wipro Hydraulic Systems and Hendrickson excellence services.",
    link: "/services/hydraulics",

    image:
      wiproAuthorizedImage,
  },

  {
    id: 2,
    title: "Steel Trading",
    description:
      "Industrial steel trading and allied engineering solutions.",
    link: "/services/steel-trading",

    image:
      steelTradingImage,
  },

  {
    id: 3,
    title: "Engineering Works",
    description:
      "Industrial fabrication and precision engineering services.",
    link: "/services/engineering-works",

    image:
      fabricationImage,
  },

  {
    id: 4,
    title: "Transport Services",
    description:
      "Reliable industrial logistics and transportation solutions.",
    link: "/services/transport",

    image:
      transportImage,
  },

  {
    id: 5,
    title: "Cattle Feed Supply",
    description:
      "Premium DDGS cattle feed supply for sustainable livestock growth.",
    link: "/services/cattle-feed",

    image:
      cattlefeedImage,
  },
];

export default servicesData;