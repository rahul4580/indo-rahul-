'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../../../context/LanguageContext';
import { translations } from '../../../utils/translations';
import Navbar from '../../../components/Navbar';
import { FaPenFancy, FaArrowRight } from 'react-icons/fa';
import Footer from '../../../components/Footer';

const ArticleCard = ({ title, date, snippet, index, t }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: index * 0.1, ease: [0.76, 0, 0.24, 1] }}
    className="group border-b border-gray-100 dark:border-neutral-900 py-20 cursor-pointer overflow-hidden relative"
  >
    <div className="absolute top-0 left-0 text-[12rem] font-black opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700 pointer-events-none select-none">
       {index + 1 < 10 ? `0${index + 1}` : index + 1}
    </div>

    <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-24 relative z-10 transition-transform duration-500 group-hover:-translate-y-2">
      <div className="shrink-0 flex flex-col pt-2">
        <span className="text-sm font-black uppercase tracking-[0.3em] opacity-30 group-hover:opacity-100 transition-opacity mb-2">Issue</span>
        <span className="text-xl font-mono font-bold tracking-tighter">{date}</span>
      </div>

      <div className="flex-1">
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           className="flex items-center gap-2 mb-6"
        >
           <span className="w-10 h-[2px] bg-green-500"></span>
           <span className="text-[10px] font-black uppercase tracking-widest text-green-500">Feature Story</span>
        </motion.div>
        
        <h3 className="text-4xl md:text-7xl font-black mb-8 leading-[0.9] tracking-tighter group-hover:italic transition-all duration-500 max-w-4xl">
          {title}
        </h3>
        
        <p className="text-xl text-gray-500 dark:text-neutral-500 leading-relaxed max-w-3xl mb-12 font-medium group-hover:text-black dark:group-hover:text-white transition-colors">
          {snippet}
        </p>

        <button className="flex items-center gap-4 group-hover:gap-8 transition-all duration-500">
           <span className="text-xs font-black uppercase tracking-[0.4em] border-b-2 border-green-500 pb-2">
             {t.read_more}
           </span>
           <FaArrowRight className="text-xl text-green-500" />
        </button>
      </div>
    </div>
  </motion.div>
);

export default function Articles() {
  const { language } = useLanguage();
  const t = translations[language].more_articles || {};
  const list = t.list || [];

  return (
    <div className="bg-white dark:bg-black min-h-screen text-black dark:text-white selection:bg-blue-500 selection:text-white transition-colors duration-500">
      <Navbar />
      
      <div className="container mx-auto px-6 pt-32 pb-32">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="max-w-4xl mx-auto mb-32 text-center"
         >
           <motion.div 
             initial={{ scale: 0.8, y: 20 }}
             animate={{ scale: 1, y: 0 }}
             className="inline-block p-6 rounded-full bg-black text-white dark:bg-white dark:text-black mb-10 shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
           >
             <FaPenFancy className="text-4xl" />
           </motion.div>
           <h1 className={`text-7xl md:text-9xl font-black mb-8 leading-none tracking-tighter ${language === 'jp' ? 'font-noto' : ''}`}>
             {t.title}
           </h1>
           <p className={`text-2xl md:text-3xl text-gray-500 dark:text-neutral-500 max-w-3xl mx-auto leading-relaxed font-medium ${language === 'jp' ? 'font-noto' : ''}`}>
             {t.subtitle}
           </p>
         </motion.div>

        <div className="max-w-7xl mx-auto">
          {list.map((article, i) => (
            <ArticleCard 
              key={i} 
              index={i} 
              t={t}
              {...article} 
            />
          ))}
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="py-32 flex flex-col items-center justify-center border-t border-gray-100 dark:border-neutral-900"
          >
             <p className="text-sm font-black uppercase tracking-[0.5em] opacity-30 mb-8 text-center">End of Archive</p>
             <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-bounce"></div>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
