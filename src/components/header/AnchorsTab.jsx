import React, { useState } from 'react';
import ZlandingLogo from '../../assets/header/zlanding-logo.png';

// Open & Close State Function For Burger Menu
function AnchorsTab() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    // Header
    <header className="w-full py-4 px-4 md:py-8">
      <div className='max-w-7xl mx-auto bg-slate-800 text-white rounded-2xl'>
        <div className="flex items-center justify-between p-4">
          
          {/* Zwith Logo */}
          <img className='w-28 md:w-36 h-auto cursor-pointer' src={ZlandingLogo} alt="Zlanding Logo" />
          
          {/* Burger menu for mobile */}
          <button className="md:hidden" onClick={toggleMenu}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Desktop menu */}
          <nav className="mobile:hidden pad:flex pc:flex items-center space-x-6">
            <a href="#" className='hover:text-yellow-400 font-bold'><span className='pad:hidden lg:inline'>Find</span> Work</a>
            <a href="#" className='hover:text-yellow-400 font-bold'><span className='pad:hidden lg:inline'>Find</span> Talent</a>
            <a href="#" className='hover:text-yellow-400 font-bold'>Articles</a>
            <a href="#" className='hover:text-yellow-400 font-bold'>About <span className='pad:hidden lg:inline'>Us</span></a>
            <a href="#" className='hover:text-yellow-400 font-bold'>Contact <span className='pad:hidden lg:inline'>Us</span></a>
          </nav>

          {/* Login & Join Now container */}
          <div className='mobile:hidden pad:flex pc:flex items-center space-x-4'>
            <a className='hover:text-yellow-400 font-bold' href="">Login</a>
            <button className='bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full'>
              <a href="#">Join Now</a>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <a href="#" className='block py-2 px-4 hover:bg-slate-700'>Find Work</a>
            <a href="#" className='block py-2 px-4 hover:bg-slate-700'>Find Talent</a>
            <a href="#" className='block py-2 px-4 hover:bg-slate-700'>Articles</a>
            <a href="#" className='block py-2 px-4 hover:bg-slate-700'>About Us</a>
            <a href="#" className='block py-2 px-4 hover:bg-slate-700'>Contact Us</a>
            <a href="#" className='block py-2 px-4 hover:bg-slate-700'>Login</a>
            <a href="#" className='block py-2 px-4 bg-yellow-500 hover:bg-yellow-600 text-center mt-2'>Join Now</a>
          </div>
        )}
      </div>
    </header>
  );
}

export default AnchorsTab;