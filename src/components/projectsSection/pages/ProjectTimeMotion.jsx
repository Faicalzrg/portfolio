import { BsFileEarmarkText, BsArrowLeft } from "react-icons/bs";

const ProjectTimeMotion = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 font-body text-white space-y-16">
      {/* Titre principal */}
      <h1 className="text-6xl text-cyan font-bold text-center mb-10">
        Project: Optimizing Time and Motion Studies
      </h1>

      {/* Section image du dévidoir + explication */}
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <img
          src="/portfolio/images/Claber.png"
          alt="Claber Aquapony 8887 Wall-Mounted Reel"
          className="w-full md:w-[30%] rounded-lg border border-gray-600 shadow"
        />
        <div className="md:w-[70%] text-lg text-justify leading-relaxed space-y-4">
          <p>
            This project was conducted as a hands-on workshop in Time and Motion Studies, a core method in Industrial Engineering.
            The objective was to analyze manual task execution and evaluate productivity by applying scientific work measurement techniques.
          </p>
          <p>
            As part of this study, we selected the <strong>Claber Aquapony 8887 wall-mounted hose reel</strong> as our practical object of analysis.
            The assembly process of this product served as the basis for evaluating task segmentation and motion economy.
          </p>
          <p>
            Thanks to this real-life object, we were able to conduct a realistic time study by assembling the hose reel multiple times and recording actual execution times.
            These real measurements were then compared to the standard times calculated using predetermined motion time systems (PMTS), allowing us to evaluate the accuracy and efficiency of both approaches.
          </p>
        </div>
      </div>

      {/* Section Project Objective avec image */}
      <div className="flex flex-col md:flex-row-reverse gap-8 items-start">
        <img
          src="/portfolio/images/website-img-3.jpg"
          alt="Time and Motion"
          className="w-full md:w-1/3 rounded-xl border border-gray-600 shadow"
        />
        <div className="md:w-2/3 w-full space-y-4 text-lg text-justify leading-relaxed">
          <h2 className="text-3xl text-orange font-bold">Project Objective</h2>
          <p>
            This lab project provided practical insight into the application of motion study techniques and standard time evaluation
            in industrial settings. It highlighted the impact of ergonomic analysis and method optimization on productivity improvement.
          </p>
        </div>
      </div>

      {/* ✅ Bouton centré juste avant retour */}
      <div className="text-center mt-12">
        <a
          href="https://drive.google.com/file/d/1jpMnkH6rigdRDM2fvEB4Byzv5rWvYEu2/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-orange text-orange hover:bg-orange hover:text-white px-6 py-2 rounded-full transition"
        >
          <BsFileEarmarkText className="text-xl" />
          View the full report
        </a>
      </div>

      {/* Retour vers page projets */}
      <div className="text-center mt-6">
        <a
          href="/portfolio/#projects"
          className="inline-flex items-center gap-2 text-cyan hover:text-orange font-medium text-base transition"
        >
          <BsArrowLeft className="text-lg" />
          Back to Home page
        </a>
      </div>
    </div>
  );
};

export default ProjectTimeMotion;
