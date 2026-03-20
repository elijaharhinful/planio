import React from 'react';
import { motion } from 'framer-motion';
export function TaglineSection() {
  return (
    <section className="py-32 px-12 max-w-[1440px] mx-auto bg-brand-cream relative">
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
          once: true,
          margin: '-100px'
        }}
        transition={{
          duration: 0.8
        }}
        className="max-w-4xl mx-auto text-center">
        
        <div className="mb-8 flex justify-center">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-brand-accent opacity-60">
            
            <path
              d="M15 0C15 8.28427 8.28427 15 0 15C8.28427 15 15 21.7157 15 30C15 21.7157 21.7157 15 30 15C21.7157 15 15 8.28427 15 0Z"
              fill="currentColor" />
            
          </svg>
        </div>

        <h2 className="text-3xl md:text-4xl leading-relaxed tracking-wide uppercase text-brand-dark mb-8 text-balance">
          Your wedding should be utterly unforgettable, happy, romantic,
          exquisitely beautiful and entirely you.
        </h2>

        <div className="font-script text-5xl md:text-6xl text-brand-accent mb-10 transform -rotate-2">
          Your Wedding
        </div>

        <p className="max-w-2xl mx-auto text-brand-gray leading-loose">
          We are a boutique wedding planning and design studio specializing in
          creating extraordinary, multi-day celebrations for a global clientele.
          We believe in the beauty of your unique story.
        </p>
      </motion.div>
    </section>);

}