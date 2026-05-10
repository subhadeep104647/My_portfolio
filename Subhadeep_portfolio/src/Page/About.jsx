import React from 'react';
import { Terminal, Palette, Database, Award, Code2, Cpu } from 'lucide-react';

const About = () => {
  return (
    <section className=" text-slate-200 py-20 px-6 sm:px-12 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 border-l-4 border-amber-500 pl-6">
          <h2 className="text-sm uppercase tracking-widest text-amber-500 font-bold mb-2">The Developer</h2>
          <h1 className="text-4xl sm:text-5xl font-sans text-white">
            Subhadeep Biswas
          </h1>
          <p className="text-xl text-slate-400 mt-4 max-w-2xl">
            Emerging Tech Talent specializing in <strong>Full-Stack Development</strong>, 
            <strong>Python Architecture</strong>, and <strong>Data Analytics</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Main Biography */}
          <div className="md:col-span-2 space-y-6 text-lg leading-relaxed text-slate-300">
            <p>
              Currently pursuing my B.Tech at <span className="text-amber-500 font-medium">JIS College of Engineering</span>, 
              I am focused on building smart, data-driven systems that solve real-world challenges.
            </p>
            <p>
              With recent hands-on experience in <strong>GenAI Powered Data Analytics</strong> and <strong>Data Modeling</strong>, 
              I bring a technical edge to both backend logic and user-centric design. Whether it's the creative 
              branding of <span className="text-white font-semibold italic">"Love & Lattes"</span> or the performance optimization 
              of <span className="text-white font-semibold italic">"DEBUGXIA"</span>, I focus on delivering scalable results.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="https://github.com/subhadeep104647" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-5 py-2.5 rounded-lg transition border border-slate-700">
                  GitHub
              </a>
              <a href="https://www.linkedin.com/in/subhadeep-biswas-4731732a9/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-amber-600 hover:bg-amber-500 px-5 py-2.5 rounded-lg transition text-white font-medium shadow-lg shadow-amber-900/20">
                  LinkedIn
              </a>
            </div>

            {/* Added: Quick Tech Toolbox */}
            <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-slate-800/50">
              <div>
                <p className="text-xs uppercase font-bold text-slate-500 mb-2">Languages</p>
                <p className="text-sm font-mono text-amber-400">Python, JavaScript, C</p>
              </div>
              <div>
                <p className="text-xs uppercase font-bold text-slate-500 mb-2">Frontend</p>
                <p className="text-sm font-mono text-amber-400">React, Tailwind, HTML5</p>
              </div>
              <div>
                <p className="text-xs uppercase font-bold text-slate-500 mb-2">Backend</p>
                <p className="text-sm font-mono text-amber-400">Node.js, Flask, SAP ABAP</p>
              </div>
              <div>
                <p className="text-xs uppercase font-bold text-slate-500 mb-2">Design</p>
                <p className="text-sm font-mono text-amber-400">Figma, Adobe XD</p>
              </div>
            </div>
          </div>

          {/* Technical Certs & Skill Cards */}
          <div className="bg-[#1e293b] p-8 rounded-2xl border border-slate-800 shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Award size={24} className="text-amber-500" /> Key Certifications
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="bg-amber-500/10 p-2 rounded-lg">
                  <Database className="text-amber-500" size={20} />
                </div>
                <div>
                  <p className="font-bold text-white text-sm">GenAI Data Analytics</p>
                  <p className="text-xs text-slate-400">Tata - Forage Program (2026)</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-blue-500/10 p-2 rounded-lg">
                  <Terminal className="text-blue-400" size={20} />
                </div>
                <div>
                  <p className="font-bold text-white text-sm">SAP Data Modeling</p>
                  <p className="text-xs text-slate-400">ABAP Dictionary & Core Data</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-purple-500/10 p-2 rounded-lg">
                  <Palette className="text-purple-400" size={20} />
                </div>
                <div>
                  <p className="font-bold text-white text-sm">UI/UX Designer</p>
                  <p className="text-xs text-slate-400">Figma & Brand Development</p>
                </div>
              </li>
            </ul>
            
            {/* Added: Small quote/motto box */}
            <div className="mt-8 p-4 bg-slate-900/50 rounded-xl border border-slate-800 italic text-sm text-slate-400">
              "Focusing on the intersection of AI-driven efficiency and user-centric aesthetics."
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
