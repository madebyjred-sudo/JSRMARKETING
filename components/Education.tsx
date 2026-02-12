import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { GraduationCap, Award, BookOpen, CheckCircle, ExternalLink } from 'lucide-react';

const Education: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'formal' | 'certs'>('formal');

  // Hardcoded certification logos/colors representation
  const certifications = [
    {
      id: 1,
      title: t.education.certs.meta,
      issuer: "Meta",
      color: "border-blue-500/50 hover:border-blue-500",
      iconColor: "text-blue-500",
      bgHover: "hover:bg-blue-500/10"
    },
    {
      id: 2,
      title: t.education.certs.google,
      issuer: "Google",
      color: "border-yellow-500/50 hover:border-yellow-500",
      iconColor: "text-yellow-500",
      bgHover: "hover:bg-yellow-500/10"
    },
    {
      id: 3,
      title: t.education.certs.analytics,
      issuer: "Google",
      color: "border-orange-500/50 hover:border-orange-500",
      iconColor: "text-orange-500",
      bgHover: "hover:bg-orange-500/10"
    },
    {
      id: 4,
      title: t.education.certs.twitter,
      issuer: "Twitter / X",
      color: "border-white/30 hover:border-white",
      iconColor: "text-white",
      bgHover: "hover:bg-white/10"
    },
    {
      id: 5,
      title: t.education.certs.social,
      issuer: "IEP",
      color: "border-red-500/50 hover:border-red-500",
      iconColor: "text-red-500",
      bgHover: "hover:bg-red-500/10"
    }
  ];

  return (
    <section id="education" className="py-24 bg-jsr-dark relative">
       {/* Ambient Glow */}
       <div className="absolute top-1/4 right-0 w-96 h-96 bg-jsr-accent/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
          <div className="text-center md:text-left">
            <span className="text-jsr-accent font-bold tracking-widest text-sm uppercase mb-2 block">{t.education.label}</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">{t.education.title}</h2>
          </div>
          
          {/* Toggle Switch */}
          <div className="bg-slate-900 p-1 rounded-full border border-slate-800 flex relative">
            <button
              onClick={() => setActiveTab('formal')}
              className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 relative z-10 ${
                activeTab === 'formal' ? 'text-jsr-dark' : 'text-slate-400 hover:text-white'
              }`}
            >
              {t.education.tabs.formal}
            </button>
            <button
              onClick={() => setActiveTab('certs')}
              className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 relative z-10 ${
                activeTab === 'certs' ? 'text-jsr-dark' : 'text-slate-400 hover:text-white'
              }`}
            >
              {t.education.tabs.certs}
            </button>
            
            {/* Sliding Background */}
            <div 
              className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-jsr-accent rounded-full transition-transform duration-300 ease-out shadow-lg shadow-jsr-accent/20 ${
                activeTab === 'certs' ? 'translate-x-full' : 'translate-x-0'
              }`}
            ></div>
          </div>
        </div>

        {/* Content Container */}
        <div className="min-h-[400px]">
          
          {/* Formal Education - Timeline */}
          {activeTab === 'formal' && (
             <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
               {t.education.degrees.map((degree, index) => (
                 <div key={index} className="relative pl-8 md:pl-0">
                    {/* Timeline Line (Desktop) */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-800 -translate-x-1/2"></div>
                    
                    <div className={`flex flex-col md:flex-row items-center gap-8 ${
                      index % 2 === 0 ? 'md:flex-row-reverse' : ''
                    }`}>
                       {/* Date / Icon */}
                       <div className="w-full md:w-1/2 flex justify-start md:justify-center relative z-10 order-2 md:order-1">
                          <div className={`bg-jsr-card border border-slate-700 text-jsr-accent px-4 py-2 rounded-full font-bold text-sm shadow-xl ${
                             index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
                          }`}>
                            {degree.year}
                          </div>
                       </div>
                       
                       {/* Card */}
                       <div className="w-full md:w-1/2 order-1 md:order-2">
                          <div className={`bg-jsr-card border border-slate-800 p-6 rounded-xl hover:border-jsr-accent/50 transition-all duration-300 shadow-lg group ${
                             index % 2 === 0 ? 'md:text-left' : 'md:text-right'
                          }`}>
                             <h3 className="text-xl font-bold text-white mb-1 group-hover:text-jsr-accent transition-colors">{degree.title}</h3>
                             <p className="text-slate-400 font-medium mb-3 flex items-center gap-2 md:inline-flex">
                                <GraduationCap className="w-4 h-4" /> {degree.school}
                             </p>
                             <p className="text-sm text-jsr-gray leading-relaxed">{degree.desc}</p>
                          </div>
                       </div>
                    </div>
                 </div>
               ))}
             </div>
          )}

          {/* Certifications - Grid */}
          {activeTab === 'certs' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in zoom-in duration-500">
              {certifications.map((cert) => (
                <div 
                  key={cert.id} 
                  className={`bg-jsr-card border p-6 rounded-xl transition-all duration-300 group cursor-default relative overflow-hidden ${cert.color} ${cert.bgHover}`}
                >
                  <div className="flex justify-between items-start mb-4 relative z-10">
                    <div className={`p-3 rounded-lg bg-slate-950/50 ${cert.iconColor}`}>
                      <Award className="w-6 h-6" />
                    </div>
                    <CheckCircle className={`w-5 h-5 ${cert.iconColor} opacity-50 group-hover:opacity-100 transition-opacity`} />
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2 relative z-10">{cert.title}</h3>
                  <p className="text-sm text-slate-500 font-medium uppercase tracking-wider relative z-10">{cert.issuer}</p>

                  {/* Decorative faint background icon */}
                  <Award className="absolute -bottom-4 -right-4 w-24 h-24 text-white/5 transform rotate-12 group-hover:rotate-0 transition-transform duration-500" />
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default Education;