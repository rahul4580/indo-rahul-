import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';

function Services() {
    const { language } = useLanguage();
    const t = translations[language]?.services || translations['en'].services;
    
    const cardStyle = {
        perspective: '1200px',
        width: '280px',
        height: '380px',
        cursor: 'pointer',
    };

    const innerStyle = {
        width: '100%',
        height: '100%',
        transition: 'transform 0.8s cubic-bezier(0.23, 1, 0.32, 1)',
        transformStyle: 'preserve-3d',
    };

    const faceCommon = {
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        borderRadius: '3rem',
        boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
        background: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: "40px",
        backfaceVisibility: 'hidden',
        border: '1px solid rgba(0,0,0,0.05)',
    };

    const backFaceStyle = {
        ...faceCommon,
        transform: 'rotateY(180deg)',
        background: '#000',
        color: '#fff',
        justifyContent: 'flex-start',
        padding: "40px",
    };

    function FlipCard({ icon, title, skills }) {
      const [hovered, setHovered] = useState(false);

      return (
        <div
          style={cardStyle}
          className="group"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div
            style={{
              ...innerStyle,
              transform: hovered ? "rotateY(180deg)" : "rotateY(0deg)",
            }}
          >
            {/* Front Face */}
            <div style={faceCommon} className="dark:bg-neutral-900 dark:border-white/5">
                <div className="w-20 h-20 rounded-2xl bg-gray-50 dark:bg-black flex items-center justify-center mb-8">
                    {icon}
                </div>
                <h3 className="text-xl font-black uppercase tracking-tighter dark:text-white">{title}</h3>
                <div className="mt-6 w-8 h-1 bg-blue-500 rounded-full"></div>
            </div>
            {/* Back Face (skills list) */}
            <div style={backFaceStyle} className="dark:bg-white dark:text-black">
                <h3 className="text-sm font-black uppercase tracking-[0.3em] mb-8 opacity-50">{title}</h3>
                <ul className="space-y-4">
                    {skills.map((skill, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                        {skill}
                      </li>
                    ))}
                </ul>
            </div>
          </div>
        </div>
      );
    }

    return (
        <section id="services" className="py-32 px-8 bg-[#fafafa] dark:bg-black transition-colors duration-500">
            <div className="max-w-7xl mx-auto">
                <div className="mb-24 text-center">
                    <div className="inline-block px-4 py-2 bg-blue-500 text-white rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                        {t.label}
                    </div>
                    <h2 className={`text-6xl md:text-8xl font-black tracking-tighter dark:text-white uppercase ${language === 'jp' ? 'font-noto' : ''}`}>
                        {language === 'en' ? (
                          <>
                            {t.title.split(' ')[0]}<br/>
                            <span className="text-gray-300 dark:text-neutral-800">{t.title.split(' ')[1]}</span>
                          </>
                        ) : t.title}
                    </h2>
                </div>
                
                <div className="flex flex-wrap justify-center gap-12">
                    <FlipCard
                      icon={<img src="https://img.icons8.com/color/96/react-native.png" alt="Front End" className="w-12 h-12" />}
                      title={t?.frontend?.title || 'Front End'}
                      skills={t?.frontend?.skills || ['React.js', 'Next.js', 'Tailwind CSS']}
                    />
                    <FlipCard
                      icon={<img src="https://img.icons8.com/color/96/nodejs.png" alt="Back End" className="w-12 h-12" />}
                      title={t?.backend?.title || 'Back End'}
                      skills={t?.backend?.skills || ['Node.js', 'Express', 'API Design']}
                    />
                    <FlipCard
                      icon={<img src="https://img.icons8.com/color/96/python.png" alt="Data Science" className="w-12 h-12" />}
                      title={t?.data?.title || 'Statistics'}
                      skills={t?.data?.skills || ['Python', 'Pandas', 'SQL']}
                    />
                </div>
            </div>
        </section>
    );
}

export default Services;
