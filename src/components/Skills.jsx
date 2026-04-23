import React from 'react'
import { motion } from 'framer-motion'
import { Brain, Code, Lock } from 'lucide-react'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Data Science',
      icon: Brain,
      skills: ['Python', 'Machine Learning', 'SQL', 'Pandas', 'NumPy', 'TensorFlow'],
      color: 'from-cyan to-neon-blue',
    },
    {
      title: 'Development',
      icon: Code,
      skills: ['JavaScript', 'React', 'C#', 'Node.js', 'Vite', '.NET'],
      color: 'from-neon-blue to-neon-purple',
    },
    {
      title: 'Security & Tools',
      icon: Lock,
      skills: ['Git', 'Docker', 'CI/CD', 'AWS', 'MongoDB', 'Redis'],
      color: 'from-neon-purple to-cyan',
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">Skills & Expertise</h2>
          <p className="text-gray-400 text-lg">Comprehensive toolkit for modern development</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -10 }}
                className="card-glow p-8 group hover:glow-cyan"
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${category.color} p-4 mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-full h-full text-darker" />
                </div>

                <h3 className="text-2xl font-bold mb-6 text-cyan">{category.title}</h3>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      className="bg-slate-800/50 px-4 py-2 rounded-lg text-center text-gray-300 hover:text-cyan hover:bg-slate-800 transition-all duration-300 border border-slate-700/50 hover:border-cyan/50"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
