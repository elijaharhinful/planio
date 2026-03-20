import React from 'react';
import { motion } from 'framer-motion';
const instaImages = [
'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400',
'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400',
'https://images.unsplash.com/photo-1478146059778-26028b07395a?w=400',
'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400',
'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=400',
'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=400',
'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=400',
'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400'];

export function InstagramSection() {
  return (
    <section className="pt-24 pb-0 w-full overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="font-script text-5xl text-brand-dark">Instagram</h2>
      </div>

      <div className="flex w-full">
        {instaImages.map((src, index) =>
        <motion.a
          key={index}
          href="#instagram"
          initial={{
            opacity: 0
          }}
          whileInView={{
            opacity: 1
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.5,
            delay: index * 0.1
          }}
          className="relative block w-1/4 md:w-1/8 aspect-square group overflow-hidden">
          
            <img
            src={src}
            alt={`Instagram post ${index + 1}`}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          
            <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/30 transition-colors duration-300 flex items-center justify-center">
              <svg
              className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-8 h-8"
              viewBox="0 0 24 24"
              fill="currentColor">
              
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </div>
          </motion.a>
        )}
      </div>
    </section>);

}