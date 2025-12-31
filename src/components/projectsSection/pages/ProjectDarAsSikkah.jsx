import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjectDarAsSikkah = () => {
  return (
    <div className="bg-darkBrown min-h-screen text-white font-body selection:bg-cyan/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-cyan/20">
        <div className="max-w-[1100px] mx-auto px-4 h-16 flex items-center">
          <Link to="/" className="text-cyan hover:text-white transition-all flex items-center gap-2 font-bold">
            <motion.span whileHover={{ x: -5 }}>←</motion.span> Back to Portfolio
          </Link>
        </div>
      </nav>

      <main className="max-w-[1100px] mx-auto px-4 pt-32 pb-20">
        {/* Header avec Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Maintenance <span className="text-cyan">Optimization</span>
          </h1>
          <p className="text-orange text-xl font-special tracking-widest uppercase">
            Bank Al-Maghrib | Dar As-Sikkah
          </p>
        </motion.div>

        {/* Section Diagnostic - Coloration ORANGE (Alerte) */}
        <section className="mb-24">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold mb-10 flex items-center gap-4 text-orange"
          >
            Critical Diagnosis
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Lack of optimal equipment visibility",
              "High maintenance and procurement costs",
              "Inadequate spare parts management",
              "Frequent stockouts and missing history"
            ].map((text, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02 }}
                className="p-6 rounded-xl bg-black/40 border-l-4 border-orange shadow-orangeMediumShadow/10"
              >
                <p className="text-lightGrey">{text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section Solution - Coloration CYAN (Technologie) */}
        <section className="mb-24 relative">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-cyan/10 blur-[100px] rounded-full"></div>
          <h2 className="text-3xl font-bold mb-10 text-cyan">GMAO Strategic Solution</h2>
          <div className="bg-darkGrey/30 border border-cyan/30 p-8 rounded-3xl backdrop-blur-sm">
            <p className="text-lg mb-8 leading-relaxed">
              To resolve these issues, the implementation of <span className="text-cyan font-bold font-special">GMAO (CMMS)</span> was recommended to centralize planning, manage machine files, and track stock.
            </p>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <ul className="space-y-4">
                {["Planning & Scheduling", "Asset Hierarchy", "Spare Parts Inventory", "Security & TPM Integration"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="text-cyan">✦</span> {item}
                  </li>
                ))}
              </ul>
              <motion.div 
                whileHover={{ rotate: 2 }}
                className="rounded-2xl overflow-hidden border border-white/10 shadow-cyanShadow"
              >
                <img src="/portfolio/images/gmao-circle.png" alt="GMAO Framework" className="w-full h-auto" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* 7 Phases - Timeline Animée */}
        <section>
          <h2 className="text-center text-grey uppercase tracking-widest text-sm mb-16 italic font-special">
            7-Phase Deployment Roadmap
          </h2>
          <div className="flex flex-wrap justify-center gap-10">
            {["Zone Mapping", "Asset Inventory", "Hierarchy", "Machine Files", "Parts List", "Maint. Ranges", "User Training"].map((phase, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center group"
              >
                <div className="w-14 h-14 rounded-full bg-cyan/10 border-2 border-cyan flex items-center justify-center text-cyan font-bold group-hover:bg-cyan group-hover:text-black transition-all shadow-cyanShadow">
                  {i + 1}
                </div>
                <span className="mt-4 text-[10px] font-bold text-grey group-hover:text-white uppercase transition-colors">
                  {phase}
                </span>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProjectDarAsSikkah;