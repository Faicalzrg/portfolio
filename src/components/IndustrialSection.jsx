import { motion } from "framer-motion";
import { fadeIn } from "../framerMotion/variants";

const IndustrialSection = () => {
  return (
    <motion.section
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
      className="w-full px-8 py-12 max-w-6xl mx-auto"
    >
      {/* Titre */}
      <h2 className="text-6xl text-cyan mb-10 text-center">
        Industrial Engineering
      </h2>

      {/* Texte unique */}
      <p className="text-lg leading-relaxed text-justify text-white">
        Industrial engineering is concerned with the design, improvement, and installation of integrated systems of people,
        materials, information, equipment, and energy. It draws upon specialized knowledge and skill in the mathematical,
        physical, and social sciences together with the principles and methods of engineering analysis and design to specify,
        predict, and evaluate the results to be obtained from such systems.
      </p>

      {/* Citation */}
      <div className="flex justify-end mt-8">
        <p className="text-sm text-gray-400 italic">
          — Institute of Industrial and Systems Engineers (IISE) —
        </p>
      </div>

      {/* Image */}
      <div className="flex justify-end mt-6">
        <img
          src="/portfolio/images/IISE.jpeg"
          alt="Logo IISE"
          className="w-48 h-auto object-contain rounded shadow"
        />
      </div>
    </motion.section>
  );
};

export default IndustrialSection;
