
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });

      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 py-4",
        scrolled 
          ? "bg-background/80 backdrop-blur-lg shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <a 
          href="#home" 
          className="font-display text-xl font-bold tracking-tight"
        >
          Maithili<span className="text-primary">.</span>
        </a>
        
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-2">
            <li>
              <a 
                href="#home" 
                className={cn("nav-link", activeSection === 'home' && "active")}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className={cn("nav-link", activeSection === 'about' && "active")}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#skills" 
                className={cn("nav-link", activeSection === 'skills' && "active")}
              >
                Skills
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                className={cn("nav-link", activeSection === 'projects' && "active")}
              >
                Projects
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className={cn("nav-link", activeSection === 'contact' && "active")}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        
        <button className="block md:hidden" aria-label="Menu">
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
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
