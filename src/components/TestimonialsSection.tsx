import React from 'react';
import { motion } from 'framer-motion';
export function TestimonialsSection() {
  return (
    <section className="py-32 px-12 max-w-[1440px] mx-auto bg-brand-white my-24">
      <motion.div
        initial={{
          opacity: 0,
          y: 30
        }}
        whileInView={{
          opacity: 1,
          y: 0
        }}
        viewport={{
          once: true
        }}
        transition={{
          duration: 0.8
        }}
        className="max-w-4xl mx-auto text-center">
        
        <div className="mb-6 flex justify-center">
          <svg
            width="40"
            height="12"
            viewBox="0 0 40 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            
            <path d="M20 0L23.5 6L20 12L16.5 6L20 0Z" fill="#C4956A" />
          </svg>
        </div>
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-brand-accent mb-6">
          Testimonials
        </p>
        <h2 className="text-5xl mb-16">What our clients say</h2>

        <div className="relative px-16">
          {/* Decorative quotes or arrows could go here */}
          <button className="absolute left-0 top-1/2 -translate-y-1/2 text-brand-gray hover:text-brand-accent transition-colors">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round">
              
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <div className="mb-10 flex justify-center">
            <div className="w-16 h-16 rounded-full bg-brand-cream flex items-center justify-center text-brand-accent">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor">
                
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
          </div>

          <p className="text-2xl md:text-3xl font-serif italic leading-relaxed text-brand-dark mb-10">
            "They took our scattered ideas and turned them into a cohesive,
            breathtaking reality. Every guest said it was the most beautiful
            wedding they had ever attended. We couldn't have asked for a better
            team."
          </p>

          <div className="font-script text-3xl text-brand-accent mb-2">
            Sarah & James
          </div>
          <p className="text-xs tracking-widest uppercase text-brand-gray">
            Lake Como, Italy
          </p>

          <button className="absolute right-0 top-1/2 -translate-y-1/2 text-brand-gray hover:text-brand-accent transition-colors">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round">
              
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </motion.div>
    </section>);

}