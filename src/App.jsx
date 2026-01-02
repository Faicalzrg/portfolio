import { Routes, Route, useLocation, useNavigationType } from "react-router-dom";
import { useEffect, useRef } from "react";

// --- COMPOSANT DE SCROLL AVANCÉ ---
// Ce composant mémorise la position avant de quitter une page 
// et la restaure uniquement lors d'un retour arrière (POP).
const ScrollToTop = () => {
  const { pathname } = useLocation();
  const navType = useNavigationType();
  const scrollPositions = useRef({});

  useEffect(() => {
    if (navType === "PUSH") {
      // 1. On mémorise la position de la page actuelle avant de changer
      scrollPositions.current[window.location.pathname] = window.scrollY;
      // 2. On remonte tout en haut pour la nouvelle page
      window.scrollTo(0, 0);
    } else if (navType === "POP") {
      // 3. En cas de retour (Back), on récupère la position sauvegardée
      const savedPosition = scrollPositions.current[pathname] || 0;
      // On utilise un micro-délai pour laisser le temps à React de charger le contenu
      setTimeout(() => {
        window.scrollTo({
          top: savedPosition,
          behavior: "instant", // "instant" pour éviter l'effet de glissement visuel
        });
      }, 50);
    }
  }, [pathname, navType]);

  return null;
};

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
import ProjectPMBOK from "./components/projectsSection/pages/ProjectPMBOK"; 

function App() {
  return (
    <>
      <ScrollToTop /> 
      
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
        <Route path="/project/pmbok-framework" element={<ProjectPMBOK />} />
        
        <Route path="*" element={
          <div className="bg-darkBrown min-h-screen text-white p-20 text-center">
            <h1>Page en construction</h1>
          </div>
        } />
      </Routes>
    </>
  );
}

export default App;