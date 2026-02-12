import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { X, ArrowRight, Check, MessageCircle } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

// Updated images and logos for new cases
const allProjects = [
  { 
    id: 1,
    key: "Amazon Prime Video",
    categoryType: "entertainment",
    image: "/assets/cases/prime.png",
    logo: "/assets/clients/Prime Video_Logo_4.png"
  },
  { 
    id: 2,
    key: "Politécnico Grancolombiano (Pre/Pos)",
    categoryType: "education",
    image: "/assets/cases/poli-1.png",
    logo: "/assets/clients/politecnico-grancolombiano-seeklogo.svg"
  },
  { 
    id: 3,
    key: "Politécnico Grancolombiano (Edu. Cont)",
    categoryType: "education",
    image: "/assets/cases/poli-2.png",
    logo: "/assets/clients/politecnico-grancolombiano-seeklogo.svg"
  },
  {
    id: 4,
    key: "Easy - Cencosud",
    categoryType: "retail",
    image: "/assets/cases/easy.png",
    logo: "/assets/clients/easy svg.svg"
  },
  {
    id: 5,
    key: "Chevrolet - GM",
    categoryType: "automotive",
    image: "/assets/cases/chevrolet.png",
    logo: "/assets/clients/chevrolet-5.svg"
  }
];

const Portfolio: React.FC = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<'all' | 'entertainment' | 'education' | 'retail' | 'automotive'>('all');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const displayedProjects = t.portfolio.items.map((item, index) => {
    return {
      ...item,
      ...allProjects[index]
    };
  }).filter(project => filter === 'all' || project.categoryType === filter);

  const activeProject = selectedProject !== null ? t.portfolio.items[selectedProject] : null;

  const handleWhatsAppRedirect = () => {
    window.open(`https://wa.me/573502715323?text=Hola,%20vi%20tu%20caso%20de%20éxito%20de%20${activeProject?.client || 'Portafolio'}%20y%20me%20gustaría%20saber%20más.`, '_blank');
  };

  return (
    <section id="projects" className="py-24 bg-slate-950 relative overflow-hidden">
       {/* Background decorative elements */}
       <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>
       <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <ScrollReveal baseOpacity={0} x={-30} y={0} duration={800}>
            <div>
              <span className="text-jsr-accent font-bold tracking-widest text-sm uppercase mb-2 block">{t.portfolio.subtitle}</span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">{t.portfolio.title}</h2>
            </div>
          </ScrollReveal>
          
          <ScrollReveal baseOpacity={0} x={30} y={0} duration={800} delay={200}>
            <div className="flex flex-wrap gap-2">
              {[
                { key: 'all', label: t.portfolio.filters.all },
                { key: 'entertainment', label: t.portfolio.filters.entertainment },
                { key: 'education', label: t.portfolio.filters.education },
                { key: 'retail', label: t.portfolio.filters.retail },
                { key: 'automotive', label: t.portfolio.filters.automotive },
              ].map((btn) => (
                <button
                  key={btn.key}
                  onClick={() => setFilter(btn.key as any)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    filter === btn.key 
                      ? 'bg-jsr-accent text-jsr-dark shadow-lg shadow-jsr-accent/20' 
                      : 'border border-slate-700 text-slate-400 hover:border-white hover:text-white'
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 min-h-[400px]">
          {displayedProjects.length > 0 ? (
            displayedProjects.map((project, index) => (
              <ScrollReveal 
                key={allProjects.indexOf(allProjects.find(p => p.id === project.id)!)} 
                staggerIndex={index} 
                baseOpacity={0} 
                enableBlur 
                blurStrength={4} 
                y={40} 
                duration={900}
              >
                <div 
                  onClick={() => setSelectedProject(allProjects.indexOf(allProjects.find(p => p.id === project.id)!))}
                  className="group relative overflow-hidden rounded-xl bg-jsr-card border border-slate-800 hover:border-jsr-accent/50 transition-all duration-300 shadow-lg cursor-pointer hover:-translate-y-2 h-full"
                >
                  {/* Image Container */}
                  <div className="h-64 overflow-hidden relative">
                    <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/0 transition-colors duration-500 z-10"></div>
                    
                    <img 
                      src={project.image} 
                      alt={project.client} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute bottom-4 right-4 z-20 bg-jsr-dark/80 backdrop-blur text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-8">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-jsr-accent text-xs font-bold uppercase tracking-wider block">{project.category}</span>
                        {project.logo && (
                          <div className="flex items-center">
                            <img 
                              src={project.logo} 
                              alt={`${project.client} logo`} 
                              className={`h-6 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300 ${project.key.includes("Chevrolet") ? "" : "brightness-0 invert"}`}
                            />
                          </div>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-6">{project.client}</h3>
                      
                      <div className="flex justify-between items-center border-t border-slate-800 pt-6">
                        <div>
                          <p className="text-slate-500 text-xs uppercase font-bold mb-1">{t.portfolio.metrics.roasLabel}</p>
                          <p className="text-white font-medium">{project.metrics.roas}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-slate-500 text-xs uppercase font-bold mb-1">{t.portfolio.metrics.spendLabel}</p>
                          <p className="text-white font-medium text-jsr-accent">{project.metrics.spend}</p>
                        </div>
                      </div>
                  </div>
                </div>
              </ScrollReveal>
            ))
          ) : (
             <div className="col-span-3 flex items-center justify-center text-slate-500 italic">
               No projects found for this filter.
             </div>
          )}
        </div>
      </div>

      {/* Storyteller Modal */}
      {selectedProject !== null && activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm animate-in fade-in duration-300"
            onClick={() => setSelectedProject(null)}
          ></div>
          
          <div className="relative bg-jsr-card border border-slate-700 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl animate-in zoom-in-95 fade-in duration-300 slide-in-from-bottom-4">
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-3 z-30 bg-black/50 backdrop-blur-md rounded-full transition-all hover:scale-110"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-64 lg:h-auto relative">
                 {allProjects[selectedProject].logo && (
                    <div className="absolute top-6 left-6 z-30 bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow-xl">
                      <img 
                        src={allProjects[selectedProject].logo} 
                        alt={`${activeProject.client} logo`} 
                        className="h-10 w-auto object-contain"
                      />
                    </div>
                 )}
                 <img 
                  src={allProjects[selectedProject].image} 
                  alt={activeProject.client} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-jsr-card via-transparent to-transparent lg:bg-gradient-to-r"></div>
                <div className="absolute bottom-6 left-6 lg:bottom-10 lg:left-10 z-20">
                   <span className="bg-jsr-accent text-jsr-dark px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-full mb-3 inline-block">
                     {activeProject.category}
                   </span>
                   <h3 className="text-3xl md:text-4xl font-heading font-bold text-white shadow-black drop-shadow-md">
                     {activeProject.client}
                   </h3>
                </div>
              </div>

              <div className="p-8 lg:p-10 flex flex-col">
                <div className="space-y-8 mb-8">
                  <div>
                    <h4 className="text-jsr-accent text-sm font-bold uppercase tracking-wider mb-2">{activeProject.story.challenge}</h4>
                    <p className="text-slate-300 leading-relaxed">{activeProject.story.challengeDesc}</p>
                  </div>
                  <div>
                    <h4 className="text-jsr-accent text-sm font-bold uppercase tracking-wider mb-2">{activeProject.story.strategy}</h4>
                    <p className="text-slate-300 leading-relaxed">{activeProject.story.strategyDesc}</p>
                  </div>
                  <div>
                    <h4 className="text-jsr-accent text-sm font-bold uppercase tracking-wider mb-2">{activeProject.story.result}</h4>
                    <p className="text-slate-300 leading-relaxed">{activeProject.story.resultDesc}</p>
                  </div>
                </div>

                {/* Conversion Highlights */}
                <div className="mt-auto bg-slate-900/50 p-6 rounded-xl border border-slate-800">
                  <h5 className="text-white font-bold mb-4 flex items-center gap-2">
                    <Check className="text-jsr-accent w-5 h-5" /> Highlights
                  </h5>
                  <ul className="space-y-2 mb-6">
                    {activeProject.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-slate-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-jsr-accent"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  
                  <button 
                    onClick={handleWhatsAppRedirect}
                    className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-[#25D366]/20"
                  >
                    <MessageCircle className="w-5 h-5" />
                    {t.portfolio.cta_detail}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;