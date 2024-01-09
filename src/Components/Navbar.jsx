import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import Shortnavbar from './Shortnavbar';

function Navbar() {

  const [show, setshow] = useState(false)

  return (
    <>
     <div className={`py-[4px] flex items-center justify-between bg-slate-100 fixed top-0 w-full ${(!show) ? "shadow-xl" : "shadow-none"} z-50 h-14`}>
        <div>
          <img src="Images/logo3.2.png" alt="" className='w-[52px] top-0 md:ms-10 ms-2'/>
        </div>
        <div className='sm:flex hidden mx-5 py-2 items-center'>
          <a href="#home">
          <h1 className='mx-5 hover:cursor-pointer border-b-2 border-slate-100 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 transition-all ease-in-out duration-200'>HOME</h1>
          </a>

          <a href="#about">
          <h1 className='mx-5 hover:cursor-pointer border-b-2 border-slate-100 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 transition-all ease-in-out duration-200' >ABOUT</h1>
          </a>

          <a href="#skills">
          <h1 className='mx-5 hover:cursor-pointer border-b-2 border-slate-100 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 transition-all ease-in-out duration-200'>SKILLS</h1>
          </a>

          <a href="#projects">
          <h1 className='mx-5 hover:cursor-pointer border-b-2 border-slate-100 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 transition-all ease-in-out duration-200'>PROJECTS</h1>
          </a>

          <a href="#contact">
          <h1 className='mx-5 hover:cursor-pointer border-b-2 border-slate-100 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 transition-all ease-in-out duration-200'>CONTACT</h1>
          </a>
          
        </div>

        <div className='flex sm:hidden mx-4 text-2xl absolute right-0'>
          <GiHamburgerMenu onClick={()=>{setshow(!show)}} className='hover:cursor-pointer' />
        </div>
      </div>

      <div className='flex sm:hidden'>
        <Shortnavbar close={setshow} isshow={show}/>
      </div>

    </>
  )
}

export default Navbar