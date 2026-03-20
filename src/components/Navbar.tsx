import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
const leftLinks = [
{
  label: 'Home',
  href: '#home'
},
{
  label: 'About',
  href: '#about'
},
{
  label: 'Services',
  href: '#services'
},
{
  label: 'Portfolio',
  href: '#portfolio'
}];

const rightLinks = [
{
  label: 'Blog',
  href: '#blog'
},
{
  label: 'Shop',
  href: '#shop'
},
{
  label: 'Pages',
  href: '#pages'
},
{
  label: 'Contact',
  href: '#contact'
}];

const allLinks = [...leftLinks, ...rightLinks];
const linkClass = 'hover:text-brand-accent transition-colors duration-200';
export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <motion.nav
      initial={{
        opacity: 0,
        y: -20
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      transition={{
        duration: 0.8
      }}
      className="fixed top-0 left-0 right-0 z-50 bg-brand-cream/90 backdrop-blur-md border-b border-brand-dark/5">
      
      {/* ── Desktop & Mobile Top Bar ── */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-20 lg:h-24 flex items-center justify-between">
        {/* Left Links — desktop only */}
        <div className="hidden lg:flex items-center space-x-8 text-xs font-bold tracking-widest uppercase text-brand-dark w-1/3">
          {leftLinks.map((l) =>
          <a key={l.href} href={l.href} className={linkClass}>
              {l.label}
            </a>
          )}
        </div>

        {/* Hamburger — mobile only */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="lg:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-[5px]">
          
          <motion.span
            animate={
            open ?
            {
              rotate: 45,
              y: 7
            } :
            {
              rotate: 0,
              y: 0
            }
            }
            transition={{
              duration: 0.3
            }}
            className="block w-6 h-[1.5px] bg-brand-dark origin-center" />
          
          <motion.span
            animate={
            open ?
            {
              opacity: 0,
              x: -8
            } :
            {
              opacity: 1,
              x: 0
            }
            }
            transition={{
              duration: 0.2
            }}
            className="block w-6 h-[1.5px] bg-brand-dark" />
          
          <motion.span
            animate={
            open ?
            {
              rotate: -45,
              y: -7
            } :
            {
              rotate: 0,
              y: 0
            }
            }
            transition={{
              duration: 0.3
            }}
            className="block w-6 h-[1.5px] bg-brand-dark origin-center" />
          
        </button>

        {/* Center Logo — always visible */}
        <div className="lg:w-1/3 flex justify-center">
          <a
            href="#"
            className="font-serif text-3xl lg:text-4xl tracking-widest text-brand-dark uppercase">
            
            Lovio
          </a>
        </div>

        {/* Right Links — desktop only */}
        <div className="hidden lg:flex items-center justify-end space-x-8 text-xs font-bold tracking-widest uppercase text-brand-dark w-1/3">
          {rightLinks.map((l) =>
          <a key={l.href} href={l.href} className={linkClass}>
              {l.label}
            </a>
          )}
        </div>

        {/* Spacer on mobile to balance the hamburger */}
        <div className="w-8 lg:hidden" />
      </div>

      {/* ── Mobile Dropdown ── */}
      <AnimatePresence>
        {open &&
        <motion.div
          key="mobile-menu"
          initial={{
            height: 0,
            opacity: 0
          }}
          animate={{
            height: 'auto',
            opacity: 1
          }}
          exit={{
            height: 0,
            opacity: 0
          }}
          transition={{
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="lg:hidden overflow-hidden bg-brand-cream/95 backdrop-blur-md border-t border-brand-dark/5">
          
            <div className="flex flex-col items-center py-8 space-y-6">
              {allLinks.map((l, i) =>
            <motion.a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              initial={{
                opacity: 0,
                y: 10
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                delay: 0.05 * i,
                duration: 0.3
              }}
              className="text-sm font-bold tracking-[0.2em] uppercase text-brand-dark hover:text-brand-accent transition-colors">
              
                  {l.label}
                </motion.a>
            )}
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </motion.nav>);

}