import React from 'react'

function Shortnavbar({close,isshow}) {
  return (
    <>
    <div className={`w-full flex justify-center fixed top-14 border-t border-t-black border-b border-b-black shadow-2xl shadow-black z-20 ${isshow ? "translate-y-0 " : "-translate-y-[250px]"} transition-all ease-in-out origin-top duration-700`}>
        <div className='bg-slate-100 py-3 flex flex-col gap-2 w-full'>
        <a href="#home">
          <h1 className='mx-3 hover:cursor-pointer border-b-2 border-slate-100 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 transition-all ease-in-out duration-200'>HOME</h1>
          </a>

          <a href="#about">
          <h1 className='mx-3 hover:cursor-pointer border-b-2 border-slate-100 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 transition-all ease-in-out duration-200' >ABOUT</h1>
          </a>

          <a href="#skills">
          <h1 className='mx-3 hover:cursor-pointer border-b-2 border-slate-100 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 transition-all ease-in-out duration-200'>SKILLS</h1>
          </a>

          <a href="#projects">
          <h1 className='mx-3 hover:cursor-pointer border-b-2 border-slate-100 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 transition-all ease-in-out duration-200'>PROJECTS</h1>
          </a>

          <a href="#contact">
          <h1 className='mx-3 hover:cursor-pointer border-b-2 border-slate-100 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 transition-all ease-in-out duration-200'>CONTACT</h1>
          </a>
        </div>

    </div>
    </>
  )
}

export default Shortnavbar