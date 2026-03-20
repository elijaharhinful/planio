import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TaglineSection } from './components/TaglineSection';
import { ServicesSection } from './components/ServicesSection';
import { StorySection } from './components/StorySection';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { EventDesignSection } from './components/EventDesignSection';
import { PortfolioSection } from './components/PortfolioSection';
import { CTASection } from './components/CTASection';
import { InstagramSection } from './components/InstagramSection';
import { Footer } from './components/Footer';
export function App() {
  return (
    <div className="min-h-screen bg-brand-cream font-sans text-brand-gray selection:bg-brand-accent selection:text-white">
      <Navbar />
      <main>
        <HeroSection />
        <TaglineSection />
        <ServicesSection />
        <StorySection />
        <GallerySection />
        <TestimonialsSection />
        <EventDesignSection />
        <PortfolioSection />
        <CTASection />
        <InstagramSection />
      </main>
      <Footer />
    </div>);

}