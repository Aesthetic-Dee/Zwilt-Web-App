import React from 'react';
import ArrowDown from '../../assets/body/needjobArrowdown.png';

function NeedJob() {
  return (
    <main className='bg-slate-700 py-8 sm:py-12 px-4 sm:px-6 lg:px-8'>
        
        {/* Container */}
        <section className='bg-[#525AA0] w-full mx-auto py-12 sm:py-16 md:py-20 flex flex-col items-center justify-center space-y-6 transform -skew-y-3'>
            
            {/* Parallel - Skewed Container */}
            <div className='transform skew-y-3'>
                <h3 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-white max-w-4xl px-4'>Need a Job done, and done well? Get Started</h3>
                
                {/* Image Container */}
                <div className='mt-8 flex justify-center'>
                    <img src={ArrowDown} alt="arrowDown" className='w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 cursor-pointer transition-transform hover:scale-110'/>
                </div>
            </div>
        </section>
    </main>
  )
}

export default NeedJob;