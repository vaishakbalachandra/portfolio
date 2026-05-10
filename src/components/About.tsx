'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, Briefcase, GraduationCap, Target, TrendingUp } from 'lucide-react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    { icon: GraduationCap, label: '3.82 GPA', sublabel: 'MS Computer Science' },
    { icon: Briefcase, label: '1+ Year', sublabel: 'LLM Production' },
    { icon: Award, label: '7+ Certs', sublabel: 'AWS & GCP ML' },
    { icon: TrendingUp, label: '30%', sublabel: 'Deployment Speed ↑' },
  ]

  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Building the Future of AI, One Model at a Time
            </h3>
            
            <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                I'm a Machine Learning Engineer with a passion for pushing the boundaries of what's possible with 
                Large Language Models and Generative AI. Currently pursuing my Master's in Computer Science at 
                Purdue University Northwest, I combine academic rigor with real-world production experience.
              </p>
              
              <p>
                At BOSTON Limited, I led end-to-end LLaMA-2 deployments, developed automated RAG pipeline testing 
                frameworks, and pioneered hallucination mitigation strategies that improved output reliability by 35%. 
                My work reduced deployment timelines by 30% through innovations in dense passage retrieval, supervised 
                fine-tuning (SFT), and RLHF-based optimization.
              </p>
              
              <p>
                My expertise spans the full ML lifecycle: from research and experimentation to production deployment 
                and monitoring. I'm particularly passionate about RAG architectures, LLM security, and building 
                privacy-preserving GenAI systems—as evidenced by my thesis work on VertiSplitRAG, a novel 
                architecture using vertical attribute partitioning for differential privacy.
              </p>
              
              <p>
                Beyond technical execution, I've mentored junior engineers, maintained comprehensive documentation, 
                and achieved a 100% on-time product release rate. I believe great ML engineering isn't just about 
                building models—it's about building reliable, scalable systems that solve real problems.
              </p>

              <p className="font-semibold text-gray-900 dark:text-white">
                I'm actively seeking ML Engineer, LLM Engineer, GenAI Engineer, and Applied Scientist roles at 
                companies pushing the boundaries of AI. Let's build something extraordinary together.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Stats & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 text-center card-hover"
                  >
                    <Icon className="w-8 h-8 mx-auto mb-3 text-primary-600 dark:text-primary-400" />
                    <div className="text-3xl font-bold gradient-text mb-1">{stat.label}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{stat.sublabel}</div>
                  </motion.div>
                )
              })}
            </div>

            {/* Key Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6"
            >
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <Target className="w-5 h-5 mr-2 text-primary-600" />
                What I Bring
              </h4>
              <ul className="space-y-3">
                {[
                  'Production LLM deployment & optimization expertise',
                  'RAG architecture design & implementation',
                  'LLM fine-tuning: SFT, RLHF, instruction tuning',
                  'Adversarial testing & hallucination mitigation',
                  'Multi-cloud ML infrastructure (AWS, GCP)',
                  'Research-to-production pipeline development',
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                    className="flex items-start text-gray-700 dark:text-gray-300"
                  >
                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Education Quick View */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.8 }}
              className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-6 text-white"
            >
              <h4 className="text-lg font-bold mb-3">Education</h4>
              <div className="space-y-3">
                <div>
                  <div className="font-semibold">MS in Computer Science & Engineering</div>
                  <div className="text-sm opacity-90">Purdue University Northwest • GPA: 3.82/4.00</div>
                  <div className="text-xs opacity-75">Aug 2024 - May 2026 (Graduating)</div>
                </div>
                <div className="border-t border-white/30 pt-3">
                  <div className="font-semibold">BE in Electronics & Telecommunication</div>
                  <div className="text-sm opacity-90">RV College of Engineering, Bengaluru • CGPA: 8.55/10</div>
                  <div className="text-xs opacity-75">Aug 2020 - May 2024</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
