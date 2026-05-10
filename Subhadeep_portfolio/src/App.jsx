import React from 'react'
import { motion } from 'framer-motion'
import { Route, Routes } from 'react-router-dom'
import Nevbar from './Components/Nevbar'
import Home from './Page/Home'
import Project from './Page/Project'
import About from './Page/About'
import Certificate from './Page/Certificate'

const App = () => {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#171427] scroll-smooth">

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#171427] opacity-90 z-0" />

      {/* Animated Gradient Circle 1 */}
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -50, 80, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-20 left-20 w-72 h-72 rounded-full bg-purple-500 blur-3xl opacity-20 z-0"
      />

      {/* Animated Gradient Circle 2 */}
      <motion.div
        animate={{
          x: [0, -120, 50, 0],
          y: [0, 100, -80, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-pink-500 blur-3xl opacity-20 z-0"
      />

      {/* Floating Particles */}
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -100],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
          className="absolute bg-white rounded-full z-0"
          style={{
            width: Math.random() * 4 + 2,
            height: Math.random() * 4 + 2,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Main Content */}
      <div className="relative z-10 px-6 md:px-16 lg:px-40 py-5">
        <Nevbar />
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Project' element={<Project />} />
        <Route path='/About' element={<About />} />
        <Route path='/Certificate' element={<Certificate/>} />

        
      </Routes>
      </div>

    </div>
  )
}

export default App