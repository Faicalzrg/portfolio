import { BsFileEarmarkText, BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const ProjectJourneyFacilities = () => {
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
        Project: A Journey Through Facilities
      </h1>

      {/* ✈️ Introduction */}
      <div className="space-y-4 text-lg text-justify leading-relaxed">
        <p>
          This project was conducted as part of our coursework on Facility Management and Facility Planning.
          It aimed to provide a comprehensive understanding of the various types of facilities encountered
          during a typical international journey.
        </p>
        <p>
          The virtual journey starts in Morocco, with a stopover at Heathrow Airport in London, followed by
          an overnight stay in a nearby hotel, and ends in New York. Each step of the journey highlights
          key facility types that ensure seamless and comfortable travel.
        </p>
        <p>
          The objective was to evaluate the critical role of these facilities – airports, transportation systems,
          hospitality infrastructures, and public services – in delivering operational efficiency, user satisfaction,
          and resilience during travel.
        </p>
      </div>

      {/* 🧱 Objectif du projet + Image */}
      <div className="flex flex-col md:flex-row-reverse gap-8 items-start">
        <img
          src="/portfolio/images/website-img-4.jpeg"
          alt="Facility Airport"
          className="w-full md:w-1/3 rounded-xl border border-gray-600 shadow"
        />
        <div className="md:w-2/3 w-full space-y-4 text-lg text-justify leading-relaxed">
          <h2 className="text-3xl text-orange font-bold">Project Objective</h2>
          <p>
            This immersive project allowed us to observe and reflect on how facilities contribute to comfort,
            continuity, and safety in modern travel. By simulating a real-life scenario, we gained insight into
            planning, design, and maintenance strategies for better facility performance across multiple environments.
          </p>
        </div>
      </div>

      {/* 📄 Bouton centré pour le document */}
      <div className="text-center mt-12">
        <a
          href="https://drive.google.com/file/d/1a3v3E7NmX5THms4ZfBZ8Nbvgv8lXiv59/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-orange text-orange hover:bg-orange hover:text-white px-6 py-2 rounded-full transition"
        >
          <BsFileEarmarkText className="text-xl" />
          View the full journey report
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

export default ProjectJourneyFacilities;
