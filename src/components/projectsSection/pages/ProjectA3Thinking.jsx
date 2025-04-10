import { BsFileEarmarkText, BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const ProjectA3Thinking = () => {
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
        Project: A3 Thinking Application
      </h1>

      {/* Intro */}
      <p className="text-lg text-justify leading-relaxed">
        A3 Thinking is a structured problem-solving and continuous improvement approach rooted in Lean Management.
        It involves identifying a problem, analyzing its root causes, proposing countermeasures, and implementing
        solutions — all summarized on a single A3-sized sheet.
      </p>

      {/* Section Case Study */}
      <div className="space-y-4 text-lg text-justify leading-relaxed">
        <h2 className="text-3xl text-orange font-bold">Case Study: TGV France</h2>
        <p>
          In this project, we applied the A3 Thinking methodology to a real-world case involving the French high-speed
          train (TGV). The analysis is based on the following video, which highlights several recurring issues observed
          by passengers and professionals:
        </p>
        <ul className="list-disc ml-6 space-y-1">
          <li>Overcrowded trains and lack of space</li>
          <li>Frequent delays and maintenance issues</li>
          <li>Complicated and expensive ticket pricing</li>
          <li>Poor communication during disruptions</li>
        </ul>
      </div>

      {/* Bloc vidéo + texte côte à côte */}
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="md:w-1/3 w-full rounded-xl overflow-hidden shadow-lg border border-gray-600">
          <iframe
            className="w-full aspect-video"
            src="https://www.youtube.com/embed/uHXAn_Unl2s"
            title="TGV Case Study"
            frameBorder="0"
            allowFullScreen
          />
        </div>

        <div className="md:w-2/3 w-full space-y-4 text-lg text-justify leading-relaxed">
          <p>
            This video served as the primary source for our A3 analysis. It allowed us to observe real operational
            problems and apply structured Lean tools.
          </p>
          <p>
            Our goal was to propose realistic countermeasures to improve customer experience, communication,
            and operational reliability.
          </p>
        </div>
      </div>

      {/* Bloc synthèse A3 + image à droite */}
      <div className="flex flex-col md:flex-row-reverse gap-8 items-start">
        <img
          src="/portfolio/images/A3 thinking.png"
          alt="A3 visual"
          className="w-full md:w-1/3 h-auto max-h-48 rounded-xl border border-gray-600 shadow"
        />
        <div className="md:w-2/3 w-full space-y-4 text-lg text-justify leading-relaxed">
          <p>
            The final A3 document summarizes all key insights and countermeasures applied to improve the TGV experience.
            It demonstrates the structured thinking process behind Lean problem solving.
          </p>
        </div>
      </div>

      {/* Bouton vers document au centre */}
      <div className="text-center">
        <a
          href="https://drive.google.com/file/d/1uULHcByEgYItONp_NLnUOl_5puisDFzg/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-orange text-orange hover:bg-orange hover:text-white px-6 py-2 rounded-full transition"
        >
          <BsFileEarmarkText className="text-xl" />
          View the full A3 report
        </a>
      </div>

      {/* Retour avec useNavigate */}
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

export default ProjectA3Thinking;
