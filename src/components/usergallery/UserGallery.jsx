import React from 'react'
import UserTestimonials from '../usertestimonials/UserTestimonials'
import Link from 'next/link'
import MobUserGaller from '../usertestimonials/MobUserGaller'

const UserGallery = () => {
  return (
   <section className='px-5 pt-0 pb-10 md:pb-16'>
        <div className='max-w-[var(--max-width)] mx-auto'>
            <h2 className='text-center font-epilogue text-[var(--main-primary-text-color)] text-2xl md:text-5xl font-semibold pb-8 md:pb-0 leading-normal md:leading-14'>Take a look at our users <br/> sharing their healing journey</h2>
            <UserTestimonials />          
            <h5 className='text-[#6E6E6E] font-epilogue text-lg md:text-3xl text-center font-medium pt-6 mb-5 md:mb-10 mt-20 md:mt-0'>Have a success story with icanheal? <br/> We’d love to hear from you!</h5>
            <Link href="/" className='font-epilogue rounded-full pt-3 pb-2 px-5 bg-white border border-[var(--main-primary-text-color)] text-[var(--main-primary-text-color)] w-50 md:w-60 mx-auto block text-center font-semibold'>SHARE YOUR VIDEO</Link>
        </div>
    </section>
  )
}

export default UserGallery