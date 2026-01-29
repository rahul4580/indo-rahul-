'use client';
import { useRef } from 'react';
import { motion } from 'motion/react';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiMongodb, SiPostgresql, SiGraphql, SiPython, SiPandas, SiDocker, SiFigma } from "react-icons/si";
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SkillCard = ({ title, skills, progress, icon: Icon, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
    className="relative group bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 p-8 rounded-[2rem] overflow-hidden"
  >
    {/* Animated Dot Background */}
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] dark:bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>

    <div className="relative z-10">
      <div className="flex justify-between items-start mb-8">
        <div className="p-4 bg-black text-white dark:bg-white dark:text-black rounded-2xl shadow-xl">
          <Icon className="text-2xl" />
        </div>
        <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-30">Category</span>
      </div>

      <h3 className="text-2xl font-black mb-6 tracking-tighter uppercase">{title}</h3>

      <div className="space-y-6">
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span key={skill} className="px-3 py-1 bg-gray-100 dark:bg-neutral-800 text-[10px] font-bold uppercase tracking-widest rounded-full border border-black/5 dark:border-white/5 group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all">
              {skill}
            </span>
          ))}
        </div>

        <div className="pt-4 border-t border-black/5 dark:border-white/5">
          <div className="flex justify-between items-end mb-2">
            <span className="text-[10px] font-black uppercase tracking-widest opacity-40">Proficiency</span>
            <span className="text-sm font-mono font-bold">{progress}%</span>
          </div>
          <div className="h-1.5 w-full bg-gray-100 dark:bg-neutral-800 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${progress}%` }}
              transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1], delay: delay + 0.2 }}
              className="h-full bg-black dark:bg-white rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const Skills = () => {
  const { language } = useLanguage();
  const t = translations[language].skills;

  return (
    <section id="skills" className="py-32 px-6 md:px-20 bg-[#fafafa] dark:bg-black transition-colors duration-500 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <div className={`inline-block px-4 py-2 border border-black/10 dark:border-white/10 rounded-full text-[10px] font-black tracking-[0.3em] uppercase mb-8 ${language === 'jp' ? 'font-noto' : ''}`}>
               Arsenal
            </div>
            <h2 className={`text-6xl md:text-9xl font-black leading-[0.8] tracking-tighter mb-8 ${language === 'jp' ? 'font-noto' : ''}`}>
               TECH<br/>
               <span className="text-gray-300 dark:text-neutral-800">MATRIX.</span>
            </h2>
            <p className={`text-xl text-gray-500 dark:text-neutral-500 font-medium leading-tight ${language === 'jp' ? 'font-noto' : ''}`}>
               {t.subtitle}
            </p>
          </div>
          
          <div className="flex items-center gap-4 group cursor-pointer">
             <div className="w-16 h-16 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center group-hover:bg-black dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-all">
                →
             </div>
             <span className="text-xs font-black uppercase tracking-widest">Scroll to explore</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <SkillCard 
              title={t.frontend} 
              skills={['React', 'Next.js', 'TS', 'Tailwind']}
              progress={95}
              icon={SiReact}
              delay={0.1}
          />
          <SkillCard 
              title={t.backend}
              skills={['Node', 'Express', 'Mongo', 'SQL']}
              progress={90}
              icon={SiNodedotjs}
              delay={0.2}
          />
          <SkillCard 
              title={t.data}
              skills={['Python', 'Pandas', 'NumPy', 'D3']}
              progress={85}
              icon={SiPython}
              delay={0.3}
          />
          <SkillCard 
              title={t.tools}
              skills={['Docker', 'Git', 'Vercel', 'Figma']}
              progress={80}
              icon={SiDocker}
              delay={0.4}
          />
        </div>

        {/* Global Achievement Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-24 p-12 bg-black text-white dark:bg-white dark:text-black rounded-[3rem] flex flex-col md:flex-row justify-between items-center relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-[length:250%_250%] group-hover:animate-[shimmer_2s_infinite] pointer-events-none"></div>
          
          <div className="relative z-10 mb-8 md:mb-0">
             <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-[10px] font-black uppercase tracking-widest opacity-60">Status: Battle Tested</span>
             </div>
             <h3 className={`text-4xl md:text-5xl font-black mb-2 tracking-tighter ${language === 'jp' ? 'font-noto' : ''}`}>{t.results.toUpperCase()}</h3>
             <p className={`text-white/60 dark:text-black/60 font-medium ${language === 'jp' ? 'font-noto' : ''}`}>{t.results_desc}</p>
          </div>

          <button className={`relative z-10 px-10 py-5 bg-white text-black dark:bg-black dark:text-white font-black text-xs uppercase tracking-[0.3em] rounded-full hover:scale-105 transition-transform ${language === 'jp' ? 'font-noto' : ''}`}>
             {t.view_projects}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
