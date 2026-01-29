'use client';
import { useRef } from 'react';
import { motion } from 'motion/react';
import { SiPython, SiMysql, SiTableau, SiPandas } from "react-icons/si";
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';

const BlueprintNode = ({ title, capabilities, icon: Icon, index }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: index * 0.1 }}
    className="relative p-10 bg-[#fafafa] dark:bg-neutral-900 border border-black/5 dark:border-white/5 rounded-[3rem] group"
  >
    <div className="flex items-center gap-6 mb-10">
      <div className="w-16 h-16 rounded-2xl bg-black text-white dark:bg-white dark:text-black flex items-center justify-center transition-all group-hover:rotate-12">
        {Icon && <Icon className="text-3xl" />}
      </div>
      <div>
        <div className="text-[10px] font-black uppercase tracking-[0.3em] opacity-30 mb-1">Intelligence</div>
        <h3 className="text-2xl font-black tracking-tighter uppercase">{title}</h3>
      </div>
    </div>

    <div className="space-y-8 relative">
       {capabilities.map((cap, i) => (
         <div key={i} className="relative pl-8 group/item">
            <div className="absolute left-0 top-3 w-2 h-2 rounded-full border border-black/20 dark:border-white/20 group-hover/item:bg-blue-500 group-hover/item:border-blue-500 transition-colors"></div>
            <div className="absolute left-[3px] top-5 bottom-[-20px] w-px bg-black/5 dark:bg-white/5 last:hidden"></div>
            
            <h4 className="text-sm font-black uppercase tracking-widest mb-2 italic">{cap.title}</h4>
            <p className="text-gray-500 dark:text-neutral-500 text-sm font-medium leading-relaxed max-w-md">
              {cap.description}
            </p>
         </div>
       ))}
    </div>
  </motion.div>
);

const DataAnalysisCapabilities = () => {
  const { language } = useLanguage();
  const t = translations[language].dataAnalysis;

  const dataStack = [
    { title: 'Python', icon: SiPython, capabilities: t.python },
    { title: 'Databases', icon: SiMysql, capabilities: t.sql },
    { title: 'Visualization', icon: SiTableau, capabilities: t.visualization },
    { title: 'Modeling', icon: SiPandas, capabilities: t.modeling }
  ];

  return (
    <section id="data-analysis" className="py-32 px-6 md:px-20 bg-[#fafafa] dark:bg-black transition-colors duration-500 overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className={`inline-block px-4 py-2 bg-blue-500 text-white rounded-full text-[10px] font-black tracking-[0.3em] uppercase mb-10 ${language === 'jp' ? 'font-noto' : ''}`}
          >
             Data Science
          </motion.div>
          <h2 className={`text-6xl md:text-[10rem] font-black leading-[0.8] tracking-tighter mb-10 ${language === 'jp' ? 'font-noto' : ''}`}>
             ANALYTIC<br/>
             <span className="text-gray-300 dark:text-neutral-800">POWER.</span>
          </h2>
          <p className={`text-2xl text-gray-400 dark:text-neutral-500 font-medium max-w-3xl leading-snug ${language === 'jp' ? 'font-noto' : ''}`}>
             {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {dataStack.map((item, i) => (
            <BlueprintNode key={item.title} {...item} index={i} />
          ))}
        </div>

        <div className="mt-32 p-12 bg-white dark:bg-neutral-900 border border-black/5 dark:border-white/5 rounded-[4rem] flex flex-col md:flex-row justify-between items-center gap-12 shadow-2xl">
           <div className="max-w-xl">
              <h3 className={`text-4xl font-black mb-4 tracking-tighter ${language === 'jp' ? 'font-noto' : ''}`}>{t.cta_title}</h3>
              <p className={`text-lg text-gray-500 dark:text-neutral-500 font-medium ${language === 'jp' ? 'font-noto' : ''}`}>{t.cta_description}</p>
           </div>
           
           <motion.button
              whileHover={{ scale: 1.05 }}
              className={`px-12 py-6 bg-blue-500 text-white font-black text-xs uppercase tracking-[0.3em] rounded-full shadow-2xl shadow-blue-500/20 transition-all ${language === 'jp' ? 'font-noto' : ''}`}
           >
              {t.cta_button}
           </motion.button>
        </div>
      </div>
    </section>
  );
};


export default DataAnalysisCapabilities;
