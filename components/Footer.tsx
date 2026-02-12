import React from 'react';
import { Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-jsr-dark py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
           <a href="#home" className="group flex items-center gap-2">
            <img 
              src="/assets/logo.svg" 
              alt="JSR Logo" 
              className="h-6 w-auto brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity"
            />
          </a>
          <p className="text-xs text-jsr-gray mt-2">© {new Date().getFullYear()} Strategic Growth Partner</p>
        </div>
        
        <div className="flex gap-6">
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-jsr-gray hover:text-jsr-accent transition-colors hover:scale-110 transform duration-200">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-jsr-gray hover:text-jsr-accent transition-colors hover:scale-110 transform duration-200">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-jsr-gray hover:text-jsr-accent transition-colors hover:scale-110 transform duration-200">
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;