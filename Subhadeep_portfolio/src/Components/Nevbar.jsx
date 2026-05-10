import React from 'react'
import Logo from './Icon/Logo'
import Nev from './Icon/Nev'
import Mode from './Icon/Mode'

const Nevbar = () => {
  return (
    <div className='relative z-10 px-3 py-1 bg-amber h-16 flex flex-row items-center justify-between '>
        <Logo/>
        <Nev/>
        <Mode/>
    </div>
  )
}

export default Nevbar