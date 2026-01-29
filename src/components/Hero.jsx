'use client';
import { motion } from 'motion/react';
import Image from 'next/image';
import lkj from '../../public/lkj.png'; 
import Scene3D from './Scene3D';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';

import Link from 'next/link';

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-8 md:px-20 pt-24 pb-12 bg-white dark:bg-black text-black dark:text-white relative overflow-hidden transition-colors duration-500">
      
      {/* Background 3D Layer */}
      <div className="absolute inset-0 z-0">
        <Scene3D />
      </div>

      {/* Marquee Background Text */}
      <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 pointer-events-none opacity-[0.03] dark:opacity-[0.05] whitespace-nowrap z-0 select-none">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="text-[25vw] font-black uppercase tracking-tighter leading-none"
        >
          CREATIVE DEVELOPER • FULL STACK ARCHITECT • CREATIVE DEVELOPER • FULL STACK ARCHITECT • 
        </motion.div>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between relative z-10 gap-12 md:gap-0">
        {/* Left Content */}
        <div className="flex-1 space-y-12 text-center md:text-left order-2 md:order-1">
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          >
             <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-black/10 dark:border-white/10 bg-white/50 dark:bg-black/50 backdrop-blur-md mb-8">
               <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
               <span className="text-[10px] font-black uppercase tracking-widest">{t.greeting} Rahul</span>
             </div>

             <h1 className={`text-6xl md:text-[8rem] lg:text-[10rem] font-black leading-[0.8] tracking-tighter mb-8 ${language === 'jp' ? 'font-noto' : ''}`}>
               DESIGN<br />
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600 dark:from-neutral-500 dark:to-neutral-100">ENGINEER.</span>
             </h1>
          </motion.div>

          <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="max-w-xl mx-auto md:mx-0"
          >
            <p className="text-xl md:text-2xl text-gray-500 dark:text-neutral-400 font-medium leading-relaxed">
              Crafting high-end digital experiences where <span className="text-black dark:text-white font-bold">minimalism</span> meets <span className="text-black dark:text-white font-bold italic">high-performance</span> code.
            </p>
          </motion.div>

          <motion.div
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.6, duration: 0.8 }}
               className="flex flex-wrap gap-6 justify-center md:justify-start"
          >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-black text-white dark:bg-white dark:text-black font-black text-xs uppercase tracking-[0.3em] rounded-full shadow-2xl hover:shadow-black/20 dark:hover:shadow-white/20 transition-all"
              >
                  {t.cta}
              </motion.button>
              
              <Link href="/#contact" className="group flex items-center gap-4 px-10 py-5 font-black text-xs uppercase tracking-[0.3em]">
                <span className="group-hover:translate-x-2 transition-transform duration-300">GET IN TOUCH</span>
                <div className="w-12 h-12 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all">
                  →
                </div>
              </Link>
          </motion.div>
        </div>

        {/* Right Content - Profile Image Decoration */}
        <motion.div 
           initial={{ opacity: 0, x: 50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ delay: 0.2, duration: 1, ease: [0.76, 0, 0.24, 1] }}
           className="relative flex justify-center items-center order-1 md:order-2"
        >
          <div className="relative w-[320px] h-[450px] md:w-[480px] md:h-[600px] overflow-hidden rounded-[3rem] group ring-1 ring-black/10 dark:ring-white/10 shadow-2xl">
              <Image 
                  src={lkj} 
                  alt="Rahul" 
                  fill
                  // Move focal point slightly right so the face isn't cropped to the left
                  style={{ objectFit: 'cover', objectPosition: '65% 50%' }}
                  sizes="(min-width: 768px) 480px, 320px"
                  priority
                  className="z-10 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out" 
              />
              
              {/* Image Overlays */}
              <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="absolute bottom-8 left-8 z-30 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 transition-all duration-700 delay-100">
                <p className="text-white font-black text-xl tracking-tighter">BORN IN INDIA.</p>
                <p className="text-white/60 text-xs font-bold tracking-widest uppercase">Currently shaping the web.</p>
              </div>

              <div className="absolute top-8 right-8 z-30">
                 <div className="bg-white/90 dark:bg-black/90 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-xl">
                   Available 2026.
                 </div>
              </div>
          </div>

          {/* Draggable/Floating Element Deco */}
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [12, 15, 12]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -left-20 z-40 bg-white dark:bg-neutral-900 border border-black/10 dark:border-white/10 p-6 rounded-3xl shadow-2xl hidden md:block"
          >
             <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-black dark:bg-white flex items-center justify-center text-white dark:text-black font-black text-xl italic">
                  1%
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest opacity-50">Standard</p>
                  <p className="text-sm font-black italic tracking-tighter">Pixel Perfection.</p>
                </div>
             </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
      >
        <span className="text-[10px] font-black uppercase tracking-[0.5em] vertical-text">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-black dark:from-white to-transparent"></div>
      </motion.div>

    </section>
  );
};

export default Hero;
