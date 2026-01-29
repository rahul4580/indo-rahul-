import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'motion/react';
import { FaPalette, FaBolt, FaRocket, FaPuzzlePiece } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';

gsap.registerPlugin(ScrollTrigger);

const LoveCard = ({ icon: Icon, title, description, index, language }) => {
  return (
    <div className="flex-shrink-0 w-[80vw] md:w-[45vw] lg:w-[35vw] h-[600px] bg-white dark:bg-neutral-900 border border-black/5 dark:border-white/5 rounded-[4rem] p-12 flex flex-col justify-between group relative overflow-hidden">
      <div className="absolute inset-0 bg-black text-white dark:bg-white dark:text-black translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.76, 0, 0.24, 1]"></div>
      
      <div className="relative z-10 transition-colors duration-700 group-hover:text-white dark:group-hover:text-black">
        <div className="text-[10rem] font-black opacity-[0.03] absolute -top-10 -left-10 select-none">
          0{index + 1}
        </div>
        
        <div className="flex justify-between items-start mb-12">
           <div className="p-6 rounded-3xl bg-black dark:bg-white text-white dark:text-black group-hover:bg-white group-hover:text-black dark:group-hover:bg-black dark:group-hover:text-white transition-all duration-700">
              <Icon className="text-4xl" />
           </div>
           <div className="text-[10px] font-black uppercase tracking-[0.3em] opacity-30 group-hover:opacity-60 transition-opacity">Passions</div>
        </div>
        
        <h3 className={`text-4xl font-black mb-6 tracking-tighter leading-none ${language === 'jp' ? 'font-noto' : ''}`}>
          {title}
        </h3>
        
        <p className={`text-xl font-medium leading-relaxed opacity-50 group-hover:opacity-80 transition-opacity ${language === 'jp' ? 'font-noto' : ''}`}>
          {description}
        </p>
      </div>

      <div className="relative z-10 flex items-center justify-between group-hover:text-white dark:group-hover:text-black transition-colors duration-700">
         <span className="text-xs font-black uppercase tracking-[0.4em]">Read Philosophy</span>
         <div className="w-16 h-16 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center group-hover:border-white/40 dark:group-hover:border-black/40 transition-all">
            →
         </div>
      </div>
    </div>
  );
};

const WhatILove = () => {
  const { language } = useLanguage();
  const t = translations[language].philosophy;
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  const loves = [
    {
      icon: FaPalette,
      title: language === 'en' ? "CREATIVE DESIGN" : "クリエイティブデザイン",
      description: language === 'en' 
        ? "Crafting beautiful, intuitive interfaces that users love. Every pixel matters."
        : "ユーザーが愛する美しく直感的なインターフェースを作成。すべてのピクセルが重要です。"
    },
    {
      icon: FaBolt,
      title: language === 'en' ? "PERFORMANCE" : "パフォーマンス",
      description: language === 'en'
        ? "Building lightning-fast applications that deliver seamless experiences."
        : "シームレスな体験を提供する超高速アプリケーションの構築。"
    },
    {
      icon: FaRocket,
      title: language === 'en' ? "INNOVATION" : "イノベーション",
      description: language === 'en'
        ? "Pushing boundaries with cutting-edge technologies and modern solutions."
        : "最先端技術と現代的なソリューションで境界を押し広げる。"
    },
    {
      icon: FaPuzzlePiece,
      title: language === 'en' ? "PROBLEM SOLVING" : "問題解決",
      description: language === 'en'
        ? "Turning complex challenges into elegant, scalable solutions."
        : "複雑な課題をエレガントでスケーラブルなソリューションに変える。"
    }
  ];

  useLayoutEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      { translateX: 0 },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);

  return (
    <div id="philosophy" className="overflow-hidden bg-[#fafafa] dark:bg-black transition-colors duration-500">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="h-screen flex items-center px-[10vw] gap-12 w-[400vw]">
          <div className="flex-shrink-0 w-[40vw] flex flex-col justify-center">
             <div className={`inline-block w-fit px-4 py-2 border border-black/10 dark:border-white/10 rounded-full text-[10px] font-black tracking-[0.3em] uppercase mb-10 ${language === 'jp' ? 'font-noto' : ''}`}>
               Inspiration
             </div>
             <h2 className={`text-6xl md:text-[8rem] font-black leading-[0.8] tracking-tighter mb-10 ${language === 'jp' ? 'font-noto' : ''}`}>
                WHAT I<br/>
                <span className="text-gray-300 dark:text-neutral-800">LOVE.</span>
             </h2>
             <p className={`text-xl text-gray-500 dark:text-neutral-500 font-medium max-w-sm ${language === 'jp' ? 'font-noto' : ''}`}>
                {t.description}
             </p>
          </div>
          
          {loves.map((love, index) => (
            <LoveCard 
              key={index} 
              {...love} 
              index={index} 
              language={language} 
            />
          ))}

          <div className="flex-shrink-0 w-[40vw] flex flex-col justify-center items-center">
             <motion.div
               animate={{ y: [0, -20, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="text-[15rem] font-black opacity-[0.03] select-none"
             >
               NEXT
             </motion.div>
             <h3 className="text-3xl font-black uppercase tracking-widest -mt-20">Scroll for more</h3>
          </div>
        </div>
      </div>
    </div>
  );
};


export default WhatILove;
