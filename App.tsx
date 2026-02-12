import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import AIChat from './components/AIChat';
import { LanguageProvider } from './context/LanguageContext';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="bg-jsr-dark min-h-screen text-jsr-text font-sans selection:bg-jsr-accent selection:text-jsr-dark">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Portfolio />
          <About />
          <Contact />
        </main>
        <Footer />
        {/* <AIChat /> */}
      </div>
    </LanguageProvider>
  );
};

export default App;