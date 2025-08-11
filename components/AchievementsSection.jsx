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

  // Sample achievement data - replace with your actual data
  const achievements = [
    {
      id: 1,
      title: "AI Robotics Certification",
      category: "certification",
      date: "2024",
      description: "Advanced certification in AI-powered robotics and machine learning integration",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400", 
      tags: ["AI", "Robotics", "Machine Learning"],
      institution: "MIT Technology Institute"
    },
    {
      id: 2,
      title: "National Robotics Competition",
      category: "award",
      date: "2024",
      description: "First place winner in the National Collegiate Robotics Championship",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400",
      tags: ["Competition", "First Place", "Robotics"],
      institution: "National Robotics Federation"
    },
    {
      id: 3,
      title: "Advanced Programming Certificate",
      category: "certification",
      date: "2023",
      description: "Professional certification in advanced programming and software architecture",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400",
      tags: ["Programming", "Software", "Architecture"],
      institution: "Stanford Computer Science"
    },
    {
      id: 4,
      title: "Innovation Project Showcase",
      category: "project",
      date: "2024",
      description: "Featured project in the International Innovation and Technology Expo",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400",
      tags: ["Innovation", "Technology", "Expo"],
      institution: "International Tech Expo"
    },
    {
      id: 5,
      title: "Leadership Excellence Award",
      category: "award",
      date: "2023",
      description: "Recognition for outstanding leadership in student robotics organizations",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400",
      tags: ["Leadership", "Excellence", "Organization"],
      institution: "Student Leadership Council"
    },
    {
      id: 6,
      title: "Research Publication",
      category: "publication",
      date: "2024",
      description: "Published research on autonomous navigation systems in IEEE Robotics Journal",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      tags: ["Research", "Publication", "Navigation"],
      institution: "IEEE Robotics Journal"
    }
  ]

  const categories = [
    { key: 'all', label: 'All Achievements', icon: '🏆' },
    { key: 'certification', label: 'Certifications', icon: '📜' },
    { key: 'award', label: 'Awards', icon: '🥇' },
    { key: 'project', label: 'Projects', icon: '🚀' },
    { key: 'publication', label: 'Publications', icon: '📚' }
  ]

  const filteredAchievements = filter === 'all' 
    ? achievements 
    : achievements.filter(item => item.category === filter)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Subtitle animation
      gsap.fromTo(subtitleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: subtitleRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Cards stagger animation
      gsap.fromTo(cardsRef.current,
        { opacity: 0, y: 60, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [filteredAchievements])

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
      transition: { type: "spring", damping: 15, stiffness: 300 }
    },
    exit: { opacity: 0, scale: 0.8 }
  }

  return (
    <section 
      ref={sectionRef} 
      id="achievements" 
      className="relative min-h-screen py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            ref={titleRef}
            className="mb-6"
          >
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Achievements
              </span>
            </h2>
          </motion.div>
          
          <motion.p
            ref={subtitleRef}
            className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed"
          >
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
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25'
                  : 'bg-white/10 backdrop-blur-sm text-white/70 hover:bg-white/20 hover:text-white border border-white/20'
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              <span>{category.label}</span>
            </motion.button>
          ))}
        </div>

        {/* Achievement Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredAchievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                ref={el => cardsRef.current[index] = el}
                variants={cardVariants}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                whileHover={{ y: -10, scale: 1.02 }}
                onClick={() => setSelectedCard(achievement)}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden cursor-pointer hover:border-cyan-500/50 transition-all duration-300"
              >
                {/* Card Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={achievement.image} 
                    alt={achievement.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-cyan-500/90 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                      {achievement.category.charAt(0).toUpperCase() + achievement.category.slice(1)}
                    </span>
                  </div>
                  
                  {/* Date badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/30 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                      {achievement.date}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {achievement.title}
                  </h3>
                  
                  <p className="text-white/70 text-sm mb-4 line-clamp-2">
                    {achievement.description}
                  </p>
                  
                  <div className="text-cyan-400 text-sm font-medium mb-4">
                    {achievement.institution}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {achievement.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "15+", label: "Certifications", icon: "📜" },
            { number: "8", label: "Awards Won", icon: "🏆" },
            { number: "12", label: "Projects", icon: "🚀" },
            { number: "3", label: "Publications", icon: "📚" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-1">{stat.number}</div>
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
              className="bg-slate-800 border border-white/20 rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{selectedCard.title}</h3>
                  <p className="text-cyan-400 font-medium">{selectedCard.institution}</p>
                </div>
                <button
                  onClick={() => setSelectedCard(null)}
                  className="text-white/70 hover:text-white text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="h-64 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl mb-6 overflow-hidden">
                <img 
                  src={selectedCard.image} 
                  alt={selectedCard.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-white/80 mb-6 leading-relaxed">{selectedCard.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedCard.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full"
                  >
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
