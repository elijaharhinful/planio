import React from 'react';
import { motion } from 'framer-motion';
const portfolioItems = [
{
  name: 'Jennifer & Michael',
  type: 'Classic Estate Wedding',
  image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800'
},
{
  name: 'Rebecca & David',
  type: 'Coastal Celebration',
  image: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?w=800'
},
{
  name: 'Anna & Cameron',
  type: 'Intimate Garden Party',
  image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800'
},
{
  name: 'Lisa & Taylor',
  type: 'Modern City Soirée',
  image: 'https://images.unsplash.com/photo-1550005809-91ad75fb315f?w=800'
}];

export function PortfolioSection() {
  return (
    <section className="pb-32 px-12 max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {portfolioItems.map((item, index) =>
        <motion.div
          key={item.name}
          initial={{
            opacity: 0,
            y: 40
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
            delay: index * 0.15
          }}
          className="group cursor-pointer">
          
            <div className="w-full h-[450px] mb-6 overflow-hidden">
              <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            
            </div>
            <div className="text-center">
              <h3 className="text-2xl mb-2 group-hover:text-brand-accent transition-colors">
                {item.name}
              </h3>
              <p className="text-xs font-bold tracking-widest uppercase text-brand-gray">
                {item.type}
              </p>
            </div>
          </motion.div>
        )}
      </div>

      <div className="flex justify-center">
        <a
          href="#portfolio"
          className="inline-block border border-brand-dark px-10 py-4 text-xs font-bold tracking-[0.2em] uppercase text-brand-dark hover:bg-brand-dark hover:text-brand-white transition-colors">
          
          View All Work
        </a>
      </div>
    </section>);

}