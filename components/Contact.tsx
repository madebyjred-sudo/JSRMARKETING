import React, { useState } from 'react';
import { Mail, MapPin, Send, Calendar, MessageCircle, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import ScrollReveal from './ScrollReveal';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Constructing a clean, multiline message for WhatsApp
    const intro = "Hola Juan, te contacto desde tu sitio web.";
    const nameLine = `*Nombre:* ${formData.name}`;
    const emailLine = `*Email:* ${formData.email}`;
    const subjectLine = `*Asunto:* ${formData.subject}`;
    const messageLine = `*Mensaje:* \n${formData.message}`;
    
    // Combine with URL encoding for new lines (%0A)
    const fullMessage = `${intro}%0A%0A${nameLine}%0A${emailLine}%0A${subjectLine}%0A%0A${messageLine}`;
    
    window.open(`https://wa.me/573502715323?text=${fullMessage}`, '_blank');
    
    // Optional: Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const WHATSAPP_URL = "https://wa.me/573502715323";
  const CALENDLY_URL = "https://calendly.com/jsebastianr951882";

  return (
    <section id="contact" className="py-24 bg-slate-950 relative">
      <div className="container mx-auto px-4 md:px-8">
        <ScrollReveal baseOpacity={0} y={-20} duration={800}>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-jsr-accent font-bold uppercase tracking-widest text-sm">{t.contact.label}</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mt-4 mb-6">{t.contact.title}</h2>
            <p className="text-jsr-gray text-lg">{t.contact.infoDesc}</p>
          </div>
        </ScrollReveal>

        <div className="flex flex-col lg:flex-row gap-8 bg-jsr-dark border border-slate-800 rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
          
          {/* Fast Track Actions */}
          <div className="w-full lg:w-4/12 bg-jsr-card p-10 flex flex-col relative overflow-hidden">
             {/* Abstract bg shape */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-jsr-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <ScrollReveal baseOpacity={0} x={-20} y={0} duration={800} delay={200}>
              <h3 className="text-2xl font-bold text-white mb-8 relative z-10">{t.contact.infoTitle}</h3>
              
              <div className="space-y-4 mb-10 relative z-10">
                <a 
                  href={CALENDLY_URL} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-slate-800 hover:bg-slate-700 text-white p-4 rounded-xl flex items-center justify-between group transition-all border border-slate-700 hover:border-white/20 shadow-md cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <Calendar className="text-jsr-accent w-5 h-5" />
                    <span className="font-medium">{t.contact.calendar}</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
                </a>
                
                <a 
                  href={WHATSAPP_URL} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] p-4 rounded-xl flex items-center justify-between group transition-all border border-[#25D366]/20 hover:border-[#25D366]/50 shadow-md cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <MessageCircle className="w-5 h-5" />
                    <span className="font-medium">{t.contact.whatsapp}</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
              
              <div className="mt-auto space-y-6 border-t border-slate-800 pt-8 relative z-10">
                 <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-slate-500" />
                    <span className="text-jsr-gray text-sm">contact@jsr-strategy.com</span>
                 </div>
                 <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-slate-500" />
                    <span className="text-jsr-gray text-sm">Bogotá, Colombia / Remote</span>
                 </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Form */}
          <div className="w-full lg:w-8/12 p-10 lg:p-16">
            <ScrollReveal baseOpacity={0} x={20} y={0} duration={800} delay={400}>
              <form onSubmit={handleWhatsAppRedirect} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-bold text-jsr-accent uppercase tracking-wider">{t.contact.form.name}</label>
                    <input 
                      type="text" 
                      id="name" 
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-slate-900/50 border border-slate-800 focus:border-jsr-accent text-white px-4 py-4 rounded-lg transition-colors placeholder-transparent focus:outline-none focus:ring-1 focus:ring-jsr-accent/50" 
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-bold text-jsr-accent uppercase tracking-wider">{t.contact.form.email}</label>
                    <input 
                      type="email" 
                      id="email" 
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-slate-900/50 border border-slate-800 focus:border-jsr-accent text-white px-4 py-4 rounded-lg transition-colors placeholder-transparent focus:outline-none focus:ring-1 focus:ring-jsr-accent/50" 
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-xs font-bold text-jsr-accent uppercase tracking-wider">{t.contact.form.subject}</label>
                  <input 
                    type="text" 
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange} 
                    className="w-full bg-slate-900/50 border border-slate-800 focus:border-jsr-accent text-white px-4 py-4 rounded-lg transition-colors placeholder-transparent focus:outline-none focus:ring-1 focus:ring-jsr-accent/50" 
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-bold text-jsr-accent uppercase tracking-wider">{t.contact.form.message}</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-slate-900/50 border border-slate-800 focus:border-jsr-accent text-white px-4 py-4 rounded-lg transition-colors placeholder-transparent resize-none focus:outline-none focus:ring-1 focus:ring-jsr-accent/50" 
                    required
                  ></textarea>
                </div>

                <div className="flex justify-end">
                  <button type="submit" className="bg-[#25D366] text-white px-10 py-4 rounded-full font-bold hover:bg-[#20bd5a] transition-all flex items-center gap-2 shadow-lg shadow-[#25D366]/20">
                    {t.contact.form.btn} <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;