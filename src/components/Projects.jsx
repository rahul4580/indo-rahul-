'use client';
import { useRef } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({ title, category, description, technologies, className }) => (
    <motion.div 
        whileHover={{ y: -4 }}
        className={`group cursor-pointer project-card ${className}`}
    >
        <div className="border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-900 rounded-3xl p-8 md:p-10 hover:border-black/20 dark:hover:border-white/20 hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
            {/* Category Badge */}
            <div className="mb-6">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 dark:text-white/40">
                    {category}
                </span>
            </div>

            {/* Title */}
            <h3 className="text-3xl md:text-4xl font-black mb-4 tracking-tighter leading-tight text-black dark:text-white group-hover:opacity-80 transition-opacity">
                {title}
            </h3>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-600 dark:text-white/60 font-medium leading-relaxed mb-8 flex-grow">
                {description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-3 pt-6 border-t border-black/5 dark:border-white/5">
                {technologies.map((tech, idx) => (
                    <span 
                        key={idx}
                        className="text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    </motion.div>
);

const Projects = () => {
    const { language } = useLanguage();
    const t = translations[language].projects;
    const container = useRef(null);

    useGSAP(() => {
        gsap.from('.project-card', {
            scrollTrigger: {
                trigger: container.current,
                start: 'top center+=100',
                toggleActions: 'play none none reverse'
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out'
        });
    }, { scope: container });

    const projects = [
        {
            title: "E-commerce Dashboard",
            category: "React App",
            description: "A comprehensive admin panel for managing products, orders, and analytics with real-time data.",
            technologies: ["React", "Next.js"]
        },
        {
            title: "Financial Data Visualizer",
            category: "Data Viz",
            description: "Interactive stock market visualization tool transforming complex datasets into digestible insights.",
            technologies: ["React", "Next.js"]
        },
        {
            title: "Social Media API",
            category: "Backend",
            description: "High-performance backend API designed to handle millions of requests for a social platform.",
            technologies: ["React", "Next.js"]
        }
    ];

  return (
    <section id="projects" ref={container} className="py-32 px-8 md:px-20 bg-[#fafafa] dark:bg-black text-black dark:text-white border-t border-black/5 dark:border-white/5 transition-colors duration-500">
       <div className="max-w-7xl mx-auto">
           <div className="text-center mb-20">
               <div className={`inline-block border border-black/10 dark:border-white/10 rounded-full px-4 py-2 text-[10px] font-black uppercase tracking-[0.3em] mb-8 ${language === 'jp' ? 'font-noto' : ''}`}>
                   {t.label}
               </div>
               <h2 className={`text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tighter leading-[0.9] ${language === 'jp' ? 'font-noto' : ''}`}>
                    {language === 'en' ? <>Digital Experiences<br />& Data Narratives</> : t.title}
               </h2>
               <p className={`text-xl md:text-2xl text-gray-500 dark:text-neutral-400 max-w-3xl mx-auto font-medium leading-relaxed ${language === 'jp' ? 'font-noto' : ''}`}>
                    {t.description}
               </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} className={language === 'jp' ? 'font-noto' : ''} />
                ))}
           </div>

           <div className="flex justify-center mt-20">
                <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-10 py-5 bg-black dark:bg-white text-white dark:text-black font-black text-xs uppercase tracking-[0.3em] rounded-full hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors shadow-xl ${language === 'jp' ? 'font-noto' : ''}`}
                >
                    {t.explore}
                </motion.button>
           </div>
       </div>
    </section>
  );
};

export default Projects;
