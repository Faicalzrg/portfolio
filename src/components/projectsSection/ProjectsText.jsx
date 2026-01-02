import React from 'react';

const ProjectsText = () => {
  return (
    <div className="flex flex-col items-center mt-20">
      <h2 className="text-6xl text-cyan-500 mb-10">Projects & Achievements</h2>
      <p className="text-lg text-center text-white leading-relaxed max-w-[1000px]">
        My portfolio showcases a dual journey of <span className="text-cyan-400 font-semibold">professional excellence</span> and strategic growth. 
        With over <span className="font-bold">15 years of experience</span> in high-security industrial environments, I have spearheaded major initiatives 
        in asset reliability and Lean transformation. 
        <br /><br />
        By integrating <span className="text-cyan-400 font-semibold">PMBOK® methodologies</span> for rigorous project management and adopting <span className="text-cyan-400 font-semibold">Industry 5.0</span> principles, I focus on the synergy between human creativity and smart systems. 
        From <span className="italic">BIM and Power BI</span> to advanced risk modeling, 
        my work is dedicated to building resilient, human-centric, and sustainable industrial 
        futures.
      </p>
    </div>
  );
};

export default ProjectsText;