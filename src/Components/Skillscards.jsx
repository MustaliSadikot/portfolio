import React from 'react'

function Skillscards({logo,heading}) {
  return (
    <>
        <div className='bg-neutral-900 hover:bg-black flex flex-col justify-center items-center py-3 rounded-lg col-span-2 hover:shadow-black hover:shadow-lg transition-all ease-in-out duration-150 md:m-5 my-3 mx-3 shadow-lg hover:scale-105' data-aos="fade-up">
            <img src={logo} className='md:h-16 h-10 block mx-auto' />
            <h1 className='mt-2 md:text-xl'>{heading}</h1>
        </div>
    </>
  )
}

export default Skillscards