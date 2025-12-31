import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BsArrowLeft, BsCalendarCheck, BsClipboardData, BsDiagram3, BsShieldCheck, BsFillBriefcaseFill } from "react-icons/bs";

const ProjectPMBOK = () => {
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
            Back to Home page
          </Link>
        </div>
      </nav>

      <main className="max-w-[1100px] mx-auto px-4 pt-32 pb-20">
        {/* Header Section */}
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 uppercase tracking-tighter">
            PMBOK <span className="text-cyan">Framework</span>
          </h1>
          <p className="text-orange text-xl font-special tracking-widest uppercase">
            Professional Project Management Standards
          </p>
        </motion.div>

        {/* Section 1: Strategic Vision with Circular Diagram */}
        <section className="mb-24 grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="space-y-6">
            <h2 className="text-3xl font-bold text-cyan flex items-center gap-3">
              <BsFillBriefcaseFill /> Standardized Governance
            </h2>
            <p className="text-lightGrey text-lg text-justify leading-relaxed">
              Applying the **PMBOK** guidelines ensures that projects are delivered on time, within budget, and with the required quality. It provides a common language and a set of professional tools to manage the 10 Knowledge Areas of any complex industrial project.
            </p>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <p className="text-sm italic text-grey">
                    "Management is about arranging and telling. Leadership is about nurturing and enhancing."
                </p>
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} className="relative group">
            <div className="absolute -inset-1 bg-cyan/20 rounded-2xl blur-lg opacity-40 transition duration-500"></div>
            {/* Image du diagramme circulaire PMBOK */}
            <img 
              src={`${baseUrl}images/pmbok-framework.png`.replace('//', '/')} 
              alt="PMBOK Process Cycle" 
              className="relative rounded-2xl border border-white/10 w-full shadow-2xl bg-black/20"
              onError={(e) => { e.target.src = "https://via.placeholder.com/800x600?text=PMBOK+Process+Groups"; }}
            />
          </motion.div>
        </section>

        {/* Section 2: Management Iceberg & Deep Analysis */}
        <section className="mb-24 grid md:grid-cols-2 gap-12 items-center">
           <motion.div whileHover={{ scale: 1.02 }} className="relative group order-2 md:order-1">
            <div className="absolute -inset-1 bg-orange/20 rounded-2xl blur-lg opacity-40 transition duration-500"></div>
            {/* Image de l'Iceberg du Management */}
            <img 
              src={`${baseUrl}images/pmbok-iceberg.png`.replace('//', '/')} 
              alt="Management Iceberg" 
              className="relative rounded-2xl border border-white/10 w-full shadow-2xl"
              onError={(e) => { e.target.src = "https://via.placeholder.com/800x600?text=Management+Iceberg"; }}
            />
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="space-y-6 order-1 md:order-2">
            <h2 className="text-3xl font-bold text-orange flex items-center gap-3">
              <BsClipboardData /> The Hidden Value
            </h2>
            <p className="text-lightGrey text-lg text-justify leading-relaxed">
              Just like an iceberg, the visible part of project management (Tools, Schedules, Reports) rests on a massive invisible foundation: **Behavior, Communication, and Stakeholder Trust**. Mastering the PMBOK framework allows for the alignment of these two worlds to ensure sustainable success.
            </p>
          </motion.div>
        </section>

        {/* Section 3: Process Pillars */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-10 text-orange text-center uppercase tracking-widest font-special underline decoration-cyan decoration-2 underline-offset-8">
            Project Lifecycle Management
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-8 rounded-2xl bg-black/20 border border-cyan/20 hover:border-cyan/50 transition-colors group">
              <BsCalendarCheck className="text-cyan text-4xl mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold mb-2 uppercase tracking-tight text-white">Planning</h3>
              <p className="text-xs text-grey">Defining the project charter and creating the comprehensive management plan.</p>
            </div>
            <div className="p-8 rounded-2xl bg-black/20 border border-orange/20 hover:border-orange/50 transition-colors group">
              <BsDiagram3 className="text-orange text-4xl mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold mb-2 uppercase tracking-tight text-white">Monitoring</h3>
              <p className="text-xs text-grey">Managing resources while tracking performance using Earned Value Management (EVM).</p>
            </div>
            <div className="p-8 rounded-2xl bg-black/20 border border-cyan/20 hover:border-cyan/50 transition-colors group">
              <BsShieldCheck className="text-cyan text-4xl mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold mb-2 uppercase tracking-tight text-white">Closing</h3>
              <p className="text-xs text-grey">Formalizing project completion and ensuring all deliverables meet the strategic quality standards.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProjectPMBOK;