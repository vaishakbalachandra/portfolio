'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Phone, MapPin, Linkedin, Github, Download } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'vaishakbalachandra01252002@gmail.com',
      link: 'mailto:vaishakbalachandra01252002@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (219) 368-2467',
      link: 'tel:+12193682467',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Hammond, Indiana, USA',
      link: null,
    },
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/vaishakbalachandra/',
      color: 'from-blue-600 to-blue-700',
    },
    {
      icon: Github,
      label: 'GitHub',
      link: 'https://github.com/vaishakbalachandra',
      color: 'from-gray-700 to-gray-900',
    },
  ]

  return (
    <section id="contact" className="section-padding bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Actively seeking ML Engineer, LLM Engineer, GenAI Engineer, and Applied Scientist roles. Let's discuss how I can contribute to your team.
          </p>
        </motion.div>

        {/* Contact Information */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Get in Touch
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed max-w-2xl mx-auto">
              I'm actively job hunting and would love to hear about opportunities at companies 
              pushing the boundaries of AI and machine learning. Whether you're a recruiter, 
              hiring manager, or fellow ML engineer, I'm excited to connect.
            </p>
          </motion.div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 text-center card-hover"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{info.label}</p>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-gray-900 dark:text-white font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors break-all"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-gray-900 dark:text-white font-medium">{info.value}</p>
                  )}
                </motion.div>
              )
            })}
          </div>

          {/* Social Links & Resume */}
          <div className="space-y-4 max-w-md mx-auto">
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className={`flex items-center justify-center space-x-3 p-4 bg-gradient-to-r ${social.color} text-white rounded-lg hover:opacity-90 transition-opacity w-full`}
                >
                  <Icon size={20} />
                  <span className="font-medium">{social.label}</span>
                </motion.a>
              )
            })}

            {/* Download Resume */}
            <motion.a
              href="/Vaishak_Master_Resume.pdf"
              download
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.8 }}
              className="flex items-center justify-center space-x-3 p-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-semibold hover:opacity-90 transition-opacity w-full"
            >
              <Download size={20} />
              <span>Download Resume</span>
            </motion.a>
          </div>
        </div>

        {/* Hiring Status Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">🎯 Actively Job Hunting</h3>
          <p className="text-lg mb-2">
            Seeking ML Engineer, LLM Engineer, GenAI Engineer, and Applied Scientist roles
          </p>
          <p className="text-sm opacity-90">
            Available for full-time positions starting May 2026 • Open to relocation • Authorized to work in the USA
          </p>
        </motion.div>
      </div>
    </section>
  )
}
