
import React, { useEffect, useRef, useState } from 'react';
import { toast } from "@/components/ui/use-toast";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  
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
    if (formRef.current) observer.observe(formRef.current);
    
    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (subheadingRef.current) observer.unobserve(subheadingRef.current);
      if (formRef.current) observer.unobserve(formRef.current);
    };
  }, []);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create mailto link
    const subject = `Portfolio Contact: ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`;
    const mailtoLink = `mailto:tyagimaithili918@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show toast and reset form after a brief delay
    setTimeout(() => {
      toast({
        title: "Email client opened!",
        description: "Please send the email from your mail client to complete your message.",
      });
      
      setName('');
      setEmail('');
      setMessage('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 
          ref={headingRef} 
          className="reveal section-heading text-center"
        >
          Get In Touch
        </h2>
        <p 
          ref={subheadingRef} 
          className="reveal section-subheading text-center mx-auto max-w-2xl"
          style={{ animationDelay: '0.2s' }}
        >
          Have a question or want to work together? Feel free to reach out.
        </p>
        
        <div className="max-w-md mx-auto mt-12">
          <form 
            ref={formRef}
            onSubmit={handleSubmit} 
            className="reveal space-y-6 bg-card p-8 rounded-xl border border-border shadow-sm"
            style={{ animationDelay: '0.4s' }}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={4}
                className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors resize-none"
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-11 flex items-center justify-center rounded-md bg-primary text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 disabled:opacity-70"
            >
              {isSubmitting ? (
                <>
                  <svg 
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-primary-foreground" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24"
                  >
                    <circle 
                      className="opacity-25" 
                      cx="12" 
                      cy="12" 
                      r="10" 
                      stroke="currentColor" 
                      strokeWidth="4"
                    />
                    <path 
                      className="opacity-75" 
                      fill="currentColor" 
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
          
          <div className="mt-8 text-center text-foreground/60 text-sm space-y-2">
            <p>
              You can also reach me at{" "}
              <a 
                href="mailto:tyagimaithili918@gmail.com" 
                className="text-primary hover:underline"
              >
                tyagimaithili918@gmail.com
              </a>
            </p>
            <p>
              Or call me at{" "}
              <a 
                href="tel:+916281848223" 
                className="text-primary hover:underline"
              >
                +91 6281848223
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
