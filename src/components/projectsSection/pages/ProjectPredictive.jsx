import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BsArrowLeft, BsActivity, BsShieldCheck, BsGraphUp, BsTools, BsSearch } from "react-icons/bs";

const ProjectPredictive = () => {
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
            Predictive <span className="text-cyan">Maintenance</span>
          </h1>
          <p className="text-orange text-xl font-special tracking-widest uppercase italic">
            "Vibration Analysis & Condition Monitoring"
          </p>
        </motion.div>

        {/* Section 1: Strategic Vision */}
        <section className="mb-24 grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="space-y-6">
            <h2 className="text-3xl font-bold text-cyan flex items-center gap-3 font-special uppercase tracking-tighter">
              <BsActivity /> Condition-Based Monitoring
            </h2>
            <p className="text-lightGrey leading-relaxed text-justify text-lg">
              Predictive maintenance is a cornerstone of <strong>Industry 4.0</strong>. Moving beyond scheduled preventive tasks, it uses real-time data from <strong>vibration sensors</strong> to detect failures before they occur. This maximizes equipment life and optimizes the <strong>P-F Interval</strong>.
            </p>
            <div className="p-6 bg-black/40 border border-white/10 rounded-2xl shadow-xl">
              <h4 className="text-orange font-bold mb-4 uppercase text-xs tracking-widest">Key Diagnostic Tools:</h4>
              <ul className="space-y-3 text-sm text-grey">
                <li className="flex items-center gap-2"><span className="text-cyan">▹</span> Spectral Vibration Analysis (FFT Spectrum)</li>
                <li className="flex items-center gap-2"><span className="text-cyan">▹</span> Bearing and Gearbox health diagnostics</li>
                <li className="flex items-center gap-2"><span className="text-cyan">▹</span> Real-time monitoring of rotating machinery assets</li>
              </ul>
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} className="relative group">
            <div className="absolute -inset-1 bg-cyan/20 rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition duration-500"></div>
            {/* Context Image: Revit 3D Model used as the Asset Digital Twin */}
            <img 
              src={`${baseUrl}images/vibration-analysis.png`.replace('//', '/')} 
              alt="Asset Monitoring Context" 
              className="relative rounded-2xl border border-white/10 w-full shadow-2xl"
              onError={(e) => { e.target.src = "https://via.placeholder.com/800x600?text=Asset+Digital+Twin+Missing"; }}
            />
          </motion.div>
        </section>

        {/* Section 2: P-F Curve Methodology */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-10 text-orange text-center uppercase tracking-widest font-special underline decoration-cyan decoration-2 underline-offset-8">
            The Science of Failure Prediction
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <motion.div whileHover={{ y: -5 }} className="p-8 rounded-2xl bg-black/20 border border-cyan/20 shadow-cyanShadow/5">
              <BsSearch className="text-cyan text-4xl mx-auto mb-4" />
              <h3 className="font-bold mb-2 uppercase tracking-tight">Early Detection</h3>
              <p className="text-xs text-grey leading-relaxed">Identifying weak signals using ultrasonic or vibration analysis at the start of the P-F curve.</p>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="p-8 rounded-2xl bg-black/20 border border-orange/20 shadow-orangeMediumShadow/5">
              <BsGraphUp className="text-orange text-4xl mx-auto mb-4" />
              <h3 className="font-bold mb-2 uppercase tracking-tight">Data Correlation</h3>
              <p className="text-xs text-grey leading-relaxed">Analyzing trends to estimate the remaining useful life (RUL) of critical components.</p>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="p-8 rounded-2xl bg-black/20 border border-cyan/20 shadow-cyanShadow/5">
              <BsTools className="text-cyan text-4xl mx-auto mb-4" />
              <h3 className="font-bold mb-2 uppercase tracking-tight">Planned Correction</h3>
              <p className="text-xs text-grey leading-relaxed">Scheduling interventions during normal downtime, effectively eliminating emergency repair costs.</p>
            </motion.div>
          </div>
        </section>

        {/* Section 3: Professional Impact */}
        <section className="bg-black/30 p-10 rounded-3xl border border-cyan/10 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6">
              <h2 className="text-2xl font-bold text-cyan flex items-center gap-2 italic">
                Operational Outcomes
              </h2>
              <p className="text-lightGrey leading-relaxed text-justify text-lg">
                By shifting to a predictive strategy, we achieved a drastic reduction in unplanned outages. This methodology ensures high reliability and a significant ROI by extending asset longevity.
              </p>
              <div className="flex gap-4 pt-4">
                <div className="bg-cyan/10 p-6 rounded-2xl border border-cyan/30 text-center flex-1">
                  <div className="text-cyan font-bold text-3xl">-30%</div>
                  <div className="text-[10px] text-grey uppercase font-special mt-2">Downtime Costs</div>
                </div>
                <div className="bg-orange/10 p-6 rounded-2xl border border-orange/30 text-center flex-1">
                  <div className="text-orange font-bold text-2xl flex items-center justify-center gap-1">
                    <BsShieldCheck /> 98%
                  </div>
                  <div className="text-[10px] text-grey uppercase font-special mt-2">Asset Reliability</div>
                </div>
              </div>
            </div>
            <div className="flex-1">
                <motion.div whileHover={{ scale: 1.05 }} className="rounded-xl overflow-hidden border border-white/5 shadow-2xl">
                    {/* Placeholder for a spectral analysis graph image */}
                    <img 
                      src={`${baseUrl}images/predictive-flow.png`.replace('//', '/')} 
                      alt="Vibration Spectrum Analysis Graph" 
                      className="w-full h-auto"
                      onError={(e) => { e.target.src = "https://via.placeholder.com/600x400?text=FFT+Spectrum+Analysis"; }}
                    />
                </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProjectPredictive;