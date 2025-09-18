
import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const AiAvatar = () => {
  const [showPopover, setShowPopover] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setShowPopover(!showPopover)}
        className="relative overflow-hidden rounded-full border-2 border-primary p-0.5 transition-all hover:scale-105"
        aria-label="Show AI assistant"
      >
        <Avatar className="h-10 w-10">
          <AvatarImage 
            src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=150&h=150&fit=crop" 
            alt="AI Assistant" 
          />
          <AvatarFallback>AI</AvatarFallback>
        </Avatar>
        <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-500 ring-2 ring-background"></span>
      </button>
      
      {showPopover && (
        <div className="absolute bottom-14 right-0 w-64 rounded-lg border border-border bg-card p-4 shadow-lg">
          <div className="flex items-start gap-3">
            <Avatar className="h-8 w-8">
              <AvatarImage 
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=150&h=150&fit=crop" 
                alt="AI Assistant" 
              />
              <AvatarFallback>AI</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h4 className="text-sm font-medium">AI Assistant</h4>
              <p className="text-xs text-foreground/60">Hello! I'm Maithili's AI assistant. How can I help you today?</p>
            </div>
          </div>
          <button 
            className="mt-3 w-full rounded-md border border-border bg-secondary py-1.5 text-xs font-medium hover:bg-secondary/80"
            onClick={() => setShowPopover(false)}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default AiAvatar;
