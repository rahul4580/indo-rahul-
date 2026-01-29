'use client';
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import WhatICanDo from '../components/WhatICanDo';
import DataAnalysisCapabilities from '../components/DataAnalysisCapabilities';
import WhatILove from '../components/WhatILove';
import Work from '../components/Work';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="bg-[#fafafa] dark:bg-black text-black dark:text-white min-h-screen selection:bg-blue-500 selection:text-white transition-colors duration-500 overflow-x-hidden">
      <Navbar />
      <Hero />
      <Skills />
      <WhatICanDo />
      <Services />
      <Work />
      <Projects />
      <DataAnalysisCapabilities />
      <WhatILove />
      
      <section id="contact" className="py-20 px-8 md:px-20 border-t border-black/5 dark:border-white/5">
         <div className="flex justify-center">
            <Contact />
         </div>
      </section>

      <Footer />
    </div>
  );
}

