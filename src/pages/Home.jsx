import HeroSection from "../components/home/HeroSection";
import DirectorMessage from "../components/home/DirectorMessage";
import ServicesSection from "../components/home/ServicesSection";
import PageTransition from "../components/common/PageTransition";
import KPISection from "../components/home/KPISection";

function Home() {
  return (
    <>
      <PageTransition>
        <HeroSection />
        <DirectorMessage />
        <ServicesSection />
        <KPISection />
      </PageTransition>
    </>
  );
}

export default Home;
