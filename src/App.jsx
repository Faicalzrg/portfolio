import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

// 🌟 Sections de la page principale
import NavbarMain from "./components/navbar/NavbarMain";
import HeroMain from "./components/heroSection/HeroMain";
import HeroGradient from "./components/heroSection/HeroGradient";
import SubHeroMain from "./components/subHeroSection/SubHeroMain";
import AboutMeMain from "./components/aboutMeSection/AboutMeMain";
import SkillsMain from "./components/skillsSection/SkillsMain";
import SubSkills from "./components/skillsSection/SubSkills";
import ExperienceMain from "./components/experienceSection/ExperienceMain";
import ProjectsMain from "./components/projectsSection/ProjectsMain";
import CertificationsMain from "./components/certificationsSection/CertificationsMain";
import ContactMeMain from "./components/contactMeSection/ContactMeMain";
import FooterMain from "./components/footer/FooterMain";
import IndustrialSection from "./components/IndustrialSection";

// 📄 Pages projets individuelles
import ProjectBIM from "./components/projectsSection/pages/ProjectBIM";
import ProjectPokaYoke from "./components/projectsSection/pages/ProjectPokaYoke";
import ProjectVSM from "./components/projectsSection/pages/ProjectVSM";
import ProjectISO55000 from "./components/projectsSection/pages/ProjectISO55000";
import ProjectA3Thinking from "./components/projectsSection/pages/ProjectA3Thinking";
import ProjectTimeMotion from "./components/projectsSection/pages/ProjectTimeMotion";
import ProjectJourneyFacilities from "./components/projectsSection/pages/ProjectJourneyFacilities";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* 🏠 Page d'accueil avec toutes les sections */}
        <Route
          path="/"
          element={
            <main className="font-body text-white relative overflow-hidden">
              <NavbarMain />
              <HeroMain />
              <HeroGradient />
              <SubHeroMain />
              <AboutMeMain />
              <IndustrialSection />
              <SkillsMain />
              <SubSkills />
              <ExperienceMain />
              <ProjectsMain />
              <CertificationsMain />
              <ContactMeMain />
              <FooterMain />
            </main>
          }
        />

        {/* 🔗 Pages projets individuelles */}
        <Route path="/project/project-bim" element={<ProjectBIM />} />
        <Route path="/project/project-poka-yoke" element={<ProjectPokaYoke />} />
        <Route path="/project/project-vsm" element={<ProjectVSM />} />
        <Route path="/project/project-iso55000" element={<ProjectISO55000 />} />
        <Route path="/project/project-a3-thinking" element={<ProjectA3Thinking />} />
        <Route path="/project/project-time-motion" element={<ProjectTimeMotion />} />
        <Route path="/project/project-journey-facilities" element={<ProjectJourneyFacilities />} />
      </Routes>
    </>
  );
}

export default App;
