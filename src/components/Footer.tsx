import React from 'react';
export function Footer() {
  return (
    <footer className="bg-brand-cream pt-24 pb-12 px-12 border-t border-brand-dark/5">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20 text-center md:text-left">
          {/* Left Column */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-xs font-bold tracking-widest uppercase text-brand-dark mb-8">
              Contact
            </h4>
            <a
              href="mailto:hello@lovio.com"
              className="text-brand-gray hover:text-brand-accent transition-colors mb-4">
              
              hello@lovio.com
            </a>
            <p className="text-brand-gray mb-4">+1 (555) 123-4567</p>
            <p className="text-brand-gray">New York, NY</p>
          </div>

          {/* Center Column - Logo */}
          <div className="flex flex-col items-center justify-start">
            <a
              href="#"
              className="font-serif text-5xl tracking-widest text-brand-dark uppercase mb-6">
              
              Lovio
            </a>
            <p className="text-brand-gray text-center max-w-xs">
              Curating unforgettable moments and exquisite celebrations
              worldwide.
            </p>
          </div>

          {/* Right Column */}
          <div className="flex flex-col items-center md:items-end">
            <h4 className="text-xs font-bold tracking-widest uppercase text-brand-dark mb-8">
              Quick Links
            </h4>
            <a
              href="#about"
              className="text-brand-gray hover:text-brand-accent transition-colors mb-4">
              
              About Us
            </a>
            <a
              href="#portfolio"
              className="text-brand-gray hover:text-brand-accent transition-colors mb-4">
              
              Portfolio
            </a>
            <a
              href="#services"
              className="text-brand-gray hover:text-brand-accent transition-colors">
              
              Services
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-brand-dark/10">
          <p className="text-xs text-brand-gray tracking-wider mb-4 md:mb-0">
            © {new Date().getFullYear()} LOVIO. ALL RIGHTS RESERVED.
          </p>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-brand-gray hover:text-brand-accent transition-colors text-xs tracking-wider uppercase">
              
              Instagram
            </a>
            <a
              href="#"
              className="text-brand-gray hover:text-brand-accent transition-colors text-xs tracking-wider uppercase">
              
              Pinterest
            </a>
            <a
              href="#"
              className="text-brand-gray hover:text-brand-accent transition-colors text-xs tracking-wider uppercase">
              
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>);

}