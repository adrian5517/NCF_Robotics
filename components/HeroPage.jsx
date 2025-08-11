import { motion , AnimatePresence } from 'framer-motion';
import ncflogo from '../src/assets/images/ncf_logo.png';
import { FiFacebook, FiX, FiMenu } from 'react-icons/fi';
import { useState } from 'react';
import '../src/assets/styles/font.css'
import '../src/assets/styles/Bubble.css'
import '../src/assets/styles/CustomCursors.css'
import FloatingContainers from './FloatingContainers'
import Home from '../components/HomeSection';

const HeroPage = () => {

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu =()=>{
    setIsOpen(!isOpen);
  }

   const [contactOpen, setContactOpen] = useState(false);
  const openContactForm = ()=> setContactOpen(true);
  const closeContactForm = () => setContactOpen(false);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Fixed Responsive Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center space-x-3"
            >
              <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 p-0.5">
                <div className="h-full w-full rounded-full bg-black/50 flex items-center justify-center">
                  <img src={ncflogo} alt="NCF Logo" className="h-8 w-8 md:h-10 md:w-10" />
                </div>
              </div>
              <div className="hidden sm:block">
                <span className="font-bold text-white text-lg md:text-xl bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  NCF ROBOTICS
                </span>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {['Home', 'About', 'Achievements', 'Events', 'Gallery', 'Contact'].map((item, index) => (
                <motion.a
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  href={`#${item.toLowerCase()}`}
                  className="relative text-white/90 hover:text-white font-medium transition-all duration-300 group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
                </motion.a>
              ))}
            </div>

            {/* Desktop CTA & Social */}
            <div className="hidden md:flex items-center space-x-4">
              <motion.a
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                href="#"
                className="text-white/80 hover:text-cyan-400 transition-colors duration-300"
              >
                <FiFacebook className="w-6 h-6" />
              </motion.a>
              
              <motion.button
                onClick={openContactForm}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-full hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
              >
                Contact Us
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={toggleMenu}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="lg:hidden p-2 text-white/90 hover:text-white transition-colors duration-300"
            >
              {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-black/90 backdrop-blur-md border-t border-white/10"
            >
              <div className="px-4 py-6 space-y-4">
                {['Home', 'About', 'Achievements', 'Events', 'Gallery', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={toggleMenu}
                    className="block text-white/90 hover:text-cyan-400 font-medium py-2 transition-colors duration-300"
                  >
                    {item}
                  </a>
                ))}
                
                <div className="pt-4 border-t border-white/20 flex items-center justify-between">
                  <a href="#" className="text-white/80 hover:text-cyan-400 transition-colors duration-300">
                    <FiFacebook className="w-6 h-6" />
                  </a>
                  
                  <button
                    onClick={() => {
                      toggleMenu();
                      openContactForm();
                    }}
                    className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-full hover:from-cyan-400 hover:to-blue-400 transition-all duration-300"
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      

      {/* Mobile Menu */}
      <motion.div 
      initial={{ opacity : 0, height: 0 }}
      animate={{
        opacity: isOpen ? 1 : 0,
        height: isOpen ? "auto" : 0,
      }}
      transition={{
        duration: 0.5
      }}
      className='md:hidden overflow-hidden bg-white dark:bg-gray-900
      shadow-lg px-4 py-5 space-y-4'>
        <nav className='flex flex-col space-y-3 font-poppins'>
          {["Home","About", "Achievements", "Events", "Gallery", "Contact"].map((item)=>(
            <a 
            className='text-gray-300 font-medium py-2'
            onClick={toggleMenu}
            key={item}
            href='#'>{item}</a>
          ))}
        </nav>

        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className='flex space-x-5'>

           <a href="#">
            <FiFacebook className='w-5 h-5 text-gray-300'/>
          </a>

           

          </div>

          <button 
          onClick={()=>{
            toggleMenu();
            openContactForm();
          }}
          className='mt-4 block w-full px-4 py-2 font-poppins text-center text-white
          rounded-lg bg-gradient-to-r from-violet-600 to-violet-400 font-semibold'>Contact me</button>

        </div>
      </motion.div>

      

      {/* Contact Form Modal */}
      <AnimatePresence>
        {contactOpen && (
        <motion.div 
        initial={{opacity: 0,}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >

          <motion.div 
          initial={{ scale: 0.8, opacity: 0 , y: 30}}
          animate={{scale: 1, opacity:1, y: 0}}
          exit={{ scale: 0.8, opacity: 0, y: 30 }}
          transition={{
            type:"spring",
            damping: 30,
            stiffness: 200,
            duration: 0.8
          }}

          className='bg-white/10 backdrop-blur-md rounded-xl shadow-xl w-full max-w-md p-6 border border-white/20'>
            <div className='flex justify-between items-center mb-4'>
              <h1 className='text-2xl font-bold text-white'>Get in Touch</h1>

              <button onClick={closeContactForm}>
                <FiX className='w-5 h-5 text-white/80 hover:text-white transition-colors duration-300' />
              </button>
            </div>
            {/* input fields for name, email, message */}
              <form className="space-y-4">
                <div>
                  {/* Name */}
                  <label htmlFor="name" className='block text-sm font-medium text-white/90 mb-1'>Name</label>
                  <input type="text" id="name" placeholder='Enter your Name' className='w-full px-4 py-2 border border-white/20
                  rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 bg-white/10 backdrop-blur-sm text-white placeholder-white/50' />
                </div>
                {/* Email */}
                <div>
                  <label htmlFor="email" className='block text-sm font-medium text-white/90 mb-1'>Email</label>
                  <input type="email" id="email" placeholder='Enter your Email' className='w-full px-4 py-2 border border-white/20
                  rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 bg-white/10 backdrop-blur-sm text-white placeholder-white/50' />
                </div>
                {/* Message */}
                <div>
                  <label htmlFor="message" className='block text-sm font-medium text-white/90 mb-1'>Message</label>
                  <textarea rows="4" id="message" placeholder='How can we help you?' className='w-full px-4 py-2 border border-white/20
                  rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 bg-white/10 backdrop-blur-sm text-white placeholder-white/50' />
                </div>

                {/* Submit Button */}
                <motion.button 
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className='w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500
                hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 rounded-lg shadow-md
                hover:shadow-lg hover:shadow-cyan-500/50 text-white font-semibold'
                >Send Message</motion.button>

              </form>

          </motion.div>

          
        </motion.div>
      )}
      </AnimatePresence>

      {/* Main Content Container */}
      <div className="relative min-h-screen">
        {/* Content Overlay */}
        <div className="relative z-10">
          <Home />
        </div>

        {/* Floating Containers */}
        <div className="absolute inset-0 z-10">
          <FloatingContainers />
        </div>
      </div>
    </div>
    
    // Main HeroPage Component
    
  );
};

export default HeroPage;
