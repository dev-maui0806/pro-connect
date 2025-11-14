import Header from "@/components/Header";

import LogoTicker from "@/components/LogoTicker";
import ReinventingSection from "@/components/ReinventingSection";
import PCTSection from "@/components/PCTSection";
import TokenAllocation from "@/components/TokenAllocation";
import Roadmap from "@/components/Roadmap";
import OurTeam from "@/components/OurTeam";
import FAQs from "@/components/FAQs";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";

export default function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden relative">
      <Header />
      <img
          src="/images/pyramid.png?width=432"
          alt="ddd"
          style={{zIndex:10}}
          className="absolute top-[4%] sm:top-[5%] lg:top-[6.4%] xl-[6%] left-1/2 -translate-x-1/2 w-[180px] md:w-[232px] lg:w-[262px] h-auto pointer-events-none opacity-80"
          aria-hidden="true"
        />
      <img
          src="/images/Visual.png?width=432"
          alt="ddd"
          style={{zIndex:10}}
          className="absolute top-[3.4%] right-0 md:left-[61%] md:right-auto lg:left-[74.8%]  w-[250px] md:w-[365px] lg:w-[480px] h-auto pointer-events-none opacity-80"
          aria-hidden="true"
      />
      {/* Hero Section with Gradient Background */}
    
      <HeroSection/>
      {/* Logo Ticker Section */}
      <LogoTicker />
      <ReinventingSection/>
      {/* PCT Token Section */}
      <PCTSection/>
      {/* Token Allocation Section */}
      <TokenAllocation/>
      {/* Roadmap Section */}
      <Roadmap/>
      <OurTeam />
      <FAQs />
      <ContactUs />
      <Footer />
    </div>
  );
}
