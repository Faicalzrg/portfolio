import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BsArrowLeft, BsBarChartLine, BsClockHistory, BsLightbulb, BsLayersHalf, BsLightningCharge, BsGraphUpArrow, BsGearWideConnected } from "react-icons/bs";

const ProjectVSM = () => {
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
        {/* Main Title */}
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 uppercase">
            Value Stream <span className="text-cyan">Mapping</span>
          </h1>
          <p className="text-orange text-xl font-special tracking-widest uppercase">
            Lean Management & Flow Optimization
          </p>
        </motion.div>

        {/* Section 1: Introduction to VSM */}
        <section className="mb-24 grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="space-y-6 text-justify leading-relaxed">
            <h2 className="text-3xl font-bold text-cyan flex items-center gap-3">
              <BsLayersHalf /> Visualizing the Chain
            </h2>
            <p className="text-lightGrey text-lg">
              Value Stream Mapping (VSM) is a powerful visual tool used in Lean Management to map out all the steps involved in delivering a product or service. It helps organizations visualize the flow of materials and information across a process and highlights areas of waste or inefficiency.
            </p>
            <p className="text-lightGrey italic">
              This method provides a holistic view of the entire value chain, making it easier to identify non-value-added activities and enhance overall workflow efficiency.
            </p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} className="relative group">
            <div className="absolute -inset-1 bg-cyan/20 rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition duration-500"></div>
            
            <img 
              src={`${baseUrl}images/website-img-5.jpg`.replace('//', '/')} 
              alt="Value Stream Map Diagram" 
              className="relative rounded-2xl border border-white/10 w-full shadow-2xl"
              onError={(e) => { e.target.src = "https://via.placeholder.com/800x600?text=VSM+Mapping+Illustration"; }}
            />
          </motion.div>
        </section>

        {/* Section 2: History & Objectives */}
        <section className="mb-24 grid md:grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-black/40 p-8 rounded-3xl border border-white/10">
            <h2 className="text-2xl font-bold text-orange mb-4 flex items-center gap-2">
              <BsClockHistory /> Historical Context
            </h2>
            <div className="text-lightGrey text-justify space-y-4 text-sm">
              <p>
                Value Stream Mapping gained global recognition in 1999 following the publication of the book <strong>“Learning to See”</strong> by Mike Rother and John Shook. The method quickly became one of the core tools of Lean manufacturing.
              </p>
              <p>
                Its clarity, accessibility, and strategic value earned it the <em>Shingo Research and Professional Publication Award</em>, affirming its role as an essential pillar of continuous improvement.
              </p>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-black/40 p-8 rounded-3xl border border-white/10">
            <h2 className="text-2xl font-bold text-orange mb-4 flex items-center gap-2">
              <BsLightbulb /> Project Strategy
            </h2>
            <div className="text-lightGrey text-justify text-sm leading-relaxed">
              <p>
                The purpose of this project was to explore how VSM can be used to clearly identify bottlenecks, waiting times, and redundant steps. By analyzing the **Current State** flow, we built a roadmap toward a leaner and more efficient **Future State**.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Section 3: Tactical Implementation & Results */}
        <motion.section 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeInUp}
          className="bg-black/30 p-10 rounded-[40px] border border-cyan/10 backdrop-blur-sm"
        >
          <h2 className="text-3xl font-bold mb-12 text-center text-white uppercase tracking-widest">Tactical Implementation</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <BsLightningCharge className="text-cyan text-5xl mx-auto" />
              <h3 className="text-xl font-bold uppercase tracking-tighter">Waste Elimination</h3>
              <p className="text-grey text-sm">Identification and removal of the 7 wastes (Muda) to unlock operational capacity and reduce costs.</p>
            </div>
            <div className="text-center space-y-4">
              <BsGearWideConnected className="text-orange text-5xl mx-auto" />
              <h3 className="text-xl font-bold uppercase tracking-tighter">Process Leveling</h3>
              <p className="text-grey text-sm">Balancing workloads to reduce bottlenecks identified on the map and synchronize production.</p>
            </div>
            <div className="text-center space-y-4">
              <BsGraphUpArrow className="text-cyan text-5xl mx-auto" />
              <h3 className="text-xl font-bold uppercase tracking-tighter">Lead Time ROI</h3>
              <p className="text-grey text-sm">Significant reduction in total cycle time from customer order to final delivery.</p>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="mt-12 pt-10 border-t border-white/5 flex flex-col md:flex-row gap-6 justify-around items-center">
            <div className="text-center">
                <span className="block text-4xl font-bold text-cyan">-25%</span>
                <span className="text-[10px] uppercase text-grey tracking-widest">Cycle Time</span>
            </div>
            <div className="text-center">
                <span className="block text-4xl font-bold text-orange">Zero</span>
                <span className="text-[10px] uppercase text-grey tracking-widest">Non-Value Added Steps</span>
            </div>
            <div className="text-center">
                <span className="block text-4xl font-bold text-cyan">+15%</span>
                <span className="text-[10px] uppercase text-grey tracking-widest">Productivity Gain</span>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
};

export default ProjectVSM;