import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

export default function Footer() {
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/HARINARAYAN-2027',
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/harinarayankumarpal',
      label: 'LinkedIn',
    },
    {
      icon: Mail,
      href: 'mailto:harinarayankumar548@gmail.com',
      label: 'Email',
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  }

  return (
    <footer id="contact" className="py-16 px-6 border-t border-cyan/20 bg-dark/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 mb-12"
        >
          {/* Contact Info */}
          <motion.div variants={item}>
            <h3 className="text-2xl font-bold text-cyan mb-6">Let's Connect</h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <motion.a
              href="mailto:harinarayankumar548@gmail.com"
              whileHover={{ scale: 1.05 }}
              className="inline-block px-6 py-3 bg-gradient-to-r from-cyan to-neon-blue text-darker font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan/50 transition-all"
            >
              Get in Touch
            </motion.a>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={item}>
            <h3 className="text-2xl font-bold text-cyan mb-6">Quick Links</h3>
            <div className="space-y-2 text-gray-400">
              <p>📍 Gaya, Bihar, India</p>
              <p>📧 harinarayankumar548@gmail.com</p>
              <p>📱 +91 7759895298</p>
              <p>🎓 IIT Patna | B.Sc CSDA</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center gap-6 mb-12 flex-wrap"
        >
          {socialLinks.map((social, index) => {
            const Icon = social.icon
            return (
              <motion.a
                key={index}
                variants={item}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-full border-2 border-cyan/50 flex items-center justify-center text-cyan hover:border-cyan hover:bg-cyan/10 transition-all"
                title={social.label}
              >
                <Icon size={20} />
              </motion.a>
            )
          })}
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-cyan/50 to-transparent mb-8"></div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-gray-400"
        >
          <p className="flex items-center justify-center gap-2">
            Made with <Heart size={18} className="text-red-500" /> in Gaya
          </p>
          <p className="mt-2 text-sm">
            © 2026 Harinarayan Kumar. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
