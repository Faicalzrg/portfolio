import { Routes, Route } from "react-router-dom";

// Sections Home
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

// Pages Projets
import ProjectBIM from "./components/projectsSection/pages/ProjectBIM";
import ProjectMES from "./components/projectsSection/pages/ProjectMES";
import ProjectDarAsSikkah from "./components/projectsSection/pages/ProjectDarAsSikkah";
import ProjectPredictive from "./components/projectsSection/pages/ProjectPredictive";
import ProjectISO55000 from "./components/projectsSection/pages/ProjectISO55000"; 
import ProjectVSM from "./components/projectsSection/pages/ProjectVSM"; 
import ProjectA3Thinking from "./components/projectsSection/pages/ProjectA3Thinking";
import ProjectPMBOK from "./components/projectsSection/pages/ProjectPMBOK"; // ✅ 1. L'IMPORT ICI

function App() {
  return (
    <Routes>
      <Route path="/" element={
          <main className="font-body text-white relative overflow-hidden bg-darkBrown">
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
      } />

      {/* Routes Pro & Académiques */}
      <Route path="/project/cmms-deployment" element={<ProjectDarAsSikkah />} />
      <Route path="/project/mes-integration" element={<ProjectMES />} />
      <Route path="/project/predictive-maintenance" element={<ProjectPredictive />} />
      <Route path="/project/project-bim" element={<ProjectBIM />} />
      <Route path="/project/project-iso55000" element={<ProjectISO55000 />} />
      <Route path="/project/project-vsm" element={<ProjectVSM />} />
      <Route path="/project/project-a3-thinking" element={<ProjectA3Thinking />} />

      {/* ✅ 2. LA ROUTE ICI (Vérifiez que le lien dans ProjectsMain est bien "/project/pmbok-framework") */}
      <Route path="/project/pmbok-framework" element={<ProjectPMBOK />} />
      
      <Route path="*" element={<div className="bg-darkBrown min-h-screen text-white p-20 text-center"><h1>Page en construction</h1></div>} />
    </Routes>
  );
}

export default App;