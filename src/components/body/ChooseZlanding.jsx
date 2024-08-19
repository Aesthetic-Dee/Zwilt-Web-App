import React from 'react';
import { useState } from 'react';
import ChatImage from '../../assets/body/choosezlanding.png';
import DashIcon from '../../assets/body/choosezlanding2.png';
import LearnMore from '../../assets/body/choosezlanding3.png';
import NextButton from '../../assets/body/itmore.png';
import PreviousButton from '../../assets/body/itmore2.png';

const ChooseZlanding = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const slides = [
      {
        title: "Onboard without the risk.",
        points: [
          "We pick the best for you to select.",
          "Thousands of vetted candidates in dozens of categories.",
          "Risk-free resource swapping for the best fit.",
        ],
        image: ChatImage
      },
      {
        title: "Seamless Talent Acquisition, Guaranteed.",
        points: [
          "We curate top talent for your consideration.",
          "Extensive pool of pre-screened talent across various industries.",
          "Try before you hire with our no-risk talent matching.",
        ],
        image: ChatImage
      },
      {
        title: "Find Your Perfect Hire, Risk-Free.",
        points: [
          "Discover handpicked candidates tailored to your needs.",
          "Access a vast library of qualified candidates in multiple fields.",
          "Experience a hassle-free talent exchange without commitment.",
        ],
        image: ChatImage
      },
      // Add more slides here with different content and images
    ];
  
    const handleNext = () => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    };
  
    const handlePrev = () => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };
  
    const currentSlideData = slides[currentSlide];
  
    return (
    <main className='w-full bg-neutral-500 pt-10 sm:pt-16 md:pt-20'>
        {/* Main container with responsive top padding */}

        <section className='flex flex-col lg:flex-row px-4 sm:px-6 md:px-8 gap-8'>
            {/* Flex container for "Why choose Zwilt?" and slider sections */}

            <section className='w-full lg:w-2/6 px-2 sm:px-4 md:px-5'>
                {/* "Why choose Zwilt?" section */}
                <p className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4'>Why choose Zwilt?</p>
                {/* Responsive font size for the title */}
                <p className='text-base sm:text-lg'>We take complex hiring processes - and simplify them. Connecting you to the world's highly qualified talent pool.</p>
                {/* Responsive font size for the description */}
            </section>

            <section className="w-full lg:w-4/6 mx-auto px-4 sm:px-8 md:px-12 py-6 sm:py-8 bg-slate-100 rounded-xl">
                {/* Slider section */}
                <div className="flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-1/2 flex flex-col gap-4">
                        {/* Left side of the slider */}
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4">{currentSlideData.title}</h2>
                        {/* Responsive font size for slide title */}
                        {currentSlideData.points.map((point, index) => (
                        <div key={index} className="flex items-start items-center mb-3">
                            <img src={DashIcon} alt="" className="w-4 h-4 mobile:w-5 mobile:h-2 mr-2 mt-1" />
                            <p className='text-base sm:text-lg md:text-xl'>{point}</p>
                            {/* Responsive font size for bullet points */}
                        </div>
                        ))}
                        <div className="flex items-center mt-4 text-blue-500 cursor-pointer">
                            <img src={LearnMore} alt="" className="w-10 h-10 sm:w-5 sm:h-5 mr-2" />
                            <p className='text-black text-base sm:text-lg font-semibold'>Learn More</p>
                            {/* Responsive font size and image size for "Learn More" */}
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 mt-6 md:mt-0">
                        {/* Right side of the slider (image) */}
                        <img src={currentSlideData.image} alt="Onboarding" className="w-full h-auto" />
                    </div>
                </div>
            </section>
        </section>

        <div className="mt-8 flex justify-center items-center px-4">
            {/* Slider navigation controls */}
            <button onClick={handlePrev} className="mr-2 sm:mr-4">
                <img className='w-12 sm:w-14 md:w-16 active:border-2 active:border-slate-800 active:rounded-3xl' src={PreviousButton} alt="Previous" />
                {/* Responsive size for previous button */}
            </button>
            <div className="w-32 sm:w-48 md:w-64 h-2 bg-white rounded-full overflow-hidden">
                {/* Progress bar */}
                <div 
                className="h-full bg-black transition-all duration-300 ease-in-out"
                style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
                ></div>
            </div>
            <button onClick={handleNext} className="ml-2 sm:ml-4">
                <img className='w-12 sm:w-14 md:w-16 active:border-2 active:border-slate-800 active:rounded-3xl' src={NextButton} alt="Next" />
                {/* Responsive size for next button */}
            </button>
        </div>

        <section className='bg-yellow-500 py-6 sm:py-8 mt-8 sm:mt-10'>
            {/* FAQ section */}
            <p className='text-center font-bold cursor-pointer text-base sm:text-lg md:text-xl'>Frequent asked questions</p>
            {/* Responsive font size for FAQ text */}
        </section>
    </main>
    );
  };
  
  export default ChooseZlanding;