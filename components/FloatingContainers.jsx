import { motion } from "framer-motion";

const FloatingContainers = () => {
  return (
    <motion.div
      className="hidden xl:flex fixed top-24 right-6 lg:right-12 z-[999] flex-col gap-6 items-end"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Camp Enrollees */}
      <motion.div
        animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 30px rgba(0, 255, 255, 0.3)",
        }}
        className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20 w-64"
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-white">Camp Enrollees</span>
        </div>
        <div className="text-2xl font-bold text-white mb-1">120+</div>
        <div className="text-sm text-gray-300">Students Registered</div>
      </motion.div>

      {/* Robots Built */}
      <motion.div
        animate={{ y: [10, -10, 10], rotate: [0, -3, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 30px rgba(16, 185, 129, 0.3)",
        }}
        className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20 w-64"
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-white">Robots Built</span>
        </div>
        <div className="text-2xl font-bold text-white mb-1">32</div>
        <div className="text-sm text-gray-300">Projects Completed</div>
      </motion.div>

      {/* Innovation */}
      <motion.div
        animate={{ scale: [1, 1.05, 1], rotate: [0, 2, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 30px rgba(147, 51, 234, 0.3)",
        }}
        className="bg-gradient-to-br from-purple-500/20 to-cyan-500/20 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20 w-64"
      >
        <div className="text-center">
          <div className="text-4xl mb-2">🤖</div>
          <div className="text-lg font-bold text-white">Innovation</div>
          <div className="text-sm text-gray-300">AI + Robotics Projects</div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FloatingContainers;
