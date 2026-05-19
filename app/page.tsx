import HeroBanner from "./components/HeroBanner";
import HeroHeading from "./components/HeroHeading";
import InfoBox from "./components/InfoBox";
import SocialLinks from "./components/SocialLinks";
import StripedBox from "./components/StripedBox";
import AboutSection from "./components/AboutSection";
import Heading from "./components/layout/Heading";
import StackBox from "./components/StackBox";
import ProjectsSection from "./components/ProjectsSection";
import EducationSection from "./components/EducationSetion";
import Footer from "./components/layout/Footer";
import ScrollToHash from "./components/ScrollToHash";
import HiddenFooter from "./components/layout/HiddenFooter";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg1 dark:bg-black">
      <Suspense fallback={null}>
      <ScrollToHash />
      </Suspense>
      {/* HeroBanner */}
      <div className="w-full border-b">
        <HeroBanner />
      </div>

      {/* HeroHeading */}
      <div className="w-full border-b">
        <HeroHeading />
      </div>

      <StripedBox />

      {/* InfoBox */}
      <div className="w-full border-b">
        <InfoBox />
      </div>

      {/* Social Links */}
      <div className="w-full h-fit border-b">
        <SocialLinks />
      </div>

      <StripedBox />

      {/* About Heading */}
      <div id="about" className="scroll-mt-20">
        <Heading name="About" />
      </div>

      {/* About Section */}
      <div className="w-full border-b">
        <AboutSection />
      </div>

      <StripedBox />

      <Heading name="Stack" />

      <div className="w-full border-b">
        <StackBox />
      </div>

      <StripedBox />

      <div id="projects" className="scroll-mt-20">
        <ProjectsSection />
      </div>

      <StripedBox />

      <div id="education" className="scroll-mt-20">
        <Heading name="Education" />
      </div>

      <div className="w-full border-b h-fit">
        <EducationSection />
      </div>

      <StripedBox />


      <Footer />
      <HiddenFooter />

    </main>
  );
}
