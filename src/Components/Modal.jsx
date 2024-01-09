import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";
import { projects } from '../assets/project';


function Modal({close,isshow,title,description}) {

    const [source, setsource] = useState("")
    
  return (
<>
    <div className={`fixed top-0 w-full h-full flex justify-center items-center ${isshow ? "scale-100" : "scale-0"} transition-all ease-in-out duration-[300ms] origin-center`}>
        <div className={`bg-sky-600 text-white w-[600px] max-w-[90vw] p-1 px-2 py-2 shadow-2xl shadow-black rounded-lg mt-14 relative`}>

            <IoClose className='text-xl hover:cursor-pointer hover:text-red-500 absolute right-2' onClick={()=>{close(!isshow)}}/>
            <h1 className='text-xl mb-1 flex justify-center'>{title}</h1>
            <hr/>

            <video src={`${title=="News App" ? projects.NewsApp.video : ""}
                         ${title=="Air Visual" ? projects.AirVisual.video : ""}
                         ${title=="Movie Finder" ? projects.MovieFinder.video : ""}
                         ${title=="Textutils" ? projects.Textutils.video : ""}

                      `} controls autoPlay loop muted className='mt-2 rounded' controlsList='nodownload'></video>

            <h1 className='mt-3 lg:text-base text-sm'>{description}</h1>

        <div className='flex justify-end gap-4 mt-5'>
            <a href={`${title=="Air Visual" ? projects.AirVisual.view : ""} 
                      ${title=="Textutils" ? projects.Textutils.view : ""}
                      ${title=="Movie Finder" ? projects.MovieFinder.view : ""}
                      `} target="_blank">
                        
              {title!="News App" && <button type="button" className='bg-black text-white px-3 py-1 rounded md:text-base text-sm hover:text-black hover:bg-white transition-all ease-in-out duration-200 hover:shadow-black'>View</button>}
            </a>

            <a href={`${title=="News App" ? projects.NewsApp.source : ""}
                      ${title=="Air Visual" ? projects.AirVisual.source : ""}
                      ${title=="Textutils" ? projects.Textutils.source : ""}
                      ${title=="Movie Finder" ? projects.MovieFinder.source : ""} 
                      `} target="_blank">
                        
              <button type="button" className='bg-black text-white px-3 py-1 rounded md:text-base text-sm hover:text-black hover:bg-white transition-all ease-in-out duration-200 hover:shadow-black'>Source Code</button>
            </a>
        </div>
        </div>
    </div>
</>
  )
}

export default Modal