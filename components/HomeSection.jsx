import React from 'react'
import '../src/assets/styles/font.css'
import TextType from '../components/TextType'

const HomeSection = () => {
  return (
    <div className='fixed bottom-20 left-6 lg:left-12 flex flex-col gap-6 items-end'>
      <section id="home" className="min-h-screen flex items-center justify-center top-20">
        <div className="text-center">
          <h1 className="text-8xl font-bold text-green-900 mb-4 section-font z-[-999]">
            <TextType
              text={["NCF ROBOTICS", "WELCOME TO"]}
              typingSpeed={100}
              pauseDuration={2000}
              showCursor={true}
              cursorCharacter="|"
              className="bg-clip-text bg-gradient-to-r from-green-600 via-green-700 to-green-900 z-[0]"
            />
          </h1>
          
        </div>

        
      </section>
      
    </div>
  )
}

export default HomeSection
