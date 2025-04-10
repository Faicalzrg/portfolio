import { BsFileEarmarkText, BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const ProjectISO55000 = () => {
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
      {/* Titre principal */}
      <h1 className="text-6xl text-cyan font-bold text-center mb-10">
        The ISO 55000 Standard
      </h1>

      {/* Section 1 : What is ISO 55000 */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
        <img
          src="/portfolio/images/ISO55000.png"
          alt="ISO 55000 Icon"
          className="w-48 h-48 object-contain"
        />
        <div>
          <h2 className="text-3xl text-orange font-bold mb-2">What is ISO 55000?</h2>
          <p className="text-justify text-lg leading-relaxed">
            ISO 55000 is an international standard focused on asset management. It provides guidelines for establishing,
            implementing, maintaining, and improving an effective asset management system. It is applicable to all types of
            assets and organizations of all sizes.
          </p>
        </div>
      </div>

      {/* Section 2 : Asset Management */}
      <div className="space-y-4 text-lg text-justify leading-relaxed">
        <h2 className="text-3xl text-orange font-bold">Asset Management</h2>
        <p>
          Asset management is a coordinated activity to realize value from assets. This involves balancing costs, risks,
          opportunities, and performance throughout the asset lifecycle. The ISO 55000 framework helps organizations make
          informed decisions that align with their strategic objectives.
        </p>
      </div>

      {/* Section 3 : Project Objective + image */}
      <div className="flex flex-col md:flex-row-reverse gap-8 items-start">
        <img
          src="/portfolio/images/website-img-2.jpeg"
          alt="Asset Management Visual"
          className="w-full md:w-1/3 rounded-xl border border-gray-600 shadow"
        />
        <div className="md:w-2/3 w-full space-y-4 text-lg text-justify leading-relaxed">
          <h2 className="text-3xl text-orange font-bold">Project Objective</h2>
          <p>
            The purpose of this project is to demonstrate how implementing ISO 55000 improves operational efficiency,
            risk control, and asset performance. The goal is to align maintenance and asset management with international
            best practices to ensure long-term value creation.
          </p>
        </div>
      </div>

      {/* ✅ Bouton document */}
      <div className="text-center mt-12">
        <a
          href="https://docs.google.com/presentation/d/1z_JzJeFLftgS7E2W7tL6VL8998uEa1cu/edit?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-orange text-orange hover:bg-orange hover:text-white px-6 py-2 rounded-full transition"
        >
          <BsFileEarmarkText className="text-xl" />
          View the full ISO 55000 document
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

export default ProjectISO55000;
