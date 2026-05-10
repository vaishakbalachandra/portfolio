'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Github, ExternalLink, Shield, Lock, AlertTriangle, Heart, DollarSign } from 'lucide-react'

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      title: 'VertiSplitRAG',
      subtitle: 'Privacy-Preserving RAG Architecture',
      status: 'Master\'s Thesis - In Progress',
      description: 'Novel RAG architecture using vertical attribute partitioning to isolate sensitive user data across distributed retrieval nodes, ensuring no single node holds sufficient context to reconstruct user profiles.',
      icon: Lock,
      color: 'from-purple-600 to-pink-600',
      highlights: [
        '95%+ retrieval accuracy with differential privacy guarantees',
        '40% latency reduction through distributed processing',
        'Epsilon values from 0.1 to 1.0 for privacy tuning',
        'Evaluated on 10,000+ queries across 5 benchmark datasets',
        'IEEE Smartnets submission planned',
      ],
      tech: ['Python', 'LangChain', 'FAISS', 'PyTorch', 'Differential Privacy'],
      link: null,
      github: null,
    },
    {
      title: 'LLMShield',
      subtitle: 'Adversarial Attack Simulation & Mitigation',
      status: 'Active Development',
      description: 'Comprehensive security testing framework for LLM pipelines, simulating prompt injection, jailbreak attacks, and other adversarial scenarios to identify vulnerabilities in production systems.',
      icon: Shield,
      color: 'from-blue-600 to-cyan-600',
      highlights: [
        '10,000+ adversarial prompts stress-tested',
        '35% improvement in output reliability',
        'LLaMA-2 and GPT-4 pipeline vulnerability analysis',
        'Context poisoning & embedding inversion detection',
        'Automated mitigation using NVIDIA NeMo Guardrails',
      ],
      tech: ['Python', 'LangChain', 'NVIDIA NeMo', 'RAG', 'Security Testing'],
      link: null,
      github: 'https://github.com/vaishakbalachandra/llm-inference-optimization',
    },
    {
      title: 'RAG Pipeline Security Testing',
      subtitle: 'Hallucination Mitigation Framework',
      status: 'Completed',
      description: 'Hands-on LLM security testing framework analyzing context poisoning, embedding inversion, and retrieval manipulation to improve RAG system reliability.',
      icon: AlertTriangle,
      color: 'from-orange-600 to-red-600',
      highlights: [
        'Comprehensive security vulnerability analysis',
        'LangChain and NVIDIA Nemo Guardrails integration',
        'Context poisoning attack simulations',
        'Embedding inversion detection mechanisms',
        'Production-ready mitigation strategies',
      ],
      tech: ['Python', 'LangChain', 'NVIDIA Guardrails', 'RAG', 'Testing'],
      link: null,
      github: null,
    },
    {
      title: 'PneumoGAN',
      subtitle: 'GAN-Based Medical Imaging',
      status: 'Published Research',
      description: 'GAN-based pneumonia detection system using synthetic data generation to augment medical imaging datasets, achieving high accuracy on NIH chest X-ray dataset.',
      icon: Heart,
      color: 'from-green-600 to-teal-600',
      highlights: [
        '94.99% pneumonia detection accuracy',
        'Synthetic medical image generation using GANs',
        'NIH chest X-ray dataset validation',
        'Published on GitHub and arXiv',
        'Medical AI for healthcare applications',
      ],
      tech: ['Python', 'PyTorch', 'GANs', 'Medical Imaging', 'Computer Vision'],
      link: null,
      github: 'https://github.com/vaishakbalachandra/PneumoGAN',
    },
    {
      title: 'Currency Detection System',
      subtitle: 'ML-Powered Counterfeit Detection',
      status: 'IEEE ICACRS 2023',
      description: 'AI for Good Award-winning machine learning system for counterfeit currency detection with accessibility features for visually impaired users, achieving 95% accuracy.',
      icon: DollarSign,
      color: 'from-yellow-600 to-orange-600',
      highlights: [
        'IEEE ICACRS 2023 publication & AI for Good Award',
        '95% counterfeit detection accuracy',
        'Accessibility features for blind users',
        'Android Studio mobile application',
        'Real-time ML inference on mobile devices',
      ],
      tech: ['Python', 'TensorFlow', 'Android Studio', 'Computer Vision', 'ML'],
      link: null,
      github: 'https://github.com/vaishakbalachandra/Currency-and-Fake-Currency-Detection',
    },
  ]

  return (
    <section id="projects" className="section-padding bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            From cutting-edge research to production-grade systems
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden card-hover"
              >
                {/* Gradient Header */}
                <div className={`bg-gradient-to-r ${project.color} p-6 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="relative z-10">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                          <p className="text-white/90 text-sm">{project.subtitle}</p>
                        </div>
                      </div>
                    </div>
                    <span className="inline-block mt-3 px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {project.highlights.slice(0, 3).map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                          <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, tIndex) => (
                        <span
                          key={tIndex}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex space-x-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
                      >
                        <Github size={16} />
                        <span>View Code</span>
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg font-medium text-sm hover:bg-primary-700 transition-colors"
                      >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600/0 to-accent-600/0 group-hover:from-primary-600/5 group-hover:to-accent-600/5 transition-all duration-300 pointer-events-none"></div>
              </motion.div>
            )
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/vaishakbalachandra"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            <Github size={20} />
            <span>View More on GitHub</span>
            <ExternalLink size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
