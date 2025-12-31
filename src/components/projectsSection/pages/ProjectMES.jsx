import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BsArrowLeft, BsCpu, BsBarChartSteps, BsLightningFill, BsCheck2All, BsGearFill } from "react-icons/bs";

const ProjectMES = () => {
  // Utilisation de la base URL pour assurer le bon fonctionnement sur GitHub Pages et Localhost
  const baseUrl = import.meta.env.BASE_URL;

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="bg-darkBrown min-h-screen text-white font-body selection:bg-cyan/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-cyan/20">
        <div className="max-w-[1100px] mx-auto px-4 h-16 flex items-center">
          <Link to="/" className="text-cyan hover:text-white transition-all flex items-center gap-2 font-bold group">
            <BsArrowLeft className="group-hover:-translate-x-1 transition-transform" /> 
            Back to Portfolio
          </Link>
        </div>
      </nav>

      <main className="max-w-[1100px] mx-auto px-4 pt-32 pb-20">
        {/* Header Section */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            MES <span className="text-cyan">Integration</span>
          </h1>
          <p className="text-orange text-xl font-special tracking-widest uppercase">
            Facility Management & Smart Industry 4.0
          </p>
        </motion.div>

        {/* Section 1: The Strategic Link */}
        <section className="mb-24 grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="space-y-6">
            <h2 className="text-3xl font-bold text-cyan">The Facility Manager's Orchestra</h2>
            <p className="text-lightGrey leading-relaxed text-justify">
              In a modern industrial environment, the <strong>Facility Manager</strong> acts as a strategic orchestrator of assets. A critical tool for success is the <strong>MES (Manufacturing Execution System)</strong>. It provides the essential link between high-level <strong>ERP planning</strong> and real-time shop-floor <strong>Automation (PLC/SCADA)</strong>.
            </p>
            <p className="text-lightGrey leading-relaxed text-justify italic border-l-4 border-orange pl-4">
              "This academic project allowed me to master the tracking of data during both construction and operational phases of building management."
            </p>
            <div className="p-6 bg-black/40 border border-cyan/20 rounded-2xl shadow-lg">
              <h4 className="text-cyan font-bold mb-4 uppercase text-xs tracking-widest">Key Integration Pillars:</h4>
              <ul className="grid grid-cols-1 gap-3 text-sm">
                <li className="flex items-center gap-2"><span className="text-cyan">▹</span> Automated real-time data capture from machinery</li>
                <li className="flex items-center gap-2"><span className="text-cyan">▹</span> Smart energy consumption monitoring</li>
                <li className="flex items-center gap-2"><span className="text-cyan">▹</span> Preventive maintenance tracking (OEE/TRS)</li>
              </ul>
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} className="relative group">
            <div className="absolute -inset-1 bg-cyan/20 rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition duration-500"></div>
            <img 
              src={`${baseUrl}images/mes-pyramid.png`.replace('//', '/')} 
              alt="Industrial Automation Pyramid" 
              className="relative rounded-2xl border border-white/10 w-full shadow-2xl"
              onError={(e) => { e.target.src = "https://via.placeholder.com/800x600?text=MES+Pyramid+Graphic+Required"; }}
            />
          </motion.div>
        </section>

        {/* Section 2: Real-Time Monitoring */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-10 text-orange flex items-center gap-4 text-center justify-center">
            <span className="h-px w-12 bg-orange inline-block"></span>
            Real-Time Monitoring
            <span className="h-px w-12 bg-orange inline-block"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <motion.div whileHover={{ y: -5 }} className="p-8 rounded-2xl bg-darkGrey/20 border border-orange/20">
              <div className="text-orange text-4xl mb-4 flex justify-center"><BsCpu /></div>
              <h3 className="font-bold mb-2">Machine Data</h3>
              <p className="text-xs text-grey">Direct PLC connection to eliminate manual data entry and errors.</p>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="p-8 rounded-2xl bg-darkGrey/20 border border-cyan/20">
              <div className="text-cyan text-4xl mb-4 flex justify-center"><BsBarChartSteps /></div>
              <h3 className="font-bold mb-2">OEE Analytics</h3>
              <p className="text-xs text-grey">Live tracking of Total Equipment Effectiveness to optimize performance.</p>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="p-8 rounded-2xl bg-darkGrey/20 border border-orange/20">
              <div className="text-orange text-3xl mb-4 flex justify-center"><BsLightningFill /></div>
              <h3 className="font-bold mb-2">Energy & Sustainability</h3>
              <p className="text-xs text-grey">Monitoring power usage to reduce carbon footprint and operational costs.</p>
            </motion.div>
          </div>
        </section>

        {/* Section 3: Strategic Outcomes */}
        <section className="bg-black/30 p-10 rounded-3xl border border-cyan/10 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <motion.div whileHover={{ scale: 1.05 }} className="rounded-xl overflow-hidden shadow-cyanShadow/20 border border-white/5">
                <img 
                  src={`${baseUrl}images/mes-dashboard-ui.png`.replace('//', '/')} 
                  alt="MES Dashboard Interface" 
                  className="w-full h-auto"
                  onError={(e) => { e.target.src = "https://via.placeholder.com/600x400?text=MES+Dashboard+UI+Missing"; }}
                />
              </motion.div>
            </div>
            <div className="flex-1 space-y-6">
              <h2 className="text-2xl font-bold text-cyan flex items-center gap-2 italic">
                Strategic Management Results
              </h2>
              <p className="text-lightGrey leading-relaxed text-justify">
                By mastering software like Wonderware or WinCC, I demonstrated how raw industrial data is transformed into actionable <strong>Business Intelligence</strong>. Implementing these dashboards ensures 100% traceability and a <strong>20% gain in workflow efficiency</strong>.
              </p>
              <div className="flex gap-4 pt-4">
                <div className="bg-cyan/10 p-6 rounded-2xl border border-cyan/30 text-center flex-1">
                  <div className="text-cyan font-bold text-2xl">+20%</div>
                  <div className="text-[10px] text-grey uppercase font-special mt-2">Efficiency</div>
                </div>
                <div className="bg-orange/10 p-6 rounded-2xl border border-orange/30 text-center flex-1">
                  <div className="text-orange font-bold text-2xl flex items-center justify-center gap-1">
                    <BsCheck2All /> 100%
                  </div>
                  <div className="text-[10px] text-grey uppercase font-special mt-2">Traceability</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProjectMES;