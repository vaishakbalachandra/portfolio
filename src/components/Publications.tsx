'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FileText, ExternalLink, Award } from 'lucide-react'

export default function Publications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const publications = [
    {
      title: 'VertiSplitRAG: Privacy-Preserving Retrieval-Augmented Generation Through Vertical Attribute Partitioning',
      type: 'Conference Paper',
      venue: 'IEEE Smartnets',
      year: '2026',
      status: 'Submitted for Review',
      description: 'Novel RAG architecture using vertical attribute partitioning for privacy preservation across distributed retrieval nodes.',
      color: 'from-purple-600 to-pink-600',
      award: null,
    },
    {
      title: 'Fake Currency Detection using ML and Image Processing: An Application for Blind People using Android Studio',
      type: 'Conference Paper',
      venue: 'IEEE ICACRS',
      year: '2023',
      status: 'Published',
      description: 'ML-powered counterfeit detection system achieving 95% accuracy with accessibility features for visually impaired users.',
      color: 'from-blue-600 to-cyan-600',
      award: 'AI for Good Award',
      link: null,
    },
    {
      title: 'PneumoGAN: GAN Based Pneumonia Detection using Synthetic Data Generation',
      type: 'Open Source / Preprint',
      venue: 'GitHub / arXiv',
      year: '2024',
      status: 'Published',
      description: 'GAN-based synthetic medical image generation achieving 94.99% pneumonia detection accuracy on NIH chest X-ray dataset.',
      color: 'from-green-600 to-teal-600',
      award: null,
      link: 'https://github.com/vaishakbalachandra/PneumoGAN',
    },
  ]

  return (
    <section id="publications" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Research & <span className="gradient-text">Publications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Contributing to the advancement of ML and AI through research
          </p>
        </motion.div>

        {/* Publications List */}
        <div className="space-y-8">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden card-hover"
            >
              <div className="md:flex">
                {/* Left Color Bar */}
                <div className={`md:w-2 bg-gradient-to-b ${pub.color}`}></div>

                {/* Content */}
                <div className="flex-1 p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex-1">
                      {/* Title */}
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {pub.title}
                      </h3>

                      {/* Meta Info */}
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${pub.color} text-white`}>
                          {pub.type}
                        </span>
                        <span className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                          <FileText size={16} className="mr-2" />
                          {pub.venue} • {pub.year}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          pub.status === 'Published' 
                            ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                            : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                        }`}>
                          {pub.status}
                        </span>
                        {pub.award && (
                          <span className="flex items-center px-3 py-1 bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400 rounded-full text-sm font-medium">
                            <Award size={14} className="mr-1" />
                            {pub.award}
                          </span>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {pub.description}
                      </p>
                    </div>

                    {/* Link */}
                    {pub.link && (
                      <div className="mt-4 md:mt-0 md:ml-6">
                        <a
                          href={pub.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg font-medium text-sm hover:bg-primary-700 transition-colors"
                        >
                          <span>View</span>
                          <ExternalLink size={16} />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Research Impact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-6">Research Impact</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-4xl font-bold mb-2">3</div>
              <div className="text-sm opacity-90">Publications</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1</div>
              <div className="text-sm opacity-90">Award Winning</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">IEEE</div>
              <div className="text-sm opacity-90">Conference Papers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">Open</div>
              <div className="text-sm opacity-90">Source Contributor</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
