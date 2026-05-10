import React from 'react'
import { Link } from 'react-router-dom'

const Nev = () => {
  return (
    <div className="rounded-full px-8 py-3 bg-white/5 backdrop-blur-2xl flex gap-6 items-center justify-center border border-gray-600/50 text-white text-sm font-semibold tracking-wider">

      <Link to="/" className="hover:text-purple-400 transition">
        Home
      </Link>

      <Link to="/project" className="hover:text-purple-400 transition">
        Project
      </Link>

      <Link to="/about" className="hover:text-purple-400 transition">
        About Me
      </Link>

      <Link to="/certificate" className="hover:text-purple-400 transition">
        Certificate
      </Link>

    </div>
  )
}

export default Nev