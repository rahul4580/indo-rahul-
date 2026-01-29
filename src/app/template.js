'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Template({ children }) {
  const containerRef = useRef(null);
  const panelsRef = useRef([]);

  useEffect(() => {
    // Initial entrance animation
    const tl = gsap.timeline();
    
    tl.to(panelsRef.current, {
      scaleY: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power4.inOut",
      transformOrigin: "bottom"
    });

    return () => {
      // Exit animation (optional, but templates usually just handle mount)
    };
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {/* Staircase Overlay */}
      <div className="staircase-container">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            ref={(el) => (panelsRef.current[i] = el)}
            className="staircase-panel"
            style={{ backgroundColor: i % 2 === 0 ? '#000' : '#111' }}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
