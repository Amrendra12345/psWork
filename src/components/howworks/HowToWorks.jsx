import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLocationArrow } from "react-icons/fa";

const HowToWorks = () => {
  return (
    <section className="px-5 pt-6 pb-10 md:pb-16">
      <div className="max-w-(--max-width) mx-auto">
        <span className="block text-center text-[#6E6E6E] text-lg font-epilogue">
          How icanheal Works
        </span>
        <h2 className="w-full text-center font-epilogue font-bold text-3xl text-(--main-primary-text-color)">
          Simple steps to get start your health journey
        </h2>
        <div className="mt-8 w-full flex justify-between items-center">
          <div className="w-1/3 setpOne relative py-6 flex justify-center items-center flex-col  px-4">
             <p className="font-semibold text-lg text-gray-500">01 <span className="text-(--main-primary-text-color) pl-2">Onboard</span></p>
            <div className="w-50 h-50 my-4 bg-teal-700 rounded-full border-gray-100 border flex justify-center items-center relative z-20">
              <div className="w-45 h-45 rounded-full relative">
                <Image
                  src="/assets/step_one.png"
                  alt="step_one"
                  fill
                  sizes="100vw"
                  className="object-cover w-full h-auto rounded-full"
                />
                
              </div>
            </div>
            <p className="text-center text-sm text-(--main-primary-text-color) font-medium"> Access affordable treatment, expert guidance, emotional support,
              and the right tools, all in one place.</p>
          </div>
          <div className="w-1/3 setpOne relative  py-6 flex justify-center items-center flex-col  px-4">
             <p className="font-semibold text-lg text-gray-500">02 <span className="text-(--main-primary-text-color) pl-2">Get matched to money & services</span></p>
            <div className="w-50 h-50 my-4 bg-teal-700 rounded-full border-gray-100 border flex justify-center items-center">
              <div className="w-45 h-45 rounded-full relative">
                <Image
                  src="/assets/step_two.png"
                  alt="step_one"
                  fill
                  sizes="100vw"
                  className="object-cover w-full h-auto rounded-full"
                />
                 <FaLocationArrow className="arrow_dash"/>
              </div>
            </div>
            <p className="text-center text-sm text-(--main-primary-text-color) font-medium"> Access affordable treatment, expert guidance, emotional support,
              and the right tools, all in one place.</p>
          </div>
          <div className="w-1/3  py-6 flex justify-center items-center flex-col px-4">
             <p className="font-semibold text-lg text-gray-500">03 <span className="text-(--main-primary-text-color) pl-2"> Track everything in one timeline</span></p>
            <div className="w-50 h-50 my-4 bg-teal-700 rounded-full border-gray-100 border flex justify-center items-center">
              <div className="w-45 h-45 rounded-full relative">
                <Image
                  src="/assets/steps_three.png"
                  alt="step_one"
                  fill
                  sizes="100vw"
                  className="object-cover w-full h-auto rounded-full"
                />
                <FaLocationArrow className="arrow_dash"/> 
              </div>
            </div>
            <p className="text-center text-sm text-(--main-primary-text-color) font-medium"> Access affordable treatment, expert guidance, emotional support,
              and the right tools, all in one place.</p>
          </div>
        </div>
        {/* <div className="md:max-w-2/3 mx-auto flex items-center justify-around flex-col md:flex-row gap-0 lg:gap-5  mb-8 md:mb-16">
          <div className="w-full md:w-[50%] pb-5 md:pb-0 px-1 md:px-0">
            <span className="text-(--main-primary-text-color) font-normal inline-block mb-3">
              01
            </span>
            <h4 className="font-epilogue text-(--main-primary-text-color) text-2xl md:text-3xl font-semibold">
              Onboard
            </h4>
            <p className="text-[#232323] pt-1 pb-3">
              Access affordable treatment, expert guidance, emotional support,
              and the right tools, all in one place.
            </p>
            <Link
              className="inline-block border text-(--main-primary-text-color) border-(--main-primary-text-color) rounded-full px-5 py-3"
              href="/pap"
            >
              Explore
            </Link>
          </div>
          <div className="w-full md:w-1/4 border border-gray-200 p-4 rounded-2xl">
            <Image
              src="/assets/step_one.png"
              alt="step_one"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
            />
          </div>
        </div>
        <div className="md:max-w-2/3 mx-auto flex items-center justify-around flex-col md:flex-row gap-5 mb-8 md:mb-10">
          <div className="w-full md:w-1/4 order-2 md:order-1 border border-gray-200 p-4 rounded-2xl">
            <Image
              src="/assets/step_two.png"
              alt="step_one"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
            />
          </div>
          <div className="w-full md:w-[50%] px-1 md:px-0 order-1 md:order-2">
            <span className="text-(--main-primary-text-color) font-normal inline-block mb-3">
              02
            </span>
            <h4 className="font-epilogue text-(--main-primary-text-color) text-2xl md:text-3xl font-semibold">
              Get matched to money & services
            </h4>
            <p className="text-[#232323] pt-1 pb-3">
              Access affordable treatment, expert guidance, emotional support,
              and the right tools, all in one place.
            </p>
            <Link
              className="inline-block border text-(--main-primary-text-color) border-(--main-primary-text-color) rounded-full px-5 py-3"
              href="/fas"
            >
              Explore
            </Link>
          </div>
        </div>
        <div className="md:max-w-2/3 mx-auto flex items-center justify-around flex-col md:flex-row">            
          <div className="w-full md:w-[50%] px-1 md:px-0">
            <span className="text-(--main-primary-text-color) font-normal inline-block mb-3">
              03
            </span>
            <h4 className="font-epilogue text-(--main-primary-text-color) text-2xl md:text-3xl font-semibold">
              Track everything in one timeline
            </h4>
            <p className="text-[#232323] pt-1 pb-3">
              Access affordable treatment, expert guidance, emotional support, and the right tools, all in one place.
            </p>
            <Link
              className="inline-block border text-(--main-primary-text-color) border-(--main-primary-text-color) rounded-full px-5 py-3"
              href="/vas"
            >
              Explore
            </Link>
          </div>
          <div className="w-full md:w-1/4 border border-gray-200 p-4 rounded-2xl">
            <Image
              src="/assets/steps_three.png"
              alt="step_one"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
            />
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default HowToWorks;
