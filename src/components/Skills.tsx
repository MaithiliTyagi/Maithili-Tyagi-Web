
import React, { useEffect, useRef } from 'react';

const SkillCard = ({ 
  icon, 
  title, 
  description, 
  skills, 
  delay 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  skills: string[]; 
  delay: string;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
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
    
    if (cardRef.current) observer.observe(cardRef.current);
    
    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className="reveal bg-card rounded-xl border border-border shadow-sm p-6 card-hover"
      style={{ animationDelay: delay }}
    >
      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-display font-semibold mb-2">{title}</h3>
      <p className="text-foreground/70 text-sm mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span key={index} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  
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
    if (subheadingRef.current) observer.observe(subheadingRef.current);
    
    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (subheadingRef.current) observer.unobserve(subheadingRef.current);
    };
  }, []);

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 
          ref={headingRef} 
          className="reveal section-heading text-center"
        >
          My Skills
        </h2>
        <p 
          ref={subheadingRef} 
          className="reveal section-subheading text-center mx-auto max-w-2xl"
          style={{ animationDelay: '0.2s' }}
        >
          A unique blend of electrical engineering expertise and web development skills
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <SkillCard
            icon={
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
              >
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
            }
            title="Web Development"
            description="Modern frontend and backend development with a focus on responsive, accessible, and performant applications."
            skills={["HTML", "CSS", "JavaScript", "C", "Python"]}
            delay="0.2s"
          />
          
          <SkillCard
            icon={
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
              >
                <path d="M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14" />
                <path d="M2 20h20" />
                <path d="M14 12v.01" />
              </svg>
            }
            title="Electrical Engineering"
            description="Strong foundation in electrical systems, circuit design, and engineering principles."
            skills={["Circuit Design", "Electrical Systems", "PCB Design", "Microcontrollers", "Power Systems"]}
            delay="0.3s"
          />
          
          <SkillCard
            icon={
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
              >
                <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6" />
                <line x1="2" y1="20" x2="2" y2="20" />
              </svg>
            }
            title="IoT & Embedded Systems"
            description="Combining hardware and software skills to create smart, connected devices and systems."
            skills={["Arduino", "Raspberry Pi", "Sensors", "IoT Protocols", "Embedded C"]}
            delay="0.4s"
          />
          
          <SkillCard
            icon={
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
              >
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
            }
            title="Problem Solving"
            description="Analytical thinking and creative problem-solving across both electrical and software domains."
            skills={["Debugging", "Optimization", "System Architecture", "Testing", "Documentation"]}
            delay="0.7s"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
