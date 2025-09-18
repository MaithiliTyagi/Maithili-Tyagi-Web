
import React, { useEffect, useRef } from 'react';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

const projects: Project[] = [
  {
    title: "IoT Based Home Automation",
    description: "Voice-Controlled Home Automation Prototype made with Alexa for smart home control and automation.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64",
    tags: ["IoT", "Alexa", "Smart Home", "Voice Control"],
    link: "https://github.com/MaithiliTyagi"
  },
  {
    title: "Weather App",
    description: "Python-Based Weather App that provides real-time weather information and forecasts.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b",
    tags: ["Python", "Weather API", "GUI"],
    link: "https://github.com/MaithiliTyagi"
  },
  {
    title: "Hangman Game",
    description: "Classic Hangman Game implemented in Python with interactive gameplay and word guessing mechanics.",
    image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5",
    tags: ["Python", "Game Development", "Console Game"],
    link: "https://github.com/MaithiliTyagi/Hangman"
  },
  {
    title: "Stock Market Predictor",
    description: "Python-based application for stock market analysis and prediction using data science techniques.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3",
    tags: ["Python", "Data Science", "Financial Analysis"],
    link: "https://stockmarketpredictor1301.streamlit.app/"
  },
  {
    title: "Tic Tac Toe Game",
    description: "Interactive Tic Tac Toe game built with modern web technologies for engaging gameplay.",
    image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5",
    tags: ["JavaScript", "React", "Game Development", "Web App"],
    link: "https://tic-tac-toe-alpha-nine-46.vercel.app"
  },
  {
    title: "Dots and Boxes Game",
    description: "Classic Dots and Boxes strategy game implemented for web browsers with interactive gameplay.",
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256",
    tags: ["JavaScript", "Game Development", "Strategy Game", "Web App"],
    link: "https://dotsand-boxes.vercel.app"
  },
  {
    title: "My Portfolio",
    description: "Personal portfolio website showcasing my projects, skills, and professional journey.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    tags: ["React", "TypeScript", "Portfolio", "Web Development"],
    link: "https://myportfolio.vercel.app"
  }
];

const ProjectCard = ({ project, delay }: { project: Project; delay: string }) => {
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
      className="reveal overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
      style={{ animationDelay: delay }}
    >
      <div className="relative aspect-video overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
        <img 
          src={project.image} 
          alt={project.title} 
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-foreground/70 text-sm mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span key={index} className="skill-tag text-xs">
              {tag}
            </span>
          ))}
        </div>
        <a 
          href={project.link} 
          className="inline-flex items-center text-sm font-medium text-primary"
        >
          View Project
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="ml-1"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
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
    <section id="projects" className="py-20 px-6 bg-secondary/50">
      <div className="container mx-auto">
        <h2 
          ref={headingRef} 
          className="reveal section-heading text-center"
        >
          Featured Projects
        </h2>
        <p 
          ref={subheadingRef} 
          className="reveal section-subheading text-center mx-auto max-w-2xl"
          style={{ animationDelay: '0.2s' }}
        >
          Showcasing my work across web development and electrical engineering
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project} 
              delay={`${0.2 + index * 0.1}s`} 
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
