import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { translations } from '../utils/translations';
import { FaSun, FaMoon } from 'react-icons/fa';
import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs";

const Navbar = () => {
  const { language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const t = translations[language].nav;
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: t.home, href: '/' },
    { name: t.about, href: '/about' },
    { name: t.more, href: '/more' },
    { name: t.contact, href: '/#contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 md:px-12 py-4 ${
        isScrolled ? 'top-4' : 'top-0'
      }`}
    >
      <div
        className={`max-w-[1700px] mx-auto flex justify-between items-center px-10 py-5 rounded-[2.5rem] transition-all duration-500 backdrop-blur-2xl border ${
          isScrolled
            ? 'bg-white/85 dark:bg-black/85 border-black/10 dark:border-white/15 shadow-2xl'
            : 'bg-white/55 dark:bg-black/55 border-black/5 dark:border-white/10 shadow-lg shadow-black/5 dark:shadow-white/5'
        }`}
      >
        
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-black dark:bg-white flex items-center justify-center text-white dark:text-black font-black text-xl transition-all group-hover:rotate-12 group-hover:scale-110">
            R
          </div>
          <span className="text-sm font-black uppercase tracking-[0.3em] text-black dark:text-white transition-colors">
            System
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-12 items-center">
          {links.map((link, i) => (
            <motion.div
              key={link.name}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <Link 
                href={link.href} 
                className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all ${
                  'text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white'
                } ${language === 'jp' ? 'font-noto' : ''}`}
              >
                {link.name}
              </Link>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-black dark:bg-white rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            </motion.div>
          ))}
        </div>
        
        {/* Actions */}
        <div className="flex items-center gap-6">
            {typeof window !== 'undefined' && process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY && 
             process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY.startsWith('pk_') && 
             !process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY.includes('placeholder') ? (
              <>
                <SignedIn>
                  <UserButton appearance={{
                    elements: {
                      userButtonAvatarBox: "w-10 h-10 rounded-xl",
                    }
                  }} />
                </SignedIn>
                <SignedOut>
                  <SignInButton mode="modal">
                    <button className={`text-[10px] font-black uppercase tracking-[0.3em] px-6 py-3 rounded-xl border transition-all ${
                      isScrolled || theme === 'dark' 
                        ? 'border-black/10 text-black hover:bg-black hover:text-white dark:border-white/10 dark:text-white dark:hover:bg-white dark:hover:text-black' 
                        : 'border-white/20 text-white hover:bg-white hover:text-black'
                    } ${isScrolled ? '' : 'mix-blend-difference'}`}>
                      Access
                    </button>
                  </SignInButton>
                </SignedOut>
              </>
            ) : null}

            <div className="w-px h-6 bg-black/10 dark:bg-white/10"></div>

            <div className="flex gap-4">
              <button
                  onClick={() => toggleLanguage()}
                  aria-label="Toggle language"
                  className={`text-[10px] font-black uppercase tracking-widest w-10 h-10 flex items-center justify-center rounded-full transition-all border ${
                    isScrolled
                      ? 'border-black/10 dark:border-white/10 text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5'
                      : 'border-black/10 dark:border-white/10 text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5'
                  }`}
              >
                  {language === 'en' ? 'JP' : 'EN'}
              </button>

              <button
                  onClick={() => toggleTheme()}
                  className={`w-10 h-10 flex items-center justify-center rounded-full border transition-all ${
                    isScrolled
                      ? 'border-black/10 dark:border-white/10 text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black'
                      : 'border-black/10 dark:border-white/10 text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black'
                  }`}
                  aria-label="Toggle Theme"
              >
                  {theme === 'dark' ? <FaSun className="text-sm" /> : <FaMoon className="text-sm" />}
              </button>
            </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
