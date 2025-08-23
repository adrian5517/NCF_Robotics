import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import Spline from '@splinetool/react-spline'
import '../src/assets/styles/font.css'
import TextType from '../components/TextType'

const HomeSection = () => {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const ctaRef = useRef(null)
  const badgeRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 1 })
    
    tl.fromTo(badgeRef.current, 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    )
    .fromTo(titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" }, "-=0.5"
    )
    .fromTo(subtitleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.3"
    )
    .fromTo(ctaRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.2"
    )
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Spline Background - Interactive */}
      <div className="absolute inset-0 z-0">
        {/* Desktop Spline - Hidden on mobile */}
        <Spline
          className="w-full h-full hidden md:block"
          scene="https://prod.spline.design/oUiFqAtE06aN-dbT/scene.splinecode"
          style={{
            width: '100%',
            height: '100%',
            pointerEvents: 'auto',
            transformOrigin: 'center',
            background: 'linear-gradient(to bottom right, #001107ff, #00220dff, rgba(107, 92, 9, 1))'
          }}
        />
        
        {/* Mobile Spline - Shown only on mobile */}
        <Spline
          className="w-full h-full block md:hidden"
          scene="https://prod.spline.design/SsGTbqYKisrW188l/scene.splinecode" 
          style={{
            width: '100%',
            height: '100%',
            pointerEvents: 'auto',
            transformOrigin: 'center',
            background: 'linear-gradient(to bottom right, #013a18ff, #035824ff, #c5b202ff)',
            transform: 'scaleX(-1)' // Flip horizontally for a mirrored effect
          }}
        />
      </div>

      {/* Interactive Indicator */}
      <div className="absolute top-24 right-4 z-30 pointer-events-none mt-8 lg:mt-0">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="flex items-center space-x-2 bg-gradient-to-r from-green-700/20 to-yellow-600/20 backdrop-blur-sm border border-green-500/30 rounded-full px-3 py-1"
        >
          <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse"></div>
          <span className="text-green-300 text-xs font-medium">Move Mouse to Interact</span>
        </motion.div>
      </div>

      {/* Content Overlay - Selective Pointer Events */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pointer-events-none">
        <div className="pointer-events-none">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div ref={heroRef} className="space-y-8 pointer-events-none">
                {/* Badge */}
                <motion.div
                  ref={badgeRef}
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-700/20 to-yellow-600/20 backdrop-blur-sm border border-green-500/30 rounded-full px-4 py-2 pointer-events-none"
                >
                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                  <span className="text-green-300 text-sm font-medium">Naga College Foundation</span>
                </motion.div>

                {/* Main Title */}
                <div ref={titleRef} className="space-y-4 pointer-events-none">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
                    <TextType
                      text={["NCF", "ROBOTICS"]}
                      typingSpeed={80}
                      pauseDuration={1000}
                      showCursor={true}
                      cursorCharacter="|"
                      className="bg-gradient-to-r from-yellow-400 via-green-400 to-yellow-500 bg-clip-text text-transparent section-font"
                    />
                  </h1>
                </div>

                {/* Subtitle */}
                <div ref={subtitleRef} className="space-y-4 pointer-events-none">
                  <p className="text-xl sm:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent">
                    Leap to the Future
                  </p>
                  <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
                    Discover cutting-edge robotics, AI innovation, and hands-on learning experiences that shape tomorrow's technology leaders.
                  </p>
                </div>

                {/* CTA Buttons - Enable Pointer Events */}
                <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 pt-4 pointer-events-auto">
                  <motion.a
                    href="#about"
                    whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(34, 197, 94, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-green-700 to-yellow-600 text-white font-semibold rounded-full shadow-lg hover:from-green-600 hover:to-yellow-500 transition-all duration-300 text-center cursor-pointer"
                  >
                    Get Started
                  </motion.a>
                  
                  <motion.a
                    href="#achievements"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 border-2 border-green-500/50 text-white font-semibold rounded-full hover:bg-green-700/20 hover:border-yellow-600/70 transition-all duration-300 backdrop-blur-sm text-center cursor-pointer"
                  >
                    Learn More
                  </motion.a>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 pt-8 pointer-events-none">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-yellow-400">20+</div>
                    <div className="text-sm text-white/70">Students</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-green-400">11</div>
                    <div className="text-sm text-white/70">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-yellow-600">2</div>
                    <div className="text-sm text-white/70">Years</div>
                  </div>
                </div>
              </div>

              {/* Right Content - Hidden on mobile to maintain clean design */}
              {/* <div className="hidden lg:block" style={{ pointerEvents: 'none' }}>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.2, delay: 1.5 }}
                  className="relative"
                  style={{ pointerEvents: 'none' }}
                >
                 
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-3xl blur-3xl"></div>
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-8">
                    <div className="space-y-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xl">🤖</span>
                        </div>
                        <div>
                          <h3 className="text-white font-semibold">AI-Powered Robotics</h3>
                          <p className="text-white/70 text-sm">Advanced automation solutions</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xl">⚡</span>
                        </div>
                        <div>
                          <h3 className="text-white font-semibold">Innovation Labs</h3>
                          <p className="text-white/70 text-sm">Cutting-edge research facilities</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xl">🎓</span>
                        </div>
                        <div>
                          <h3 className="text-white font-semibold">Expert Training</h3>
                          <p className="text-white/70 text-sm">Learn from industry professionals</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div> */}
            </div>
        </div>
      </div>
    </section>
  )
}

export default HomeSection
