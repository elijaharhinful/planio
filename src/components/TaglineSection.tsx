import React from 'react';
import { motion } from 'framer-motion';

export function TaglineSection() {
  return (
    <section className="pt-8 pb-32 px-6 md:px-12 w-full bg-brand-cream relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        {/* Icon */}
        <div className="mb-8 flex justify-center">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            className="text-brand-accent opacity-60"
          >
            <path
              d="M15 0C15 8.28427 8.28427 15 0 15C8.28427 15 15 21.7157 15 30C15 21.7157 21.7157 15 30 15C21.7157 15 15 8.28427 15 0Z"
              fill="currentColor"
            />
          </svg>
        </div>

        {/* Headline */}
        <h2 className="text-3xl md:text-4xl leading-relaxed tracking-wide uppercase text-brand-dark mb-8 text-balance">
          Every Detail
          Becomes Part of the Experience
        </h2>

        {/* Script text */}
        <div className="font-script text-5xl md:text-6xl text-brand-accent mb-10 transform -rotate-2">
          Your Event, Your Identity
        </div>

        {/* Paragraph */}
        <p className="max-w-2xl mx-auto text-brand-gray leading-loose">
          We are a full-service event branding studio specializing in visual identity,
          custom event design, and media coverage. From monograms and stationery to
          backdrops, photography, and digital experiences, we craft cohesive event
          stories that are not only seen, but remembered.
        </p>

        {/* Icon */}
        <div className="mt-8 flex justify-center">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            className="text-brand-accent opacity-60"
          >
            <path
              d="M15 0C15 8.28427 8.28427 15 0 15C8.28427 15 15 21.7157 15 30C15 21.7157 21.7157 15 30 15C21.7157 15 15 8.28427 15 0Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}