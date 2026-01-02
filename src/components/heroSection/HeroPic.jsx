import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { PiHexagonThin } from "react-icons/pi";

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="h-full flex items-center justify-center relative"
    >
      {/* Votre photo au premier plan */}
      <img
        src="/portfolio/images/me2.png"
        alt="ZOURGANE FAICAL"
        className="max-h-[450px] w-auto z-10"
      />

      {/* Hexagone en arrière-plan avec rotation CSS pure */}
      <div className="absolute -z-10 flex justify-center items-center">
        <div className="animate-spin-infinite flex justify-center items-center">
          <PiHexagonThin 
            className="md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-cyan blur-md opacity-70" 
          />
        </div>
      </div>
    </motion.div>
  );
};

export default HeroPic;