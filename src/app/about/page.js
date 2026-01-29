'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../utils/translations';
import Navbar from '../../components/Navbar';
import Link from 'next/link';
import { FaLaptopCode, FaGlobe, FaRocket, FaDatabase, FaAnchor } from 'react-icons/fa';
import Footer from '../../components/Footer';

const BentoCard = ({ children, className, delay = 0, title }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, ease: [0.76, 0, 0.24, 1] }}
    className={`bg-white/70 dark:bg-neutral-900/40 backdrop-blur-xl border border-gray-200/50 dark:border-neutral-800/50 p-10 rounded-[2.5rem] relative overflow-hidden group hover:shadow-2xl hover:shadow-black/5 dark:hover:shadow-white/5 transition-all duration-700 ${className}`}
  >
    {title && <h3 className="text-xs font-black uppercase tracking-[0.3em] opacity-30 mb-8 group-hover:opacity-100 transition-opacity">{title}</h3>}
    {children}
  </motion.div>
);

export default function About() {
  const { language } = useLanguage();
  const t = translations[language].about;
  
  return (
    <div className="bg-[#fafafa] dark:bg-black min-h-screen text-black dark:text-white selection:bg-blue-500 selection:text-white transition-colors duration-500 overflow-hidden">
      <Navbar />
      
      {/* Background Decorative Text */}
      <div className="fixed inset-0 pointer-events-none select-none overflow-hidden opacity-[0.02] dark:opacity-[0.04]">
        <div className="absolute top-1/4 -left-20 text-[20vw] font-black uppercase -rotate-12 tracking-tighter">ABOUT</div>
        <div className="absolute bottom-1/4 -right-20 text-[20vw] font-black uppercase rotate-12 tracking-tighter text-blue-500">STORY</div>
      </div>

      <div className="container mx-auto px-6 pt-40 pb-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mb-32"
        >
          <motion.div
            initial={{ scale: 0.8, rotate: -5 }}
            animate={{ scale: 1, rotate: 0 }}
            className="inline-block px-5 py-2 rounded-full border border-black/5 dark:border-white/5 mb-10 bg-white dark:bg-neutral-900 shadow-xl"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">
              {t.hero_badge}
            </span>
          </motion.div>
          
          <h1 className={`text-7xl md:text-[9rem] font-black mb-10 leading-[0.85] tracking-tighter ${language === 'jp' ? 'font-noto' : ''}`}>
            {t.title.split(' ').map((word, i) => (
              <span key={i} className={i === 1 ? "text-gray-300 dark:text-neutral-800" : ""}>{word} </span>
            ))}
          </h1>
          
          <p className={`text-2xl md:text-3xl text-gray-500 dark:text-neutral-500 max-w-3xl leading-snug font-medium ${language === 'jp' ? 'font-noto' : ''}`}>
            {t.subtitle}
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 max-w-7xl mx-auto">
          
          {/* Main Intro - Large Card */}
          <BentoCard className="md:col-span-8 flex flex-col justify-between min-h-[450px]" delay={0.1} title="Identity">
            <div className="absolute -top-10 -right-10 p-20 opacity-5 group-hover:opacity-10 transition-opacity">
              <FaLaptopCode className="text-[15rem]" />
            </div>
            
            <div className="relative z-10">
              <h3 className={`text-4xl md:text-5xl font-black mb-8 max-w-xl leading-tight ${language === 'jp' ? 'font-noto' : ''}`}>{t.intro.title}</h3>
              <p className={`text-xl md:text-2xl text-gray-500 dark:text-neutral-400 leading-relaxed font-medium ${language === 'jp' ? 'font-noto' : ''}`}>
                {t.intro.text}
              </p>
            </div>

            <div className="mt-12 flex items-center gap-4">
               <div className="flex -space-x-3">
                 {[1,2,3].map(i => <div key={i} className="w-10 h-10 rounded-full border-4 border-white dark:border-neutral-900 bg-gray-200 dark:bg-neutral-800"></div>)}
               </div>
               <span className="text-xs font-black uppercase tracking-widest opacity-40">Connecting with devs globally</span>
            </div>
          </BentoCard>

          {/* Language Card */}
          <BentoCard className="md:col-span-4 flex flex-col items-center justify-center text-center bg-red-500 text-white" delay={0.2} title="Culture">
            <div className="w-24 h-24 rounded-[2rem] bg-white text-red-500 flex items-center justify-center mb-8 shadow-2xl rotate-3 group-hover:rotate-0 transition-transform">
              <FaGlobe className="text-4xl" />
            </div>
            <h3 className={`text-2xl font-black mb-4 ${language === 'jp' ? 'font-noto' : ''}`}>{t.language.title}</h3>
            <span className="inline-block px-4 py-1.5 bg-black/20 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
              {t.language.level}
            </span>
            <p className={`text-sm text-white/80 font-medium leading-relaxed ${language === 'jp' ? 'font-noto' : ''}`}>
              {t.language.text}
            </p>
          </BentoCard>

          {/* Story / One Piece */}
          <BentoCard className="md:col-span-5 md:row-span-1 bg-black text-white" delay={0.3} title="Philosophy">
             <div className="absolute -top-20 -left-20 opacity-10 group-hover:scale-110 transition-transform duration-1000">
               <FaAnchor className="text-[20rem]" />
             </div>
             
             <div className="relative z-10">
               <h3 className={`text-3xl font-black mb-8 flex items-center gap-3 ${language === 'jp' ? 'font-noto' : ''}`}>
                 {t.story.title.toUpperCase()}
               </h3>
               <p className={`text-lg text-white/60 leading-relaxed mb-10 font-medium ${language === 'jp' ? 'font-noto' : ''}`}>
                 {t.story.text}
               </p>
               
               <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                  <p className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-4">The Will of D.</p>
                  <p className="text-xl italic font-serif">&quot;Inherited Will, The Destiny of Age, and The Dreams of Its People. These are things that will not be stopped.&quot;</p>
               </div>
             </div>
          </BentoCard>

          {/* Goals */}
          <BentoCard className="md:col-span-7 flex flex-col justify-center border-none shadow-none bg-transparent dark:bg-transparent !p-0" delay={0.4}>
             <div className="bg-orange-500 p-12 rounded-[3rem] h-full flex flex-col justify-between text-white shadow-2xl shadow-orange-500/20">
                <div className="flex justify-between items-start mb-8">
                   <FaRocket className="text-5xl opacity-50" />
                   <div className="h-2 w-24 bg-white/20 rounded-full overflow-hidden">
                      <motion.div 
                        animate={{ x: [-100, 100] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="h-full w-10 bg-white"
                      ></motion.div>
                   </div>
                </div>
                <div>
                  <h3 className={`text-4xl font-black mb-6 tracking-tighter ${language === 'jp' ? 'font-noto' : ''}`}>{t.goals.title}</h3>
                  <p className={`text-xl text-white/80 leading-relaxed font-medium ${language === 'jp' ? 'font-noto' : ''}`}>
                    {t.goals.text}
                  </p>
                </div>
             </div>
          </BentoCard>

        </div>

        {/* Skills Quick View */}
        <div className="mt-40 grid md:grid-cols-3 gap-16 max-w-6xl mx-auto">
          {t.skills_list.map((skill, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 * i }}
              className="group"
            >
              <div className="text-[10rem] font-black opacity-[0.03] absolute -mt-16 -ml-8 group-hover:opacity-[0.08] transition-opacity">0{i+1}</div>
              <div className="relative z-10">
                <h4 className={`text-2xl font-black mb-4 tracking-tighter ${language === 'jp' ? 'font-noto' : ''}`}>{skill.name}</h4>
                <p className={`text-lg text-gray-500 dark:text-neutral-500 font-medium leading-relaxed ${language === 'jp' ? 'font-noto' : ''}`}>{skill.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mt-48 py-20 rounded-[4rem] bg-black text-white dark:bg-white dark:text-black overflow-hidden relative group"
        >
          <div className="absolute inset-0 bg-blue-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-[0.76, 0, 0.24, 1]"></div>
          
          <Link href="/#contact" className="relative z-10 flex flex-col items-center">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] mb-4 opacity-50">Next Step</span>
            <span className={`text-5xl md:text-8xl font-black tracking-tighter ${language === 'jp' ? 'font-noto' : ''}`}>
              {t.cta} →
            </span>
          </Link>
        </motion.div>

      </div>
      
      <div className="absolute top-0 right-10 h-full hidden lg:flex items-center pointer-events-none opacity-20">
         <span className="text-[10px] font-black uppercase tracking-[1em] rotate-90 whitespace-nowrap">SCROLL TO DISCOVER</span>
      </div>

      <Footer />
    </div>
  );
}
