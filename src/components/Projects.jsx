import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination, Autoplay } from 'swiper'
/*Images */
import project1 from '../assets/images/Proyecto-modern-bank.jpg'
import project2 from '../assets/images/Proyecto-portfolio-react.jpg'
import project3 from '../assets/images/Proyecto-Django.jpg'
import project4 from '../assets/images/Proyecto-python.jpg'
import project5 from '../assets/images/Proyecto-react-task.jpg'
import project_person from '../assets/images/ImagenP.jpg'





const Projects = () => {
  const projects = [
    { img: project1, name: 'Modern Bank APP', github: 'https://github.com/j0t4ku/bank-modern-app', live_link: 'https://j0t4ku.github.io/bank-modern-app/' },
    { img: project2, name: 'Example Portfolio with React', github: 'https://github.com/j0t4ku/example-portfolio-react', live_link: 'https://j0t4ku.github.io/example-portfolio-react/' },
    { img: project3, name: 'API with Django', github: 'https://github.com/j0t4ku/ProjectsDjango', live_link: '' },
    { img: project4, name: 'Courses Python', github: 'https://github.com/j0t4ku/CursoPython', live_link: '' },
    { img: project5, name: 'App Task with React', github: 'https://github.com/j0t4ku/react-tast-example', live_link: 'https://j0t4ku.github.io/react-tast-example/' },

  ]

  return (
    <section id="projects" className='py-10 text-white'>
      <div className='text-center'>
        <h3 className='text-4xl font-semibold'>
          My <span className='text-cyan-600'>Projects</span>
        </h3>
        <p className='text-gray-400 mt-3 text-lg '>
          My awesome works
        </p>
      </div>

      <br />
      <div className='flex max-w-6xl gap-6 px-5 mx-auto items-center relative'>
        <div className='lg:w-2/3 w-full'>
          <Swiper
            slidesPerView={2}
            spaceBetween={20}
            breackpoints={{
              768: {
                slidesPerView: 2,
              }
            }}
            loop={true} 
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {
              projects.map((project_info, i) => (
                <SwiperSlide key={i}>
                  <div className='h-fit w-full p-4 bg-slate-700 rounded-xl'>
                    <img src={project_info.img} alt="" className='rounded-lg' />
                    <h3 className='text-xl my-4'>
                      {project_info.name}
                    </h3>
                    <div className='flex gap-3'>
                      <a href={project_info.github} target="_blank" className='text-cyan-600 bg-gray-800 px-2 py-1 inline-block'>Github</a>
                      <a href={project_info.live_link} target="_blank" 
                      className='text-cyan-600 bg-gray-800 px-2 py-1 inline-block'>Live Demo</a>
                    </div>
                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
        <div className='lg:block hidden'>
          <img src={project_person}  alt="" className='rounded-full border-4 border-cyan-600' style={{transform: "scaleX(-1)"}}/>
        </div>
      </div>

    </section>
  )
}

export default Projects