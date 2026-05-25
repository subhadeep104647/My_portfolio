import React, {  useRef, useState } from 'react'
import { FaSun, FaMoon, FaMusic, FaPause } from "react-icons/fa";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Mode = () => {

  const [darkMode, setDarkMode] = useState(true);
  const [playing, setPlaying] = useState(false);

  const audioRef = useRef(null);


  const toggleMusic = () => {

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setPlaying(!playing);
  };

  return (

    <div className=" flex flex-row gap-2">

      <button onClick={() => setDarkMode(!darkMode)} className="w-10 h-10 rounded-full backdrop-blur-lg bg-white/10 border border-white/20 flex items-center justify-center text-white text-gl hover:scale-110 transition">
        <a href='https://www.linkedin.com/in/subhadeep-biswas-4731732a9/'><FaLinkedinIn /></a>
      </button>

      <button onClick={() => setDarkMode(!darkMode)} className="w-10 h-10 rounded-full backdrop-blur-lg bg-white/10 border border-white/20 flex items-center justify-center text-white text-gl hover:scale-110 transition">
        <a href='https://github.com/subhadeep104647'><FaGithub /></a>
      </button>

      <button onClick={toggleMusic} className="w-10 h-10 rounded-full backdrop-blur-lg bg-white/10 border border-white/20 flex items-center justify-center text-white text-gl hover:scale-110 transition">
        {playing ? <FaPause /> : <FaMusic />}
      </button>

      <audio ref={audioRef} loop>
        <source src="/Music.mp3" type="audio/mp3" />
      </audio>

    </div>
  )
}

export default Mode