import React from 'react';
import FooterLogo  from '../../assets/footer/footerlogo.png'

function footer() {
  return (
    // Main footer container with responsive padding
    <footer className='bg-slate-700 text-gray-200'>
      <div className='px-4 sm:px-6 py-8 sm:py-12'>
        {/* Main content wrapper */}
        <div className='max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between space-y-12 lg:space-y-0'>
          {/* Left column: Logo, description, and buttons */}
          <div className='space-y-6 w-full lg:w-auto'>
            <img src={FooterLogo} alt="Logo" className='h-8 sm:h-10' />
            <p className='font-semibold text-sm sm:text-base max-w-sm'>
              We take complex hiring processes - and simplify them. Connecting you to the world's highly qualified talent pool.
            </p>
            {/* Button container */}
            <div className='space-y-3'>
              <span className='font-thin'>Link and Redirect</span>
              {/* Responsive button layout */}
              <div className='flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3'>
                <button className='bg-gray-800 text-white font-semibold py-3 px-6 sm:px-8 rounded-full hover:bg-yellow-500 hover:text-slate-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition-colors'>Hire now</button>
                <button className='bg-gray-800 text-white font-semibold py-3 px-6 sm:px-8 rounded-full hover:bg-yellow-500 hover:text-slate-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition-colors'>Apply now</button>
              </div>
            </div>
          </div>

          {/* Right column: Heading and link sections */}
          <div className='space-y-8 w-full lg:w-auto'>
            {/* Main heading with responsive font size */}
            <h1 className='text-yellow-500 text-3xl sm:text-4xl lg:text-5xl max-w-2xl'>Connecting the right people to the right businesses.</h1>
            
            {/* Grid for link sections */}
            <div className='grid grid-cols-2 sm:grid-cols-4 gap-8 text-gray-400'>
              {/* Dynamically generate link sections */}
              {[
                {title: 'Platform', items: ['Find Work', 'Find Talent', 'Articles', 'About Us']},
                {title: 'Categories', items: ['Data Science', 'IT & Networking', 'Web & Mobile']},
                {title: 'Help', items: ['Contact Us']},
                {title: 'GET IN TOUCH', items: ['Instagram', 'LinkedIn', 'Twitter']}
              ].map((section, index) => (
                <div key={index}>
                  <h4 className='text-lg sm:text-xl text-white mb-2'>{section.title}</h4>
                  <ul className='space-y-1'>
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className='hover:text-yellow-500 transition-colors cursor-pointer text-sm sm:text-base'>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer bottom: copyright and links */}
      <div className='border-t border-gray-600 px-4 sm:px-6 py-4 flex flex-col sm:flex-row justify-between items-center text-sm'>
        <span className='text-white mb-2 sm:mb-0'>All rights reserved by Zwiit</span>
        <ul className='flex flex-row text-gray-400 space-x-4'>
          <li className='underline cursor-pointer'>Privacy policy</li>
          <li className='underline cursor-pointer'>Terms and Condition</li>
        </ul>
      </div>
    </footer>
  )
}

export default footer;
