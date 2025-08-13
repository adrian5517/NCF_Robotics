import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import winnerGoalImage from '../src/assets/images/WINNER-GOAL.jpg'

gsap.registerPlugin(ScrollTrigger)

const AboutSection = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    })

    tl.fromTo(titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    )

    cardsRef.current.forEach((card, index) => {
      if (card) {
        tl.fromTo(card,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          `-=${0.6 - index * 0.2}`
        )
      }
    })
  }, [])

  const features = [
    {
      icon: "🤖",
      title: "Advanced Robotics",
      description: "Cutting-edge robotics technology with AI integration for next-generation automation solutions.",
      gradient: "from-green-700 to-green-600"
    },
    {
      icon: "⚡",
      title: "Innovation Hub",
      description: "State-of-the-art facilities equipped with the latest tools and technologies for research and development.",
      gradient: "from-green-700 to-yellow-600"
    },
    {
      icon: "🎓",
      title: "Expert Training",
      description: "Comprehensive training programs led by industry professionals and academic experts.",
      gradient: "from-green-600 to-green-700"
    },
    {
      icon: "🔬",
      title: "Research & Development",
      description: "Pioneering research in robotics, artificial intelligence, and automation technologies.",
      gradient: "from-green-700 to-green-800"
    },
    {
      icon: "🌟",
      title: "Student Excellence",
      description: "Empowering students to achieve excellence through hands-on learning and practical applications.",
      gradient: "from-yellow-600 to-green-700"
    },
    {
      icon: "🚀",
      title: "Future Ready",
      description: "Preparing the next generation of engineers and technologists for tomorrow's challenges.",
      gradient: "from-green-600 to-yellow-600"
    }
  ]

  return (
    <section id="about" ref={sectionRef} className="relative min-h-screen py-20 bg-gradient-to-br from-gray-900 via-green-900 to-black">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900/20 via-transparent to-transparent"></div>
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-16">
          <motion.div
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-700/20 to-yellow-600/20 backdrop-blur-sm border border-green-500/30 rounded-full px-6 py-3 mb-6"
          >
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            <span className="text-green-300 text-sm font-medium">About NCF Robotics</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-yellow-200 to-green-200 bg-clip-text text-transparent">
              Shaping the Future of
            </span>
            <br />
            <span className="bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent">
              Robotics & AI
            </span>
          </h2>

          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            NCF Robotics is at the forefront of technological innovation, combining cutting-edge research 
            with practical applications to create the next generation of intelligent systems.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="mb-20">
          <motion.div
            className="bg-white/5 backdrop-blur-md border border-white/20 rounded-3xl p-8 lg:p-12"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-lg text-white/80 leading-relaxed mb-6">
                  To advance the field of robotics through innovative research, comprehensive education, 
                  and practical applications that benefit society. We strive to create intelligent systems 
                  that enhance human capabilities and solve real-world challenges.
                </p>
                {/* <div className="flex space-x-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">10+</div>
                    <div className="text-sm text-white/70">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-400">500+</div>
                    <div className="text-sm text-white/70">Graduates</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-500">50+</div>
                    <div className="text-sm text-white/70">Research Projects</div>
                  </div>
                </div> */}
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-700/20 to-yellow-600/20 rounded-2xl blur-2xl"></div>
                <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                  <div className="text-6xl mb-3 text-center"><img src={winnerGoalImage} alt="National Robotics Competition" /></div>
                  <h4 className="text-xl font-semibold text-white text-center mb-1">National Robotics Competition</h4>
                  <p className="text-white/70 text-center mb-4">
                    Proud representatives of NCF at national robotics competitions, showcasing innovation and excellence.
                  </p>
                  <div className="text-center">
                    <span className="inline-block bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent text-sm font-semibold">
                      "Together We Build the Future"
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="group bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-2xl">{feature.icon}</span>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-yellow-300 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                {feature.description}
              </p>

              {/* Decorative Gradient Line */}
              <div className={`mt-4 h-1 bg-gradient-to-r ${feature.gradient} rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300`}></div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <motion.div
            className="inline-flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(21, 128, 61, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-green-700 to-yellow-600 text-white font-semibold rounded-full shadow-lg hover:from-green-600 hover:to-yellow-500 transition-all duration-300"
            >
              Join Our Program
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-green-500/50 text-white font-semibold rounded-full hover:bg-green-700/20 hover:border-yellow-500/70 transition-all duration-300 backdrop-blur-sm"
            >
              Explore Research
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
