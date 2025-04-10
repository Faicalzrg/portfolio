import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>

      <p className="text-white mb-4 text-justify">
        I’m Faical, an industrial engineering student with a strong background in maintenance and a deep interest in performance optimization and continuous improvement.
      </p>
      <p className="text-white mb-4 text-justify">
        My academic journey in industrial engineering, focused on maintenance and risk management, builds on years of practical experience in technical environments.
      </p>
      <p className="text-white mb-4 text-justify">
        I’m passionate about designing efficient, sustainable systems and driving impactful change across industrial operations.
      </p>
      <p className="text-white mb-10 text-justify">
        My goal is to bring my expertise, practical knowledge, and continuous improvement mindset to dynamic industrial environments. I continuously explore new tools, methodologies, and innovations to support smarter, more reliable, and future-ready systems.
      </p>

      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
