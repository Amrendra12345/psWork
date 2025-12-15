import Image from 'next/image'
import React from 'react'

const TotalStats = () => {
  return (
    <section className='bg-[var(--main-theme-background)] mb-10 md:mb-16'>
        <div className='max-w-[var(--max-width)] mx-auto py-10 md:py-20'>
            <div className='flex items-start justify-between flex-col md:flex-row gap-4 mb-10 md:mb-20 px-5 md:px-5 xl:md-0'>
                <h5 className='w-full md:w-[25%] text-white'>Together, We’re Making a Difference</h5>
                <p className='w-full md:w-[60%] text-white font-epilogue font-medium text-sm md:text-2xl text-justify md:text-left'>We built icanheal to make the cancer and critical care journey simpler, more compassionate, and financially accessible. In just a few months, we’ve helped thousands of families access expert care, affordable treatment options, and emotional support—without delays or confusion.</p>
            </div>
            <div className='flex items-start justify-between flex-col md:flex-row gap-4 px-5 md:px-5 xl:px-0'>
                <div className='w-full md:w-1/3 min-h-[300px] bg-[#FFF2EC] rounded-[20px] p-8'>
                    <span className='inline-flex justify-center items-center rounded-full p-2 bg-[var(--main-theme-background)] mb-10 md:mb-20'>
                        <Image src="/assets/people.svg" alt='people_icon' width={32} height={32} />
                    </span>
                    <h5 className='text-[var(--main-primary-text-color)] text-3xl md:text-5xl font-normal'>5K+</h5>
                    <span className='inline-block text-[var(--main-primary-text-color)] md:text-lg xl:text-2xl font-semibold mb-3 md:mb-6'>Active Users</span>
                    <p className='text-[#6E6E6E]'>Navigated their care journey using icanheal’s tools and services.</p>
                </div>
                <div className='w-full md:w-1/3 min-h-[300px] bg-[#FFF2EC] rounded-[20px] p-8'>
                    <span className='inline-flex justify-center items-center rounded-full p-2 bg-[var(--main-theme-background)] mb-10 md:mb-20'>
                        <Image src="/assets/emoji-normal.svg" alt='people_icon' width={32} height={32} />
                    </span>
                    <h5 className='text-[var(--main-primary-text-color)] text-3xl md:text-5xl font-normal'>92%</h5>
                    <span className='inline-block text-[var(--main-primary-text-color)] md:text-lg xl:text-2xl font-semibold mb-3 md:mb-6'>Satisfaction Rate</span>
                    <p className='text-[#6E6E6E]'>Among patients and caregivers who used our end-to-end support.</p>
                </div>
                <div className='w-full md:w-1/3 min-h-[300px] bg-[#FFF2EC] rounded-[20px] p-8'>
                    <span className='inline-flex justify-center items-center rounded-full p-2 bg-[var(--main-theme-background)] mb-10 md:mb-20'>
                        <Image src="/assets/doctor.svg" alt='people_icon' width={32} height={32} />
                    </span>
                    <h5 className='text-[var(--main-primary-text-color)] text-3xl md:text-5xl font-normal'>2.5K+</h5>
                    <span className='inline-block text-[var(--main-primary-text-color)] md:text-lg xl:text-2xl font-semibold mb-3 md:mb-6'>Doctors in Our Network</span>
                    <p className='text-[#6E6E6E]'>Trusted oncology specialists and medical experts collaborating for better outcomes.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default TotalStats