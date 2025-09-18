"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Menu, X, Code2, ExternalLink } from 'lucide-react';



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const logoVariants: Variants = {
    initial: { opacity: 0, x: -20 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  const navItemVariants: Variants = {
    initial: { opacity: 0, y: -10 },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5, 
        delay: 0.1 * i,
        ease: "easeOut"
      }
    }),
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  };

  const mobileMenuVariants: Variants= {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const staggerContainer = {
    open: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      }
    }
  };

  const mobileItemVariants: Variants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    closed: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.4,
        ease: "easeIn"
      }
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4"
    >
      <nav
        className={`
          relative max-w-7xl mx-auto rounded-2xl transition-all duration-500 ease-out
          ${scrolled 
            ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg shadow-black/5 border border-gray-200/20 dark:border-gray-700/20' 
            : 'bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border border-gray-200/10 dark:border-gray-700/10'
          }
        `}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <motion.div
            variants={logoVariants}
            initial="initial"
            animate="animate"
            className="flex items-center space-x-2"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <motion.div
                className="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 opacity-0"
                whileHover={{ opacity: 0.3 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
            <Link href="/" className="group">
              <motion.div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                  Sapon Dev
                </span>
                <motion.div
                  className="h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                />
              </motion.div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                variants={navItemVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                custom={index}
                className="relative group"
              >
                <Link
                  href={item.href}
                  className="px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 font-medium transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  aria-label={`Navigate to ${item.name} section`}
                >
                  {item.name}
                </Link>
                <motion.div
                  className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 origin-center"
                  whileHover={{
                    width: "80%",
                    x: "-50%",
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
            
            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="#contact"
                className="ml-4 px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/40 flex items-center space-x-2"
                aria-label="Get in touch"
              >
                <span>Let&apos;s Talk</span>
                <ExternalLink className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors duration-200"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="absolute top-full left-0 right-0 mt-2 mx-4 p-6 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200/20 dark:border-gray-700/20 md:hidden"
            >
              <motion.div
                variants={staggerContainer}
                initial="closed"
                animate="open"
                exit="closed"
                className="space-y-4"
              >
                {navItems.map((item) => (
                  <motion.div key={item.name} variants={mobileItemVariants}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                      aria-label={`Navigate to ${item.name} section`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div variants={mobileItemVariants} className="pt-4 border-t border-gray-200/30 dark:border-gray-700/30">
                  <Link
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="block w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl text-center hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                    aria-label="Get in touch"
                  >
                    Let&apos;s Talk
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Navbar;