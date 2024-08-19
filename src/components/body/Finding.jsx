import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import FindingImage from '../../assets/body/finding.png';
import FindingSearchBar from '../../assets/body/finding-search.png';

const Finding = () => {
    const [selectedTitle, setSelectedTitle] = useState('IT & Development');

    const handleTitleClick = (title) => {
      setSelectedTitle(title);
    };

    const titleVariants = {
        hover: {
          scale: 1.1,
          transition: {
            duration: 0.3,
          },
        },
      };
    
      const listItemVariants = {
        initial: { opacity: 0, y: 20 },
        animate: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            staggerChildren: 0.1,
          },
        },
      };

  return (

    <main className='bg-neutral-500 min-h-screen py-12 px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center'>
    {/* Main container with responsive padding and full height */}
    
        <section className='flex flex-col items-center gap-8 text-center'>
            {/* Upper section with title, subtitle, and search bar */}
            
            <div className='text-slate-800'>
            {/* Title container */}
            <h2 className='font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl flex flex-wrap justify-center items-center'>
                {/* Responsive font size for title */}
                Finding the right fit 
                <img className='inline ml-2 w-12 sm:w-16 md:w-20' src={FindingImage} alt="Find the right fit illustration" />
                {/* Responsive image size */}
            </h2>
            <p className='font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-2'>
                {/* Subtitle with matching responsive font size */}
                has never been easier.
            </p>
            </div>
            
            <p className='text-xl sm:text-2xl text-gray-800'>
            {/* Tagline with responsive font size */}
            Explore your potential with our courses and community
            </p>
            
            <div className="relative w-full max-w-md mt-5">
            {/* Search bar container with maximum width */}
            <input type="text" className="w-full h-12 sm:h-14 pl-5 pr-12 border rounded-lg outline-none" placeholder="Search..." />
            {/* Responsive height for input field */}
            <div className="absolute inset-y-0 right-3 flex items-center cursor-pointer">
                <img className='w-8 h-8 sm:w-11 sm:h-11' src={FindingSearchBar} alt="Finding search bar icon" />
                {/* Responsive size for search icon */}
            </div>
            </div>
        </section>

        <section className='bg-slate-100 mt-12 w-full max-w-5xl rounded-2xl p-6'>
            {/* Lower section with category selection and job listings */}
            
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
            {/* Category selection buttons with responsive gap */}
            <motion.div 
                className={`cursor-pointer font-bold px-4 py-2 rounded-xl ${
                selectedTitle === 'IT & Development' ? 'bg-slate-800 text-yellow-500' : ''
                }`}
                onClick={() => handleTitleClick('IT & Development')}
            >
                <p>IT & Development</p>
            </motion.div>
            <motion.div 
                className={`cursor-pointer font-bold px-4 py-2 rounded-xl ${
                selectedTitle === 'Design & Creative' ? 'bg-slate-800 text-yellow-500' : ''
                }`}
                onClick={() => handleTitleClick('Design & Creative')}
            >
                <p>Design & Creative</p>
            </motion.div>
            </div>

            <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 justify-items-center font-semibold"
            variants={listItemVariants} 
            initial="initial" 
            animate="animate"
            >
            {/* Job listings grid with responsive column layout */}
            {(selectedTitle === 'IT & Development' ? [
                ['Python Developer', 'Shopify Developer', 'MERN Stack Developer', 'Full Stack Developer'],
                ['Data Scientist', 'Front-End Developer', 'Shopify Developer', 'Python Developer'],
                ['Shopify Developer', 'Python Developer', 'Full Stack Developer', 'Explore More']
            ] : [
                ['Graphic Designer', 'Designer', 'Interior Designer', 'Animator'],
                ['Data Scientist', 'Photographer', 'Product Designer', 'Web Designer'],
                ['Graphic Designer', 'Photographer', 'Interior Designer', 'Explore More']
            ]).map((column, columnIndex) => (
                <div key={columnIndex}>
                <motion.ul className='flex flex-col gap-1'>
                    {column.map((item, itemIndex) => (
                    <motion.li key={itemIndex}>{item}</motion.li>
                    ))}
                </motion.ul>
                </div>
            ))}
            </motion.div>
        </section>
    </main>
  )
}

export default Finding;