import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const AchievementsSection = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const cardsRef = useRef([])
  const [selectedCard, setSelectedCard] = useState(null)
  const [filter, setFilter] = useState('all')

  // Placeholder (optional) - put a placeholder image in public/certificates/placeholder.jpg
  const PLACEHOLDER = '/certificates/placeholder.jpg'

  // Sample achievement data - images should live in public/certificates/
  const achievements = [
    {
      id: 1,
      title: '13th First Lego League',
      category: 'award',
      date: '2024',
      description:
        'Participated in the prestigious 13th First Lego League robotics competition, showcasing innovative robotics solutions',
      image: '/certificates/13th_First_Lego_League.jpg',
      tags: ['Robotics', 'Competition', 'Lego League'],
      institution: 'First Lego League'
    },
    {
      id: 2,
      title: '2nd Bicol Business Summit',
      category: 'certification',
      date: '2025',
      description:
        'Recognition at the 2nd Bicol Business Summit for outstanding contribution to technology and innovation',
      image: '/certificates/2nd_Bicol_Business_Summit.jpg',
      tags: ['Business', 'Innovation', 'Summit'],
      institution: 'Bicol Business Council'
    },
    {
      id: 3,
      title: 'Ark Hackathon 2025',
      category: 'award',
      date: '2025',
      description:
        'Winner of the Ark Hackathon 2025, demonstrating exceptional programming and problem-solving skills',
      image: '/certificates/Ark_Hackathon_2025.jpg',
      tags: ['Hackathon', 'Programming', 'Innovation'],
      institution: 'Beecall'
    },
    {
      id: 4,
      title: 'Innovative Ideas Award',
      category: 'award',
      date: '2024',
      description:
        'Recognized for presenting innovative ideas that push the boundaries of robotics and technology',
      image: '/certificates/Innovative_Ideas.jpg',
      tags: ['Innovation', 'Ideas', 'Technology'],
      institution: 'National Robotics Competition'
    },
    {
      id: 5,
      title: 'Innovative Prototype',
      category: 'project',
      date: '2024',
      description:
        'Developed an innovative prototype that demonstrates cutting-edge robotics capabilities and real-world applications',
      image: '/certificates/Innovative_Prototype.jpg',
      tags: ['Prototype', 'Innovation', 'Development'],
      institution: 'National Robotics Competition'
    }
  ]

  const categories = [
    { key: 'all', label: 'All Achievements', icon: '🏆' },
    { key: 'certification', label: 'Certifications', icon: '📜' },
    { key: 'award', label: 'Awards', icon: '🥇' },
    { key: 'project', label: 'Projects', icon: '🚀' }
  ]

  const filteredAchievements =
    filter === 'all' ? achievements : achievements.filter((item) => item.category === filter)

  useEffect(() => {
    // reset refs to avoid stale DOM references
    cardsRef.current = []

    const ctx = gsap.context(() => {
      // Title animation
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: titleRef.current,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      }

      // Subtitle animation
      if (subtitleRef.current) {
        gsap.fromTo(
          subtitleRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.3,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: subtitleRef.current,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      }

      // Cards stagger animation — only animate cards that exist in the DOM
      if (cardsRef.current.length) {
        gsap.fromTo(
          cardsRef.current,
          { opacity: 0, y: 60, scale: 0.8 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 60%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      }
    }, sectionRef)

    return () => {
      ctx.revert()
      // kill any ScrollTrigger that might persist
      ScrollTrigger.getAll().forEach((st) => st.kill())
    }
  }, [filteredAchievements])

  // lock body scroll when modal open
  useEffect(() => {
    const previous = document.body.style.overflow
    document.body.style.overflow = selectedCard ? 'hidden' : previous
    return () => {
      document.body.style.overflow = previous
    }
  }, [selectedCard])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', damping: 15, stiffness: 300 }
    },
    exit: { opacity: 0, scale: 0.8 }
  }

  // safe image fallback for <img> elements
  const handleImgError = (e) => {
    console.log('Image failed to load:', e?.target?.src)
    if (e?.target) {
      e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"%3E%3Crect width="400" height="300" fill="%23374151"/%3E%3Ctext x="200" y="150" text-anchor="middle" fill="%23ffffff" font-family="Arial" font-size="16"%3EImage Loading...%3C/text%3E%3C/svg%3E'
    }
  }

  return (
    <section
      ref={sectionRef}
      id="achievements"
      className="relative min-h-screen py-20 bg-gradient-to-br from-gray-900 via-green-900/30 to-black overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-700/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-600/12 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-green-800/8 to-yellow-700/6 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900/10 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div ref={titleRef} className="mb-6">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
              <span className="bg-gradient-to-r from-yellow-600 via-green-400 to-yellow-600 bg-clip-text text-transparent">
                Achievements
              </span>
            </h2>
          </motion.div>

          <motion.p ref={subtitleRef} className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Celebrating milestones, certifications, and recognition that mark our journey in robotics and innovation
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.key}
              onClick={() => setFilter(category.key)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                filter === category.key
                  ? 'bg-gradient-to-r from-green-700 to-yellow-600 text-white shadow-lg shadow-green-500/25'
                  : 'bg-white/10 backdrop-blur-sm text-white/70 hover:bg-white/20 hover:text-white border border-white/20'
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              <span>{category.label}</span>
            </motion.button>
          ))}
        </div>

        {/* Achievement Cards Grid */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredAchievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                ref={(el) => (cardsRef.current[index] = el)}
                variants={cardVariants}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                whileHover={{ y: -10, scale: 1.02 }}
                onClick={() => setSelectedCard(achievement)}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden cursor-pointer hover:border-green-500/50 transition-all duration-300"
              >
                {/* Card Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    onError={handleImgError}
                    onLoad={() => console.log('Image loaded successfully:', achievement.image)}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-green-700/90 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                      {achievement.category.charAt(0).toUpperCase() + achievement.category.slice(1)}
                    </span>
                  </div>

                  {/* Date badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/30 backdrop-blur-sm text-white text-xs font-medium rounded-full">{achievement.date}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">{achievement.title}</h3>

                  <p className="text-white/70 text-sm mb-4 line-clamp-2">{achievement.description}</p>

                  <div className="text-green-400 text-sm font-medium mb-4">{achievement.institution}</div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {achievement.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-2 py-1 bg-yellow-600/20 text-yellow-300 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-green-700/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Stats Section */}
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} viewport={{ once: true }} className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '5+', label: 'Achievements', icon: '🏆' },
            { number: '3', label: 'Awards Won', icon: '🥇' },
            { number: '2', label: 'Certifications', icon: '📜' },
            { number: '1', label: 'Prototype', icon: '🔬' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-1">{stat.number}</div>
              <div className="text-white/70 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Modal for detailed view */}
      <AnimatePresence>
        {selectedCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCard(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-900/95 backdrop-blur-md border border-green-500/30 rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{selectedCard.title}</h3>
                  <p className="text-green-400 font-medium">{selectedCard.institution}</p>
                </div>
                <button onClick={() => setSelectedCard(null)} className="text-white/70 hover:text-white text-2xl">
                  ×
                </button>
              </div>

              <div className="h-64 bg-gradient-to-br from-green-700/20 to-yellow-600/20 rounded-xl mb-6 overflow-hidden">
                <img 
                  src={selectedCard.image} 
                  alt={selectedCard.title} 
                  onError={handleImgError} 
                  onLoad={() => console.log('Modal image loaded successfully:', selectedCard.image)}
                  className="w-full h-full object-cover" 
                  loading="lazy"
                />
              </div>

              <p className="text-white/80 mb-6 leading-relaxed">{selectedCard.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedCard.tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-yellow-600/20 text-yellow-300 text-sm rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center text-sm text-white/70">
                <span>Category: {selectedCard.category}</span>
                <span>Year: {selectedCard.date}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default AchievementsSection
