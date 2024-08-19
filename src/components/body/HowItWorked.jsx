import React from 'react';
import { useState } from 'react';
import Qoute from '../../assets/body/qoute.png';
import Previous from '../../assets/body/jason-previous-icon.png';
import Next from '../../assets/body/jason-next-icon.png';

import JasonImage from '../../assets/body/jason.png';
import DoctorDreImage from '../../assets/body/jason-fellow1.webp';
import DolphImage from '../../assets/body/jason-fellow2.webp';
import ChristopherImage from '../../assets/body/jason-fellow3.jpg';

// Array of testimonial objects containing user information and testimonies.
const testimonials = [
  {
    name: 'Jason Makki',
    company: 'GROOVE',
    location: 'San Francisco',
    testimony: "Zwilt enabled us to deliver on time and they've been heavy hitters in our corner since. Zwilt enabled us to deliver on time and they've been heavy hitters in our corner since. Zwilt enabled us to deliver on time..",
    image: JasonImage,
  },
  {
    name: 'Doctor Dre',
    company: 'AMAZON',
    location: 'Texas',
    testimony: "Zwilt's contributions were essential to our ability to meet project deadlines. Their timely and efficient support systems allowed us to streamline our operations, optimize resource allocation, and ultimately deliver our product on schedule.",
    image: DoctorDreImage,
  },
  {
    name: 'Dolph Roober',
    company: 'CRUNCHBASE',
    location: 'Cape Town',
    testimony: " Since this initial success, Zwilt has continued to be a formidable ally, consistently providing exceptional service and contributing significantly to our ongoing achievements. Our partnership with Zwilt proved instrumental in ensuring our project was delivered on time.",
    image: DolphImage,
  },
  {
    name: 'Christopher Hart',
    company: 'LABX TECH',
    location: 'Frankfurt',
    testimony: "Zwilt's role in our timely delivery cannot be overstated. Their innovative solutions and unwavering commitment to our success enabled us to overcome obstacles and achieve our project goals. Their continued involvement has been a driving force behind our continued growth and success.",
    image: ChristopherImage,
  },
  // Add more testimonial objects here
];

const TestimonialSection = () => {
    // State to keep track of the current testimonial index
  const [currentIndex, setCurrentIndex] = useState(0);

    // Function to handle going to the previous testimonial
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

    // Function to handle going to the next testimonial
  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

    // Get the current testimonial based on the currentIndex
  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="bg-slate-800 text-white mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-2">
        {/* Quote image */}
        <img className='ml-auto pr-4 sm:pr-8 lg:pr-14 w-24 sm:w-32 lg:w-60' src={Qoute} alt="Quote" />
        <div className="grid lg:grid-cols-2 gap-8">
            {/* Left column: Large display of current testimonial */}
            <div className="flex flex-col gap-3">
                <p className="text-4xl sm:text-5xl lg:text-7xl">How it worked for</p>
                <p className="text-4xl sm:text-5xl lg:text-7xl font-bold text-yellow-500 mb-4">{currentTestimonial.name}</p>
                <img src={currentTestimonial.image} alt={currentTestimonial.name} className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full mb-4 object-cover" />
                <p className="text-4xl sm:text-5xl lg:text-7xl">at</p>
                <p className="text-4xl sm:text-5xl lg:text-7xl font-semibold text-purple-500">{currentTestimonial.company}</p>
                <p className="mt-4 text-white text-base sm:text-lg lg:text-xl">{currentTestimonial.testimony}</p>
                {/* Navigation buttons */}
                <div className="mt-6 flex space-x-4">
                    <img className="cursor-pointer w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 hover:border-gray-300 hover:border-2 rounded-2xl transition-all duration-200 active:scale-95" src={Previous} alt="Previous Testimony" onClick={handlePrevious} />
                    <img className="cursor-pointer w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 hover:border-gray-300 hover:border-2 rounded-2xl transition-all duration-200 active:scale-95" src={Next} alt="Next Testimony" onClick={handleNext} />
                </div>
            </div>

            {/* Right column: Detailed view of current testimonial */}
            <div className="flex flex-col sm:flex-row gap-3">
                <img src={currentTestimonial.image} alt={currentTestimonial.name} className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full mb-4 object-cover" />
                <div>
                    <div className="mb-4">
                        <p className="text-xl sm:text-2xl font-semibold">{currentTestimonial.name}</p>
                        <p className="text-base sm:text-lg text-gray-400">From {currentTestimonial.company}</p>
                        <p className="text-base sm:text-lg text-gray-400">{currentTestimonial.location}</p>
                    </div>
                    <div className="testimony">
                        <p className="text-base sm:text-lg text-gray-400">{currentTestimonial.testimony}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default TestimonialSection;