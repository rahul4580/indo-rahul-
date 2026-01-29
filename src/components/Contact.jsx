'use client';
import { useState } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';
import { FaGithub, FaLinkedin, FaArrowRight } from 'react-icons/fa';



export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language].contact;
  const [formStatus, setFormStatus] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    setFormStatus('sending');

    const form = event.target;
    const formData = new FormData(form);
    formData.append("access_key", "cac0db14-8c2f-4f4e-b193-4c4b1edc2189");
    formData.append("email", "kumararahul795@gmail.com");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      const result = await response.json();
      if (result.success) {
        setFormStatus('success');
        form.reset();
        setTimeout(() => setFormStatus(''), 5000);
      } else {
        setFormStatus('error');
        setTimeout(() => setFormStatus(''), 5000);
      }
    } catch (error) {
      setFormStatus('error');
      setTimeout(() => setFormStatus(''), 5000);
    }
  }

  const socialLinks = [
    { icon: FaGithub, label: 'GH', href: 'https://github.com/rahul4580' },
    { icon: FaLinkedin, label: 'LI', href: 'https://www.linkedin.com/in/rahul-b45153359/' },
  ];

  return (
    <div className="w-full min-h-screen bg-white dark:bg-black py-32">
      <div className="max-w-[1700px] mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-24 items-center">
        
        {/* Left Column: High-Impact Typography */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className={`inline-block px-4 py-2 border border-black/10 dark:border-white/10 rounded-full text-[10px] font-black tracking-[0.3em] uppercase mb-12 ${language === 'jp' ? 'font-noto' : ''}`}>
               Open for collaboration
            </div>
            
            <h2 className={`text-[12vw] lg:text-[10vw] font-black leading-[0.75] tracking-tighter mb-12 ${language === 'jp' ? 'font-noto' : ''}`}>
               LET'S<br/>
               <span className="text-gray-300 dark:text-neutral-800">CONNECT.</span>
            </h2>

            <div className="space-y-12">
               <p className={`text-2xl text-gray-500 font-medium max-w-md ${language === 'jp' ? 'font-noto' : ''}`}>
                 {t.subtitle}
               </p>

               <div className="flex flex-wrap gap-4">
                  {socialLinks.map((link, i) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-16 h-16 rounded-2xl border border-black/10 dark:border-white/10 flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
                    >
                       <link.icon className="text-2xl" />
                    </motion.a>
                  ))}
               </div>

               <div className="pt-12 border-t border-black/5 dark:border-white/5">
                  <div className="flex items-center gap-4">
                     <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                     <span className="text-xs font-black uppercase tracking-widest">{t.available_now}</span>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Sleek Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="relative bg-[#fafafa] dark:bg-neutral-900/50 p-12 md:p-16 rounded-[4rem] border border-black/5 dark:border-white/5"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] opacity-30 ml-4">Full Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full bg-white dark:bg-black border border-black/5 dark:border-white/5 px-8 py-6 rounded-3xl text-lg font-medium focus:ring-2 focus:ring-black dark:focus:ring-white transition-all outline-none"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] opacity-30 ml-4">Email Address</label>
              <input
                type="email"
                name="user_email"
                required
                className="w-full bg-white dark:bg-black border border-black/5 dark:border-white/5 px-8 py-6 rounded-3xl text-lg font-medium focus:ring-2 focus:ring-black dark:focus:ring-white transition-all outline-none"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] opacity-30 ml-4">Project Brief</label>
              <textarea
                name="message"
                required
                rows={5}
                className="w-full bg-white dark:bg-black border border-black/5 dark:border-white/5 px-8 py-6 rounded-3xl text-lg font-medium focus:ring-2 focus:ring-black dark:focus:ring-white transition-all outline-none resize-none"
              ></textarea>
            </div>

            <motion.button
              type="submit"
              disabled={formStatus === 'sending'}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-black text-white dark:bg-white dark:text-black py-8 rounded-full font-black uppercase tracking-[0.4em] text-xs shadow-2xl transition-all relative overflow-hidden group"
            >
              <span className="relative z-10 transition-transform group-hover:-translate-y-1 block">
                {formStatus === 'sending' ? t.sending : formStatus === 'success' ? t.success : formStatus === 'error' ? t.error : t.button}
              </span>
              <div className="absolute inset-0 bg-blue-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </motion.button>

            {formStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-6 bg-green-500/10 border border-green-500/20 rounded-3xl text-green-600 dark:text-green-400 text-center font-bold"
              >
                ✓ {t.success_message}
              </motion.div>
            )}
          </form>
        </motion.div>

      </div>
    </div>
  );
}
