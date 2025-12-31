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
        Industrial Engineering:
      </h2>

      {/* Texte unique */}
      <p className="text-lg leading-relaxed text-justify text-white">
        My approach to Industrial Engineering is built on a dual expertise: the operational rigor 
        gained from 15 years in the field Maintenance and Team Management and the systems thinking 
        Lean and Asset Management refined through my academic journey. I leverage this unique 
        perspective to design systems where technical reliability and overall performance are 
        intrinsically linked and optimized.
      </p>

      {/* Citation */}
      <div className="flex justify-end mt-8">
        <p className="text-sm text-gray-400 italic">
          — Operational Excellence Framework —
        </p>
      </div>

      {/* Image */}

    </motion.section>
  );
};

export default IndustrialSection;
