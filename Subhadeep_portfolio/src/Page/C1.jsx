import React, { useState } from 'react';
import { 
  Award, ExternalLink, Calendar, ShieldCheck, 
  ChevronDown, ChevronUp, Loader2, Github, 
  Linkedin, Terminal, Palette, Database, Code2 
} from 'lucide-react';

const PortfolioPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleToggle = () => {
    if (!isVisible) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setIsVisible(true);
      }, 800);
    } else {
      setIsVisible(false);
    }
  };

  const certifications = [
    {
      title: "Learning Basic ABAP Programming",
      issuer: "SAP Learning",
      date: "February 20, 2026",
      id: "xudym-cikyp-dabot-hucys-dolip",
      link: "https://sap.com",
      color: "border-blue-600",
      skills: ["ABAP", "SQL", "OOPS", "RESTful API"]
    },
    {
      title: "GenAI Powered Data Analytics",
      issuer: "Tata - Forage",
      date: "May 2026",
      id: "2WJyZtSATNqazRH29",
      link: "https://github.com",
      color: "border-amber-500",
      skills: ["GenAI", "Data Analytics", "Python"]
    }
  ];

  return (
    <div className="bg-[#0f172a] min-h-screen text-slate-200 font-sans selection:bg-amber-500/30">
      
      {/* --- HERO / ABOUT SECTION --- */}
      <section className="py-20 px-6 sm:px-12 max-w-6xl mx-auto">
        <div className="mb-12 border-l-4 border-amber-500 pl-6">
          <h2 className="text-sm uppercase tracking-widest text-amber-500 font-bold mb-2">Portfolio 2026</h2>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white tracking-tight">
            Subhadeep Biswas
          </h1>
          <p className="text-xl text-slate-400 mt-4 max-w-2xl leading-relaxed">
            Full-Stack Developer & Python Enthusiast. Bridging the gap between 
            <strong> Figma precision</strong> and <strong>robust backend architecture</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="md:col-span-2 space-y-6 text-lg text-slate-300">
            <p>
              Pursuing B.Tech at <span className="text-amber-500">JIS College of Engineering</span>. 
              I specialize in building data-driven systems like <span className="italic text-white">DEBUGXIA</span> 
              and creative brand concepts like <span className="italic text-white">Love & Lattes</span>.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="https://github.com" target="_blank" className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-xl transition border border-slate-700">
                <Github size={20} /> GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" className="flex items-center gap-2 bg-amber-600 hover:bg-amber-500 px-6 py-3 rounded-xl transition text-white font-bold shadow-lg shadow-amber-900/20">
                <Linkedin size={20} /> LinkedIn
              </a>
            </div>
          </div>

          <div className="bg-[#1e293b] p-6 rounded-2xl border border-slate-800">
            <h3 className="text-white font-bold mb-4 flex items-center gap-2 underline decoration-amber-500">
              <Terminal size={18} /> Core Tech
            </h3>
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              {['Python', 'React', 'Tailwind', 'SAP ABAP', 'Figma', 'SQL'].map(tech => (
                <span key={tech} className="bg-slate-900 px-3 py-1.5 rounded-md border border-slate-700">{tech}</span>
              ))}
            </div>
          </div>
        </div>

        {/* --- CERTIFICATES TOGGLE SECTION --- */}
        <div className="border-t border-slate-800 pt-16">
          <div className="flex flex-col items-center justify-center mb-12">
            <button 
              onClick={handleToggle}
              disabled={isLoading}
              className={`group flex items-center gap-3 font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-xl ${
                isVisible ? "bg-slate-800 text-slate-400" : "bg-white text-black hover:scale-105"
              }`}
            >
              {isLoading ? <Loader2 className="animate-spin" /> : <Award size={22} />}
              <span>{isLoading ? "Verifying..." : isVisible ? "Hide Credentials" : "Show Verified Certificates"}</span>
              {!isLoading && (isVisible ? <ChevronUp size={18} /> : <ChevronDown size={18} />)}
            </button>
          </div>

          {isVisible && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-5 duration-700">
              {certifications.map((cert, index) => (
                <div key={index} className={`bg-[#1e293b]/50 p-8 rounded-3xl border-t-4 ${cert.color} hover:bg-[#1e293b] transition-all group`}>
                  <div className="flex justify-between items-start mb-6">
                    <ShieldCheck className="text-amber-500" size={32} />
                    <a href={cert.link} target="_blank" className="text-slate-500 hover:text-white"><ExternalLink size={20} /></a>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{cert.title}</h3>
                  <p className="text-amber-500 font-medium mb-4">{cert.issuer}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {cert.skills.map(s => (
                      <span key={s} className="text-[10px] bg-slate-900 px-2 py-1 rounded text-slate-400 font-bold uppercase">{s}</span>
                    ))}
                  </div>
                  <p className="text-[10px] font-mono text-slate-600">ID: {cert.id}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-10 text-center text-slate-500 text-sm border-t border-slate-900">
        <p>© 2026 Subhadeep Biswas. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
};

export default PortfolioPage;

