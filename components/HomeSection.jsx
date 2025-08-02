import { motion } from "motion/react"
import '../src/assets/styles/font.css'
import '../src/assets/styles/Bubble.css'

const HomeSection = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Sci-fi background with animated elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-400 to-black">
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300ffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        {/* Animated lines */}
        <motion.div 
          animate={{ 
            x: ["-100%", "100%"]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60"
        />
        
        <motion.div 
          animate={{ 
            x: ["100%", "-100%"]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
            delay: 2
          }}
          className="absolute bottom-1/3 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-40"
        />
      </div>

      {/* Floating sci-fi elements */}
      <motion.div
        animate={{ 
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-20 left-10 w-16 h-16 border-2 border-cyan-400/30 rotate-45 bg-cyan-400/5"
      />
      
      <motion.div
        animate={{ 
          y: [-20, 20, -20],
          opacity: [0.3, 0.8, 0.3]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-40 right-20 w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full shadow-lg shadow-purple-500/20"
      />

      <motion.div
        animate={{ 
          x: [-30, 30, -30],
          rotate: [0, 180, 360],
        }}
        transition={{ 
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-32 left-1/4 w-8 h-8 border-2 border-green-400/40 rounded-full bg-green-400/10"
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
            type: "spring",
            damping: 20,
            stiffness: 100,
            duration: 1 
        }}
        className="relative z-10 flex flex-col items-center justify-center h-screen text-white text-center p-6"
      >
        {/* Enhanced title with sci-fi effects */}
        <div className="relative mb-8">
          {/* Glow effect behind text */}
          <div className="absolute inset-0 blur-3xl">
            <h2 className="text-center section-font text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-cyan-400/30">
              NCF Robotics
            </h2>
          </div>
          
          <h2 className="relative text-center section-font text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-green-900 drop-shadow-2xl">
            {"NCF Robotics".split("").map((child, idx) => (
              <motion.span 
                key={idx}
                className="hoverText inline-block"
                initial={{ 
                  opacity: 0,
                  y: 50,
                  rotateX: -90 
                }}
                animate={{ 
                  opacity: 1,
                  y: 0,
                  rotateX: 0 
                }}
                transition={{
                  delay: idx * 0.1,
                  type: "spring",
                  damping: 12,
                  stiffness: 200
                }}
                whileHover={{
                  scale: 1.1,
                  textShadow: "0 0 20px rgba(34, 197, 94, 0.8)",
                  transition: { duration: 0.3 }
                }}
              >
                {child}
              </motion.span>
            ))}
          </h2>
        </div>

        {/* Enhanced subtitle with sci-fi styling */}
        <div className="relative">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              delay: 1.5,
              type: "spring",
              damping: 15,
              stiffness: 100 
            }}
            className="text-center section-font text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-orange-500 mt-4 z-[999] relative"
          >
            {/* Animated border */}
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 20px rgba(249, 115, 22, 0.3)",
                  "0 0 40px rgba(249, 115, 22, 0.6)",
                  "0 0 20px rgba(249, 115, 22, 0.3)"
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 border border-orange-500/30 rounded-lg -m-4"
            />
            
            {"  Leap Into        The Future.".split("").map((child, idx) => (
              <motion.span 
                key={idx}
                className="hoverText inline-block"
                initial={{ 
                  opacity: 0,
                  y: 30 
                }}
                animate={{ 
                  opacity: 1,
                  y: 0 
                }}
                transition={{
                  delay: 2 + idx * 0.05,
                  type: "spring",
                  damping: 20,
                  stiffness: 150
                }}
                whileHover={{
                  scale: 1.05,
                  color: "#00ffff",
                  textShadow: "0 0 15px rgba(0, 255, 255, 0.8)",
                  transition: { duration: 0.2 }
                }}
              >
                {child === " " ? "\u00A0" : child}
              </motion.span>
            ))}
          </motion.h2>
        </div>

        {/* Sci-fi description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 0.8 }}
          className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto mt-8 mb-12 leading-relaxed px-4 font-light"
        >
          <span className="text-cyan-400">Discover</span> cutting-edge robotics technology and innovation. 
          <span className="text-purple-400"> Join us</span> in shaping tomorrow's automated world with 
          <span className="text-green-400"> advanced AI</span> and precision engineering.
        </motion.p>

        {/* Sci-fi CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 30px rgba(0, 255, 255, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 min-w-[200px] border border-cyan-400/30 z-[999]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10 flex items-center justify-center gap-2">
              Initialize System
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-cyan-300"
              >
                ➤
              </motion.span>
            </span>
          </motion.button>

          <motion.button
            whileHover={{ 
              scale: 1.05,
              borderColor: "#00ffff",
              color: "#00ffff",
              boxShadow: "0 0 20px rgba(0, 255, 255, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-gray-500 text-gray-300 font-semibold rounded-lg transition-all duration-300 min-w-[200px] backdrop-blur-sm"
          >
            Explore Tech
          </motion.button>
        </motion.div>

        {/* Animated scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-cyan-400"
          >
            <span className="text-xs mb-2 font-mono">SCROLL_DOWN</span>
            <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center relative overflow-hidden">
              <motion.div
                animate={{ 
                  y: [0, 12, 0],
                  opacity: [1, 0.3, 1]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-cyan-400 rounded-full mt-2 shadow-lg shadow-cyan-400/50"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default HomeSection


