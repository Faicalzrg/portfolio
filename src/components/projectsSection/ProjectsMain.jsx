import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

// 1. Réalisations Professionnelles (Basées sur ton expérience à Bank Al-Maghrib)
const professionalAchievements = [
  {
    name: "Industrial CMMS Deployment",
    year: "Reduced equipment downtime by 15% at Dar As-Sikkah",
    align: "right",
    image: "/portfolio/images/website-img.jpg", 
    internalLink: "/project/cmms-deployment",
  },
  {
    name: "MES System Integration",
    year: "Optimized production flow by 20% through real-time monitoring",
    align: "left",
    image: "/portfolio/images/mes-dashboard-ui.png",
    internalLink: "/project/mes-integration",
  },
  {
    name: "Predictive Maintenance Strategy",
    year: "Implementation of Vibration Analysis & Thermography",
    align: "right",
    image: "/portfolio/images/website-img-3.jpg",
    internalLink: "/project/predictive-maintenance",
  },
];

// 2. Projets d'Études et Académiques
const academicProjects = [
  {
    name: "Project BIM & Power BI",
    year: "Leveraging Revit Data for Analytical Visualization",
    align: "left",
    image: "/portfolio/images/website-img-1.jpg",
    internalLink: "/project/project-bim",
  },
  {
    name: "The ISO 55000 standard",
    year: "Optimizing asset management with ISO 55000",
    align: "right",
    image: "/portfolio/images/ISO_55000_2.png",
    internalLink: "/project/project-iso55000",
  },
  {
    name: "Value Stream Mapping",
    year: "Streamlining processes for maximum efficiency",
    align: "left",
    image: "/portfolio/images/website-img-5.jpg",
    internalLink: "/project/project-vsm",
  },
  {
    name: "A3 thinking",
    year: "Structured problem-solving (Lean Management)",
    align: "right",
    image: "/portfolio/images/A3 thinking.png",
    internalLink: "/project/project-a3-thinking",
  },
  // ✅ AJOUT DU PROJET PMBOK ICI
  {
    name: "PMBOK Framework",
    year: "Standardized Project Management Methodology",
    align: "left",
    image: "/portfolio/images/pmbok-framework.png",
    internalLink: "/project/pmbok-framework",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>

      {/* SECTION : PROFESSIONAL ACHIEVEMENTS */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-cyan-500 mb-10 uppercase tracking-widest text-center">
          Professional Achievements
        </h2>
        <div className="flex flex-col gap-20 max-w-[900px] mx-auto">
          {professionalAchievements.map((project, index) => (
            <SingleProject
              key={index}
              {...project}
            />
          ))}
        </div>
      </div>

      <div className="flex items-center my-20">
        <hr className="flex-grow border-t-2 border-gray-700" />
        <span className="px-4 text-gray-500 italic text-sm">Academic Journey</span>
        <hr className="flex-grow border-t-2 border-gray-700" />
      </div>

      {/* SECTION : ACADEMIC PROJECTS */}
      <div className="pb-20">
        <h2 className="text-xl font-semibold text-gray-400 mb-10 text-center">
          Academic & Technical Projects
        </h2>
        <div className="flex flex-col gap-20 max-w-[900px] mx-auto">
          {academicProjects.map((project, index) => (
            <SingleProject
              key={index}
              {...project}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsMain;