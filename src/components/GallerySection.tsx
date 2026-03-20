import React from 'react';
import { motion } from 'framer-motion';
const galleryImages = [
{
  src: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?w=800',
  className: 'col-span-1 row-span-2 h-[600px]'
},
{
  src: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800',
  className: 'col-span-1 row-span-1 h-[285px]'
},
{
  src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800',
  className: 'col-span-1 row-span-2 h-[600px]'
},
{
  src: 'https://images.unsplash.com/photo-1470290378698-263fa7ca60ab?w=800',
  className: 'col-span-1 row-span-1 h-[285px]'
},
{
  src: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=800',
  className: 'col-span-1 row-span-1 h-[285px]'
},
{
  src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800',
  className: 'col-span-1 row-span-1 h-[285px]'
}];

export function GallerySection() {
  return (
    <section className="py-24 px-12 max-w-[1440px] mx-auto">
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
        className="text-center mb-16">
        
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
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-brand-accent mb-4">
          Portfolio
        </p>
        <h2 className="text-5xl mb-6">Your vision made real</h2>
        <p className="text-brand-gray max-w-2xl mx-auto leading-loose">
          From grand ballrooms to intimate coastal ceremonies, we transform
          spaces into reflections of your unique love story.
        </p>
      </motion.div>

      <div className="grid grid-cols-4 gap-6 auto-rows-[285px]">
        {galleryImages.map((img, index) =>
        <motion.div
          key={index}
          initial={{
            opacity: 0,
            scale: 0.95
          }}
          whileInView={{
            opacity: 1,
            scale: 1
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.6,
            delay: index * 0.1
          }}
          className={`${img.className} overflow-hidden group`}>
          
            <img
            src={img.src}
            alt={`Gallery image ${index + 1}`}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          
          </motion.div>
        )}
      </div>
    </section>);

}