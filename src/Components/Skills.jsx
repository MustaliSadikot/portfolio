import React from 'react'
import Skillscards from './Skillscards'
import { skills } from '../assets/skills'

function Skills() {
  return (
    <>
    <section id="skills">
        {/* <div className='h-full bg-blue-100 px-2 md:pt-[90px] pt-[40px] md:pb-[103px] pb-[10px]'>
          <div className='lg:max-w-4xl md:max-w-3xl max-w-md px-2 mx-auto w-full'>
            <h1 className='w-full flex justify-center text-3xl underline'>Skills</h1>

            <div className='flex md:flex-row flex-col md:mt-20 mt-10' data-aos="fade-up">
              <h1 className='text-2xl md:w-[50%] w-[90%] flex items-center h-10'>HTML
              <img src="Images/html-5.png" className='h-10 ms-2'/></h1>
              <input type="range" name="" id="" value={30} className='w-full'/>
            </div>

            <div className='flex md:flex-row flex-col my-5' data-aos="fade-up">
              <h1 className='text-2xl md:w-[50%] w-[90%] flex items-center h-10'>CSS
              <img src="Images/css-3.png" className='h-10 ms-2'/></h1> 
              <input type="range" name="" id="" value={80} className='w-full'/>
            </div>

            <div className='flex md:flex-row flex-col my-5' data-aos="fade-up">
              <h1 className='text-2xl md:w-[50%] w-[90%] flex items-center h-10'>Bootstrap
              <img src="Images/bootstrap.png" className='h-12 ms-0'/></h1>
              <input type="range" name="" id="" value={80} className='w-full'/>
            </div>

            <div className='flex md:flex-row flex-col  my-5' data-aos="fade-up">
              <h1 className='text-2xl  md:w-[50%] w-[90%] flex items-center h-10'>Tailwind CSS
              <img src="Images/Tailwind-CSS1.png" className='h-6 ms-2'/></h1>
              <input type="range" name="" id="" value={60} className='w-full'/>
            </div>

            <div className='flex md:flex-row flex-col my-5' data-aos="fade-up">
              <h1 className='text-2xl md:w-[50%] w-[90%] flex items-center h-10'>Javascript
              <img src="Images/js.png" className='h-8 ms-2'/></h1>
              <input type="range" name="" id="" value={75} className='w-full'/>
            </div>

            <div className='flex md:flex-row flex-col my-5' data-aos="fade-up">
              <h1 className='text-2xl md:w-[50%] w-[90%] flex items-center h-10'>React
              <img src="Images/react.png" className='h-9 ms-2'/></h1>
              <input type="range" name="" id="" value={75} className='w-full'/>
            </div>

            <div className='flex md:flex-row flex-col my-5' data-aos="fade-up">
              <h1 className='text-2xl md:w-[50%] w-[90%] flex items-center h-10'>MySQL
              <img src="Images/mysql.png" className='h-12 ms-1'/></h1>
              <input type="range" name="" id="" value={75} className='w-full'/>
            </div>

          </div>
        </div> */}

      <div className='h-full bg-blue-100 px-2'>
        <h1 className='w-full flex justify-center text-3xl underline md:pt-[90px] pt-[40px]'>Skills</h1>

        <div className='flex justify-center'>
          <div className='bg-sky-900 text-white w-full max-w-5xl mx-auto grid lg:grid-cols-10 md:grid-cols-8 sm:grid-cols-6 grid-cols-4 lg:gap-4 rounded-lg mt-6 md:mb-14 mb-8 shadow-2xl shadow-black' data-aos="fade-up">
              <Skillscards logo={skills.html.logo} heading={skills.html.heading}/>
              <Skillscards logo={skills.css.logo} heading={skills.css.heading}/>
              <Skillscards logo={skills.tailwindcss.logo} heading={skills.tailwindcss.heading}/>
              <Skillscards logo={skills.bootstrap.logo} heading={skills.bootstrap.heading}/>
              <Skillscards logo={skills.javascript.logo} heading={skills.javascript.heading}/>
              <Skillscards logo={skills.react.logo} heading={skills.react.heading}/>
              <Skillscards logo={skills.python.logo} heading={skills.python.heading}/>
              <Skillscards logo={skills.java.logo} heading={skills.java.heading}/>
              <Skillscards logo={skills.net.logo} heading={skills.net.heading}/>
              <Skillscards logo={skills.mu.logo} heading={skills.mu.heading}/>
              <Skillscards logo={skills.csharp.logo} heading={skills.csharp.heading}/>
              <Skillscards logo={skills.php.logo} heading={skills.php.heading}/>
              <Skillscards logo={skills.mysql.logo} heading={skills.mysql.heading}/>
              <Skillscards logo={skills.sqlite.logo} heading={skills.sqlite.heading}/>
              <Skillscards logo={skills.oracle.logo} heading={skills.oracle.heading}/>
              {/* <Skillscards logo={skills.git.logo} heading={skills.git.heading}/> */}
          </div>

        </div>
      </div>
    </section>
    </>
  )
}

export default Skills