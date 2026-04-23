import React from 'react'
import { motion } from 'framer-motion'
import { Download, ArrowDown } from 'lucide-react'

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan/20 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-neon-blue/20 rounded-full blur-3xl opacity-30"></div>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="text-center max-w-4xl mx-auto"
      >
        {/* Profile Photo */}
        <motion.div
          variants={item}
          className="mb-12 flex justify-center"
        >
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-cyan/50 shadow-lg shadow-cyan/50 hover:shadow-cyan hover:shadow-2xl transition-all duration-300">
            <img
              src="/image.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          variants={item}
          className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan via-neon-blue to-cyan"
        >
          Building the Future with AI & Data
        </motion.h1>

        {/* Sub-headline */}
        <motion.p variants={item} className="text-xl md:text-2xl text-gray-300 mb-8">
          IITian | AI/ML Developer | Data Scientist | Full-Stack Developer | Content Creator
        </motion.p>

        {/* Description */}
        <motion.p
          variants={item}
          className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Crafting intelligent solutions and sharing knowledge through content. Based in Gaya, Bihar, passionate about transforming ideas into reality using cutting-edge technology.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={item}
          className="flex gap-6 justify-center flex-wrap mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary flex items-center gap-2"
          >
            <Download size={20} />
            Download Resume
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 border-2 border-cyan text-cyan rounded-lg font-semibold hover:bg-cyan/10 transition-all duration-300"
          >
            View My Work
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center"
        >
          <ArrowDown className="text-cyan animate-pulse" size={28} />
        </motion.div>
      </motion.div>
    </section>
  )
}
