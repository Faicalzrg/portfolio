import CertificationsText from "./CertificationsText";
import SingleCertificate from "./SingleCertificate";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

// 1. SECTION : PROFESSIONAL CORE CERTIFICATIONS (Formations internationales d'élite)
const professionalCertifications = [
  {
    name: "First and Second Line Maintenance - BookMaster One",
    year: "IAI Industrial Systems B.V. • Netherlands (Oct 2025)",
    align: "right",
    image: "/portfolio/images/certifications/iai-netherlands.png", 
    link: "https://www.linkedin.com/posts/activity-7406459241848516609-1y9a",
    description: "Intensive technical training on cutting-edge BookMaster One systems, focused on high-level industrial maintenance."
  },
  {
    name: "Complex Identification Systems & Document Security",
    year: "Bauer + Mück GmbH • Berlin, Germany (Jan 2025)",
    align: "left",
    image: "/portfolio/images/certifications/bauer-mueck-berlin.png",
    link: "https://www.linkedin.com/posts/activity-7394319275844399104-nk4W",
    description: "Deep dive into secure ID management and advanced industrial identification systems through professional immersion in Berlin."
  }
];

// 2. SECTION : ACADEMIC & SKILLS CERTIFICATIONS (Grille compacte)
const otherCertifications = [
  {
    name: "Project Management Essentials",
    year: "PMI Standards & Governance",
    link: "https://www.linkedin.com/learning/certificates/3b4aa9d888b1cbfcb4178b53ced81adf32781d3ee34e0381ea93e46a9fce7133",
  },
  {
    name: "Scrum Master",
    year: "Agile Project Management",
    link: "https://www.coursera.org/account/accomplishments/specialization/KIT6CJ70NKFF",
  },
  {
    name: "Lean Six Sigma White Belt",
    year: "Process Optimization",
    link: "https://drive.google.com/file/d/1MxdPC3m_qnqmMluiX3fbBoDmtMybbVTb/view?usp=drive_link",
  },
  {
    name: "Design Thinking",
    year: "Creative Problem Solving",
    link: "https://drive.google.com/file/d/1wyheSpTkIOcm_6RZS7Zj2du5HP0pYUZA/view?usp=drive_link",
  },
  {
    name: "Using AI in L&D Strategy",
    year: "AI for Professional Growth",
    link: "https://www.linkedin.com/learning/certificates/19844ea212312b623efc3e4c9971ac03fa864de3f9a84e9deab2cc8b67ba98a2",
  },
  {
    name: "Excel Fundamentals",
    year: "Advanced Data Analysis",
    link: "https://drive.google.com/file/d/1ILtXsF0fD51ySgT-aVOUztjzgqqAvwap/view?usp=drive_link",
  }
];

const CertificationsMain = () => {
  return (
    <div id="certifications" className="max-w-[1200px] mx-auto px-4 pb-20">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <CertificationsText />
      </motion.div>

      {/* --- ELITE INTERNATIONAL CERTIFICATIONS --- */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-cyan mb-10 uppercase tracking-widest text-center">
          International Professional Training
        </h3>
        <div className="flex flex-col gap-16 max-w-[950px] mx-auto">
          {professionalCertifications.map((certif, index) => (
            <SingleCertificate
              key={index}
              {...certif}
            />
          ))}
        </div>
      </div>

      <div className="flex items-center my-24">
        <hr className="flex-grow border-t-2 border-gray-700" />
        <span className="px-6 text-gray-500 italic text-sm tracking-widest uppercase text-center">
          Specialized Technical Mastery
        </span>
        <hr className="flex-grow border-t-2 border-gray-700" />
      </div>

      {/* --- ACADEMIC GRID --- */}
      <div className="mt-12">
        <h3 className="text-xl font-semibold text-gray-400 mb-10 text-center uppercase tracking-tighter">
          Academic & Technical Skillset
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1000px] mx-auto">
          {otherCertifications.map((certif, index) => (
            <div key={index} className="p-6 bg-black/40 border border-white/10 rounded-2xl flex flex-col justify-between hover:border-orange transition-all duration-300 shadow-xl">
              <div>
                <h4 className="text-lg font-bold text-orange leading-tight">{certif.name}</h4>
                <p className="text-gray-500 text-xs mt-3 leading-relaxed">{certif.year}</p>
              </div>
              <a 
                href={certif.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-cyan text-sm flex items-center mt-6 hover:text-white transition-all font-special tracking-widest"
              >
                VERIFY <span className="ml-2">↗</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificationsMain;