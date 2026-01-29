'use client';
import { useRef } from 'react';
import { motion } from 'motion/react';
import { SiMongodb, SiReact, SiNodedotjs } from "react-icons/si";
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';

const BlueprintNode = ({ title, capabilities, icon: Icon, index }) => (
  <motion.div 
    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: index * 0.1 }}
    className="relative p-10 bg-white dark:bg-neutral-900 border border-black/5 dark:border-white/5 rounded-[3rem] group"
  >
    <div className="flex items-center gap-6 mb-10">
      <div className="w-16 h-16 rounded-2xl bg-[#f0f0f0] dark:bg-neutral-800 flex items-center justify-center text-black dark:text-white group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all">
        {Icon && <Icon className="text-3xl" />}
      </div>
      <div>
        <div className="text-[10px] font-black uppercase tracking-[0.3em] opacity-30 mb-1">Architecture</div>
        <h3 className="text-2xl font-black tracking-tighter uppercase">{title}</h3>
      </div>
    </div>

    <div className="space-y-8 relative">
       {capabilities.map((cap, i) => (
         <div key={i} className="relative pl-8 group/item">
            <div className="absolute left-0 top-3 w-2 h-2 rounded-full border border-black/20 dark:border-white/20 group-hover/item:bg-black dark:group-hover/item:bg-white transition-colors"></div>
            <div className="absolute left-[3px] top-5 bottom-[-20px] w-px bg-black/5 dark:bg-white/5 last:hidden"></div>
            
            <h4 className="text-sm font-black uppercase tracking-widest mb-2">{cap.title}</h4>
            <p className="text-gray-500 dark:text-neutral-500 text-sm font-medium leading-relaxed max-w-md">
              {cap.description}
            </p>
         </div>
       ))}
    </div>

    {/* Tech Specs Decoration */}
    <div className="absolute bottom-8 right-8 writing-vertical opacity-[0.05] font-mono text-[10px] font-bold select-none uppercase tracking-[0.5em]">
      Full // Stack // Integration
    </div>
  </motion.div>
);

const WhatICanDo = () => {
  const { language } = useLanguage();
  const t = translations[language].whatICanDo;

  const stack = [
    { title: 'MongoDB', icon: SiMongodb, capabilities: t.mongodb },
    { title: 'Express', icon: SiNodedotjs, capabilities: t.express },
    { title: 'React', icon: SiReact, capabilities: t.react },
    { title: 'Node', icon: SiNodedotjs, capabilities: t.node }
  ];

  return (
    <section id="what-i-can-do" className="py-32 px-6 md:px-20 bg-white dark:bg-black transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className={`inline-block px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded-full text-[10px] font-black tracking-[0.3em] uppercase mb-10 ${language === 'jp' ? 'font-noto' : ''}`}
          >
             Capabilities
          </motion.div>
          <h2 className={`text-6xl md:text-[10rem] font-black leading-[0.8] tracking-tighter mb-10 ${language === 'jp' ? 'font-noto' : ''}`}>
             BUILDING<br/>
             <span className="text-gray-300 dark:text-neutral-800">SYSTEMS.</span>
          </h2>
          <p className={`text-2xl text-gray-500 dark:text-neutral-500 font-medium max-w-3xl leading-snug ${language === 'jp' ? 'font-noto' : ''}`}>
             {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {stack.map((item, i) => (
            <BlueprintNode key={item.title} {...item} index={i} />
          ))}
        </div>

        <div className="mt-32 flex flex-col md:flex-row items-center justify-between gap-12 py-20 border-t border-black/5 dark:border-white/5">
           <div className="max-w-xl">
              <h3 className={`text-5xl font-black mb-6 tracking-tighter ${language === 'jp' ? 'font-noto' : ''}`}>{t.cta_title}</h3>
              <p className={`text-xl text-gray-500 dark:text-neutral-500 font-medium ${language === 'jp' ? 'font-noto' : ''}`}>{t.cta_description}</p>
           </div>
           
           <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-12 py-6 bg-black text-white dark:bg-white dark:text-black font-black text-xs uppercase tracking-[0.3em] rounded-full shadow-2xl transition-all ${language === 'jp' ? 'font-noto' : ''}`}
           >
              {t.cta_button}
           </motion.button>
        </div>
      </div>
    </section>
  );
};


export default WhatICanDo;
