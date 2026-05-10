'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, ExternalLink, CheckCircle } from 'lucide-react'

export default function Certifications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const certifications = [
    {
      title: 'AWS Certified Machine Learning - Specialty',
      issuer: 'Amazon Web Services (AWS)',
      year: '2024',
      logo: '☁️',
      color: 'from-orange-500 to-amber-600',
      description: 'Validates expertise in building, training, and deploying ML models on AWS cloud infrastructure',
      skills: ['AWS SageMaker', 'Model Deployment', 'ML Infrastructure', 'Cloud ML'],
    },
    {
      title: 'Google Cloud Professional ML Engineer',
      issuer: 'Google Cloud',
      year: '2024',
      logo: '🌐',
      color: 'from-blue-500 to-cyan-600',
      description: 'Demonstrates proficiency in designing, building, and productionizing ML models using Google Cloud',
      skills: ['Vertex AI', 'Multi-Cloud', 'ML Pipelines', 'Model Serving'],
    },
    {
      title: 'Deep Learning Specialization',
      issuer: 'DeepLearning.AI',
      year: '2025',
      logo: '🧠',
      color: 'from-purple-500 to-pink-600',
      description: 'Comprehensive training in neural networks, CNNs, RNNs, and optimization techniques',
      skills: ['Neural Networks', 'CNNs', 'RNNs', 'Transformers'],
    },
    {
      title: 'Building RAG Agents with LLMs',
      issuer: 'NVIDIA Deep Learning Institute',
      year: '2024',
      logo: '🔷',
      color: 'from-green-500 to-teal-600',
      description: 'Specialized training in Retrieval-Augmented Generation architectures and implementation',
      skills: ['RAG Architecture', 'Vector DBs', 'LLM Integration', 'NVIDIA Tools'],
    },
    {
      title: 'NLP Course Certificate',
      issuer: 'Hugging Face',
      year: '2024',
      logo: '🤗',
      color: 'from-yellow-500 to-orange-600',
      description: 'Advanced NLP techniques using Transformers and Hugging Face ecosystem',
      skills: ['Transformers', 'NLP', 'Fine-Tuning', 'HuggingFace'],
    },
    {
      title: 'AI Developer Essentials 2024',
      issuer: 'IBM SkillsBuild',
      year: '2024',
      logo: '💡',
      color: 'from-indigo-500 to-blue-600',
      description: 'Comprehensive AI development fundamentals and IBM Watson integration',
      skills: ['IBM Watson', 'AI Development', 'ML Lifecycle', 'Production AI'],
    },
    {
      title: 'MLOps Fundamentals',
      issuer: 'Google Cloud Skills Boost',
      year: '2024',
      logo: '⚙️',
      color: 'from-red-500 to-pink-600',
      description: 'Best practices for operationalizing ML models in production environments',
      skills: ['MLOps', 'CI/CD', 'Model Monitoring', 'Automation'],
    },
  ]

  return (
    <section id="certifications" className="section-padding bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="gradient-text">Certifications</span> & Training
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Industry-recognized credentials from top technology companies
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden card-hover"
            >
              {/* Gradient Top Bar */}
              <div className={`h-2 bg-gradient-to-r ${cert.color}`}></div>

              {/* Content */}
              <div className="p-6">
                {/* Logo & Badge */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`text-5xl`}>
                    {cert.logo}
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">
                      {cert.year}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 min-h-[3.5rem]">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <div className="flex items-center space-x-2 mb-4">
                  <Award className="w-4 h-4 text-primary-600" />
                  <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                    {cert.issuer}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, sIndex) => (
                    <span
                      key={sIndex}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
            </motion.div>
          ))}
        </div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 text-white"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">7+</div>
              <div className="text-sm opacity-90">Professional Certifications</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">2</div>
              <div className="text-sm opacity-90">Cloud ML Specializations</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-sm opacity-90">Industry Recognized</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">2024-25</div>
              <div className="text-sm opacity-90">Recently Certified</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
