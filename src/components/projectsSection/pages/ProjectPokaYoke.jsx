import { BsFileEarmarkText, BsArrowLeft } from "react-icons/bs";

const ProjectPokaYoke = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 font-body text-white space-y-16">
      {/* Titre principal */}
      <h1 className="text-6xl text-cyan font-bold text-center mb-10">
        Project: Poka Yoke – Error-Proofing in Practice
      </h1>

      {/* Introduction */}
      <div className="space-y-4 text-lg text-justify leading-relaxed">
        <p>
          Poka Yoke is a Japanese term that means <strong>"mistake-proofing"</strong> or <strong>"error prevention."</strong>
          It refers to any mechanism or process that helps avoid human errors in manufacturing, services, or operations.
        </p>
        <p>
          Originally developed by Shigeo Shingo in the Toyota Production System, Poka Yoke aims to make it impossible
          or very difficult for mistakes to happen by design.
        </p>
      </div>

      {/* Exemples concrets */}
      <div className="space-y-2 text-lg text-justify leading-relaxed">
        <h2 className="text-3xl text-orange font-bold">Examples of Poka Yoke</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>USB connectors that only fit in one orientation</li>
          <li>Microwave ovens that don’t start until the door is closed</li>
          <li>ATM machines that beep if you forget your card</li>
          <li>Color-coded cables to prevent connection mistakes</li>
        </ul>
      </div>

      {/* Objectif + image */}
      <div className="flex flex-col md:flex-row-reverse gap-8 items-start">
        <img
          src="/portfolio/images/Poka yoke.jpg"
          alt="Poka Yoke Illustration"
          className="w-full md:w-1/3 rounded-xl border border-gray-600 shadow"
        />
        <div className="md:w-2/3 w-full space-y-4 text-lg text-justify leading-relaxed">
          <h2 className="text-3xl text-orange font-bold">Poka Yoke Concept</h2>
          <p>
            This presentation highlights real-life examples and how Poka Yoke methods can be applied to daily processes and complex operations.
            It focuses on preventive thinking and process robustness.
          </p>
        </div>
      </div>

      {/* Bouton vers la présentation - au centre avant retour */}
      <div className="text-center">
        <a
          href="https://docs.google.com/presentation/d/1JrXTx9iwjhvhfgCkhk3c2Z9nYyntNkyO/edit?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-orange text-orange hover:bg-orange hover:text-white px-6 py-2 rounded-full transition"
        >
          <BsFileEarmarkText className="text-xl" />
          View the Poka Yoke presentation
        </a>
      </div>

      {/* Retour */}
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

export default ProjectPokaYoke;
