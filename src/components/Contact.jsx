import React from 'react'

const Contact = () => {
  const contact_info = [
    { logo: 'mail', text: 'j.isamr00@gmail.com' },
    { logo: 'logo-linkedin', text: 'j0t4ku' },
    { logo: 'logo-twitter', text: '@j_ismar00' },
  ]
  return (
    <section id="contact" className='py-10 px-3 text-white'>
      <div className='text-center mt-8'>
        <h3 className='text-4xl font-semibold'>
          Contact <span className='text-cyan-600'>Me</span>
        </h3>
        <p className='text-gray-400 mt-3 text-lg'>
          Get in touch
        </p>

        <div className='mt-10 flex md:flex-col flex-row gap-6 max-w-5xl bg-gray-800 md:p-6 justify-center items-center rounded-lg mx-auto'>
          <div className='flex justify-center items-center'>
            <div className='flex  md:flex-row flex-col gap-7 mt-5 mb-5'>
              {
                contact_info.map((contact, i) => (
                  <div key={i} className='flex gap-4 w-fit items-center'>
                    <div className='min-w-[3.5rem] text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full'>
                      <ion-icon name={contact.logo}></ion-icon>
                    </div>
                    <p className='text-base'>{contact.text}</p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>

      </div>
    </section >
  )
}

export default Contact