import React from 'react';
import { useState } from 'react';
import goodhandsImg from '../../assets/body/goodhandsImage.png';

const StepItem = ({ step, description, isActive, onClick }) => (
    <div className="mb-4">
      <div className="flex items-center cursor-pointer" onClick={onClick}>
        <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${isActive ? 'bg-slate-800' : 'bg-gray-200'}`}>
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold">{step}</h3>
      </div>
      {isActive && description && (
        <div className="mt-2 ml-16 text-gray-600">
          {description}
        </div>
      )}
    </div>
  );

function GoodHands() {
    const [activeStep, setActiveStep] = useState(null);

    const steps = [
      { title: "Step 1: Resume Screening", description: "This the process of reviewing a candidate's resume to determine if they meet the qualifications for a specific job opening. It's the initial stage of the hiring process where recruiters or hiring managers evaluate applicants." },
      { title: "Step 2: Video Interview", description: "A video interview is a job interview conducted remotely using video conferencing technology. It allows employers to assess candidates without requiring them to physically visit an office location." },
      { title: "Step 3: Technical Evaluation", description: "Technical evaluation is the assessment of a product, service, or proposal based on its technical merit. It involves a detailed examination of its features, capabilities, and performance against predefined criteria." },
      { title: "Step 4: Application Review", description: "Application review is the process of examining job applications to assess candidates' qualifications and suitability for a specific role. This is typically the first stage of the hiring process." },
      { title: "Step 5: Let's get to work", description: "It's time to start doing something, often a task or project. Be implies focus, efficiency, and productivity." },
    ];

    const questions = [
        "Tell us something about yourself",
        "Give a short brief about your experience",
        "Explain about good customer experience",
        "How to manage SOP of customers care?",
        "Tell us something about yourself"
      ];

  return (
    <main className='flex flex-col lg:flex-row gap-8 items-center py-8 sm:py-10 md:py-14 bg-slate-300 px-4 sm:px-6 md:px-8'>
        {/* Left section: Hiring process steps */}
        <section className='flex flex-col gap-6 w-full lg:w-3/5'>
        <p className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold'>How we ensure <span className='block'>you're in good hands.</span></p>

        <p className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light'>With our comprehensive screening process, we hand-pick highly skilled candidates so you can onboard them in a matter of days.</p>

        {/* Steps container */}
        <div className="w-full max-w-2xl p-4 sm:p-5 md:p-6 bg-white rounded-lg shadow-lg">
            {steps.map((step, index) => (
            <StepItem 
                key={index} 
                step={step.title}
                description={step.description} 
                isActive={activeStep === index}
                onClick={() => setActiveStep(activeStep === index ? null : index)}
            />
            ))}
        </div>
        </section>

        {/* Right section: Interview questions */}
        <section className='relative mt-16 mobile:m-0 lg:mt-72 w-full lg:w-2/5'>
        {/* Background image */}
        <img className='absolute right-0 -top-16 lg:-top-64 w-3/4 max-w-md mobile:invisible md:visible' src={goodhandsImg} alt="" />
        {/* Questions container */}
        <div className="bg-white p-3 sm:p-4 md:p-5 rounded-lg shadow-lg">
            <div className="relative">
            {/* Left blue bar */}
            <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-12 md:w-14 bg-slate-800 rounded"></div>
            {/* List of questions */}
            <ul className="flex flex-col font-semibold space-y-2 sm:space-y-3 md:space-y-4 py-2 sm:py-3 md:py-4">
                {questions.map((question, index) => (
                <li key={index} className="flex items-start pl-1 gap-3 sm:gap-4 md:gap-5">
                    {/* Question number */}
                    <span className="text-white border-2 sm:border-3 md:border-4 border-white rounded-full w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex items-center justify-center flex-shrink-0 z-10 py-3 sm:py-4 md:py-5 px-3 sm:px-4 md:px-5 text-xs sm:text-sm md:text-base">
                    {index + 1}
                    </span>
                    {/* Question text */}
                    <span className="text-slate-800 text-sm sm:text-base md:text-lg">{question}</span>
                </li>
                ))}
            </ul>
            </div>
        </div>
        </section>
    </main>
  )
}

export default GoodHands;
