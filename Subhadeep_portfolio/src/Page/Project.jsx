import React from 'react'
import { useEffect, useRef } from 'react';
import Home from './Home'

const Project = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Autoplay was prevented:", error);
      });
    }
  }, []);

  return (
    <div  className='text-text1 flex flex-col gap-8 mt-10'>
      
      <div><h1 className='text-text2 tracking-widest text-ms font-semibold flex items-start'>SELECTED WORK</h1></div>

      <div><h1 className=' text-white font-sans text-5xl tracking-wide'> My Project</h1></div>

      <div><p></p></div>

      <div className=' flex flex-row w-full bg-white rounded-2xl border-1 border-gray-600'>

        <div className=' w-1/2 py-5 px-5'>
          <video ref={videoRef} autoPlay muted loop playsInline width="100%">
            <source src="Work1.mp4" type="video/mp4" className='rounded-lg' />
          </video>
        </div>
        <div className='w-1/2 bg-text2 rounded-r-2xl flex flex-col px-5 py-1 gap-2'>

           <div className=' flex flex-row items-center justify-between'>
              <div><h1 className='text-[#22202d] text-xl font-semibold tracking-wider'>DEBUGXIA</h1></div>
              <div className=' flex flex-row gap-1'>
                <div><button><a href='https://github.com/DEBUGXIA/DEBUG_XIA'><img src="public/git.svg" alt="git.com" className='w-10 h-10'/></a></button></div>
                <div><button><a href='https://www.linkedin.com/posts/subhadeep-biswas-4731732a9_innovatex-innovatex-debugging-ugcPost-7449450591342219264-qak9?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEo9qdcBTyWGiycEl8tgNGY2X85B2ylSEs8'><img src="public/Linkdin.svg" alt="linkdin.com" className='w-10 h-10'/></a></button></div>
              </div>
           </div>

           <div className=' flex flex-row gap-2'>
            <div><h1 className=' text-[#22202d] bg-white/5 backdrop-blur-2xl border-2 border-[#22202d] w-28 text-sm font-semibold tracking-wide flex items-center justify-center rounded-2xl px-3 py-1'>JISTech2K26</h1></div>
            <div><h1 className=' text-[#22202d] bg-white/5 backdrop-blur-2xl border-2 border-[#22202d] w-28 text-sm font-semibold tracking-wide flex items-center justify-center rounded-2xl px-3 py-1'>React Js</h1></div>
            <div><h1 className=' text-[#22202d] bg-white/5 backdrop-blur-2xl border-2 border-[#22202d] w-28 text-sm font-semibold tracking-wide flex items-center justify-center rounded-2xl px-3 py-1'>Team work</h1></div>
           </div>

           <div className='mt-3'>
          <p className=' text-[#22202d] text-sm text-justify'>DEBUGXIA is an AI-driven debugging and problem-solving platform built to transform complex technical challenges into effective, real-world solutions. From intelligent system diagnostics to seamless user interfaces, it offers a space where technology meets creativity, allowing developers to optimize performance through smart, scalable systems.Developed by Team InnovateX for JISTech 2K26, the project integrates Machine Learning with robust full-stack architecture. It is designed not just to function, but to provide a meaningful user experience by bridging the gap between innovative conceptualization and high-performance execution.</p>
        </div>

        <div className=' flex flex-col mt-2 gap-2'>
          <h2 className="text-xl font-semibold text-gray-900 ">Managing By</h2>
          <div className=' flex flex-row items-center justify-between gap-5 text-[#22202d] text-sm font-semibold'><h1>1. Subhadeep Biswas</h1>
          <h1>2. Dipayan Dutta</h1><h1>3. Sanchari Ray</h1>
          <h1>4. Saheli Ghosh</h1>
          </div>
          <div className=' flex flex-col gap-2 text-[#22202d] text-sm font-semibold'>
          </div>
        </div>
        </div>

        

      </div>

      <div className=' flex flex-row w-full bg-white rounded-2xl border-1 border-gray-600'>

        <div className=' w-1/2 py-5 px-5'>
          <video ref={videoRef} autoPlay muted loop playsInline width="100%">
            <source src="Work2.mp4" type="video/mp4" className='rounded-lg' />
          </video>
        </div>
        <div className='w-1/2 bg-text2 rounded-r-2xl flex flex-col px-5 py-1 gap-2'>

           <div className=' flex flex-row items-center justify-between'>
              <div><h1 className='text-[#22202d] text-xl font-semibold tracking-wider'>LOVE & LATTES</h1></div>
              <div className=' flex flex-row gap-1'>
                <div><button><a href='https://github.com/subhadeep104647/Love---Lattes'><img src="public/git.svg" alt="git.com" className='w-10 h-10'/></a></button></div>
                <div><button><a href='https://www.linkedin.com/posts/subhadeep-biswas-4731732a9_cafe-webdeveloper-pythonproject-activity-7435711980327321600-y01N?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEo9qdcBTyWGiycEl8tgNGY2X85B2ylSEs8'><img src="public/Linkdin.svg" alt="linkdin.com" className='w-10 h-10'/></a></button></div>
              </div>
           </div>

           <div className=' flex flex-row gap-2'>
            <div><h1 className=' text-[#22202d] bg-white/5 backdrop-blur-2xl border-2 border-[#22202d] w-28 text-sm font-semibold tracking-wide flex items-center justify-center rounded-2xl px-3 py-1'>HTML/CSS</h1></div>
            <div><h1 className=' text-[#22202d] bg-white/5 backdrop-blur-2xl border-2 border-[#22202d] w-28 text-sm font-semibold tracking-wide flex items-center justify-center rounded-2xl px-3 py-1'>Java Scripts</h1></div>
            <div><h1 className=' text-[#22202d] bg-white/5 backdrop-blur-2xl border-2 border-[#22202d] w-28 text-sm font-semibold tracking-wide flex items-center justify-center rounded-2xl px-3 py-1'>Team work</h1></div>
           </div>

           <div className='mt-3'>
          <p className=' text-[#22202d] text-sm text-justify'>Love & Lattes is a modern café concept platform built for people who value authentic Italian culture and meaningful social experiences. From thoughtfully structured menus to a cozy, creative brand identity, it offers a space where users can explore traditional flavors, while developers showcase a seamless integration of aesthetic front-end design and robust Python-driven backend logic.</p>
        </div>

        <div className=' flex flex-col mt-2 gap-2'>
          <h2 className="text-xl font-semibold text-gray-900 ">Managing By</h2>
          <div className=' flex flex-row items-center gap-5 text-[#22202d] text-sm font-semibold'><h1>1. Subhadeep Biswas</h1><h1>2. Sanchari Ray</h1>
          </div>
          <div className=' flex flex-col gap-2 text-[#22202d] text-sm font-semibold'>
          </div>
        </div>
        </div>

        

      </div>

    </div>
  )
}

export default Project