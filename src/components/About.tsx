
import React, { useEffect, useRef } from 'react';

const About = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        }
      });
    }, observerOptions);
    
    if (headingRef.current) observer.observe(headingRef.current);
    if (contentRef.current) observer.observe(contentRef.current);
    if (imageRef.current) observer.observe(imageRef.current);
    
    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (contentRef.current) observer.unobserve(contentRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  return (
    <section id="about" className="py-20 px-6 bg-secondary/50">
      <div className="container mx-auto">
        <h2 ref={headingRef} className="reveal section-heading text-center">
          About Me
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 items-center">
          <div ref={imageRef} className="reveal" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-primary/20 to-secondary blur-xl opacity-50"></div>
              <div className="relative overflow-hidden rounded-lg bg-card shadow-xl">
                <img 
                  src="/maith.png" 
                  alt="Maithili Tyagi" 
                  className="w-full h-auto object-cover aspect-[4/3]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          
          <div ref={contentRef} className="reveal" style={{ animationDelay: '0.4s' }}>
            <p className="text-sm uppercase font-medium tracking-wider text-foreground/60 mb-2">
              Who I Am
            </p>
            <h3 className="text-2xl font-display font-bold mb-6">
              Electrical Engineering Student at KIIT University
            </h3>
            <p className="text-foreground/80 mb-4">
              I am Maithili Tyagi, currently pursuing B.Tech in Electrical Engineering at KIIT University (2023-2027) with a CGPA of 8.61. I consider myself a responsible and orderly individual who is eager to learn about and grow in the IT industry.
            </p>
            <p className="text-foreground/80 mb-4">
              My educational journey includes completing 12th Standard (PCM) from FIITJEE Junior College and 10th Standard from FIITJEE World School. I am also a Student Member of the Indian Society for Technical Education (ISTE) for 2024-2027.
            </p>
            <p className="text-foreground/80 mb-6">
              I have hands-on experience with projects like IoT-based home automation, weather applications, and game development. My technical skills span across C, Python, HTML, CSS, and JavaScript.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-medium">Email</h4>
                  <p className="text-sm text-foreground/60">tyagimaithili918@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-medium">Location</h4>
                  <p className="text-sm text-foreground/60">Bhubaneswar, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
