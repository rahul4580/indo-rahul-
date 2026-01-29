'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../utils/translations';
import Navbar from '../../components/Navbar';
import Link from 'next/link';
import { FaBookOpen, FaPenFancy, FaLanguage } from 'react-icons/fa';
import Footer from '../../components/Footer';

const BentoCard = ({ children, className, delay = 0, href }) => {
  const content = (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className={`bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 p-10 rounded-[2.5rem] relative overflow-hidden group hover:border-black dark:hover:border-white hover:shadow-2xl transition-all duration-300 h-full ${className}`}
    >
      {children}
      <div className="absolute bottom-4 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0">
        <span className="text-2xl">→</span>
      </div>
    </motion.div>
  );

  return href ? (
    <Link href={href} className="block h-full cursor-pointer">
      {content}
    </Link>
  ) : content;
};

export default function More() {
  const { language } = useLanguage();
  const t = translations[language].more;
  // Fallback if translations aren't loaded yet for new keys
  const t_lang = translations[language].more_languages || { title: "Languages", subtitle: "Connecting worlds" };
  const t_books = translations[language].more_books || { title: "Books", subtitle: "Reading list" };
  const t_arts = translations[language].more_articles || { title: "Articles", subtitle: "Thoughts & Blogs" };

  const containerRef = useRef(null);
  
  return (
    <div className="bg-white dark:bg-black min-h-screen text-black dark:text-white overflow-hidden transition-colors duration-300 selection:bg-blue-500 selection:text-white">
      <Navbar />
      
      {/* Hero Header */}
      <div className="container mx-auto px-6 pt-32 pb-16 md:pt-48 md:pb-24 text-center relative z-10">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8 }}
           className="inline-block px-4 py-2 rounded-full border border-black/10 dark:border-white/10 mb-6 bg-gray-100 dark:bg-neutral-900"
         >
           <span className="text-sm font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
             {t.hero_badge}
           </span>
         </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`text-7xl md:text-[8rem] lg:text-[9.5rem] font-black mb-10 leading-[0.85] tracking-tighter ${language === 'jp' ? 'font-noto' : ''}`}
        >
          {t.title}
        </motion.h1>
         
         <motion.p 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.4 }}
           className={`text-2xl md:text-3xl text-gray-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed ${language === 'jp' ? 'font-noto' : ''}`}
         >
           {t.subtitle}
         </motion.p>
      </div>

      <div ref={containerRef} className="container mx-auto px-6 pb-32 relative z-10">
        
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-7xl mx-auto">
          
          {/* Languages */}
          <BentoCard href="/more/languages" delay={0.1} className="min-h-[360px] flex flex-col justify-between hover:bg-orange-50 dark:hover:bg-orange-950/20">
             <div className="absolute -top-6 -right-4 text-[7rem] md:text-[9rem] text-gray-100 dark:text-neutral-800 rotate-12 group-hover:rotate-0 transition-transform duration-500">
               <FaLanguage />
             </div>
             <div className="relative z-10">
               <h3 className={`text-3xl md:text-4xl font-black mb-3 tracking-tight ${language === 'jp' ? 'font-noto' : ''}`}>{t_lang.title}</h3>
               <p className={`text-base md:text-lg text-gray-500 dark:text-gray-400 ${language === 'jp' ? 'font-noto' : ''}`}>{t_lang.subtitle}</p>
             </div>
             <div className="flex gap-3 relative z-10 mt-4">
                <span className="px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded-full text-xs font-black tracking-[0.15em]">JP</span>
                <span className="px-4 py-2 bg-gray-200 dark:bg-neutral-800 rounded-full text-xs font-black tracking-[0.15em]">EN</span>
                <span className="px-4 py-2 bg-gray-200 dark:bg-neutral-800 rounded-full text-xs font-black tracking-[0.15em]">HI</span>
             </div>
          </BentoCard>

          {/* Books */}
          <BentoCard href="/more/books" delay={0.2} className="min-h-[360px] flex flex-col justify-between hover:bg-blue-50 dark:hover:bg-blue-950/20">
             <div className="absolute -bottom-8 -right-4 text-[7rem] md:text-[9rem] text-gray-100 dark:text-neutral-800 -rotate-12 group-hover:rotate-0 transition-transform duration-500">
               <FaBookOpen />
             </div>
             <div className="relative z-10">
               <h3 className={`text-3xl md:text-4xl font-black mb-3 tracking-tight ${language === 'jp' ? 'font-noto' : ''}`}>{t_books.title}</h3>
               <p className={`text-base md:text-lg text-gray-500 dark:text-gray-400 ${language === 'jp' ? 'font-noto' : ''}`}>{t_books.subtitle}</p>
             </div>
             <div className="relative z-10 mt-4">
                <div className="text-[10px] md:text-xs font-black uppercase tracking-[0.25em] text-gray-400 mb-2">{t_books.current_read}</div>
                <div className="text-base md:text-lg font-semibold tracking-tight">Atomic Habits</div>
             </div>
          </BentoCard>

          {/* Articles */}
          <BentoCard href="/more/articles" delay={0.3} className="min-h-[360px] flex flex-col justify-between hover:bg-green-50 dark:hover:bg-green-950/20">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[7rem] md:text-[9rem] text-gray-100 dark:text-neutral-800 scale-150 group-hover:scale-110 transition-transform duration-500">
               <FaPenFancy />
             </div>
             <div className="relative z-10">
               <h3 className={`text-3xl md:text-4xl font-black mb-3 tracking-tight ${language === 'jp' ? 'font-noto' : ''}`}>{t_arts.title}</h3>
               <p className={`text-base md:text-lg text-gray-500 dark:text-gray-400 ${language === 'jp' ? 'font-noto' : ''}`}>{t_arts.subtitle}</p>
             </div>
             <div className="relative z-10 mt-auto">
                <div className="inline-block border-b border-black dark:border-white pb-1 text-xs md:text-sm font-black tracking-[0.2em] uppercase">Latest: 2026/01</div>
             </div>
          </BentoCard>

        </div>

      </div>
      
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-gray-100 dark:bg-neutral-900 rounded-full blur-[120px]"></div>
      </div>

      <Footer />
    </div>
  );
}
