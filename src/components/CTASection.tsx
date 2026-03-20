import React from 'react';
import { motion } from 'framer-motion';
export function CTASection() {
  return (
    <section className="py-32 px-12 max-w-[1440px] mx-auto">
      <div className="bg-brand-white flex flex-col lg:flex-row items-stretch shadow-xl shadow-brand-dark/5">
        {/* Left Side: Text & Form */}
        <div className="w-full lg:w-1/2 p-16 lg:p-24 flex flex-col justify-center">
          <motion.div
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
            }}>
            
            <div className="mb-6">
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
              Inquire
            </p>
            <h2 className="text-5xl leading-[1.2] mb-8 text-balance">
              Extraordinary events begin here
            </h2>
            <p className="text-brand-gray leading-loose mb-10 max-w-md">
              We accept a limited number of commissions each year to ensure the
              highest level of service for our clients. Reach out to check our
              availability.
            </p>

            <form
              className="flex flex-col sm:flex-row gap-4 max-w-md"
              onSubmit={(e) => e.preventDefault()}>
              
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 border-b border-brand-gray/30 bg-transparent py-3 px-2 text-brand-dark placeholder:text-brand-gray/50 focus:outline-none focus:border-brand-accent transition-colors" />
              
              <button
                type="submit"
                className="border border-brand-dark px-8 py-3 text-xs font-bold tracking-[0.2em] uppercase text-brand-dark hover:bg-brand-dark hover:text-brand-white transition-colors whitespace-nowrap">
                
                Get in touch
              </button>
            </form>
          </motion.div>
        </div>

        {/* Right Side: Image */}
        <div className="w-full lg:w-1/2 min-h-[600px] relative overflow-hidden">
          <motion.img
            initial={{
              opacity: 0,
              scale: 1.05
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 1.2
            }}
            src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800"
            alt="Bride looking elegant"
            className="absolute inset-0 w-full h-full object-cover" />
          
        </div>
      </div>
    </section>);

}