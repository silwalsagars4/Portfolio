import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-6 bg-background relative">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-xl font-display font-bold text-white">
          SAGAR<span className="text-primary">.</span>
        </div>
        
        <div className="text-muted text-sm">
          © {currentYear} All Rights Reserved to <span className="text-white font-medium">Sagar Silwal</span>.
        </div>

        <div className="flex gap-6 text-sm text-muted">
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
          <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;