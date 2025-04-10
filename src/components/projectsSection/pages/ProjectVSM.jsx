import { BsFileEarmarkText, BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const ProjectVSM = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");

    setTimeout(() => {
      const section = document.getElementById("projects");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 font-body text-white space-y-16">
      {/* 🧭 Titre principal */}
      <h1 className="text-6xl text-cyan font-bold text-center mb-10">
        Project: Value Stream Mapping
      </h1>

      {/* 📘 Introduction au VSM */}
      <div className="space-y-4 text-lg text-justify leading-relaxed">
        <p>
          Value Stream Mapping (VSM) is a powerful visual tool used in Lean Management to map out all the steps involved
          in delivering a product or service. It helps organizations visualize the flow of materials and information across
          a process and highlights areas of waste or inefficiency.
        </p>
        <p>
          VSM provides a holistic view of the entire value chain, making it easier to identify non-value-added activities,
          improve workflow, and enhance overall efficiency.
        </p>
      </div>

      {/* 🏛️ Historique */}
      <div className="space-y-4 text-lg text-justify leading-relaxed">
        <h2 className="text-3xl text-orange font-bold">Historical Background</h2>
        <p>
          Value Stream Mapping gained global recognition in 1999 following the publication of the book <strong>“Learning to See”</strong>
          by Mike Rother and John Shook. The method quickly became one of the core tools of Lean manufacturing and Lean office practices.
        </p>
        <p>
          Its clarity, accessibility, and strategic value earned it the <em>Shingo Research and Professional Publication Award</em>,
          affirming its role as an essential pillar of continuous improvement.
        </p>
      </div>

      {/* 🎯 Objectif du projet + Image */}
      <div className="flex flex-col md:flex-row-reverse gap-8 items-start">
        <img
          src="/portfolio/images/website-img-5.jpg"
          alt="Value Stream Map"
          className="w-full md:w-1/3 rounded-xl border border-gray-600 shadow"
        />
        <div className="md:w-2/3 w-full space-y-4 text-lg text-justify leading-relaxed">
          <h2 className="text-3xl text-orange font-bold">Project Objective</h2>
          <p>
            The purpose of this project is to explore how VSM can be used to clearly identify bottlenecks, waiting times,
            over-processing, and redundant steps in business operations. Through a detailed analysis of the current process flow,
            we build a roadmap toward a leaner, more efficient future state.
          </p>
        </div>
      </div>

      {/* 📄 Bouton vers le document */}
      <div className="text-center mt-12">
        <a
          href="https://docs.google.com/presentation/d/1cvMhxkkh-WzYAHEEx0JIGg4Hq4Dx2n5q/edit?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-orange text-orange hover:bg-orange hover:text-white px-6 py-2 rounded-full transition"
        >
          <BsFileEarmarkText className="text-xl" />
          View the full VSM presentation
        </a>
      </div>

      {/* 🔙 Retour avec useNavigate */}
      <div className="text-center mt-6">
        <button
          onClick={handleBackClick}
          className="inline-flex items-center gap-2 text-cyan hover:text-orange font-medium text-base transition"
        >
          <BsArrowLeft className="text-lg" />
          Back to Home page
        </button>
      </div>
    </div>
  );
};

export default ProjectVSM;
