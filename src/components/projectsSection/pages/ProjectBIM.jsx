import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BsArrowLeft, BsLightningChargeFill, BsTools, BsBarChartLineFill, BsBuildingFillCheck } from "react-icons/bs";

const ProjectBIM = () => {
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
        {/* Hero Section */}
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            BIM & <span className="text-cyan">Facility Management</span>
          </h1>
          <p className="text-orange text-xl font-special tracking-widest uppercase">
            Data-Driven Building Lifecycle Management
          </p>
        </motion.div>

        {/* Section 1: The Role of a Facility Manager */}
        <section className="mb-24">
          <div className="bg-black/40 border border-white/10 p-8 md:p-12 rounded-[40px] shadow-2xl">
            <h2 className="text-3xl font-bold text-cyan mb-6">What is a Facility Manager?</h2>
            <p className="text-lightGrey leading-relaxed text-lg text-justify mb-8">
              A **Facility Manager** is the strategic leader responsible for ensuring that the built environment 
              integrates people, place, process, and technology. Their goal is to improve the productivity of 
              the core business and increase the lifespan of assets while minimizing operational costs.
            </p>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <p className="text-orange font-bold italic text-lg">"Mastering the tools of tomorrow."</p>
                <p className="text-lightGrey leading-relaxed">
                  To achieve this, one of the most critical tools a Facility Manager must master is <strong>Power BI</strong>. 
                  It allows for seamless tracking during the <strong>construction phase</strong> and continues to provide 
                  value throughout the building's life by monitoring key metrics.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 flex flex-col items-center">
                  <BsLightningChargeFill className="text-cyan text-3xl mb-2" />
                  <span className="text-[10px] uppercase text-grey font-bold">Energy Tracking</span>
                </div>
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 flex flex-col items-center">
                  <BsTools className="text-orange text-3xl mb-2" />
                  <span className="text-[10px] uppercase text-grey font-bold">Preventive Maint.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Academic Project Context */}
        <section className="mb-32 grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h2 className="text-3xl font-bold text-cyan mb-6 flex items-center gap-3">
              <BsBuildingFillCheck /> Academic Realization
            </h2>
            <p className="text-lightGrey leading-relaxed mb-6 text-justify">
              This project, realized during my studies, was specifically designed to master the 
              <strong> BIM-to-BI workflow</strong>. The objective was to simulate a real building creation 
              process in <strong>Autodesk Revit</strong> and establish a robust data bridge to track every 
              milestone of the construction and operational lifecycle.
            </p>
            <p className="text-lightGrey leading-relaxed italic border-l-4 border-orange pl-4">
              "Mastering these studies allowed me to bridge the gap between architectural design 
              and real-time operational monitoring."
            </p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }} className="relative group">
            <div className="absolute -inset-1 bg-cyan/20 rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition"></div>
            <img 
              src={`${baseUrl}images/image_146a68.jpg`.replace('//', '/')} 
              alt="3D Building Modeling in Revit" 
              className="relative rounded-2xl border border-white/10 w-full shadow-2xl"
              onError={(e) => { e.target.src = "https://via.placeholder.com/800x600?text=Revit+3D+Model"; }}
            />
          </motion.div>
        </section>

        {/* Section 3: Interactive Dashboards */}
        <section className="bg-darkGrey/30 p-10 rounded-3xl border border-cyan/30 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6">
              <h2 className="text-2xl font-bold text-cyan flex items-center gap-2">
                <BsBarChartLineFill /> Real-Time Dashboards
              </h2>
              <p className="text-lightGrey leading-relaxed text-justify">
                By transforming static Revit data into interactive <strong>Power BI dashboards</strong>, 
                I developed a system for:
              </p>
              <ul className="space-y-3 text-sm text-grey">
                <li className="flex items-center gap-2"><span className="text-orange">▹</span> Real-time construction progress tracking.</li>
                <li className="flex items-center gap-2"><span className="text-orange">▹</span> Post-construction energy consumption analysis.</li>
                <li className="flex items-center gap-2"><span className="text-orange">▹</span> Asset-level preventive maintenance scheduling.</li>
              </ul>
            </div>
            <div className="flex-1">
              <motion.div whileHover={{ scale: 1.05 }} className="rounded-xl overflow-hidden shadow-cyanShadow border border-white/5">
                <img 
                  src={`${baseUrl}images/website-img-1.png`.replace('//', '/')} 
                  alt="Power BI Dashboard" 
                  className="w-full h-auto"
                  onError={(e) => { e.target.src = "https://via.placeholder.com/800x600?text=Power+BI+Dashboard"; }}
                />
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProjectBIM;