"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";



export default function Footer() {
  const [time, setTime] = useState("");
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"]
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = { timeZone: "Asia/Kolkata", hour: "2-digit", minute: "2-digit", second: "2-digit" };
      setTime(now.toLocaleTimeString("en-GB", options));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer ref={container} className="relative w-full bg-white dark:bg-black text-black dark:text-white overflow-hidden py-32 border-t border-black/5 dark:border-white/5">
      {/* Massive Background Marquee */}
      <div className="absolute top-0 left-0 w-full overflow-hidden opacity-[0.02] pointer-events-none select-none py-10">
        <h1 className="text-[30vw] font-black whitespace-nowrap leading-none uppercase tracking-tighter">
          RAHUL // SYSTEM // RAHUL // SYSTEM //
        </h1>
      </div>

      <div className="max-w-[1700px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 mb-32 items-end">
          <div>
            <div className="inline-block px-4 py-2 border border-black/10 dark:border-white/10 rounded-full text-[10px] font-black tracking-[0.3em] uppercase mb-12">
               System Index
            </div>
            <h2 className="text-[8vw] lg:text-[6vw] font-black leading-[0.8] tracking-tighter uppercase mb-12">
               Let's build<br/>
               <span className="text-gray-300 dark:text-neutral-800">The Future.</span>
            </h2>
          </div>
          
          <div className="flex flex-col items-start lg:items-end gap-12">
             <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, rotate: 90 }}
                className="w-32 h-32 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center group hover:bg-black dark:hover:bg-white transition-all duration-500"
             >
                <FaArrowUp className="text-3xl group-hover:text-white dark:group-hover:text-black transition-colors" />
             </motion.button>
             <p className="text-xl font-medium text-gray-400 dark:text-neutral-600 max-w-sm lg:text-right">
                Synthesizing design and intelligence to create exceptional digital experiences.
             </p>
          </div>
        </div>

        {/* Blueprint Info Grid */}
        <div className="grid md:grid-cols-3 gap-12 pt-20 border-t border-black/5 dark:border-white/5">
          <div className="p-10 bg-[#fafafa] dark:bg-neutral-900/50 rounded-[3rem] border border-black/5 dark:border-white/5 relative overflow-hidden group">
             <div className="text-[10px] font-black uppercase tracking-[0.3em] opacity-30 mb-8">Access Points</div>
             <div className="space-y-4 relative z-10">
                <a href="mailto:kumararahul795@gmail.com" className="block text-xl font-bold hover:translate-x-2 transition-transform">Mail_01</a>
                <a href="mailto:raybody076@gmail.com" className="block text-xl font-bold hover:translate-x-2 transition-transform">Mail_02</a>
             </div>
             <div className="flex gap-4 mt-12 relative z-10">
                <a href="https://github.com/rahul4580" target="_blank" className="w-12 h-12 rounded-xl border border-black/10 dark:border-white/10 flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/rahul-b45153359/" target="_blank" className="w-12 h-12 rounded-xl border border-black/10 dark:border-white/10 flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"><FaLinkedin /></a>
             </div>
          </div>

          <div className="p-10 bg-[#fafafa] dark:bg-neutral-900/50 rounded-[3rem] border border-black/5 dark:border-white/5">
             <div className="text-[10px] font-black uppercase tracking-[0.3em] opacity-30 mb-8">Localization</div>
             <div className="text-3xl font-black uppercase tracking-tighter mb-2">New Delhi</div>
             <div className="text-gray-400 dark:text-neutral-600 font-bold uppercase tracking-widest text-xs">India // Asia</div>
             <div className="mt-8 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-[10px] font-black uppercase tracking-widest">Available globally</span>
             </div>
          </div>

          <div className="p-10 bg-[#fafafa] dark:bg-neutral-900/50 rounded-[3rem] border border-black/5 dark:border-white/5">
             <div className="text-[10px] font-black uppercase tracking-[0.3em] opacity-30 mb-8">Temporal Data</div>
             <div className="text-5xl font-mono tabular-nums font-black mb-2">{time}</div>
             <div className="text-gray-400 dark:text-neutral-600 font-bold uppercase tracking-widest text-xs">GMT +5:30</div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-24 pt-12 border-t border-black/5 dark:border-white/5 gap-8">
           <div className="text-[10px] font-black uppercase tracking-[0.4em] opacity-20">
              © {new Date().getFullYear()} Rahul Kumar // Built with Intelligence
           </div>
           <div className="flex gap-12 font-black text-[10px] uppercase tracking-[0.2em] opacity-40">
              <span className="cursor-pointer hover:opacity-100 transition-opacity">Privacy</span>
              <span className="cursor-pointer hover:opacity-100 transition-opacity">Terms</span>
              <span className="cursor-pointer hover:opacity-100 transition-opacity">Cookies</span>
           </div>
        </div>
      </div>
    </footer>
  );
}
