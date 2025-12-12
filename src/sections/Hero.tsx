"use client";

import memojiImage from '@/assets/images/behindComputer.png';
import Image from "next/image";
import ArrowDown from '@/assets/icons/arrow-down.svg';
import {ReactTyped} from "react-typed";


export const HeroSection = () => {
  return(
  <div className="sm:py-16 md:py-48 lg:py-24 relative z-10 ">
    <div className="container">
      <div className="flex flex-col items-center md:mt-20">
        <Image 
          src={memojiImage} 
          alt="Me looking from behind a computer screen at the viewer" 
          className="md:size-[300px] sm:size-[200px]"
        />
        <div className='bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg'>
          <div className='bg-green-500 size-2.5 rounded-full rounded-large pulse'></div>
          <div className='text-sm font-medium'>Looking for new work experiences!</div>
        </div>

      </div>
        <div className='max-w-xl mx-auto'>
        <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide"  style={{ minHeight: "6rem" }}>
            <ReactTyped
              strings={["Hello, I'm Mohammed Abdul-Nabi.", "From UI to API — I build it all."]}
              typeSpeed={100}
              backSpeed={50}
              loop
            />
        </h1>

          <p className="mt-4 text-center text-white/60 md:text-lg">
          On a journey of lifelong learning, an aspiring developer with a background in finance. 
          A passion for technology and problem-solving, I am dedicated to expanding my skills and making a 
          meaningful impact in the tech industry.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-16">
          <a
            href="/Abdulnabi,Mohammed.pdf" 
            target="_blank" rel="noopener noreferrer" 
          >
            <button className="inline-flex items-center gap-2 border border-purple-950 px-5 h-12 rounded-xl bg-purple-900">
              <span className="font-semibold">Get My Resume</span>
              <ArrowDown className="size-4" />
            </button>
          </a>
          <a href="https://www.linkedin.com/in/abdulnabim/"  target="_blank" rel="noopener noreferrer">
            <button className='inline-flex items-center border border-white bg-white text-gray-900 px-5 h-12 rounded-xl gap-2'>
              <span>👋</span>
              <span className='font-semibold'>Lets Connect!</span>
            </button>
          </a>
        </div>
      </div>
    </div>
    );
};
