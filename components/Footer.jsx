import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'

const Footer = () => {
  const [typedText, setTypedText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const matrixRef = useRef(null)
  const footerRef = useRef(null)
  
  const fullText = "Developed by Adrian Boncodin"
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?"

  // Matrix rain effect
  useEffect(() => {
    const canvas = matrixRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = 200

    const columns = Math.floor(canvas.width / 20)
    const drops = Array(columns).fill(0)

    const drawMatrix = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = '#22c55e'
      ctx.font = '15px monospace'

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)]
        ctx.fillText(text, i * 20, drops[i] * 20)

        if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    const interval = setInterval(drawMatrix, 50)

    const handleResize = () => {
      canvas.width = window.innerWidth
    }

    window.addEventListener('resize', handleResize)

    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // Typing effect
  useEffect(() => {
    let index = 0
    const typeInterval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(typeInterval)
      }
    }, 100)

    // Cursor blinking
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)

    return () => {
      clearInterval(typeInterval)
      clearInterval(cursorInterval)
    }
  }, [])

  // GSAP animation for footer entrance
  useEffect(() => {
    const tl = gsap.timeline()
    
    tl.fromTo(footerRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" }
    )
  }, [])

  return (
    <footer ref={footerRef} className="relative bg-black border-t border-green-500/30 overflow-hidden">
      {/* Matrix Rain Background */}
      <canvas
        ref={matrixRef}
        className="absolute inset-0 opacity-30"
        style={{ height: '200px' }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 via-black/50 to-black/80" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          
          {/* Left Section - Logo & Title */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-green-700 to-yellow-600 p-0.5">
                <div className="h-full w-full rounded-full bg-black flex items-center justify-center">
                  <span className="text-green-400 font-bold text-lg">NCF</span>
                </div>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">NCF Robotics</h3>
                <p className="text-green-400 text-sm">Innovation • Technology • Future</p>
              </div>
            </div>
          </motion.div>

          {/* Center Section - Developer Credits with Matrix Typing */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-center space-y-4"
          >
            <div className="bg-black/50 backdrop-blur-sm border border-green-500/30 rounded-lg p-6">
              <div className="font-mono text-green-400 text-lg mb-2">
                <span className="text-yellow-400">&gt;</span> console.log();
              </div>
              <div className="font-mono text-white text-xl">
                {typedText}
                {showCursor && <span className="text-green-400 animate-pulse">|</span>}
              </div>
              <div className="mt-4 text-green-400 text-sm">
                <span className="text-yellow-400">[</span>
                Full Stack Developer
                <span className="text-yellow-400">]</span>
              </div>
            </div>
          </motion.div>

          {/* Right Section - Links & Social */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-4 text-right"
          >
            <div className="space-y-2">
              <h4 className="text-white font-semibold">Connect</h4>
              <div className="space-y-1">
                <a href="https://github.com/adrian5517" className="block text-green-400 hover:text-yellow-400 transition-colors text-sm">
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/adrian-boncodin-205aa9255/" className="block text-green-400 hover:text-yellow-400 transition-colors text-sm">
                  LinkedIn
                </a>
                
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-8 pt-6 border-t border-green-500/20"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-green-400 text-sm font-mono">
                <span className="text-yellow-400">©</span> 2025 NCF Robotics. 
                <span className="text-white"> All systems operational.</span>
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-xs font-mono">Status: Online</span>
              </div>
              <div className="text-green-400 text-xs font-mono">
                Build: v2.0.{new Date().getFullYear()}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-green-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
