import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Project BIM & Power BI",
    year: "Leveraging Revit Data for Analytical Visualization",
    align: "right",
    image: "/portfolio/images/website-img-1.jpg",
    internalLink: "/project/project-bim",
  },
  {
    name: "The ISO 55000 standard",
    year: "Optimizing asset management with ISO 55000",
    align: "left",
    image: "/portfolio/images/website-img-2.jpeg",
    internalLink: "/project/project-iso55000",
  },
  {
    name: "Optimizing Time and Motion Studies",
    year: "Enhancing efficiency through predetermined methods",
    align: "right",
    image: "/portfolio/images/website-img-3.jpg",
    internalLink: "/project/project-time-motion",
  },
  {
    name: "A Journey Through Facilities",
    year: "Exploring the world of facilities management",
    align: "left",
    image: "/portfolio/images/website-img-4.jpeg",
    internalLink: "/project/project-journey-facilities",
  },
  {
    name: "Value Stream Mapping",
    year: "Streamlining processes for maximum efficiency",
    align: "right",
    image: "/portfolio/images/website-img-5.jpg",
    internalLink: "/project/project-vsm",
  },
  {
    name: "A3 thinking",
    year: "Structured problem-solving",
    align: "left",
    image: "/portfolio/images/A3 thinking.png",
    internalLink: "/project/project-a3-thinking",
  },
  {
    name: "Poka yoke",
    year: "Error-prevention design",
    align: "right",
    image: "/portfolio/images/Poka yoke.jpg",
    internalLink: "/project/project-poka-yoke",
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
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => (
          <SingleProject
            key={index}
            name={project.name}
            year={project.year}
            align={project.align}
            image={project.image}
            link={project.link} // optionnel si certains projets sont externes
            internalLink={project.internalLink} // ✅ AJOUTÉ ICI
          />
        ))}
      </div>
      <hr className="border-t-2 border-gray-500 my-10 w-full" />
    </div>
  );
};

export default ProjectsMain;
