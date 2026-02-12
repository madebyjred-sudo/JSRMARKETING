import React, { useRef, useEffect, useState, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  baseOpacity?: number;
  enableBlur?: boolean;
  baseRotation?: number;
  blurStrength?: number;
  x?: number;
  y?: number;
  duration?: number;
  delay?: number;
  className?: string;
  staggerIndex?: number;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  baseOpacity = 0,
  enableBlur = false,
  baseRotation = 0,
  blurStrength = 4,
  x = 0,
  y = 20, // Default upward motion
  duration = 1000,
  delay = 0,
  className = '',
  staggerIndex = 0
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  // Calculate final delay including stagger
  const totalDelay = delay + (staggerIndex * 100);

  const style: React.CSSProperties = {
    opacity: isVisible ? 1 : baseOpacity,
    transform: isVisible 
      ? 'translate3d(0, 0, 0) rotate(0deg)' 
      : `translate3d(${x}px, ${y}px, 0) rotate(${baseRotation}deg)`,
    filter: enableBlur 
      ? (isVisible ? 'blur(0)' : `blur(${blurStrength}px)`) 
      : 'none',
    transition: `all ${duration}ms cubic-bezier(0.2, 0.65, 0.3, 0.9)`,
    transitionDelay: `${totalDelay}ms`,
    willChange: 'opacity, transform, filter'
  };

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  );
};

export default ScrollReveal;