import React from 'react'


function Contact() {
  return (
    <>
    <section id="contact">
      <div className='h-full bg-blue-100 md:pt-20 pt-[40px]'>
        <div className=' flex justify-center items-center flex-col md:mb-20 mb-10'>
            <h1 className='text-3xl'>Contact Me:</h1>

            <div className='text-3xl mt-5'>
              <a href="https://www.linkedin.com/in/mustali-sadikot-212302298/"><i className="bi bi-linkedin mx-4 md:mx-7 hover:cursor-pointer hover:text-sky-600"></i></a>

              <a href="https://github.com/MustaliSadikot"><i className="bi bi-github mx-4 md:mx-7 hover:cursor-pointer hover:text-sky-600"></i></a>

              <a href="https://twitter.com/MustaliSadikot?s=08"><i className="bi bi-twitter-x mx-4 md:mx-7 hover:cursor-pointer hover:text-sky-600"></i></a>

              <a href="https://www.instagram.com/mustalisadikot/"><i className="bi bi-instagram mx-4 md:mx-7 hover:cursor-pointer hover:text-sky-600"></i></a>

              <a href="https://www.facebook.com/mustali.sadikot"><i className="bi bi-facebook mx-4 md:mx-7 hover:cursor-pointer hover:text-sky-600"></i></a>

            </div>
        </div>
        <div className='bg-sky-900 text-white md:py-10 py-5'>
            <h1 className='md:text-sm text-[10px] flex justify-center'>Created By Mustali Sadikot | © 2023 All Rights Reserved </h1>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact