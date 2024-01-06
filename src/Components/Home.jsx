import React from 'react'

function Home() {
  return (
    <>
    <section id='home'>
    <div className='min-h-screen flex justify-around bg-blue-100 lg:px-0 px-4'>
        <div className='flex justify-center flex-col ' data-aos="fade-up">
          <h1 className='lg:text-4xl text-2xl '>Hello, I'm <b className='lg:text-5xl text-3xl text-blue-600'>Mustali Sadikot.</b></h1>
          <h1 className='lg:text-4xl text-2xl mt-1'>Web Developer.</h1>

          <div className='flex md:w-[550px]' data-aos="fade-up">
            {/* <h1 className='my-3'>I am a Web Developer. I live in Gujarat. If you are interested in working with me, you can contact me to hire me.</h1> */}
            <h1 className='my-3'>My passion for web development shines through in my portfolio. It's a showcase of self-driven projects, highlighting my commitment to mastering this craft through continuous learning.</h1>
          </div>

          <div className='mt-2' data-aos="fade-up">
              <a href="Mustali Sadikot CV.pdf"><button className='border-2 border-blue-600 bg-blue-600 text-white  hover:text-blue-600 font-semibold rounded-lg px-4 py-2 transition-all ease-in-out duration-500 hover:bg-blue-100'>Download CV</button></a>

            <a href="#contact"><button className='border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold rounded-lg px-4 py-2 md:mx-4 ms-3 transition-all ease-in-out duration-500'>Contact Me</button></a>
          </div>
        </div>

        <div className='items-center md:flex justify-center hidden' data-aos="fade-up">
          <img src="Images/avtar.jpeg" alt="" className='rounded-full lg:w-96 w-72 shadow-2xl shadow-gray-600 hover:cursor-pointer' draggable={false} />
        </div>
      </div>
    </section>
    </>
  )
}

export default Home