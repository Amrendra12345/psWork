import { IoWalletOutline } from "react-icons/io5";
import { HiArrowLongRight } from "react-icons/hi2";
import { FaHandHoldingMedical } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { BsFillHeartPulseFill } from "react-icons/bs";
import { RiHeartAdd2Fill } from "react-icons/ri";
import { FaHeartPulse } from "react-icons/fa6";
import Image from "next/image";

export default function WhatHelps() {
  return (
    <section className="w-full py-8 px-4 md:10">
        <h2 className="pt-6 pb-4 leading-normal md:leading-12 text-(--main-primary-text-color) mb-3 md:mb-6 rounded-3xl text-3xl md:text-4xl font-bold text-center">
          What icanheal helps you with
        </h2>
      <div className="w-full gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8">
        <div className="relative border rounded-lg border-gray-100 overflow-hidden z-10">
          <Image src={'/assets/placeholder2.png'} width={400} height={350}  className="w-full h-auto rounded z-10" alt="what helps" />
          <div className="">
            <h3 className="text-lg md:text-2xl text-white font-medium absolute top-4 left-4 z-10">
                 Smart Tools
            </h3>
            <p className="text-lg text-white rounded-full font-medium absolute top-4 right-4 border border-white py-2 px-6 transition-all duration-500 hover:bg-white hover:text-black/75 cursor-pointer">Explore</p>
              <p className="text-lg font-bold -mt-6  text-white text-center tracking-wider z-20 relative ">Financial & Assistance Programs</p>
              <div className="flex gap-1 justify-between px-6 pt-1 mt-2">
              <ul className="py-2 relative z-10">
                <li className="text-sm text-gray-100 font-semibold tracking-wider py-1.5 border border-white/50 rounded-full px-5 text-center mb-4 cursor-pointer transition-all duration-300 bg-[#8b8380] hover:bg-white hover:text-black/75">
                  
                  PAP
                </li>
                <li className="text-sm bg-[#8b8380] text-gray-100 font-semibold tracking-wider py-1.5 border border-white/50 rounded-full px-5 text-center mb-4 cursor-pointer transition-all duration-300 hover:bg-white hover:text-black/75">
                  
                  Financial Aid
                </li>
              </ul>
              <ul className="py-2 relative z-10">
                <li className="text-sm bg-[#8b8380] text-gray-100 font-semibold tracking-wider py-1.5 border border-white/50 rounded-full px-5 text-center mb-4 cursor-pointer transition-all duration-300 hover:bg-white hover:text-black/75">
                 
                  Insurance
                </li>
                <li className="text-sm bg-[#8b8380] text-gray-100 font-semibold tracking-wider py-1.5 border border-white/50 rounded-full px-5 text-center mb-4 cursor-pointer transition-all duration-300 hover:bg-white hover:text-black/75">                
                  Grievances
                </li>
              </ul>
            </div>
          </div>
           <div className=" absolute top-0 left-0  bg-[linear-gradient(218deg,transparent_45%,#b5aaa5_58%),linear-gradient(156deg,transparent_60%,#212e2e_64%)] h-full w-full z-0"></div>
        </div>
        <div className="relative border rounded-lg border-gray-100 bg-primary overflow-hidden">
           
          <div className="flex gap-1 justify-between px-6 pt-4 items-center">
               <h3 className="text-lg md:text-2xl text-white font-medium z-10">
                 Medical & Care Services
            </h3>
             <p className="text-lg text-white rounded-full font-medium border border-white py-2 px-6 transition-all duration-500 hover:bg-white hover:text-black/75 cursor-pointer">Explore</p>
          </div>
         
               <div className="px-4 pb-5 pt-10">
                  <ul className="py-2 relative z-10 flex gap-5 justify-between items-center">
                    <li className="text-sm text-gray-100 font-semibold tracking-wider py-1.5 border border-white/50 rounded-full px-5 text-center mb-4 cursor-pointer transition-all duration-300 hover:bg-white hover:text-black/75">
                      Diagnostics
                    </li>
                    <li className="text-sm text-gray-100 font-semibold tracking-wider py-1.5 border border-white/50 rounded-full px-5 text-center mb-4 cursor-pointer transition-all duration-300 hover:bg-white hover:text-black/75">
                      Therapies
                    </li>
                     <li className="text-sm text-gray-100 font-semibold tracking-wider py-1.5 border border-white/50 rounded-full px-5 text-center mb-4 cursor-pointer transition-all duration-300 hover:bg-white hover:text-black/75">
                      Second Opinion
                    </li>
                  </ul>
                 
            </div>
          <div className="px-4">
             <hr className="border-t-2 border-t-white/80 mt-5"></hr>
              <p className="text-white/90 pt-4 pb-10">Explore our flexible financing options designed to meet your unique needs. We're here to help you find the perfect solution for your budget.</p>
          </div>
          <div className="flex gap-1 justify-between px-6 pt-1 mt-5">
              <RiHeartAdd2Fill className="bg-white rounded-full p-1 text-4xl text-primary" />
              <p className="text-white/90 text-4xl font-black">100+</p>
          </div>
        </div>
         <div className="relative border rounded-lg border-gray-100 overflow-hidden z-10">
          <Image src={'/assets/placeholder2.png'} width={400} height={350}  className="w-full h-auto rounded z-10" alt="what helps" />
          <div className="">
            <h3 className="text-lg md:text-2xl text-white font-medium absolute top-4 left-4 z-10">
                 Smart Tools
            </h3>
            <p className="text-lg text-white rounded-full font-medium absolute top-4 right-4 border border-white py-2 px-6 transition-all duration-500 hover:bg-white hover:text-black/75 cursor-pointer">Explore</p>
              <p className="text-lg font-bold -mt-6  text-white text-center tracking-wider z-20 relative ">Smart Health Tools</p>
              <div className="flex gap-1 justify-between px-6 pt-1 mt-2">
              <ul className="py-2 relative z-10">
                <li className="text-sm text-gray-100 font-semibold tracking-wider py-1.5 border border-white/50 rounded-full px-5 text-center mb-4 cursor-pointer transition-all duration-300 bg-[#8b8380] hover:bg-white hover:text-black/75">
                  Report Summary
                </li>
                <li className="text-sm bg-[#8b8380] text-gray-100 font-semibold tracking-wider py-1.5 border border-white/50 rounded-full px-5 text-center mb-4 cursor-pointer transition-all duration-300 hover:bg-white hover:text-black/75">
                  
                  Medicine Intake
                </li>
              </ul>
              <ul className="py-2 relative z-10">
                <li className="text-sm bg-[#8b8380] text-gray-100 font-semibold tracking-wider py-1.5 border border-white/50 rounded-full px-5 text-center mb-4 cursor-pointer transition-all duration-300 hover:bg-white hover:text-black/75">
                 Briefcase
                </li>               
              </ul>
            </div>
          </div>
           <div className=" absolute top-0 left-0  bg-[linear-gradient(218deg,transparent_45%,#b5aaa5_58%),linear-gradient(156deg,transparent_60%,#212e2e_64%)] h-full w-full z-0"></div>
        </div>       
       
      </div>
 


      <div className="max-w-7xl mx-auto">
        
        
        <div className="w-full flex justify-between items-center gap-5">
          <div className="w-3/12 py-5 px-4 rounded-lg border border-zinc-100 transition-all duration-300 hover:border-green-200">
            <div className="w-full flex justify-center items-center flex-col">
              <div className="w-15 h-15 p-1 bg-(--main-theme-background) rounded-full flex justify-center items-center">
                <IoWalletOutline className="text-white text-3xl" />
              </div>
              <p className="font-semibold tracking-wide pt-4 text-(--main-primary-text-color)">
                Financial & Assistance Programs
              </p>
            </div>
            <div className="flex gap-1 justify-between">
              <ul className="py-2">
                <li className="text-sm text-gray-700 font-semibold tracking-wider py-1 flex gap-1 items-center">
                  <HiArrowLongRight className="text-(--main-primary-text-color)" />
                  PAP
                </li>
                <li className="text-sm text-gray-700 font-semibold tracking-wider py-1 flex gap-1 items-center">
                  <HiArrowLongRight className="text-(--main-primary-text-color)" />
                  Financial Aid
                </li>
              </ul>
              <ul className="py-2">
                <li className="text-sm text-gray-700 font-semibold tracking-wider py-1 flex gap-1 items-center">
                  <HiArrowLongRight className="text-(--main-primary-text-color)" />
                  Insurance{" "}
                </li>
                <li className="text-sm text-gray-700 font-semibold tracking-wider py-1 flex gap-1 items-center">
                  <HiArrowLongRight className="text-(--main-primary-text-color)" />
                  Grievances
                </li>
              </ul>
            </div>
          </div>
          <div className="w-3/12 py-5 px-4 rounded-lg border border-zinc-100 transition-all duration-300 hover:border-green-200">
            <div className="w-full flex justify-center items-center flex-col">
              <div className="w-15 h-15 p-1 bg-(--main-theme-background) rounded-full flex justify-center items-center">
                <FaHandHoldingMedical className="text-white text-3xl" />
              </div>
              <p className="font-semibold tracking-wide pt-4 text-(--main-primary-text-color)">
                {" "}
                Medical & Care Services
              </p>
            </div>
            <div className="flex gap-1 justify-between">
              <ul className="py-2">
                <li className="text-sm text-gray-700 font-semibold tracking-wider py-1 flex gap-1 items-center">
                  <HiArrowLongRight className="text-(--main-primary-text-color)" />
                  Diagnostics
                </li>
                <li className="text-sm text-gray-700 font-semibold tracking-wider py-1 flex gap-1 items-center">
                  <HiArrowLongRight className="text-(--main-primary-text-color)" />
                  Therapies
                </li>
              </ul>
              <ul className="py-2">
                <li className="text-sm text-gray-700 font-semibold tracking-wider py-1 flex gap-1 items-center">
                  <HiArrowLongRight className="text-(--main-primary-text-color)" />
                  Second Opinion{" "}
                </li>
              </ul>
            </div>
          </div>
          <div className="w-3/12 py-5 px-4 rounded-lg border border-zinc-100 transition-all duration-300 hover:border-green-200">
            <div className="w-full flex justify-center items-center flex-col">
              <div className="w-15 h-15 p-1 bg-(--main-theme-background) rounded-full flex justify-center items-center">
                <FaHeartPulse className="text-white text-3xl" />
              </div>
              <p className="font-semibold tracking-wide pt-4 text-(--main-primary-text-color)">
                {" "}
                Smart Health Tools
              </p>
            </div>
            <div className="flex gap-1 justify-between">
              <ul className="py-2">
                <li className="text-sm text-gray-700 font-semibold tracking-wider py-1 flex gap-1 items-center">
                  <HiArrowLongRight className="text-(--main-primary-text-color)" />
                  Report Summary
                </li>
                <li className="text-sm text-gray-700 font-semibold tracking-wider py-1 flex gap-1 items-center">
                  <HiArrowLongRight className="text-(--main-primary-text-color)" />
                  Medicine Intake
                </li>
              </ul>
              <ul className="py-2">
                <li className="text-sm text-gray-700 font-semibold tracking-wider py-1 flex gap-1 items-center">
                  <HiArrowLongRight className="text-(--main-primary-text-color)" />
                  Briefcase{" "}
                </li>
              </ul>
            </div>
          </div>
          <div className="w-3/12 py-5 px-4 rounded-lg border border-zinc-100 transition-all duration-300 hover:border-green-200">
            <div className="w-full flex justify-center items-center flex-col">
              <div className="w-15 h-15 p-1 bg-(--main-theme-background) rounded-full flex justify-center items-center">
                <FiUsers className="text-white text-3xl" />
              </div>
              <p className="font-semibold tracking-wide pt-4 text-(--main-primary-text-color)">
                Care & Convenience
              </p>
            </div>
            <div className="flex gap-1 justify-between">
              <ul className="py-2">
                <li className="text-sm text-gray-700 font-semibold tracking-wider py-1 flex gap-1 items-center">
                  <HiArrowLongRight className="text-(--main-primary-text-color)" />
                  Medicine Order
                </li>
                <li className="text-sm text-gray-700 font-semibold tracking-wider py-1 flex gap-1 items-center">
                  <HiArrowLongRight className="text-(--main-primary-text-color)" />
                  Cab Booking
                </li>
              </ul>
              <ul className="py-2">
                <li className="text-sm text-gray-700 font-semibold tracking-wider py-1 flex gap-1 items-center">
                  <HiArrowLongRight className="text-(--main-primary-text-color)" />
                  Home Support{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
