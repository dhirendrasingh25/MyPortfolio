import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/text-generate-effect'
import MagicButton from './MagicButton'
import { FaLocationArrow } from "react-icons/fa6";


const Hero = () => {
  return (
    <>
    <div className='h-screen'>
    <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
    </div>
    <div className='flex flex-col sm:flex-row h-full w-full pb-20 pt-36'>
      <div className='w-full flex justify-center items-center flex-col'>
      <TextGenerateEffect
            words="Merging Creativity with Cutting-Edge Technology"
            className="text-center text-[40px] md:text-5xl lg:text-6xl py-4"
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m Dhirendra Singh , a final year Computer Engineering Student from Mumbai University.
          </p>
          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>

      </div>
      <div className='w-full sm:mt-0 mt-10 flex items-center justify-center'>
      <img src="/image.png" alt="b1" className="w-[65%] rounded-full h-[80%] border border-white/[0.1] drop-shadow-2xl "/>
      </div>


    </div>
    </div>
    </>
)}

  

export default Hero