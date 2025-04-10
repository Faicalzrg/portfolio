import { BsFileEarmarkText, BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const ProjectBIM = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");

    // Scroll jusqu'à la section "projects" après un court délai
    setTimeout(() => {
      const section = document.getElementById("projects");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 font-body text-white space-y-20">
      {/* Titre principal */}
      <h1 className="text-6xl text-cyan font-bold text-center mb-10">
        Project BIM & Power BI
      </h1>

      {/* 🔹 Introduction IAM + image + texte + vidéo */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
        <img
          src="/portfolio/images/iam.png"
          alt="IAM Logo"
          className="w-32 h-32 object-contain"
        />
        <div className="space-y-4">
          <p className="text-justify text-sm text-gray-300">
            During our studies in industrial engineering, we had a dedicated module on <strong>Asset Planning</strong> and <strong>Asset Management</strong>. 
            This project on BIM and Power BI is a perfect application of what we learned about data-driven infrastructure management.
          </p>
          <p className="text-justify text-sm text-gray-300">
            In this context, we were introduced to the <strong>Institute of Asset Management (IAM)</strong>, a leading professional body for asset management. 
            The IAM promotes best practices in managing physical assets throughout their lifecycle and provides tools and certifications widely used in industry.
          </p>
          <p className="text-sm">
            🔗 Visit IAM:{" "}
            <a
              href="https://theiam.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan underline"
            >
              theiam.org
            </a>
          </p>
        </div>
      </div>

      {/* Vidéo YouTube intégrée */}
      <div className="w-full flex justify-center">
        <iframe
          className="w-full md:w-[80%] h-64 md:h-96 rounded-xl shadow-lg"
          src="https://www.youtube.com/embed/hprZAE6cgVA?start=182"
          title="BIM & Asset Management"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Section Revit */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
        <img
          src="/portfolio/images/Revit.png"
          alt="Revit Icon"
          className="w-24 h-24 object-contain"
        />
        <div>
          <h2 className="text-3xl text-orange font-bold mb-2">Autodesk Revit</h2>
          <p className="text-justify">
            Revit is a Building Information Modeling (BIM) software developed by Autodesk. It enables architects,
            engineers, and construction professionals to design, visualize, and simulate building structures in
            a digital environment. Revit provides rich data embedded in its models, making it ideal for integration
            with data analysis platforms.
          </p>
        </div>
      </div>

      {/* Section Power BI */}
      <div className="flex flex-col md:flex-row-reverse items-start md:items-center gap-8">
        <img
          src="/portfolio/images/Power-BI.png"
          alt="Power BI Icon"
          className="w-32 h-auto rounded-md"
        />
        <div>
          <h2 className="text-3xl text-orange font-bold mb-2">Microsoft Power BI</h2>
          <p className="text-justify">
            Power BI is a powerful business analytics service by Microsoft that allows users to visualize and
            share insights from their data. When combined with BIM data extracted from Revit, Power BI enables
            interactive dashboards that help stakeholders better understand building performance, maintenance needs,
            and cost tracking.
          </p>
        </div>
      </div>

      {/* Project Objective */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
        <img
          src="/portfolio/images/website-img-1.png"
          alt="BIM Power BI Visual"
          className="w-full md:w-[35%] rounded-xl shadow border"
        />
        <div className="md:w-[65%]">
          <h2 className="text-3xl text-orange font-bold mb-2">Project Objective</h2>
          <p className="text-justify">
            The main goal of this project is to highlight the benefit of combining Revit with Power BI to exploit
            construction and facility data efficiently. By transforming 3D model data into structured, interactive
            dashboards, this integration enables facility managers and maintenance planners to make smarter decisions
            regarding asset performance and interventions.
          </p>
        </div>
      </div>

      {/* 📄 Bouton vers le document */}
      <div className="text-center mt-12">
        <a
          href="https://docs.google.com/presentation/d/1FEeVY2b-t_ovS9bHj-3mc83DZfVBM2cn/edit?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-orange text-orange hover:bg-orange hover:text-white px-6 py-2 rounded-full transition"
        >
          <BsFileEarmarkText className="text-xl" />
          View Full Project Document
        </a>
      </div>

      {/* Retour amélioré avec scroll vers section projets */}
      <div className="text-center mt-8">
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

export default ProjectBIM;
