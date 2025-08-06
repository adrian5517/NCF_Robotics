import Spline from '@splinetool/react-spline';
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
    <header className="absolute w-full z-50 transition-all duration-300 bg-gradient-to-br from-gray-200 via-gray-400 to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between h-16 md:h-20 bg-blurred">
        {/* Logo Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 25,
            delay: 0.3,
            duration: 2.2,
          }}
          className="flex items-center"
        >
          <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mr-3">
            <img src={ncflogo} alt="NCF Logo" className="h-10 w-10" />
          </div>
          <span className="font-poppins text-green-800 text-xl font-bold bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text pt-1">
            NCF ROBOTICS
          </span>
        </motion.div>

        

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-5 backdrop-blur-sm border border-white/40 p-1 hover:bg-white/30 shadow-sm rounded-lg ">
          {['Home', 'About', 'Camp', 'Achievements', 'Events' , "Gallery", "Contact"].map((item, index) => (
            <motion.a
              key={index}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 25,
                delay: 0.3 + index * 0.1,
                duration: 2.2,
              }}
              href={`#${item.toLowerCase()}`}
              className="relative text-green-800 px-4 py-2 font-medium transition duration-300 group"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
            </motion.a>
          ))}
        </nav>
        

        {/* Social Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            href="#"
            className="text-green-700 dark:text-green-700 hover:text-blue-800 dark:hover:text-blue-400 transition-colors duration-300"
          >
            <FiFacebook className="w-7 h-7" />
          </motion.a>
        </div>

          <motion.button 
              onClick={openContactForm}
              initial={{ opacity: 0 , scale: 0.8}}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay:1.6,
                duration: 0.8,
                type: 'spring',
                stiffness: 100,
                damping: 15,
              }}
              className='ml-4 px-4 py-2 rounded-xl bg-gradient-to-r from-yellow-400 sm:w-auto h-10 text-sm font-poppins
              to-gray-200 text-green-800 font-semibold hover:from-green-700 hover:to-green-800 hover:text-white
              transition-all duration-500 hidden md:block'>Contact Us</motion.button>

        
        {/* Home Section */}
          <Home className='absolute z-10'/>

        {/* Mobile Menu Button */}
        <motion.button 
          whileTap={{ scale: 0.7 }}
          onClick={toggleMenu}
          className='md:hidden text-green-800 ml-4'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.6, duration: 0.5 }}
        >
          {isOpen ? <FiX className='w-6 h-6' /> : <FiMenu className='w-6 h-6' />}
        </motion.button>
      </div>
      

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
      shadow-lg px-4 py-5 space-y-5'>
        <nav className='flex flex-col space-y-4 font-poppins'>
          {["Home","About", "Camp", "Achievements", "Events", "Gallery", "Contact"].map((item)=>(
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

          className='bg-white dark:bg-green-50 rounded-xl shadow-xl w-full max-w-md p-6'>
            <div className='flex justify-between items-center mb-4'>
              <h1 className='text-2xl font-bold text-green-900'>Get in Touch</h1>

              <button onClick={closeContactForm}>
                <FiX className='w-5 h-5 text-green-700 font-extrabold' />
              </button>
            </div>
            {/* input fields for name, email, message */}
              <form className="space-y-4">
                <div>
                  {/* Name */}
                  <label htmlFor="name" className='block text-sm font-medium text-green-800 mb-1'>Name</label>
                  <input type="text" id="name" placeholder='Enter your Name' className='w-full px-4 py-2 border border-green-700
                  rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-gray-200' />
                </div>
                {/* Email */}
                <div>
                  <label htmlFor="email" className='block text-sm font-medium text-green-800 mb-1'>Email</label>
                  <input type="email" id="email" placeholder='Enter your Email' className='w-full px-4 py-2 border border-green-700
                  rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-gray-200' />
                </div>
                {/* Message */}
                <div>
                  <label htmlFor="message" className='block text-sm font-medium text-green-800 mb-1'>Message</label>
                  <textarea rows="4" id="message" placeholder='How can we help you?' className='w-full px-4 py-2 border border-green-700
                  rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-gray-200' />
                </div>

                {/* Submit Button */}
                <motion.button 
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className='w-full px-4 py-2 bg-gradient-to-r from-green-700 to-green-900
                hover:from-green-800 hover:to-green-600 transition-all duration-300 rounded-lg shadow-md
                hover:shadow-lg hover:shadow-green-600/50 text-white font-semibold'
                >Send Message</motion.button>

              </form>

          </motion.div>

          
        </motion.div>
      )}
      </AnimatePresence>

      

      {/* Spline Section */}
      <Spline
        className="relative flex justify-center items-center h-[100vh] md:h-[80vh] w-full overflow-hidden z-[999] "
        scene="https://prod.spline.design/70Y85EO9ECpfi6pA/scene.splinecode"
      />

      {/* Floating Containers */}
      <FloatingContainers />

      
    </header>
    
    // Title Section
    // left section
    
  );
};

export default HeroPage;
