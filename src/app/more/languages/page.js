'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useLanguage } from '../../../context/LanguageContext';
import { translations } from '../../../utils/translations';
import Navbar from '../../../components/Navbar';
import { FaLanguage, FaGlobeAsia, FaToriiGate } from 'react-icons/fa';
import Footer from '../../../components/Footer';

const LanguageCard = ({ lang, level, desc, progress, color, delay, icon: Icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl border border-gray-200 dark:border-neutral-800 p-8 rounded-[2rem] relative overflow-hidden group hover:shadow-2xl hover:shadow-black/5 dark:hover:shadow-white/5 transition-all duration-500"
  >
    <div className={`absolute -top-10 -right-10 w-40 h-40 bg-${color}-500/10 rounded-full blur-3xl group-hover:bg-${color}-500/20 transition-colors duration-500`}></div>
    
    <div className="flex justify-between items-start mb-8 relative z-10">
      <div className={`p-4 rounded-2xl bg-${color}-50 dark:bg-${color}-500/10 text-${color}-600 dark:text-${color}-400 shadow-inner`}>
        <Icon className="text-3xl" />
      </div>
      <span className={`inline-block px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] bg-${color}-500/10 text-${color}-600 dark:text-${color}-400 border border-${color}-500/20`}>
        {level}
      </span>
    </div>

    <div className="relative z-10">
      <h3 className="text-3xl font-black mb-2 tracking-tight">{lang}</h3>
      <p className="text-gray-500 dark:text-neutral-400 mb-8 text-sm leading-relaxed font-medium">
        {desc}
      </p>

      <div className="space-y-4">
        <div className="flex justify-between items-end">
          <span className="text-[10px] font-black uppercase tracking-widest opacity-50">Proficiency</span>
          <span className="text-lg font-mono font-bold">{progress}%</span>
        </div>
        <div className="w-full h-1.5 bg-gray-100 dark:bg-neutral-800 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${progress}%` }}
            transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1], delay: delay + 0.3 }}
            className={`h-full bg-${color}-500 shadow-[0_0_20px_rgba(var(--${color}-500),0.5)]`}
          ></motion.div>
        </div>
      </div>
    </div>
  </motion.div>
);

export default function Languages() {
  const { language } = useLanguage();
  const t = translations[language].more_languages || {};
  const t_en = t.en || {};
  const t_jp = t.jp || {};
  const t_hi = t.hi || {};

  const floatingKanji = ["夢", "愛", "力", "心", "光", "和"];

  return (
    <div className="bg-[#fafafa] dark:bg-black min-h-screen text-black dark:text-white selection:bg-blue-500 selection:text-white transition-colors duration-500 overflow-hidden">
      <Navbar />
      
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none select-none overflow-hidden">
        {floatingKanji.map((kanji, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.02, 0.05, 0.02],
              y: [0, -100, 0],
              rotate: [0, 10, -10, 0]
            }}
            transition={{ 
              duration: 10 + i * 2, 
              repeat: Infinity, 
              ease: "linear",
              delay: i * 1.5 
            }}
            className="absolute text-[15vw] font-noto text-black dark:text-white"
            style={{ 
              left: `${(i + 1) * 15}%`, 
              top: `${20 + (i % 3) * 20}%` 
            }}
          >
            {kanji}
          </motion.div>
        ))}
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-blue-500/5 rounded-full blur-[120px] -mr-[25vw] -mt-[10vw]"></div>
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-orange-500/5 rounded-full blur-[100px] -ml-[20vw] -mb-[10vw]"></div>
      </div>

      <div className="container mx-auto px-6 pt-32 pb-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto mb-24 text-center"
        >
          <motion.div 
            initial={{ scale: 0.8, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            className="inline-block p-5 rounded-[1.5rem] bg-black text-white dark:bg-white dark:text-black mb-8 shadow-2xl"
          >
            <FaLanguage className="text-4xl" />
          </motion.div>
          <h1 className={`text-6xl md:text-8xl font-black mb-6 tracking-tighter ${language === 'jp' ? 'font-noto' : ''}`}>
            {t.title}
          </h1>
          <p className={`text-xl md:text-2xl text-gray-500 dark:text-neutral-500 max-w-2xl mx-auto font-medium ${language === 'jp' ? 'font-noto' : ''}`}>
            {t.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Main Languages */}
          <div className="space-y-8">
            <LanguageCard 
              lang={t_en.name} 
              level={t_en.level} 
              desc={t_en.desc} 
              progress={95} 
              color="blue" 
              delay={0.1} 
              icon={FaGlobeAsia}
            />
            <LanguageCard 
              lang={t_hi.name} 
              level={t_hi.level} 
              desc={t_hi.desc} 
              progress={100} 
              color="orange" 
              delay={0.2} 
              icon={FaGlobeAsia}
            />
          </div>

          {/* Japanese Focus */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-red-500 text-white p-12 rounded-[2.5rem] relative overflow-hidden flex flex-col justify-between shadow-2xl shadow-red-500/20 group"
          >
            <div className="absolute top-0 right-0 p-16 opacity-10 group-hover:scale-110 transition-transform duration-700 select-none pointer-events-none">
              <FaToriiGate className="text-[20rem]" />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                 <div className="w-3 h-3 rounded-full bg-white animate-ping"></div>
                 <span className="text-white font-black uppercase tracking-[0.3em] text-[10px]">Active Obsession</span>
              </div>
              <h2 className={`text-5xl md:text-7xl font-black mb-6 tracking-tight ${language === 'jp' ? 'font-noto' : ''}`}>{t_jp.name}</h2>
              <p className={`text-xl text-white/80 mb-12 leading-relaxed font-medium ${language === 'jp' ? 'font-noto' : ''}`}>{t_jp.desc}</p>
              
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-10 rounded-[2rem] mb-8 group-hover:bg-white/20 transition-colors duration-500">
                <p className="text-[10px] text-center text-white/60 font-black uppercase tracking-[0.2em] mb-4">Kanji Study</p>
                <div className="text-8xl text-center font-noto mb-4 drop-shadow-2xl">夢</div>
                <div className="text-center font-black text-2xl tracking-widest">YUME • DREAM</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 relative z-10">
              {['Hiragana', 'Katakana', 'N5 Kanji', 'Grammar'].map((item, i) => (
                <span key={item} className="px-6 py-2 bg-black/20 backdrop-blur-sm rounded-full text-xs font-black uppercase tracking-widest border border-white/10">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
