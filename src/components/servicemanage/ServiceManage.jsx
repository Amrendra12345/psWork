import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ServiceManage = () => {
  return (
    <section className="bg-[var(--main-theme-background)] px-5 py-10 md:py-16 mb-10 md:mb-16">
        <div className="max-w-[var(--max-width)] mx-auto">
          <div className="flex flex-col md:flex-row items-start justify-between">
            <div className="w-full md:w-[50%] lg:w-[52%] mb-10 md:mb-0">
              <h3 className="w-full lg:w-[530px] text-white font-epilogue text-center md:text-left text-3xl md:text-4xl lg:text-6xl font-semibold mb-6 md:mb-16">
                Already Using VAS?
              </h3>
              <Link href="/" className='rounded-full inline-flex justify-center items-center py-3 w-full md:w-[300px]  bg-white text-[var(--main-primary-text-color)]'>Manage My Services</Link>
            </div>
            <ul className="w-full md:w-[49%] lg:w-[48%]">
              <li className="grid grid-cols-[auto_1fr] items-center mb-9">
                <span className="font-bold text-[var(--main-primary-text-color)] text-[16px] mr-4 md:mr-5 inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-white">
                  <Image src="/assets/menu-board.svg" alt='icon' width={32} height={32} />
                </span>
                <p className='text-white font-epilogue text-sm md:text-[15px] lg:text-2xl'>Check if you're eligible</p>
              </li>
              <li className="grid grid-cols-[auto_1fr] items-center mb-9">
                <span className="font-bold text-[var(--main-primary-text-color)] text-[16px] mr-4 md:mr-5 inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-white">
                  <Image src="/assets/edit.svg" alt='icon' width={32} height={32} />
                </span>
                <p className='text-white font-epilogue text-sm md:text-[15px] lg:text-2xl'>Get step-by-step help with paperwork</p>
              </li>
              <li className="grid grid-cols-[auto_1fr] items-center">
                <span className="font-bold text-[var(--main-primary-text-color)] text-[16px] mr-4 md:mr-5 inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-white">
                 <Image src="/assets/profileusericon.svg" alt='icon' width={32} height={32} />
                </span>
                <p className='text-white font-epilogue text-sm md:text-[15px] lg:text-2xl'>Start receiving support faster</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
  )
}

export default ServiceManage