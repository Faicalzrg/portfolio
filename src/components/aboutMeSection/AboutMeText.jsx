import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>

      <p className="text-white mb-4 text-justify">
        With a strong background in maintenance engineering and risk management, I am committed to performance optimization and continuous improvement in industrial operations.
      </p>
      <p className="text-white mb-4 text-justify">
        My academic journey in industrial engineering, combined with hands-on experience in technical environments, has equipped me with the ability to design efficient, reliable, and sustainable systems.
      </p>
      <p className="text-white mb-4 text-justify">
        I focus on applying structured methodologies and innovative tools to drive impactful change, strengthen reliability, and support organizations in achieving operational excellence.
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
