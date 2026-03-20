import React from 'react';
import { motion } from 'framer-motion';
export function StorySection() {
  return (
    <section className="py-32 px-12 max-w-[1440px] mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-20">
        {/* Left Side: Images */}
        <div className="w-full lg:w-1/2 relative min-h-[700px]">
          <motion.img
            initial={{
              opacity: 0,
              x: -30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.8
            }}
            src="https://images.unsplash.com/photo-1544078751-58fee2d8a03b?w=800"
            alt="Bride smiling"
            className="absolute top-0 left-0 w-[80%] h-[600px] object-cover z-10" />
          
          <motion.img
            initial={{
              opacity: 0,
              x: 30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.8,
              delay: 0.2
            }}
            src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800"
            alt="Floral details"
            className="absolute bottom-0 right-0 w-[50%] h-[400px] object-cover z-20 shadow-2xl shadow-brand-cream" />
          
        </div>

        {/* Right Side: Text */}
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
            duration: 0.8,
            delay: 0.4
          }}
          className="w-full lg:w-1/2 max-w-lg pl-10">
          
          <div className="mb-6">
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
              
            </svg>
          </div>
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-brand-accent mb-6">
            Our Story
          </p>
          <h2 className="text-5xl leading-[1.2] mb-8 text-balance">
            Weave story into every thread of your event.
          </h2>
          <p className="text-brand-gray leading-loose mb-10">
            We create unique, immersive environments that beautifully translate
            your personal narrative into a breathtaking visual experience. Every
            detail is considered, every moment thoughtfully designed.
          </p>
          <a
            href="#contact"
            className="inline-block border border-brand-dark px-10 py-4 text-xs font-bold tracking-[0.2em] uppercase text-brand-dark hover:bg-brand-dark hover:text-brand-white transition-colors">
            
            Get in touch
          </a>
        </motion.div>
      </div>
    </section>);

}