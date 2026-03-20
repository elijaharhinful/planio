import React from 'react';
import { motion } from 'framer-motion';
const services = [
{
  title: 'Weddings',
  description:
  'A comprehensive service designed for couples who want their entire celebration expertly managed.',
  image: 'https://images.unsplash.com/photo-1478146059778-26028b07395a?w=800',
  link: 'Explore'
},
{
  title: 'Event Design',
  description:
  'We translate your aesthetic vision into a cohesive, breathtaking reality from concept to execution.',
  image: 'https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=800',
  link: 'Explore'
},
{
  title: 'Branding',
  description:
  'Custom invitations, signage, and paper goods that set the perfect tone for your special day.',
  image: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?w=800',
  link: 'Explore'
}];

export function ServicesSection() {
  return (
    <section className="py-24 px-12 max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {services.map((service, index) =>
        <motion.div
          key={service.title}
          initial={{
            opacity: 0,
            y: 40
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
            duration: 0.8,
            delay: index * 0.2
          }}
          className="flex flex-col items-center text-center group cursor-pointer">
          
            <div className="w-full h-[500px] mb-8 overflow-hidden relative">
              <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            
            </div>
            <h3 className="text-3xl mb-4">{service.title}</h3>
            <p className="text-brand-gray leading-relaxed mb-6 px-4">
              {service.description}
            </p>
            <a
            href={`#${service.title.toLowerCase().replace(' ', '-')}`}
            className="text-xs font-bold tracking-[0.2em] uppercase text-brand-dark hover:text-brand-accent transition-colors flex items-center">
            
              {service.link}
              <span className="ml-2 w-8 h-[1px] bg-current relative">
                <span className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 border-t border-r border-current rotate-45"></span>
              </span>
            </a>
          </motion.div>
        )}
      </div>
    </section>);

}