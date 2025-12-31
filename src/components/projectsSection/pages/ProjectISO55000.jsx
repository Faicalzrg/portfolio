import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BsArrowLeft, BsShieldCheck, BsGraphUpArrow, BsRecycle, BsListCheck, BsInboxesFill, BsMortarboardFill } from "react-icons/bs";

const ProjectISO55000 = () => {
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
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            ISO <span className="text-cyan">55000</span>
          </h1>
          <p className="text-orange text-xl font-special tracking-widest uppercase">
            Strategic Asset Management Discovery
          </p>
        </motion.div>

        {/* Section 1: Academic Discovery */}
        <section className="mb-24 grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="space-y-6">
            <h2 className="text-3xl font-bold text-cyan flex items-center gap-3">
              <BsMortarboardFill /> Academic Journey
            </h2>
            <p className="text-lightGrey leading-relaxed text-justify text-lg">
              During my engineering studies, I discovered the <strong>ISO 55000</strong> series. This was a turning point in my understanding of <strong>Facility Management</strong>. I learned that an asset is not just a piece of equipment, but something that provides <strong>value</strong> to an organization throughout its entire life cycle.
            </p>
            <div className="p-6 bg-black/40 border border-white/10 rounded-2xl shadow-xl">
              <h4 className="text-orange font-bold mb-4 uppercase text-xs tracking-widest">Key Academic Learnings:</h4>
              <ul className="space-y-3 text-sm text-grey">
                <li className="flex items-center gap-2"><span className="text-cyan">▹</span> Defining the Strategic Asset Management Plan (SAMP).</li>
                <li className="flex items-center gap-2"><span className="text-cyan">▹</span> Understanding the "Line of Sight" in organizational goals.</li>
                <li className="flex items-center gap-2"><span className="text-cyan">▹</span> Risk-based decision making for maintenance.</li>
              </ul>
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} className="relative group">
            <div className="absolute -inset-1 bg-cyan/20 rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition duration-500"></div>
            {/* Image jointe: Les 4 piliers ISO 55000 */}
            <img 
              src={`${baseUrl}images/ISO_55000_2.png`.replace('//', '/')} 
              alt="ISO 55000 Four Pillars: Value, Alignment, Leadership, Assurance" 
              className="relative rounded-2xl border border-white/10 w-full shadow-2xl bg-white/5 p-2"
              onError={(e) => { e.target.src = "https://via.placeholder.com/800x600?text=ISO+55000+Pillars"; }}
            />
          </motion.div>
        </section>

        {/* Section 2: Asset Lifecycle Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-10 text-orange text-center uppercase tracking-widest font-special underline decoration-cyan decoration-2 underline-offset-8">
            The Asset Life Cycle Framework
          </h2>
          
          <div className="max-w-4xl mx-auto mb-16 relative group">
             <div className="absolute -inset-1 bg-orange/10 rounded-3xl blur-xl opacity-30"></div>
             {/* Image ISO_55000.png: Cycle de vie des actifs */}
                          <img 
              src={`${baseUrl}images/ISO_55000.png`.replace('//', '/')} 
              alt="ISO 55000 Asset Lifecycle Management" 
              className="relative rounded-3xl border border-white/10 w-full shadow-2xl bg-black/20"
              onError={(e) => { e.target.src = "https://via.placeholder.com/1000x500?text=Asset+Lifecycle+Management+Flow"; }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <motion.div whileHover={{ y: -5 }} className="p-8 rounded-2xl bg-black/20 border border-cyan/20">
              <BsListCheck className="text-cyan text-4xl mx-auto mb-4" />
              <h3 className="font-bold mb-2 uppercase">Alignment</h3>
              <p className="text-xs text-grey leading-relaxed">Translating organizational objectives into technical asset requirements.</p>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="p-8 rounded-2xl bg-black/20 border border-orange/20">
              <BsGraphUpArrow className="text-orange text-4xl mx-auto mb-4" />
              <h3 className="font-bold mb-2 uppercase">Value</h3>
              <p className="text-xs text-grey leading-relaxed">Ensuring assets deliver their intended purpose while optimizing TCO.</p>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="p-8 rounded-2xl bg-black/20 border border-cyan/20">
              <BsShieldCheck className="text-cyan text-4xl mx-auto mb-4" />
              <h3 className="font-bold mb-2 uppercase">Assurance</h3>
              <p className="text-xs text-grey leading-relaxed">Providing confidence that assets will perform as required safely.</p>
            </motion.div>
          </div>
        </section>

        {/* Section 3: Professional Impact */}
        <section className="bg-black/30 p-10 rounded-3xl border border-cyan/10 backdrop-blur-sm text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-2xl font-bold text-cyan italic">
              Strategic Asset Governance
            </h2>
            <p className="text-lightGrey leading-relaxed text-lg">
              Through this academic project, I mastered the ability to analyze an asset portfolio. By applying <strong>ISO 55001</strong> requirements, we can achieve a <strong>15% reduction in long-term OPEX</strong> and ensure 100% compliance with safety and environmental regulations.
            </p>
            <div className="inline-block bg-orange/10 px-8 py-4 rounded-full border border-orange/30 text-orange font-bold uppercase tracking-widest">
              Maintenance as a Value Generator
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProjectISO55000;