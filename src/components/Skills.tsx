'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code, Database, Cloud, Settings, Brain, Shield } from 'lucide-react'

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillCategories = [
    {
      title: 'ML & GenAI Frameworks',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      skills: [
        { name: 'PyTorch', level: 95 },
        { name: 'TensorFlow / Keras', level: 90 },
        { name: 'HuggingFace Transformers', level: 95 },
        { name: 'LangChain', level: 93 },
        { name: 'LlamaIndex', level: 88 },
        { name: 'Scikit-learn', level: 90 },
      ],
    },
    {
      title: 'LLM & GenAI Engineering',
      icon: Code,
      color: 'from-blue-600 to-cyan-600',
      skills: [
        { name: 'RAG Architectures', level: 95 },
        { name: 'LLM Fine-Tuning (SFT)', level: 92 },
        { name: 'RLHF', level: 88 },
        { name: 'Agentic Workflows', level: 90 },
        { name: 'Multi-Agent Systems', level: 85 },
        { name: 'Prompt Engineering', level: 93 },
      ],
    },
    {
      title: 'Model Evaluation & Testing',
      icon: Settings,
      color: 'from-green-600 to-teal-600',
      skills: [
        { name: 'BLEU / ROUGE Scoring', level: 90 },
        { name: 'Perplexity Analysis', level: 88 },
        { name: 'A/B Testing', level: 85 },
        { name: 'Hallucination Analysis', level: 92 },
        { name: 'Regression Testing', level: 93 },
        { name: 'LLM-as-a-Judge', level: 87 },
      ],
    },
    {
      title: 'MLOps & Infrastructure',
      icon: Cloud,
      color: 'from-orange-600 to-red-600',
      skills: [
        { name: 'CI/CD Pipelines', level: 88 },
        { name: 'MLflow', level: 85 },
        { name: 'Docker / Kubernetes', level: 87 },
        { name: 'vLLM', level: 90 },
        { name: 'Model Monitoring', level: 86 },
        { name: 'Apache Airflow', level: 83 },
      ],
    },
    {
      title: 'Cloud Platforms',
      icon: Database,
      color: 'from-yellow-600 to-orange-600',
      skills: [
        { name: 'AWS SageMaker', level: 92 },
        { name: 'Google Cloud Vertex AI', level: 90 },
        { name: 'Multi-Cloud Deployment', level: 87 },
        { name: 'IBM Watson Studio', level: 82 },
      ],
    },
    {
      title: 'Programming & Tools',
      icon: Shield,
      color: 'from-indigo-600 to-purple-600',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'SQL / PostgreSQL', level: 88 },
        { name: 'Spark', level: 83 },
        { name: 'Git / JIRA', level: 90 },
        { name: 'Jupyter Notebooks', level: 93 },
        { name: 'PyTest', level: 90 },
      ],
    },
  ]

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Full-stack ML expertise from research to production deployment
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => {
            const Icon = category.icon
            return (
              <motion.div
                key={catIndex}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-6 card-hover"
              >
                {/* Category Header */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                        <span className="text-sm font-bold text-primary-600 dark:text-primary-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: catIndex * 0.1 + skillIndex * 0.05 }}
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Additional Skills Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 text-white"
        >
          <h3 className="text-2xl font-bold mb-4 text-center">Additional Expertise</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Dense Passage Retrieval',
              'Instruction Fine-Tuning',
              'Differential Privacy',
              'Distributed Systems',
              'FlashAttention-2',
              'INT8/FP16 Quantization',
              'NVIDIA A100 Optimization',
              'Code Reviews',
              'Technical Documentation',
              'Team Mentorship',
              'Research Publications',
              'Multi-Modal AI',
            ].map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 1 + index * 0.05 }}
                className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
