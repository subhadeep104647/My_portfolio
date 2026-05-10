import React, { useState } from 'react';
import { Award, ExternalLink, Calendar, ShieldCheck, ChevronDown, ChevronUp, Loader2, X, FileCode } from 'lucide-react';

const Certificates = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedSvg, setSelectedSvg] = useState(null); // Track which SVG to show in modal

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
      title: "Building Data Models with the ABAP Dictionary and ABAP Core Data Services",
      issuer: "SAP Learning",
      date: "February 22, 2026",
      id: "xevyr-gapov-vyfim-tefok-kyduc",
      link: "https://sap.com",
      pic: "public/c1.svg",
      color: "border-blue-600",
      level: "Intermediate",
      skills: ["ABAP", "CDS Views", "Data Modeling", "SQL"]
    },
    {
      title: "GenAI Powered Data Analytics",
      issuer: "Tata - Forage",
      date: "May 2026",
      id: "2WJyZtSATNqazRH29",
      link: "https://theforage.com",
      pic: "public/c2.svg",
      color: "border-amber-500",
      level: "Professional",
      skills: ["GenAI", "Data Analytics", "Prompt Engineering"]
    },
    {
      title: "Practicing Clean Core Extensibility for SAP S/4HANA Cloud - Course Completion",
      issuer: "SAP Learning",
      date: "February 20, 2026",
      id: "xudym-cikyp-dabot-hucys-dolip",
      link: "https://sap.com",
      pic: "public/c3.svg",
      color: "border-blue-400",
      level: "Beginner",
      skills: ["ABAP Objects", "SAP SQL", "RESTful App Model"]
    }
  ];

  return (
    <section className="text-slate-200 py-16 px-6 sm:px-12 font-sans relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Toggle Button */}
        <div className="flex flex-col items-center justify-center mb-16">
          <button 
            onClick={handleToggle}
            disabled={isLoading}
            className={`group flex items-center gap-3 font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-xl transform hover:-translate-y-1 ${
              isVisible 
              ? "bg-slate-800 text-slate-300 border border-slate-700" 
              : "bg-amber-600 hover:bg-amber-500 text-white shadow-amber-900/20"
            }`}
          >
            {isLoading ? <Loader2 className="animate-spin" size={24} /> : <Award size={24} />}
            <span>{isLoading ? "Verifying..." : isVisible ? "Hide Certificates" : "View Verified Certificates"}</span>
            {!isLoading && (isVisible ? <ChevronUp size={20} /> : <ChevronDown size={20} />)}
          </button>
        </div>

        {/* Certificates Grid */}
        {isVisible && (
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certifications.map((cert, index) => (
                <div key={index} className={`bg-[#1e293b] p-8 rounded-3xl border-t-4 ${cert.color} hover:shadow-2xl transition-all group relative overflow-hidden`}>
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-slate-900/50 rounded-2xl"><ShieldCheck className="text-amber-500" size={28} /></div>
                    <div className="flex gap-2">
                        {/* NEW SVG BUTTON */}
                        <button 
                            onClick={() => setSelectedSvg(cert)}
                            className="p-2 text-slate-500 hover:text-amber-400 hover:bg-slate-800 rounded-full transition-all"
                            title="View SVG Badge"
                        >
                            <a href={cert.pic}><FileCode size={20} /></a>
                        </button>
                        <a href={cert.link} target="_blank" rel="noopener noreferrer" className="p-2 text-slate-500 hover:text-white hover:bg-slate-800 rounded-full transition-all"><ExternalLink size={20} /></a>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 leading-snug group-hover:text-amber-400 transition-colors">{cert.title}</h3>
                  <div className="space-y-3 mb-6">
                    <p className="text-sm font-semibold text-slate-400">{cert.issuer} • <span className="text-amber-500/80">{cert.level}</span></p>
                    <div className="flex items-center gap-2 text-xs text-slate-500"><Calendar size={14} /> {cert.date}</div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {cert.skills.map((skill, i) => (
                      <span key={i} className="text-[10px] uppercase tracking-wider font-bold bg-slate-900 px-2 py-1 rounded text-slate-400">{skill}</span>
                    ))}
                  </div>
                  <p className="text-[10px] font-mono text-slate-600 truncate pt-4 border-t border-slate-800/50 uppercase tracking-tighter">ID: {cert.id}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* SVG MODAL OVERLAY */}
      {selectedSvg && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-[#1e293b] w-full max-w-lg rounded-3xl p-8 relative border border-slate-700 shadow-2xl">
            <button onClick={() => setSelectedSvg(null)} className="absolute top-4 right-4 text-slate-400 hover:text-white"><X size={24} /></button>
            
            {/* SVG Certificate UI */}
            <div className="aspect-[4/3] w-full bg-slate-900 rounded-xl border-2 border-dashed border-slate-700 flex flex-col items-center justify-center p-6 text-center">
                <div className="mb-4 bg-amber-500/10 p-4 rounded-full"><Award size={48} className="text-amber-500" /></div>
                <h4 className="text-xs uppercase tracking-[0.3em] text-slate-500 font-bold mb-2">Official Digital Badge</h4>
                <div className="h-px w-24 bg-amber-500/30 mb-4" />
                <h2 className="text-xl font-bold text-white mb-1">{selectedSvg.title}</h2>
                <p className="text-amber-500 font-mono text-sm mb-4">{selectedSvg.issuer}</p>
                <p className="text-[10px] text-slate-500 font-mono italic">Verified Digital Credential • {selectedSvg.date}</p>
                
                {/* Visual "QR" placeholder */}
                <div className="mt-6 w-16 h-16 border border-slate-700 rounded-lg flex items-center justify-center bg-slate-950">
                    <div className="grid grid-cols-3 gap-1">
                        {[...Array(9)].map((_, i) => <div key={i} className="w-2 h-2 bg-slate-800 rounded-sm" />)}
                    </div>
                </div>
            </div>
            
            <button 
                onClick={() => window.open(selectedSvg.link, '_blank')}
                className="w-full mt-6 bg-amber-600 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-amber-500 transition-colors"
            >
                Verify Official Link <ExternalLink size={16} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
