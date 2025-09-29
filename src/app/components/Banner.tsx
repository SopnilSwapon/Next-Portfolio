"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Navbar from "./Navbar";

const Banner: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
  ];

  return (
    <section>
      <Navbar />
      <div className="left-[calc(50%-11rem)] mt-16 h-[30rem] w-[22rem] overflow-hidden rounded-t-full pt-6 bg-gradient-to-b from-[var(--color-primary)] to-transparent">
        <Image
          src="https://z-p3-scontent.fdac12-1.fna.fbcdn.net/v/t39.30808-6/480445048_1923715631492143_3577327119025195517_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=n9wSBijAL_kQ7kNvwFRz3EB&_nc_oc=AdmmnZh7sJZ1yPaKBzIvsJGTeljd1RYyjMeXC8-JeNACuaJtJLMAXnl0vXITVqSDZrs&_nc_zt=23&_nc_ht=z-p3-scontent.fdac12-1.fna&_nc_gid=hlKZ1xLTnT8tWblUoiXHEw&oh=00_AfZTCbEvQrGyP39b_s7jexmUOTmbewH8yPJ6osY0ICEycA&oe=68DEB01A"
          alt="my-photo"
          width={400}
          height={400}
        />
      </div>
      <div>
        {/* Animated background elements */}
        <div>
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </div>

        {/* Grid pattern overlay */}

        <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col items-center justify-center min-h-screen text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            {/* Greeting */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-purple-300 text-sm font-medium border border-white/20">
                👋 Welcome to my portfolio
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent leading-tight"
            >
              Frontend
              <br />
              <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">
                Developer
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Crafting exceptional digital experiences with modern web
              technologies. Currently building innovative solutions at a
              software company since July 2024.
            </motion.p>

            {/* Skills badges */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white font-medium border border-white/20 hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
