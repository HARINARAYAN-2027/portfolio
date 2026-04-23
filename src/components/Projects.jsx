import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: 'Visit Gaya Ji',
      description: 'A comprehensive spiritual tourism platform showcasing the rich heritage and sacred sites of Gaya, Bihar. Features real-time booking, guided tours, and cultural information.',
      tags: ['React', 'Node.js', 'MongoDB', 'Payment Gateway'],
      link: 'https://visitgayaji.online',
      github: 'https://github.com/HARINARAYAN-2027/visitgayaji.online',
    },
    {
      title: 'GDP Predictor',
      description: 'Machine learning web application that predicts GDP trends using advanced data analytics, time series forecasting, and interactive visualizations.',
      tags: ['Python', 'TensorFlow', 'React', 'Flask'],
      link: 'https://gdp-prediction.onrender.com/',
      github: 'https://github.com/HARINARAYAN-2027/gdp-X',
    },
    {
      title: 'Tapas Ascent',
      description: 'EdTech platform providing structured learning paths for aspiring developers. Features interactive courses, real-time feedback, and mentorship opportunities.',
      tags: ['React', 'Firebase', 'TypeScript', 'Stripe'],
      link: 'https://play.google.com/store/apps/details?id=tapasascent.tech.app',
      playstore:'https://tapasascent.tech/',
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
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">Featured Projects</h2>
          <p className="text-gray-400 text-lg">Showcasing innovative solutions and real-world applications</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -15 }}
              className="card-glow overflow-hidden group h-full flex flex-col hover:glow-cyan"
            >
              {/* Project Header with gradient background */}
              <div className="h-48 bg-gradient-to-br from-cyan/20 to-neon-blue/20 flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan/0 via-transparent to-neon-blue/30 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative text-center px-6">
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan to-neon-blue">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-gray-300 mb-6 text-sm leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-slate-800/50 border border-cyan/30 text-cyan text-xs rounded-full hover:border-cyan transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <motion.a
                    href={project.link}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan to-neon-blue text-darker font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan/50 transition-all flex-1 justify-center"
                  >
                    <ExternalLink size={16} />
                    View
                  </motion.a>
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 px-4 py-2 border-2 border-cyan text-cyan rounded-lg hover:bg-cyan/10 transition-all flex-1 justify-center"
                  >
                    <Github size={16} />
                    Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
