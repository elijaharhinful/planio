import React from 'react';
import { motion } from 'framer-motion';
export function HeroSection() {
  return (
    <section className="relative w-full max-w-[1440px] mx-auto pt-32 pb-24 px-12 min-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background Image Grid */}
      <div className="absolute inset-0 w-full h-full flex justify-center items-start pt-32 opacity-90 pointer-events-none">
        <div className="relative w-[1200px] h-[700px]">
          {/* Left Top */}
          <motion.img
            initial={{
              opacity: 0,
              scale: 0.95
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 1,
              delay: 0.2
            }}
            src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800"
            alt="Bride portrait"
            className="absolute top-0 left-0 w-[300px] h-[400px] object-cover" />
          
          {/* Left Bottom */}
          <motion.img
            initial={{
              opacity: 0,
              scale: 0.95
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 1,
              delay: 0.3
            }}
            src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800"
            alt="Wedding flowers"
            className="absolute top-[420px] left-[100px] w-[250px] h-[300px] object-cover" />
          
          {/* Center Top */}
          <motion.img
            initial={{
              opacity: 0,
              scale: 0.95
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 1,
              delay: 0.4
            }}
            src="https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800"
            alt="Wedding couple"
            className="absolute top-[-40px] left-[400px] w-[400px] h-[300px] object-cover" />
          
          {/* Right Top */}
          <motion.img
            initial={{
              opacity: 0,
              scale: 0.95
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 1,
              delay: 0.5
            }}
            src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800"
            alt="Wedding venue"
            className="absolute top-[20px] right-0 w-[320px] h-[450px] object-cover" />
          
          {/* Right Bottom */}
          <motion.img
            initial={{
              opacity: 0,
              scale: 0.95
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 1,
              delay: 0.6
            }}
            src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800"
            alt="Wedding ceremony"
            className="absolute top-[500px] right-[150px] w-[280px] h-[200px] object-cover" />
          
        </div>
      </div>

      {/* Center White Box */}
      <motion.div
        initial={{
          opacity: 0,
          y: 40
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{
          duration: 1,
          delay: 0.8
        }}
        className="relative z-10 bg-brand-white px-16 py-20 max-w-2xl text-center shadow-2xl shadow-brand-dark/5">
        
        <div className="mb-6 flex justify-center">
          <svg
            width="40"
            height="12"
            viewBox="0 0 40 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            
            <path d="M20 0L23.5 6L20 12L16.5 6L20 0Z" fill="#C4956A" />
            <path
              d="M10 3L12.5 6L10 9L7.5 6L10 3Z"
              fill="#C4956A"
              opacity="0.5" />
            
            <path
              d="M30 3L32.5 6L30 9L27.5 6L30 3Z"
              fill="#C4956A"
              opacity="0.5" />
            
          </svg>
        </div>
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-brand-accent mb-6">
          Wedding Planner
        </p>
        <h1 className="text-6xl md:text-7xl leading-[1.1] mb-10 text-balance">
          Luxury Weddings & Parties
        </h1>
        <a
          href="#explore"
          className="inline-flex items-center text-xs font-bold tracking-[0.2em] uppercase text-brand-dark hover:text-brand-accent transition-colors group">
          
          Explore
          <span className="ml-4 w-12 h-[1px] bg-brand-dark group-hover:bg-brand-accent transition-colors relative">
            <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t border-r border-current rotate-45"></span>
          </span>
        </a>
      </motion.div>
    </section>);

}