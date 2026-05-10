'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, MapPin, Calendar, TrendingUp } from 'lucide-react'

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const experiences = [
    {
      title: 'Graduate Research Assistant',
      company: 'Purdue University Northwest',
      location: 'Hammond, IN',
      period: 'August 2024 - Present',
      type: 'Research',
      highlights: [
        'Conducting original thesis research on VertiSplitRAG, a novel privacy-preserving RAG architecture using vertical attribute partitioning',
        'Targeting 95%+ retrieval accuracy with 40% latency reduction across 10,000+ query evaluations',
        'Designed end-to-end evaluation pipelines measuring retrieval accuracy across 5 benchmark datasets',
        'Quantifying differential privacy preservation with epsilon values from 0.1 to 1.0',
        'Benchmarked LLM optimization techniques including FlashAttention-2, INT8/FP16 quantization, and mixed-precision inference',
      ],
      skills: ['RAG Architecture', 'Privacy-Preserving ML', 'LLM Optimization', 'Research', 'Python', 'PyTorch'],
    },
    {
      title: 'Machine Learning Engineer II',
      company: 'BOSTON Limited',
      location: 'Bengaluru, India',
      period: 'November 2023 - December 2024',
      type: 'Industry',
      highlights: [
        'Executed end-to-end model development, fine-tuning and regression testing of GenAI applications',
        'Led nightly regressions and pioneered failure mode severity analysis across LLaMA-2 deployments',
        'Developed and automated RAG pipeline tests using Python and LangChain, executing 100+ functional and integration tests',
        'Achieved 100% on-time product release rate through comprehensive testing and monitoring',
        'Led development of critical GenAI features: dense passage retrieval, instruction fine-tuning (SFT), and RLHF optimization',
        'Reduced deployment timelines by 30% through systematic process improvements',
        'Identified critical hallucination failure points and improved output reliability by 35%',
        'Mentored junior ML engineers and maintained comprehensive technical documentation',
      ],
      skills: ['LLM Deployment', 'RAG Pipelines', 'Fine-Tuning', 'RLHF', 'LangChain', 'Testing', 'CI/CD'],
    },
  ]

  return (
    <section id="experience" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            1+ year of production LLM experience combined with cutting-edge research
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-600 to-accent-600 rounded-full"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
              }`}
            >
              {/* Timeline Dot */}
              <div className="hidden md:block absolute top-8 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white dark:bg-gray-900 border-4 border-primary-600 rounded-full z-10"></div>

              {/* Content Card */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 card-hover">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className={index % 2 === 0 ? 'md:text-right' : ''}>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {exp.title}
                    </h3>
                    <div className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 font-semibold text-lg mb-2">
                      <Briefcase size={18} />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <div className={`flex flex-col space-y-2 mt-2 md:mt-0 ${index % 2 === 0 ? 'md:items-end' : ''}`}>
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                      exp.type === 'Research' 
                        ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400'
                        : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                    }`}>
                      {exp.type}
                    </span>
                  </div>
                </div>

                {/* Meta Info */}
                <div className={`flex flex-wrap gap-4 mb-6 text-sm text-gray-600 dark:text-gray-400 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                </div>

                {/* Highlights */}
                <ul className="space-y-3 mb-6">
                  {exp.highlights.map((highlight, hIndex) => (
                    <motion.li
                      key={hIndex}
                      initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.2 + hIndex * 0.1 }}
                      className={`flex items-start text-gray-700 dark:text-gray-300 ${index % 2 === 0 ? 'md:flex-row-reverse md:text-right' : ''}`}
                    >
                      <TrendingUp className={`w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5 ${index % 2 === 0 ? 'md:ml-2' : 'mr-2'}`} />
                      <span>{highlight}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Skills Tags */}
                <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                  {exp.skills.map((skill, sIndex) => (
                    <span
                      key={sIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievement Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Key Impact Metrics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '30%', label: 'Deployment Speed ↑' },
              { value: '35%', label: 'Output Reliability ↑' },
              { value: '100+', label: 'Automated Tests' },
              { value: '100%', label: 'On-Time Releases' },
            ].map((metric, index) => (
              <div key={index}>
                <div className="text-4xl font-bold mb-2">{metric.value}</div>
                <div className="text-sm opacity-90">{metric.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
