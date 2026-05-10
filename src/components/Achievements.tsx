'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Trophy, Star, Award, TrendingUp } from 'lucide-react'

export default function Achievements() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const achievements = [
    {
      icon: Trophy,
      title: 'Best Research Scholar of the Year Award',
      organization: 'Department of Telecommunications, RV College of Engineering',
      year: '2023 & 2024',
      description: 'Awarded consecutively for two years in recognition of outstanding research contributions in telecommunications and machine learning.',
      color: 'from-yellow-500 to-orange-600',
    },
    {
      icon: Award,
      title: 'AI for Good Award',
      organization: 'IEEE ICACRS 2023',
      year: '2023',
      description: 'Recognized for developing an ML-powered counterfeit currency detection system with accessibility features for visually impaired users.',
      color: 'from-blue-500 to-cyan-600',
    },
    {
      icon: TrendingUp,
      title: '100% On-Time Product Release Rate',
      organization: 'BOSTON Limited',
      year: '2023-2024',
      description: 'Maintained perfect delivery record across all GenAI product releases through comprehensive testing and systematic process improvements.',
      color: 'from-green-500 to-teal-600',
    },
    {
      icon: Star,
      title: '6th Rank in Department',
      organization: 'RV College of Engineering',
      year: '2024',
      description: 'Graduated with 6th rank in Electronics and Telecommunication Engineering department with 8.55 CGPA. GATE Qualified.',
      color: 'from-purple-500 to-pink-600',
    },
  ]

  return (
    <section id="achievements" className="section-padding bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Awards & <span className="gradient-text">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Recognition for excellence in research, academics, and professional delivery
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 card-hover overflow-hidden"
              >
                {/* Background Gradient Effect */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${achievement.color} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity`}></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Year Badge */}
                  <div className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4">
                    {achievement.year}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {achievement.title}
                  </h3>

                  {/* Organization */}
                  <p className="text-primary-600 dark:text-primary-400 font-semibold mb-4">
                    {achievement.organization}
                  </p>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>

                {/* Decorative Corner */}
                <div className={`absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br ${achievement.color} opacity-5 rounded-full group-hover:opacity-10 transition-opacity`}></div>
              </motion.div>
            )
          })}
        </div>

        {/* Additional Recognition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 text-white"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Additional Recognition</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl mb-2">🏆</div>
              <div className="font-semibold mb-1">2x Award Winner</div>
              <div className="text-sm opacity-90">Consecutive Years (2023, 2024)</div>
            </div>
            <div>
              <div className="text-4xl mb-2">📚</div>
              <div className="font-semibold mb-1">GATE Qualified</div>
              <div className="text-sm opacity-90">Graduate Aptitude Test in Engineering</div>
            </div>
            <div>
              <div className="text-4xl mb-2">🎓</div>
              <div className="font-semibold mb-1">Top 10% Graduate</div>
              <div className="text-sm opacity-90">6th Rank in Department</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
