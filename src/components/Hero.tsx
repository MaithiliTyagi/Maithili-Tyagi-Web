
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import AI3DAvatar from './AI3DAvatar';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        }
      });
    }, observerOptions);
    
    if (titleRef.current) observer.observe(titleRef.current);
    if (subtitleRef.current) observer.observe(subtitleRef.current);
    if (ctaRef.current) observer.observe(ctaRef.current);
    
    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (subtitleRef.current) observer.unobserve(subtitleRef.current);
      if (ctaRef.current) observer.unobserve(ctaRef.current);
    };
  }, []);

  return (
    <section 
      id="home" 
      className={cn(
        "relative flex flex-col items-center justify-center py-20 px-6",
        isMobile ? "min-h-[100dvh]" : "min-h-screen"
      )}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.05)_100%)]" />
      </div>
      
      <div className="container mx-auto text-center relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col items-center lg:items-start">
          <h1 
            ref={titleRef}
            className="reveal font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl lg:text-left"
            style={{ animationDelay: '0.2s' }}
          >
            Maithili Tyagi
          </h1>
          
          <p 
            ref={subtitleRef} 
            className="reveal mx-auto mt-6 max-w-2xl text-lg text-foreground/60 sm:text-xl md:text-2xl lg:text-left lg:mx-0"
            style={{ animationDelay: '0.4s' }}
          >
            Electrical Engineer & Web Developer
          </p>
          
          <div 
            ref={ctaRef}
            className="reveal mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            style={{ animationDelay: '0.6s' }}
          >
            <a 
              href="#contact" 
              className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              Contact Me
            </a>
            <a 
              href="#projects" 
              className="inline-flex h-11 items-center justify-center rounded-md border border-border bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-secondary"
            >
              View Projects
            </a>
          </div>
        </div>
        
        <div className="reveal mt-10 lg:mt-0" style={{ animationDelay: '0.8s' }}>
          <AI3DAvatar />
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="text-foreground/50"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <polyline points="19 12 12 19 5 12"></polyline>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
