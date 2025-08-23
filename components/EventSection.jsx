import React from 'react'

const EventSection = () => {
  return (
    <div className='py-20 bg-green-500'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-3xl font-bold text-white'>Upcoming Events</h2>
        <div className='mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3'>
          {/* Event Card */}
          <div className='bg-gray-800 rounded-lg p-6'>
            <h3 className='text-xl font-semibold text-yellow-400'>Event Title</h3>
            <p className='mt-2 text-gray-300'>Event description goes here.</p>
            <a href='#' className='mt-4 inline-block text-yellow-400 hover:underline'>
              Learn More
            </a>
          </div>
          {/* More Event Cards... */}
        </div>
      </div>
    </div>
  )
}

export default EventSection
