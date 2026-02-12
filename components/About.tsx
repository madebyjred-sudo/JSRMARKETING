import React, { useEffect, useRef, useState } from 'react';
import { Download, Globe, BarChart3, Layers, TrendingUp, GraduationCap, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { siMeta, siGoogle, siX } from 'simple-icons/icons';
import ScrollReveal from './ScrollReveal';

// Helper to render SimpleIcon path
const SimpleIcon = ({ icon, className }: { icon: any, className?: string }) => (
  <svg 
    role="img" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="currentColor"
  >
    <path d={icon.path} />
  </svg>
);

const About: React.FC = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  // Education States
  const [isEduOpen, setIsEduOpen] = useState(false);
  const [activeEduTab, setActiveEduTab] = useState<'formal' | 'certs'>('formal');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    
    return () => observer.disconnect();
  }, []);

  const certifications = [
    { id: 1, title: t.education.certs.meta, issuer: "Meta", icon: siMeta, hoverColor: "group-hover:text-blue-500" },
    { id: 2, title: t.education.certs.google, issuer: "Google", icon: siGoogle, hoverColor: "group-hover:text-yellow-500" },
    { id: 3, title: t.education.certs.analytics, issuer: "Google", icon: siGoogle, hoverColor: "group-hover:text-orange-500" },
    { id: 4, title: t.education.certs.twitter, issuer: "Twitter / X", icon: siX, hoverColor: "group-hover:text-white" },
    { id: 5, title: t.education.certs.social, issuer: "IEP", icon: null, hoverColor: "group-hover:text-red-500" } 
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-jsr-dark relative">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="flex flex-col lg:flex-row items-start gap-16">
          
          {/* Left Column: Image */}
          <div className="w-full lg:w-1/2 relative group">
             <ScrollReveal baseOpacity={0} x={-40} y={0} enableBlur blurStrength={5} duration={1000}>
               <div className="relative z-10 rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl">
                 <img 
                  src="https://images2.imgbox.com/2a/50/tBkCkCCX_o.png" 
                  alt="Juan Sebastian Rojas" 
                  className="w-full h-auto object-cover group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-jsr-dark via-transparent to-transparent opacity-60"></div>
               </div>
               {/* Decorative Element */}
               <div className="absolute -bottom-4 -right-4 w-full h-full border border-slate-800 rounded-2xl z-0 hidden md:block group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500 bg-slate-800/10"></div>
             </ScrollReveal>
          </div>

          {/* Right Column: Bio & Skills */}
          <div className="w-full lg:w-1/2 relative z-20">
            <ScrollReveal baseOpacity={0} x={40} y={0} duration={800} delay={200}>
              <h4 className="text-jsr-accent font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                <span className="w-8 h-px bg-jsr-accent"></span>
                {t.about.label}
              </h4>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8 leading-tight">
                {t.about.title}
              </h2>
            </ScrollReveal>

            <ScrollReveal baseOpacity={0} y={20} duration={800} delay={400}>
              <div className="space-y-6 text-jsr-gray leading-relaxed text-lg border-l-2 border-slate-800 pl-6">
                <p>{t.about.p1}</p>
                <p>{t.about.p2}</p>
              </div>
            </ScrollReveal>

            {/* KPI Grid */}
            <div className="grid grid-cols-2 gap-6 mt-10 mb-8">
              {t.about.stats.map((item, index) => (
                 <ScrollReveal key={index} staggerIndex={index} baseOpacity={0} y={20} duration={600} delay={600}>
                   <div className="bg-slate-900/30 border border-slate-800 p-5 rounded-xl flex flex-col justify-center hover:border-jsr-accent/30 transition-all duration-300">
                      <span className="text-3xl font-heading font-bold text-white mb-1 tracking-tight">{item.value}</span>
                      <span className="text-jsr-gray text-xs uppercase tracking-widest font-bold">{item.label}</span>
                   </div>
                 </ScrollReveal>
              ))}
            </div>

            {/* Download Link */}
            <ScrollReveal baseOpacity={0} y={10} duration={500} delay={900}>
              <div className="mb-8">
                <a href="#contact" className="inline-flex items-center gap-2 text-white border-b border-jsr-accent pb-1 hover:text-jsr-accent transition-colors font-medium">
                  <Download className="w-4 h-4" />
                  {t.about.resume}
                </a>
              </div>
            </ScrollReveal>

            {/* Education Hover Dropdown Container */}
            <ScrollReveal baseOpacity={0} y={20} duration={800} delay={1000}>
              <div 
                className="relative w-full z-50"
                onMouseEnter={() => window.innerWidth >= 768 && setIsEduOpen(true)}
                onMouseLeave={() => window.innerWidth >= 768 && setIsEduOpen(false)}
              >
                {/* Trigger Bar - Clickable on Mobile */}
                <div 
                  onClick={() => setIsEduOpen(!isEduOpen)}
                  className={`
                    relative z-20 flex items-center justify-between p-4 rounded-xl cursor-pointer transition-all duration-300 border
                    ${isEduOpen 
                      ? 'bg-jsr-accent text-jsr-dark border-jsr-accent rounded-b-none' 
                      : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-600 hover:text-white'
                    }
                  `}
                >
                  <div className="flex items-center gap-3">
                    <GraduationCap className="w-5 h-5" />
                    <span className="font-bold uppercase tracking-wider text-sm">{t.education.title}</span>
                  </div>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isEduOpen ? 'rotate-180' : ''}`} />
                </div>

                {/* Expandable Content */}
                <div className={`
                  absolute left-0 right-0 top-full z-10 overflow-hidden transition-all duration-300 ease-out origin-top
                  ${isEduOpen ? 'max-h-[800px] opacity-100 scale-100' : 'max-h-0 opacity-0 scale-95 pointer-events-none'}
                `}>
                  {/* Visual Content Wrapper with Background */}
                  <div className="bg-slate-900 border border-t-0 border-slate-700 rounded-b-xl shadow-2xl">
                    <div className="p-6">
                      {/* Internal Tabs */}
                      <div className="flex gap-2 mb-6 border-b border-slate-800 pb-2">
                        <button 
                          onClick={() => setActiveEduTab('formal')}
                          className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md transition-colors ${activeEduTab === 'formal' ? 'bg-slate-800 text-white' : 'text-slate-500 hover:text-white'}`}
                        >
                          {t.education.tabs.formal}
                        </button>
                        <button 
                          onClick={() => setActiveEduTab('certs')}
                          className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md transition-colors ${activeEduTab === 'certs' ? 'bg-slate-800 text-white' : 'text-slate-500 hover:text-white'}`}
                        >
                          {t.education.tabs.certs}
                        </button>
                      </div>

                      {/* Tab Content */}
                      <div className="max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                        {activeEduTab === 'formal' ? (
                          <div className="space-y-4">
                            {t.education.degrees.map((degree, idx) => (
                              <div key={idx} className="flex gap-4 group/item">
                                 <div className="flex flex-col items-center">
                                   <div className="w-2 h-2 rounded-full bg-jsr-accent mt-2 group-hover/item:scale-150 transition-transform"></div>
                                   <div className="w-px h-full bg-slate-800 my-1"></div>
                                 </div>
                                 <div className="pb-4">
                                    <span className="text-jsr-accent text-xs font-bold">{degree.year}</span>
                                    <h4 className="text-white font-bold text-sm">{degree.title}</h4>
                                    <p className="text-slate-400 text-xs flex items-center gap-1 mt-1">
                                      <GraduationCap className="w-3 h-3" /> {degree.school}
                                    </p>
                                 </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="grid grid-cols-1 gap-3">
                            {certifications.map((cert) => (
                              <div 
                                  key={cert.id} 
                                  className="group flex items-center gap-3 p-3 rounded-lg border border-slate-800 bg-slate-900/50 hover:bg-slate-800 hover:border-slate-700 transition-all duration-300"
                              >
                                {cert.icon ? (
                                  <SimpleIcon icon={cert.icon} className={`w-5 h-5 text-slate-500 transition-colors duration-300 ${cert.hoverColor}`} />
                                ) : (
                                  <GraduationCap className={`w-5 h-5 text-slate-500 transition-colors duration-300 ${cert.hoverColor}`} />
                                )}
                                <div>
                                  <h4 className="text-slate-300 group-hover:text-white transition-colors font-bold text-sm leading-none mb-1">{cert.title}</h4>
                                  <span className="text-[10px] uppercase text-slate-600 group-hover:text-slate-400 tracking-wider font-bold transition-colors">{cert.issuer}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;