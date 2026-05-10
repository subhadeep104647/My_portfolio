import React from 'react'
import { Link } from "react-router-dom"
import Project from './Project';
import About from './About';
import Certificate from './Certificate';

const Home = () => {

  const logos = [
    {
      name: 'Canva',
      src: '/App1.png',
    },
    {
      name: 'Figma',
      src: '/App2.png',
    },
    {
      name: 'Webflow',
      src: '/App3.png',
    },
    {
      name: 'Notion',
      src: '/App4.png',
    },
    {
      name: 'Procreate',
      src: '/App5.png',
    },
  ];

  const repeatedLogos = [...logos, ...logos, ...logos];

  return (
    <div  className='text-text1 flex flex-col gap-20'>
      
      <div className=' flex flex-row bg-amber w-full mt-22 items-center justify-between gap-5'>

        <div className=' flex flex-col w-1/2 gap-10'>
          <div><h1 className=' text-text2 tracking-widest text-sm font-semibold border-2 border-gray-600 w-70 flex items-center justify-center py-1 rounded-l-full rounded-r-full bg-white/5 backdrop-blur-2xl'>WEB DEVELOPER & DESIGNER</h1></div>
          <div><h1 className=' text-white font-sans text-5xl tracking-wide leading-15'>Crafting Digital Products<br/> with Design Precision <br/>and Backend Power.</h1></div>
          <div><p className=' text-text2 text-lg tracking-wide leading-8'>Hi, I am Subhadeep. I build end-to-end digital experiences—starting with polished Figma designs and bringing them to life with modern frontend tech and reliable backend architecture.</p></div>

          <div className=' flex flex-row gap-5'>
          <div><button className=' text-text2 tracking-wide text-ms font-semibold border-2 border-gray-600 w-25 h-10 flex items-center justify-center py-1 rounded-l-full rounded-r-full bg-white/5 backdrop-blur-2xl'><Link to="/Project">Project</Link></button></div>
          <div><button className='  text-text2 tracking-wide text-ms font-semibold border-2 border-gray-600 w-25 h-10 flex items-center justify-center py-1 rounded-l-full rounded-r-full bg-white/5 backdrop-blur-2xl'><Link to="/Certificate">Certificate</Link></button></div>
          <div><button className='  text-text2 tracking-wide text-ms font-semibold border-2 border-gray-600 w-25 h-10 flex items-center justify-center py-1 rounded-l-full rounded-r-full bg-white/5 backdrop-blur-2xl'><Link to="/About">About Me</Link></button></div>
          </div>

        </div>

        <div className='w-1/2'>
        <img src="/Me.jpg" alt="My Pic"  className=' h-100 w-80 flex ml-50 rounded-3xl'/>
        </div>

      </div>

      <div className="">
      <div className="relative w-full overflow-hidden rounded-3xl py-8">

        <div className="absolute inset-0 opacity-30 bg-[size:24px_24px]" />

        <div className="absolute left-0 top-0 z-10 h-full w-full" />
        <div className="" />

        <div className="flex animate-marquee gap-20 whitespace-nowrap px-8">
          {repeatedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex min-w-fit items-center justify-center opacity-60 transition-all duration-300 hover:scale-110 hover:opacity-100"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-12 w-auto object-contain grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </div>
         <style>{`
          @keyframes marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-marquee {
            width: max-content;
            animation: marquee 22s linear infinite;
          }
        `}</style>
      </div>
    </div>

    <Project/>
    <About/>
    <Certificate/>
    </div>

    
  )
}

export default Home