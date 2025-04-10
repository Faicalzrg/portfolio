import { motion } from "framer-motion";
import { fadeIn } from "../framerMotion/variants"; // adapte le chemin si besoin

<section className="w-full px-8 py-12 max-w-6xl mx-auto">
  {/* Titre animé */}
  <motion.h2
    variants={fadeIn("down", 0.1)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0 }}
    className="text-6xl text-cyan mb-10 text-center"
  >
    Industrial Engineering
  </motion.h2>

  {/* Paragraphe animé */}
  <motion.p
    variants={fadeIn("up", 0.2)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0 }}
    className="text-lg leading-relaxed text-justify"
  >
    Industrial engineering is concerned with the design, improvement, and installation of integrated systems of people,
    materials, information, equipment, and energy. It draws upon specialized knowledge and skill in the mathematical,
    physical, and social sciences together with the principles and methods of engineering analysis and design to specify,
    predict, and evaluate the results to be obtained from such systems.
  </motion.p>

  {/* Citation */}
  <motion.div
    variants={fadeIn("left", 0.3)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0 }}
    className="flex justify-end mt-8"
  >
    <p className="text-sm text-gray-400 italic">
      — Institute of Industrial and Systems Engineers (IISE) —
    </p>
  </motion.div>

  {/* Image IISE */}
  <motion.div
    variants={fadeIn("right", 0.4)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0 }}
    className="flex justify-end mt-6"
  >
    <img
      src="/portfolio/images/IISE.jpeg"
      alt="Logo IISE"
      className="w-48 h-auto object-contain rounded shadow"
    />
  </motion.div>
</section>
