'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../../../context/LanguageContext';
import { translations } from '../../../utils/translations';
import Navbar from '../../../components/Navbar';
import { FaBookOpen, FaStar, FaBookmark } from 'react-icons/fa';
import Footer from '../../../components/Footer';

const BookCard = ({ title, author, desc, delay, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50, rotateX: 20 }}
    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: index * 0.1, ease: [0.76, 0, 0.24, 1] }}
    className="group relative h-[450px] w-full max-w-[320px] mx-auto perspective-2000"
  >
    <div className="relative h-full w-full transition-all duration-700 transform-style-3d group-hover:rotate-y-[25deg] group-hover:-translate-x-4">
      {/* Book Cover */}
      <div className="absolute inset-0 bg-neutral-900 border border-neutral-800 rounded-r-3xl rounded-l-md shadow-[20px_20px_60px_-15px_rgba(0,0,0,0.5)] dark:shadow-[20px_20px_60px_-15px_rgba(255,255,255,0.05)] p-10 flex flex-col justify-between text-white overflow-hidden group-hover:border-neutral-700 transition-colors">
        {/* Spine/Edge */}
        <div className="absolute top-0 left-0 w-6 h-full bg-gradient-to-r from-black/40 via-white/5 to-transparent z-10 border-r border-white/5"></div>
        
        {/* Textures */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/leather.png')]"></div>

        <div className="relative z-20">
          <div className="text-[10px] text-white/40 font-black uppercase tracking-[0.3em] mb-4">{author}</div>
          <h3 className="text-3xl font-serif font-black leading-tight tracking-tight italic group-hover:text-blue-400 transition-colors">{title}</h3>
        </div>

        <div className="flex justify-center items-center relative z-20 opacity-10 group-hover:opacity-40 transition-all duration-500 scale-150 group-hover:scale-110">
           <FaBookOpen className="text-9xl" />
        </div>

        <div className="relative z-20">
           <div className="flex gap-1 text-yellow-500 mb-6 drop-shadow-lg">
             {[1, 2, 3, 4, 5].map(i => <FaStar key={i} size={14} />) || <FaStar size={14} />}
           </div>
           <p className="text-sm text-white/50 font-medium line-clamp-3 leading-relaxed group-hover:text-white/80 transition-colors">
             {desc}
           </p>
        </div>
      </div>
      
      {/* Page Thickness Effect */}
      <div className="absolute top-2 bottom-2 right-[-20px] w-10 bg-white dark:bg-neutral-800 rounded-r-md transform translate-z-[-20px] shadow-inner flex flex-col justify-around py-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
         {[...Array(10)].map((_, i) => <div key={i} className="h-px w-full bg-black/5 dark:bg-white/5"></div>)}
      </div>
    </div>
  </motion.div>
);

const ChatBubble = ({ name, message, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay }}
    className="flex gap-4 items-start mb-6"
  >
    <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-neutral-800 flex items-center justify-center font-bold text-xs shrink-0">
      {name[0]}
    </div>
    <div className="bg-gray-100 dark:bg-neutral-900 p-4 rounded-2xl rounded-tl-none border border-gray-200 dark:border-neutral-800 max-w-[80%]">
      <p className="text-xs font-bold mb-1 opacity-50 uppercase tracking-widest">{name}</p>
      <p className="text-sm font-medium">{message}</p>
    </div>
  </motion.div>
);

export default function Books() {
  const { language } = useLanguage();
  const t = translations[language].more_books || {};
  const list = t.list || [];

  return (
    <div className="bg-[#fafafa] dark:bg-black min-h-screen text-black dark:text-white selection:bg-blue-500 selection:text-white transition-colors duration-500">
      <Navbar />
      
      <div className="container mx-auto px-6 pt-32 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto mb-24 text-center"
        >
          <motion.div 
            initial={{ scale: 0.8, rotate: 10 }}
            animate={{ scale: 1, rotate: 0 }}
            className="inline-block p-5 rounded-[1.5rem] bg-blue-500 text-white mb-8 shadow-2xl shadow-blue-500/20"
          >
            <FaBookOpen className="text-4xl" />
          </motion.div>
          <h1 className={`text-6xl md:text-8xl font-black mb-6 tracking-tighter ${language === 'jp' ? 'font-noto' : ''}`}>
            {t.title}
          </h1>
          <p className={`text-xl md:text-2xl text-gray-500 dark:text-neutral-500 max-w-2xl mx-auto font-medium ${language === 'jp' ? 'font-noto' : ''}`}>
            {t.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 max-w-7xl mx-auto">
          {/* Bookshelf - Left Column */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {list.map((book, i) => (
                <BookCard 
                  key={i}
                  index={i}
                  {...book}
                />
              ))}
            </div>
          </div>

          {/* Social/Chat Side - Right Column */}
          <div className="lg:col-span-1">
             <motion.div
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               className="sticky top-32 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 p-8 rounded-[2.5rem] shadow-xl"
             >
                <div className="flex items-center gap-4 mb-8">
                   <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                   <h3 className="text-xl font-black uppercase tracking-tighter">Discussion Room</h3>
                </div>

                <div className="space-y-2 mb-8">
                  <ChatBubble name="Alex" message="Atomic Habits changed my morning routine completely!" delay={0.1} />
                  <ChatBubble name="Sarah" message="Have you read 'The Alchemist'? It fits this shelf perfectly." delay={0.3} />
                  <ChatBubble name="Rahul" message="Working on 'Clean Code' right now. Refactoring everything! 🚀" delay={0.5} />
                </div>

                <div className="relative">
                   <input 
                     type="text" 
                     placeholder="Say something..." 
                     className="w-full bg-gray-100 dark:bg-black border border-gray-200 dark:border-neutral-800 rounded-2xl py-4 px-6 text-sm font-medium focus:outline-none focus:border-blue-500 transition-colors"
                   />
                </div>
             </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
