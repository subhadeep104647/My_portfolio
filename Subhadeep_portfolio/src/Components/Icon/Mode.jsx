import React, { useEffect, useRef, useState } from 'react'
import { FaSun, FaMoon, FaMusic, FaPause } from "react-icons/fa";

const Mode = () => {

  const [darkMode, setDarkMode] = useState(true);
  const [playing, setPlaying] = useState(false);

  const audioRef = useRef(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

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
        {darkMode ? <FaSun /> : <FaMoon />}
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