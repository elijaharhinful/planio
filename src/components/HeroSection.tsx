import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
export function HeroSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <section
      ref={ref}
      className="relative w-full px-5 md:px-[20px] pt-48 pb-0 min-h-[900px] flex items-center justify-center overflow-hidden"
    >
      {/* Image Layout */}
      <div className="absolute inset-0 px-[40px]">
        <div className="grid grid-cols-3 gap-14 h-[550px] mt-28">

          <motion.img
            style={{ scale }}
            src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800"
            className="w-full h-full object-cover"
          />

          <motion.img
            style={{ scale }}
            src="https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800"
            className="w-full h-full object-cover"
          />

          <motion.img
            style={{ scale }}
            src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800"
            className="w-full h-full object-cover"
          />

        </div>
      </div>

      {/* Content Box */}
      <div className="relative z-10 bg-brand-white mt-32 px-20 py-14 max-w-3xl text-center shadow-2xl shadow-brand-dark/5">

        <p className="text-xs tracking-[0.2em] uppercase text-brand-accent mb-6">
          Event Branding Studio
        </p>

        <h1 className="text-6xl md:text-6xl leading-[1.1] mb-10 text-balance">
          Where Events
          Become Brands
        </h1>

        <a
          href="#contact"
          className="relative inline-block text-xs font-bold tracking-[0.2em] uppercase text-brand-dark group hover:text-brand-accent"
        >
          Book A Consultation

          <span className="absolute left-0 -bottom-1 w-full h-[1px] bg-brand-dark transition-all duration-100 group-hover:bg-brand-accent group-hover:shadow-[0_2px_8px_rgba(0,0,0,0.9)]"></span>
        </a>
      </div>
    </section>
  );
}