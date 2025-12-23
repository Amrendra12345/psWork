import Image from "next/image";
import Link from "next/link";
import React from "react";

const HowToWorks = () => {
  return (
    <section className="px-5 pt-0 pb-10 md:pb-16">
      <div className="max-w-(--max-width) mx-auto">
        <span className="block text-center text-[#6E6E6E] text-lg md:text-2xl font-epilogue">
          How it works
        </span>
        <h2 className="w-full text-center font-epilogue font-bold text-3xl md:text-4xl md:leading-12 lg:leading-20 mb-8 md:mb-8 text-(--main-primary-text-color)">
          Simple steps to get start your health journey
        </h2>
        <div className="md:max-w-2/3 mx-auto flex items-center justify-around flex-col md:flex-row gap-0 lg:gap-5  mb-8 md:mb-16">
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
        </div>
      </div>
    </section>
  );
};

export default HowToWorks;
