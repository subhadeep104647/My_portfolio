import React from 'react'
import { MapPin } from "lucide-react"

const Logo = () => {
  return (
    <div className=' flex flex-row gap-2'>
        <div>
            <img src="/Logo.png" alt="Logo/jpg" className='h-14 w-15 rounded-full bg-yellow-500' />
        </div>
        <div className=' bg-white/5 backdrop-blur-2xl flex flex-row gap-2 items-center justify-center border-2 border-gray-600/50 rounded-l-full rounded-r-full w-40 h-13'>
            <div>
              <MapPin size={18} color="#a375a9" strokeWidth={2} />
            </div>
            <div><h1 className='text-text1 text-sm font-semibold tracking-widest'>KOL / INDIA</h1></div>
        </div>

    </div>
  )
}

export default Logo