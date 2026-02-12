import React, { Suspense } from 'react';
import { ArrowRight, Users, TrendingUp, Target, Briefcase } from 'lucide-react';
import CountUp from 'react-countup';
import { useLanguage } from '../context/LanguageContext';
import { siGeneralmotors, siChevrolet, siAmazon, siAudi } from 'simple-icons/icons';
import ScrollReveal from './ScrollReveal';
import ScrollVelocity from './ScrollVelocity';
import FluidGlass from './FluidGlass';

// Manually defining Johnson & Johnson icon to avoid import error 'export not found'
const siJohnsonandjohnson = {
  title: 'Johnson & Johnson',
  slug: 'johnsonandjohnson',
  hex: 'E61E25',
  path: 'M17.29 16.964c-.378-.266-.757-.504-1.127-.714-.37-.21-.735-.392-1.092-.546-.357-.154-.707-.266-1.05-.336-.343-.07-.672-.105-.987-.105-.63 0-1.155.126-1.575.378-.42.252-.63.658-.63 1.218 0 .196.028.378.084.546.056.168.14.315.252.441.112.126.252.231.42.315.168.084.364.126.588.126.378 0 .728-.105 1.05-.315.322-.21.616-.504.882-.882.266-.378.497-.826.693-1.344.196-.518.336-1.092.42-1.722.042.476.133.924.273 1.344.14.42.336.791.588 1.113.252.322.56.581.924.777.364.196.798.294 1.302.294.644 0 1.253-.133 1.827-.399.574-.266 1.099-.637 1.575-1.113l-.84-1.218c-.364.336-.735.595-1.113.777-.378.182-.77.273-1.176.273-.672 0-1.162-.217-1.47-.651-.308-.434-.462-1.071-.462-1.911 0-.742.112-1.533.336-2.373.224-.84.553-1.687.987-2.541l-2.016-.672c-.448.91-.798 1.813-1.05 2.709-.252.896-.378 1.764-.378 2.604 0 .336.014.651.042.945-.336-.084-.686-.126-1.05-.126-.546 0-1.05.105-1.512.315-.462.21-.861.511-1.197.903-.336.392-.595.861-.777 1.407-.182.546-.273 1.141-.273 1.785 0 .896.182 1.638.546 2.226.364.588.882.882 1.554.882.518 0 1.008-.126 1.47-.378.462-.252.882-.595 1.26-1.029.378-.434.707-.938.987-1.512.28-.574.49-1.183.63-1.827zM2.872 16.334c-.168-.182-.294-.385-.378-.609-.084-.224-.126-.455-.126-.693 0-.546.175-1.029.525-1.449.35-.42.826-.63 1.428-.63.49 0 .966.133 1.428.399.462.266.868.616 1.218 1.05L6.092 15.62c-.238-.28-.483-.497-.735-.651-.252-.154-.539-.231-.861-.231-.196 0-.364.049-.504.147-.14.098-.21.238-.21.42 0 .154.063.294.189.42.126.126.301.238.525.336.224.098.497.182.819.252.322.07.679.126 1.071.168.322.028.623.084.903.168.28.084.532.196.756.336.224.14.413.315.567.525.154.21.231.469.231.777 0 .546-.196 1.029-.588 1.449-.392.42-.924.63-1.596.63-.336 0-.665-.056-.987-.168-.322-.112-.616-.28-.882-.504-.266-.224-.497-.504-.693-.84-.196-.336-.35-.721-.462-1.155l1.89-.504c.056.28.161.525.315.735.154.21.371.315.651.315.224 0 .42-.056.588-.168.168-.112.252-.266.252-.462 0-.154-.07-.28-.21-.378-.14-.098-.329-.182-.567-.252-.238-.07-.518-.133-.84-.189-.322-.056-.665-.119-1.029-.189-.868-.14-1.547-.462-2.037-.966z'
};

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

const Hero: React.FC = () => {
  const { t } = useLanguage();

  const WHATSAPP_URL = "https://wa.me/573502715323";

  // Real clients from the provided list
  const carouselItems = [
    { type: 'image', src: '/assets/clients/politecnico-grancolombiano-seeklogo.svg', label: 'Politécnico Grancolombiano' },
    { type: 'image', src: '/assets/clients/chevrolet-5.svg', label: 'Chevrolet' },
    { type: 'image', src: '/assets/clients/Prime Video_Logo_4.png', label: 'Prime Video' },
    { type: 'image', src: '/assets/clients/Cencosud_id8ZVwt0yr_0.svg', label: 'Cencosud' },
    { type: 'image', src: '/assets/clients/easy svg.svg', label: 'Easy' },
    { type: 'image', src: '/assets/clients/Alianza Team_idR3-hRx6x_2.svg', label: 'Alianza Team' },
    { type: 'image', src: '/assets/clients/Clínicas Dentix Colombia_id4rJnXWOf_0.png', label: 'Dentix' },
    { type: 'image', src: '/assets/clients/audi-seeklogo.png', label: 'Audi' },
    { type: 'image', src: '/assets/clients/Fontanar CC_idbYlxmnD6_1.svg', label: 'Fontanar' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-jsr-dark">
      
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={null}>
           <FluidGlass />
        </Suspense>
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-jsr-dark via-jsr-dark/80 to-jsr-dark/40 pointer-events-none"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <div className="flex-1 text-center lg:text-left">
             <ScrollReveal baseOpacity={0} y={-20} duration={800}>
               <div className="inline-block px-4 py-2 bg-slate-900/50 border border-slate-800 rounded-full mb-6 backdrop-blur-sm">
                <span className="text-jsr-accent text-xs font-bold uppercase tracking-widest">{t.hero.availability}</span>
              </div>
             </ScrollReveal>
            
            <ScrollReveal baseOpacity={0} enableBlur blurStrength={10} y={30} duration={1000} delay={200}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight text-white mb-8">
                {t.hero.title1} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">{t.hero.title2}</span>
              </h1>
            </ScrollReveal>
            
            <ScrollReveal baseOpacity={0} y={20} duration={1000} delay={400}>
              <p className="text-lg md:text-xl text-jsr-gray mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                {t.hero.subtitle}
              </p>
            </ScrollReveal>
            
            <ScrollReveal baseOpacity={0} y={20} duration={1000} delay={600}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a 
                  href={WHATSAPP_URL} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-jsr-accent text-jsr-dark rounded-full font-bold hover:bg-white transition-colors flex items-center justify-center gap-2 group shadow-lg shadow-jsr-accent/20"
                >
                  {t.hero.audit} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#projects" className="px-8 py-4 bg-transparent border border-slate-700 text-white rounded-full font-medium hover:bg-white hover:text-jsr-dark transition-colors backdrop-blur-sm">
                  {t.hero.cases}
                </a>
              </div>
            </ScrollReveal>
          </div>

          <div className="flex-1 w-full max-w-md lg:max-w-full">
            <div className="grid grid-cols-2 gap-4">
              
              {/* Stat 1: Capital Managed - Financial Trust */}
              <ScrollReveal baseOpacity={0} x={20} y={0} duration={800} delay={800} className="h-full">
                <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800 p-5 rounded-xl hover:border-jsr-accent/50 transition-colors group h-full">
                  <Briefcase className="text-jsr-accent w-6 h-6 mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                    $<CountUp end={1} suffix="B+" duration={2.5} />
                  </h3>
                  <p className="text-[10px] md:text-xs text-jsr-gray uppercase tracking-widest font-bold">{t.hero.stats.stat1_label}</p>
                </div>
              </ScrollReveal>

              {/* Photo Slot (Vertical, Spans 2 Rows on Right) */}
              <ScrollReveal baseOpacity={0} enableBlur blurStrength={8} duration={1200} delay={600} className="row-span-2 h-full">
                <div className="h-full min-h-[300px] lg:min-h-[250px] rounded-2xl overflow-hidden border border-slate-800 relative group shadow-2xl">
                   <img 
                     src="https://images2.imgbox.com/2a/50/tBkCkCCX_o.png" 
                     alt="Professional working" 
                     className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-jsr-dark/60 to-transparent pointer-events-none"></div>
                   <div className="absolute bottom-3 left-4 bg-jsr-dark/80 backdrop-blur px-3 py-1 rounded-full border border-slate-700">
                      <span className="text-xs font-bold text-white flex items-center gap-2">
                         <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                         Available
                      </span>
                   </div>
                </div>
              </ScrollReveal>
              
              {/* Stat 2: Leads - Acquisition Power */}
              <ScrollReveal baseOpacity={0} x={20} y={0} duration={800} delay={900} className="h-full">
                <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800 p-5 rounded-xl hover:border-jsr-accent/50 transition-colors group h-full">
                  <Users className="text-jsr-accent w-6 h-6 mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                    <CountUp end={22} suffix="k+" duration={3} />
                  </h3>
                  <p className="text-[10px] md:text-xs text-jsr-gray uppercase tracking-widest font-bold">{t.hero.stats.stat2_label}</p>
                </div>
              </ScrollReveal>

              {/* Stat 3: ROAS - Profitability */}
               <ScrollReveal baseOpacity={0} y={20} duration={800} delay={1000} className="h-full">
                 <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800 p-5 rounded-xl flex flex-col justify-center relative overflow-hidden group hover:border-jsr-accent/50 transition-colors h-full">
                    <div className="absolute inset-0 bg-jsr-accent/5 group-hover:bg-jsr-accent/10 transition-colors"></div>
                    <TrendingUp className="text-jsr-accent w-6 h-6 mb-3 group-hover:scale-110 transition-transform relative z-10" />
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 relative z-10">4.5x</h3>
                    <p className="text-[10px] md:text-xs text-jsr-gray uppercase tracking-widest font-bold relative z-10">{t.hero.stats.stat3_label}</p>
                </div>
               </ScrollReveal>

              {/* Stat 4: Pacing Accuracy - Operational Excellence */}
              <ScrollReveal baseOpacity={0} y={20} duration={800} delay={1100} className="h-full">
                <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800 p-5 rounded-xl hover:border-jsr-accent/50 transition-colors group h-full">
                  <Target className="text-jsr-accent w-6 h-6 mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                    <CountUp end={100} suffix="%" duration={3} />
                  </h3>
                  <p className="text-[10px] md:text-xs text-jsr-gray uppercase tracking-widest font-bold">{t.hero.stats.stat4_label}</p>
                </div>
              </ScrollReveal>

            </div>
          </div>

        </div>

        {/* Partners/Clients Scroller with ScrollVelocity */}
        <ScrollReveal baseOpacity={0} duration={1500} delay={1200}>
          <div className="mt-24 border-t border-slate-900/50 pt-10">
            <p className="text-center text-slate-600 text-xs uppercase tracking-[0.2em] mb-10 font-bold">{t.hero.platforms}</p>
            
            <ScrollVelocity velocity={0.8} className="w-full">
               {carouselItems.map((item, index) => (
                  <div key={index} className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity mx-8">
                     {item.type === 'image' ? (
                       <img 
                         src={item.src} 
                         alt={item.label} 
                         className={`h-9 md:h-12 w-auto object-contain filter grayscale ${item.label === 'Audi' ? 'invert brightness-200' : 'brightness-200'} hover:grayscale-0 hover:brightness-100 transition-all duration-300`} 
                       />
                     ) : item.type === 'icon' ? (
                       <SimpleIcon icon={(item as any).icon} className="w-12 h-12 text-slate-400 hover:text-jsr-accent transition-colors" />
                     ) : (
                       <span className="text-2xl md:text-3xl font-heading font-bold text-slate-700 hover:text-jsr-accent transition-colors cursor-default select-none whitespace-nowrap">
                         {item.label}
                       </span>
                     )}
                  </div>
                ))}
            </ScrollVelocity>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Hero;