import { motion } from "motion/react";

const FloatingContainers = () => {
  return (
    <>
      {/* AI Processing Container */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 4, duration: 1 }}
        className="absolute top-20 right-8 lg:right-16 xl:right-20 z-[999]"
      >
        <motion.div
          animate={{ 
            y: [-10, 10, -10],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20 max-w-xs cursor-floating"
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 255, 255, 0.3)" }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-white">AI Processing</span>
          </div>
          <div className="text-2xl font-bold text-white mb-1">99.9%</div>
          <div className="text-sm text-gray-300">Accuracy Rate</div>
        </motion.div>
      </motion.div>

      {/* Active Robots Container */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 4.5, duration: 1 }}
        className="absolute top-80 right-8 lg:right-16 xl:right-20 z-[999]"
      >
        <motion.div
          animate={{ 
            y: [10, -10, 10],
            rotate: [0, -3, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20 max-w-xs cursor-data"
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(16, 185, 129, 0.3)" }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-white">Active Robots</span>
          </div>
          <div className="text-2xl font-bold text-white mb-1">1,247</div>
          <div className="text-sm text-gray-300">Currently Operating</div>
        </motion.div>
      </motion.div>

      {/* Innovation Container */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 5, duration: 1 }}
        className="absolute bottom-40 right-8 lg:right-16 xl:right-20 z-[999]"
      >
        <motion.div
          animate={{ 
            scale: [1, 1.05, 1],
            rotate: [0, 2, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="bg-gradient-to-br from-purple-500/20 to-cyan-500/20 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20 cursor-glow"
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(147, 51, 234, 0.3)" }}
        >
          <div className="text-center">
            <div className="text-4xl mb-2">🚀</div>
            <div className="text-lg font-bold text-white">Innovation</div>
            <div className="text-sm text-gray-300">Powered by AI</div>
          </div>
        </motion.div>
      </motion.div>

      {/* Technology Stats Container */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 5.5, duration: 1 }}
        className="absolute bottom-20 left-8 lg:left-16 xl:left-20 z-[999]"
      >
        <motion.div
          animate={{ 
            x: [-5, 5, -5],
            opacity: [0.8, 1, 0.8]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-cyan-400/30 max-w-xs cursor-tech"
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(6, 182, 212, 0.3)" }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-white">System Status</span>
          </div>
          <div className="text-2xl font-bold text-white mb-1">Online</div>
          <div className="text-sm text-gray-300">All Systems Go</div>
        </motion.div>
      </motion.div>

      {/* Performance Metrics Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 6, duration: 1 }}
        className="absolute top-1/2 right-4 lg:right-8 z-[999]"
      >
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
          className="bg-gradient-to-tr from-orange-500/20 to-yellow-500/20 backdrop-blur-md rounded-full p-4 shadow-xl border border-orange-400/30 w-20 h-20 flex items-center justify-center cursor-glow"
          whileHover={{ scale: 1.2, boxShadow: "0 0 40px rgba(249, 115, 22, 0.4)" }}
        >
          <div className="text-center">
            <div className="text-xl">⚡</div>
            <div className="text-xs text-white font-bold">99%</div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default FloatingContainers;
