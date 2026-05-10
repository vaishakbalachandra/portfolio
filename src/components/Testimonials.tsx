'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { Quote, Star, Plus } from 'lucide-react'

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [showForm, setShowForm] = useState(false)

  const testimonials = [
    // Placeholder testimonials - will be replaced with real ones
    {
      name: 'Your Colleagues',
      role: 'Engineering Manager',
      company: 'Tech Company',
      testimonial: 'Add testimonials from people you\'ve worked with to showcase your impact and collaboration skills.',
      rating: 5,
      isPlaceholder: true,
    },
  ]

  return (
    <section id="testimonials" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="gradient-text">Testimonials</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            What colleagues and collaborators say about working together
          </p>
        </motion.div>

        {/* Add Testimonial Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12"
        >
          <button
            onClick={() => setShowForm(!showForm)}
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            <Plus size={20} />
            <span>Share Your Experience</span>
          </button>
        </motion.div>

        {/* Testimonial Form - Simple HTML form that redirects to Formspree */}
        {showForm && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="max-w-2xl mx-auto mb-12 bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8"
          >
            <form 
              action="https://formspree.io/f/xojrpbkq" 
              method="POST"
              className="space-y-6"
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Share Your Testimonial
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Your feedback helps showcase collaboration and impact
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none text-gray-900 dark:text-white"
                />
                <input
                  type="text"
                  name="role"
                  placeholder="Your Role"
                  required
                  className="px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none text-gray-900 dark:text-white"
                />
              </div>

              <input
                type="text"
                name="company"
                placeholder="Company/Organization"
                required
                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none text-gray-900 dark:text-white"
              />

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Rating (1-5 stars)
                </label>
                <select
                  name="rating"
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none text-gray-900 dark:text-white"
                >
                  <option value="5">⭐⭐⭐⭐⭐ (5 stars)</option>
                  <option value="4">⭐⭐⭐⭐ (4 stars)</option>
                  <option value="3">⭐⭐⭐ (3 stars)</option>
                  <option value="2">⭐⭐ (2 stars)</option>
                  <option value="1">⭐ (1 star)</option>
                </select>
              </div>

              <textarea
                name="message"
                placeholder="Share your experience working with Vaishak..."
                required
                rows={4}
                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none text-gray-900 dark:text-white resize-none"
              />

              {/* Hidden field to help identify form */}
              <input type="hidden" name="_subject" value="New Portfolio Testimonial" />

              <div className="flex space-x-4">
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Submit Testimonial
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </motion.div>
        )}

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className={`bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 card-hover ${
                testimonial.isPlaceholder ? 'border-2 border-dashed border-gray-300 dark:border-gray-700' : ''
              }`}
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-primary-600 opacity-50 mb-4" />

              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className={`text-gray-600 dark:text-gray-400 mb-6 leading-relaxed ${
                testimonial.isPlaceholder ? 'italic' : ''
              }`}>
                "{testimonial.testimonial}"
              </p>

              {/* Author */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <h4 className="font-bold text-gray-900 dark:text-white">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {testimonial.role}
                </p>
                <p className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                  {testimonial.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 text-white"
        >
          <h3 className="text-2xl font-bold mb-4">Worked with Vaishak?</h3>
          <p className="mb-6 opacity-90">
            Share your experience and help showcase the impact of our collaboration
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="px-8 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Add Your Testimonial
          </button>
        </motion.div>
      </div>
    </section>
  )
}
