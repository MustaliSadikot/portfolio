import React, { useState } from 'react'
import Modal from './Modal'
import { projects } from '../assets/project'
function Projects() {

  const [show,setshow] = useState(false)
  const [title, settitle] = useState("")
  const [description, setdescription] = useState("")

  return (
    <>
    <section id="projects">
        <div className='h-full bg-sky-900 text-white md:pt-[90px] pt-[40px] pb-8'>
            <h1 className='flex justify-center text-3xl underline'>Projects</h1>

        <div className='flex flex-col justify-center items-center'>

            <div className='flex lg:flex-row flex-col mx-3 items-center gap-9 mt-5' >
              <img src={projects.NewsApp.image} alt="" className='md:w-[475px] w-[500px] hover:cursor-pointer hover:scale-105 transition-all ease-in-out duration-200 border-2 rounded border-[#2196F3] shadow-black shadow-2xl' data-aos="fade-up" onClick={()=>{setshow(!show),settitle(projects.NewsApp.title),setdescription(projects.NewsApp.description)}}/>

              <img src={projects.AirVisual.image} alt="" className='md:w-[475px] w-[500px] hover:cursor-pointer hover:scale-105 transition-all ease-in-out duration-200 border-2 rounded border-[#2196F3] shadow-black shadow-2xl' data-aos="fade-up" onClick={()=>{setshow(!show),settitle(projects.AirVisual.title),setdescription(projects.AirVisual.description)}}/>
            </div>

            <div className='flex lg:flex-row flex-col mx-3 items-center gap-9 mt-9' >
              <img src={projects.MovieFinder.image} alt="" className='md:w-[475px] w-[500px] hover:cursor-pointer hover:scale-105 transition-all ease-in-out duration-200 border-2 rounded border-[#2196F3] shadow-black shadow-2xl' data-aos="fade-up" onClick={()=>{setshow(!show),settitle(projects.MovieFinder.title),setdescription(projects.MovieFinder.description)}}/>

              <img src={projects.Textutils.image} alt="" className='md:w-[475px] w-[500px] hover:cursor-pointer hover:scale-105 transition-all ease-in-out duration-200 border-2 rounded border-[#2196F3] shadow-black shadow-2xl' data-aos="fade-up" onClick={()=>{setshow(!show),settitle(projects.Textutils.title),setdescription(projects.Textutils.description)}}/>
            </div>
        </div>
        </div>
    </section>
          <Modal close={setshow} isshow={show} title={title} description={description}/>
    </>
  )
}

export default Projects