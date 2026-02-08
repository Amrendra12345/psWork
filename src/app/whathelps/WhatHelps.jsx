import { IoWalletOutline } from "react-icons/io5";
import { HiArrowLongRight } from "react-icons/hi2";
import { FaHandHoldingMedical } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { BsFillHeartPulseFill } from "react-icons/bs";
import { FaHeartPulse } from "react-icons/fa6";

export default function WhatHelps() {
  return (
    <section className='w-full py-8'>
        <div className='max-w-7xl mx-auto'>
            <h2 className='pt-6 pb-4 leading-normal md:leading-12 text-(--main-primary-text-color) mb-3 md:mb-6 rounded-3xl text-3xl md:text-4xl font-bold text-center'>What icanheal helps you with</h2>
            <div className='w-full flex justify-between items-center gap-5'>
                <div className='w-3/12 py-5 px-4 rounded-lg border border-zinc-100 transition-all duration-300 hover:border-green-200'>
                  <div className="w-full flex justify-center items-center flex-col">
                    <div className="w-15 h-15 p-1 bg-(--main-theme-background) rounded-full flex justify-center items-center">
                      <IoWalletOutline  className="text-white text-3xl"/>
                    </div>
                     <p className="font-semibold tracking-wide pt-4 text-(--main-primary-text-color)">Financial & Assistance Programs</p>
                    </div>
                    <div className="flex gap-1 justify-between">
                    <ul className="py-2">
                       <li className="text-sm text-gray-700 font-semibold tracking-wider py-1 flex gap-1 items-center"><HiArrowLongRight className="text-(--main-primary-text-color)"/>PAP</li>
                       <li className="text-sm text-gray-700 font-semibold tracking-wider py-1 flex gap-1 items-center"><HiArrowLongRight className="text-(--main-primary-text-color)"/>Financial Aid</li>                       
                    </ul>
                    <ul className="py-2">
                      <li className="text-sm text-gray-700 font-semibold tracking-wider py-1 flex gap-1 items-center"><HiArrowLongRight className="text-(--main-primary-text-color)"/>Insurance </li>
                       <li className="text-sm text-gray-700 font-semibold tracking-wider py-1 flex gap-1 items-center"><HiArrowLongRight className="text-(--main-primary-text-color)"/>Grievances</li>
                    </ul>
                    </div>
                </div>
                 <div className='w-3/12 py-5 px-4 rounded-lg border border-zinc-100 transition-all duration-300 hover:border-green-200'>
                  <div className="w-full flex justify-center items-center flex-col">
                    <div className="w-15 h-15 p-1 bg-(--main-theme-background) rounded-full flex justify-center items-center">
                      <FaHandHoldingMedical className="text-white text-3xl"/>
                    </div>
                     <p className="font-semibold tracking-wide pt-4 text-(--main-primary-text-color)"> Medical & Care Services</p>
                    </div>
                    <div className="flex gap-1 justify-between">
                    <ul className="py-2">
                       <li className="text-sm text-gray-700 font-semibold tracking-wider py-1 flex gap-1 items-center"><HiArrowLongRight className="text-(--main-primary-text-color)"/>Diagnostics</li>
                       <li className="text-sm text-gray-700 font-semibold tracking-wider py-1 flex gap-1 items-center"><HiArrowLongRight className="text-(--main-primary-text-color)"/>Therapies</li>                       
                    </ul>
                    <ul className="py-2">
                      <li className="text-sm text-gray-700 font-semibold tracking-wider py-1 flex gap-1 items-center"><HiArrowLongRight className="text-(--main-primary-text-color)"/>Second Opinion </li>                       
                    </ul>
                    </div>
                </div>
                 <div className='w-3/12 py-5 px-4 rounded-lg border border-zinc-100 transition-all duration-300 hover:border-green-200'>
                  <div className="w-full flex justify-center items-center flex-col">
                    <div className="w-15 h-15 p-1 bg-(--main-theme-background) rounded-full flex justify-center items-center">
                      <FaHeartPulse className="text-white text-3xl"/>
                    </div>
                     <p className="font-semibold tracking-wide pt-4 text-(--main-primary-text-color)"> Smart Health Tools</p>
                    </div>
                    <div className="flex gap-1 justify-between">
                    <ul className="py-2">
                       <li className="text-sm text-gray-700 font-semibold tracking-wider py-1 flex gap-1 items-center"><HiArrowLongRight className="text-(--main-primary-text-color)"/>Report Summary</li>
                       <li className="text-sm text-gray-700 font-semibold tracking-wider py-1 flex gap-1 items-center"><HiArrowLongRight className="text-(--main-primary-text-color)"/>Medicine Intake</li>                       
                    </ul>
                    <ul className="py-2">
                      <li className="text-sm text-gray-700 font-semibold tracking-wider py-1 flex gap-1 items-center"><HiArrowLongRight className="text-(--main-primary-text-color)"/>Briefcase </li>                      
                    </ul>
                    </div>
                </div>
                 <div className='w-3/12 py-5 px-4 rounded-lg border border-zinc-100 transition-all duration-300 hover:border-green-200'>
                  <div className="w-full flex justify-center items-center flex-col">
                    <div className="w-15 h-15 p-1 bg-(--main-theme-background) rounded-full flex justify-center items-center">
                      <FiUsers  className="text-white text-3xl"/>
                    </div>
                     <p className="font-semibold tracking-wide pt-4 text-(--main-primary-text-color)">Care & Convenience</p>
                    </div>
                    <div className="flex gap-1 justify-between">
                    <ul className="py-2">
                       <li className="text-sm text-gray-700 font-semibold tracking-wider py-1 flex gap-1 items-center"><HiArrowLongRight className="text-(--main-primary-text-color)"/>Medicine Order</li>
                       <li className="text-sm text-gray-700 font-semibold tracking-wider py-1 flex gap-1 items-center"><HiArrowLongRight className="text-(--main-primary-text-color)"/>Cab Booking</li>                       
                    </ul>
                    <ul className="py-2">
                      <li className="text-sm text-gray-700 font-semibold tracking-wider py-1 flex gap-1 items-center"><HiArrowLongRight className="text-(--main-primary-text-color)"/>Home Support </li>
                    </ul>
                    </div>
                </div>               
            </div>
        </div>
    </section>
  )
}
