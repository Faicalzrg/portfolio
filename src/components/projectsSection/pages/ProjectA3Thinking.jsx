import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BsArrowLeft, BsYoutube, BsLightbulb, BsListCheck, BsGearFill, BsSearch } from "react-icons/bs";

const ProjectA3Thinking = () => {
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
            A3 Thinking <span className="text-cyan">Application</span>
          </h1>
          <p className="text-orange text-xl font-special tracking-widest uppercase">
            Lean Problem Solving Methodology
          </p>
        </motion.div>

        {/* Section 1: Methodology Intro */}
        <section className="mb-24 grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="space-y-6">
            <h2 className="text-3xl font-bold text-cyan flex items-center gap-3">
              <BsSearch /> Structured Approach
            </h2>
            <p className="text-lightGrey text-lg text-justify leading-relaxed">
              A3 Thinking is a structured problem-solving and continuous improvement approach rooted in Lean Management. 
              It involves identifying a problem, analyzing its root causes, proposing countermeasures, and implementing 
              solutions — all summarized on a single A3-sized sheet.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 gap-4">
             <div className="p-6 bg-black/40 border border-white/10 rounded-2xl text-center">
                <BsListCheck className="text-orange text-3xl mx-auto mb-2" />
                <span className="text-[10px] uppercase font-bold tracking-widest">Root Cause</span>
             </div>
             <div className="p-6 bg-black/40 border border-white/10 rounded-2xl text-center">
                <BsGearFill className="text-cyan text-3xl mx-auto mb-2" />
                <span className="text-[10px] uppercase font-bold tracking-widest">Execution</span>
             </div>
          </div>
        </section>

        {/* Section 2: Case Study TGV France */}
        <section className="mb-24 grid md:grid-cols-2 gap-12 items-start">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="space-y-6">
            <h2 className="text-3xl font-bold text-orange flex items-center gap-3">
              <BsYoutube /> Case Study: TGV France
            </h2>
            <p className="text-lightGrey text-justify">
              In this project, we applied the A3 Thinking methodology to a real-world case involving the French high-speed 
              train (TGV). The analysis is based on operational observations and recurring passenger issues highlighted in the case video.
            </p>
            <ul className="space-y-3 bg-white/5 p-6 rounded-2xl border border-white/10">
              <li className="flex items-center gap-3 text-sm text-grey italic"><span className="text-cyan">▹</span> Overcrowded trains and lack of space</li>
              <li className="flex items-center gap-3 text-sm text-grey italic"><span className="text-cyan">▹</span> Frequent delays and maintenance issues</li>
              <li className="flex items-center gap-3 text-sm text-grey italic"><span className="text-cyan">▹</span> Complicated and expensive ticket pricing</li>
              <li className="flex items-center gap-3 text-sm text-grey italic"><span className="text-cyan">▹</span> Poor communication during disruptions</li>
            </ul>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
            <iframe
              className="w-full aspect-video grayscale group-hover:grayscale-0 transition-all duration-500"
              src="https://www.youtube.com/embed/uHXAn_Unl2s"
              title="TGV Case Study"
              frameBorder="0"
              allowFullScreen
            />
          </motion.div>
        </section>

        {/* Section 3: Synthesis & Countermeasures (No Download Button) */}
        <section className="bg-black/30 p-10 rounded-[40px] border border-cyan/10 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 relative group">
              <div className="absolute -inset-1 bg-cyan/20 rounded-2xl blur-lg opacity-40 transition duration-500"></div>
              <img 
                src={`${baseUrl}images/A3 thinking.png`.replace('//', '/')} 
                alt="A3 Thinking Process" 
                className="relative rounded-2xl border border-white/10 w-full shadow-2xl"
                onError={(e) => { e.target.src = "https://via.placeholder.com/800x600?text=A3+Summary+Sheet"; }}
              />
            </div>
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl font-bold text-cyan flex items-center gap-3 italic">
                <BsLightbulb /> Proposed Solutions
              </h2>
              <p className="text-lightGrey text-justify leading-relaxed">
                Our A3 analysis resulted in several realistic countermeasures designed to improve the TGV experience. 
                By using structured Lean tools like the <strong>5 Whys</strong>, we identified that poor communication 
                was a primary root cause of passenger dissatisfaction during delays.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                 <div className="bg-cyan/10 p-4 rounded-xl border border-cyan/30 text-center">
                    <div className="text-cyan font-bold text-xl tracking-tighter">Communication</div>
                    <div className="text-[8px] text-grey uppercase mt-1">Real-time alerts</div>
                 </div>
                 <div className="bg-orange/10 p-4 rounded-xl border border-orange/30 text-center">
                    <div className="text-orange font-bold text-xl tracking-tighter">Reliability</div>
                    <div className="text-[8px] text-grey uppercase mt-1">Maintenance Sync</div>
                 </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProjectA3Thinking;