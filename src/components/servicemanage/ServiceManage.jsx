import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ServiceManage = () => {
  return (
    <section className="bg-(--main-theme-background) px-5 py-10 md:py-16 mb-10 md:mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-[50%] lg:w-[52%] mb-10 md:mb-0">
              <h3 className="w-full lg:w-135 text-white font-popping text-center md:text-left text-3xl md:text-4xl font-bold mb-6 md:mb-16">
                Already Using VAS?
              </h3>
              <Link href="/" className='rounded-full inline-flex justify-center items-center py-5 w-full md:w-[300px]  bg-white text-(--main-primary-text-color) text-lg font-semibold' >Manage My Services</Link>
            </div>
            <ul className="w-full md:w-[49%] lg:w-[48%]">
              <li className="grid grid-cols-[auto_1fr] items-center mb-9">
                <span className="font-bold text-(--main-primary-text-color) mr-4 md:mr-5 inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/90">
                  <Image src="/assets/menu-board.svg" alt='icon' width={32} height={32} />
                </span>
                <p className='text-white/80 font-poppings text-xl font-semibold'>Check if you're eligible</p>
              </li>
              <li className="grid grid-cols-[auto_1fr] items-center mb-9">
                <span className="font-bold text-(--main-primary-text-color) mr-4 md:mr-5 inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/90">
                  <Image src="/assets/edit.svg" alt='icon' width={32} height={32} />
                </span>
                <p className='text-white/80 font-poppings text-xl font-semibold'>Get step-by-step help with paperwork</p>
              </li>
              <li className="grid grid-cols-[auto_1fr] items-center">
                <span className="font-bold text-(--main-primary-text-color) mr-4 md:mr-5 inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/90">
                 <Image src="/assets/profileusericon.svg" alt='icon' width={32} height={32} />
                </span>
                <p className='text-white/80 font-poppings text-xl font-semibold'>Start receiving support faster</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
  )
}

export default ServiceManage