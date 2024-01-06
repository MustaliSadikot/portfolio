function About() {
  return (
    <>
    <section id="about">
        <div className="h-full bg-sky-900 text-white md:pt-[90px] pt-[40px] md:pb-[79px] pb-[1px]">
          <h1 className='flex justify-center text-3xl underline'>About Me</h1>
          
          <div className="flex lg:flex-row flex-col items-center lg:mx-10 mx-1 my-10 justify-evenly">
            <div className="mx-2 " data-aos="fade-up">
              <img src="Images/Titile_img.png" alt="" className='rounded-full lg:w-72 w-52 shadow-lg shadow-gray-800 hover:cursor-pointer' id="mustali" />
            </div>

            <div className="text-justify lg:ms-36 mx-2 py-2 lg:w-[800px] w-auto lg:text-xl mt-5 lg:mt-2" >
            <p  data-aos="fade-up">Hi there! I'm Mustali Sadikot, a devoted web developer that loves using code to create magical digital effects. I've explored a variety of web development fields and have a broad skill set that includes technologies like React, Tailwind, Bootstrap, HTML, CSS, JavaScript, PHP, and ASP.NET.</p><br />

            <p data-aos="fade-up">Being a lifelong student who is constantly ready to embrace the pulse of the tech business is key to my work ethic. I enjoy the challenges this industry presents, and I'm always learning new things to stay up to date with the latest trends in the market. Every project I work on is an opportunity for me to learn and grow, whether I'm designing robust back-end features or creating responsive front-end designs.</p><br />

            <p data-aos="fade-up">I think that creating experiences that people connect with is more important than just developing code. I respect teamwork, flexibility, and a never-ending quest for greatness.</p>
            </div>
          </div>
        </div>
    </section>
    </>
  )
}

export default About