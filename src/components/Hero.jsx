import React from 'react'
import hero from '../assets/images/Perfil.jpg';


const Hero = () => {
const social_media = [
  { logo: 'logo-facebook', link: 'https://www.facebook.com/joelismar.florentin' },
  { logo: 'logo-linkedin', link: 'https://www.linkedin.com/in/j0t4ku/' },
  { logo: 'logo-twitter', link: 'https://twitter.com/j_ismar00' },
  { logo: 'logo-github', link: 'https://github.com/j0t4ku/' },
]


  return (
    <section id="home" className='min-h-screen flex py-10 md:flex-row flex-col items-center'>
      <div className='flex-1 flex items-center justify-center h-full'>
        <img src={hero} alt="hero" className='md:w-11/12 h-11/12 object-cover rounded-full border-4 border-cyan-600 scale-75' />
      </div>
      <div className='flex-1'>
        <div className='md:text-left text-center'>
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold ">
            <span className='text-cyan-600 md:text-6xl text-5xl'>Hello!</span>
            <br />
          My name is <span>Joel Florentin</span>
          </h1> 
          <h4 className='md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600'>
            Fullstack Developer
          </h4>
          <a href="mailto:j.ismar00@gmail.com"><button className='btn-primary mt-8'>Contact Me</button></a>
          <div className='mt-8 text-3xl flex items-center md:justify-start justify-center gap-5'>
            {
               social_media.map((social,i)=>(
                <div key={i} className="text-gray-600 hover:text-cyan-600 cursor-pointer">
                  <a href={social.link} target="_blank"><ion-icon name={social.logo}></ion-icon></a>
                </div>
               ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero