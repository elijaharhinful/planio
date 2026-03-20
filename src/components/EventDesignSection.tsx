import React from 'react';
import { motion } from 'framer-motion';
export function EventDesignSection() {
  return (
    <section className="pt-32 pb-16 px-12 max-w-[1440px] mx-auto text-center">
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
        }}>
        
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
        <h2 className="text-5xl md:text-6xl leading-[1.2] max-w-3xl mx-auto text-balance">
          Event design to make your heart skip a beat
        </h2>
      </motion.div>
    </section>);

}