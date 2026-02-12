import React from 'react';
import { TrendingUp, Users, Briefcase } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import ScrollReveal from './ScrollReveal';

const Services: React.FC = () => {
  const { t } = useLanguage();
  
  const icons = [
    <TrendingUp className="w-8 h-8" />,
    <Users className="w-8 h-8" />,
    <Briefcase className="w-8 h-8" />
  ];

  return (
    <section id="services" className="py-24 bg-jsr-dark relative border-t border-slate-900">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-900/20 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="mb-16">
          <ScrollReveal baseOpacity={0} x={-20} y={0} duration={800}>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">{t.services.title}</h2>
            <div className="w-20 h-1 bg-jsr-accent"></div>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.services.items.map((service, index) => (
            <ScrollReveal 
              key={index} 
              staggerIndex={index} 
              baseOpacity={0} 
              y={30} 
              duration={800}
            >
              <div 
                className="bg-jsr-card p-10 border border-slate-800 hover:border-jsr-accent transition-all duration-300 group rounded-xl relative overflow-hidden shadow-lg shadow-black/20 h-full"
              >
                <div className="absolute top-0 right-0 p-4 opacity-5 font-heading font-bold text-6xl text-white group-hover:text-jsr-accent transition-colors">
                  0{index + 1}
                </div>

                <div className="mb-8 text-slate-500 group-hover:text-jsr-accent transition-colors bg-slate-900/80 w-16 h-16 flex items-center justify-center rounded-lg border border-slate-800 group-hover:border-jsr-accent/30">
                  {icons[index]}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:translate-x-1 transition-transform duration-300">
                  {service.title}
                </h3>
                <p className="text-jsr-gray leading-relaxed text-base">
                  {service.description}
                </p>
                
                <div className="mt-8 w-full h-px bg-slate-800 group-hover:bg-jsr-accent/50 transition-colors"></div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;