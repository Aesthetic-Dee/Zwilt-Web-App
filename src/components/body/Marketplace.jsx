import React from 'react'
import MarketplaceTopImage from '../../assets/body/marketplace-top-image.png';
import ProfileICON from '../../assets/body/profile-icon.png';
import SkillsICON from '../../assets/body/skills-icon.png';
import CategoryICON from '../../assets/body/category-icon.png';
import Shopify from '../../assets/body/shopify.png';
import Magneto from '../../assets/body/magneto.png';
import Data from '../../assets/body/datascience.png';
import Webflow from '../../assets/body/webflow.png';
import Dotnet from '../../assets/body/dotnet.png';
import ITMore from '../../assets/body/itmore.png';
import Figma from '../../assets/body/figma.png';
import PS from '../../assets/body/ps.png';
import UE from '../../assets/body/ue.png';
import AI from '../../assets/body/ai.png';
import Cenima from '../../assets/body/cenima.png';
import ITMore2 from '../../assets/body/itmore2.png';
import ExploreICON from '../../assets/body/explore-icon.png';

function Marketplace() {
  return (
    <main className='flex flex-col items-center bg-slate-300 py-5 px-4 md:px-8 lg:px-16'>
        {/* Top image */}
        <img src={MarketplaceTopImage} alt="Divider Design Image" className="w-full" />

        {/* Main headline */}
        <p className='mt-10 md:mt-20 mb-10 md:mb-20 text-3xl md:text-4xl lg:text-5xl text-slate-800 font-thin italic text-center'>
            Your one-stop marketplace for finding the talent your <span className='block'>business needs.</span>
        </p>

        {/* IT & Development Section */}
        <section className='flex flex-col lg:flex-row mt-8 lg:mt-16 gap-6 lg:gap-10 w-full max-w-6xl'>
            {/* Left column: Statistics */}
            <div className='flex flex-col'>
                <p className='font-bold text-lg mb-4'>Find Dev and IT professionals to scale your business.</p>
                <div className='flex flex-col'>
                    <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 lg:gap-32 mb-3'>
                        {/* Skills statistic */}
                        <div className='flex items-center gap-1'>
                            <img className='w-6' src={SkillsICON} alt="" />
                            <p className='font-light text-base lg:text-lg'>989 Skills</p>
                        </div>
                        {/* Sub-Categories statistic */}
                        <div className='flex items-center gap-1'>
                            <img className='w-6' src={CategoryICON} alt="" />
                            <p className='font-light'>45 Sub-Categories</p>
                        </div>
                    </div>
                    {/* Profiles statistic */}
                    <div className='flex items-center gap-1'>
                        <img className='w-6' src={ProfileICON} alt="" />
                        <p className='font-light'>1011 Profiles</p>
                    </div>
                </div>
            </div>

            {/* Right column: Developer types */}
            <div className='bg-white py-4 md:py-6 px-4 md:px-6 rounded-xl shadow-2xl'>
                <p className='text-xl font-semibold mb-5'>IT & Development</p>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-6'>
                    {/* Map through developer types */}
                    {[
                        { img: Shopify, text: 'Shopify Developer' },
                        { img: Magneto, text: 'Magneto Developer' },
                        { img: Data, text: 'Data Scientist' },
                        { img: Webflow, text: 'Webflow Developer' },
                        { img: Dotnet, text: 'Dot Net Developer' },
                        { img: ITMore, text: 'See More..' }
                    ].map((item, index) => (
                        <div key={index} className='flex flex-col gap-3 cursor-pointer'>
                            <img src={item.img} alt={`${item.text} logo`} className="w-full max-w-[80px] mx-auto" />
                            <a href="#" className='text-center hover:text-yellow-600 hover:font-medium'>
                                {item.text.split(' ').map(word => <span key={word} className='block'>{word}</span>)}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Design & Creative Section */}
        <section className='flex flex-col lg:flex-row mt-8 lg:mt-16 gap-6 lg:gap-10 w-full max-w-6xl'>
            {/* Left column: Statistics */}
            <div className='flex flex-col'>
                <p className='font-bold text-lg mb-4'>Find Design and Creative professionals to scale your<span className='block'> business.</span></p>
                <div className='flex flex-col'>
                    <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 lg:gap-32 mb-3'>
                        {/* Skills statistic */}
                        <div className='flex items-center gap-1'>
                            <img className='w-6' src={SkillsICON} alt="" />
                            <p className='font-light text-base lg:text-lg'>1280 Skills</p>
                        </div>
                        {/* Sub-Categories statistic */}
                        <div className='flex items-center gap-1'>
                            <img className='w-6' src={CategoryICON} alt="" />
                            <p className='font-light'> 77 Sub-Categories</p>
                        </div>
                    </div>
                    {/* Profiles statistic */}
                    <div className='flex items-center gap-1'>
                        <img className='w-6' src={ProfileICON} alt="" />
                        <p className='font-light'>2080 Profiles</p>
                    </div>
                </div>
            </div>

            {/* Right column: Designer types */}
            <div className='bg-white py-4 md:py-6 px-4 md:px-6 rounded-xl shadow-2xl'>
                <p className='text-xl font-semibold mb-5'>Design & Creatives</p>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-6'>
                    {/* Map through designer types */}
                    {[
                        { img: Figma, text: 'UX Designer' },
                        { img: PS, text: 'Graphic Designer' },
                        { img: AI, text: 'Illustration Artist' },
                        { img: UE, text: 'Unreal Engine' },
                        { img: Cenima, text: 'Cinema 4D' },
                        { img: ITMore2, text: 'See More...' }
                    ].map((item, index) => (
                        <div key={index} className='flex flex-col gap-3 cursor-pointer'>
                            <img src={item.img} alt={`${item.text} logo`} className="w-full max-w-[80px] mx-auto" />
                            <a href="#" className='text-center hover:text-yellow-600 hover:font-medium'>
                                {item.text.split(' ').map(word => <span key={word} className='block'>{word}</span>)}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Explore More Section */}
        <section className='w-full max-w-6xl mt-8 lg:mt-16'>
            <div className='flex items-center gap-2 ml-3'>
                <img src={ExploreICON} alt="" className="w-6 h-6" />
                <a className='text-xl md:text-2xl font-semibold' href="#">Explore More</a>
            </div>
        </section>
    </main>
  )
}

export default Marketplace;