import Image from "next/image";
import Link from "next/link";
import React from "react";

const SmartTools = ({ withMargin = true }) => {
  return (
    <section className={`${withMargin ? 'mb-10 md:mb-16' : ''} bg-[var(--main-theme-background)] py-7 md:py-20 px-6`}>
      <div className="max-w-[var(--max-width)] mx-auto">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-10 md:mb-20">
          <h4 className="text-center md:text-left font-epilogue leading-[45px] md:leading-14 text-white text-2xl md:text-5xl w-full md:w-96 font-semibold mb-2 md:mb-0">
            Smart Tools Just for You:
          </h4>
          <Link
            className="w-[284px] mx-auto md:w-80 md:mx-0 bg-white text-[14px] md:text-[15px] text-center font-epilogue pt-3 py-2 px-4 md:px-8 rounded-full text-[var(--main-primary-text-color)] font-semibold"
            href="/"
          >
            LET'S NAVIGATE THIS TOGETHER
          </Link>
        </div>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div className="bg-white md:w-[49%] rounded-4xl">
            <div className="p-8 w-full md:w-full lg:w-[80%] xl:w-full">
              <h3 className="text-2xl md:text-[30px] lg:text-[32px] font-medium font-epilogue text-[var(--main-primary-text-color)] mb-2 md:mb-2">
                Financing Eligibility Checker
              </h3>
              <p className="text-[#232323]">
                Know if you qualify for loans or support in under 2 minutes.
              </p>
            </div>

            <Image
              src="/assets/mobile-notifications_one.png"
              alt="mobile-img"
              width={500}
              height={531}
              sizes="100vw"
              className="w-full h-auto object-contain rounded-3xl"
            />
          </div>
          <div className="bg-white md:w-[49%] rounded-4xl">
            <div className="p-8 w-full md:w-full lg:w-[80%] xl:w-full">
              <h3 className="text-2xl md:text-[30px] lg:text-[32px] font-medium font-epilogue text-[var(--main-primary-text-color)] mb-2 md:mb-2">
                Insurance Coverage Checker
              </h3>
              <p className="text-[#232323]">
                See what your policy actually covers before your treatment
                starts.
              </p>
            </div>

            <Image
              src="/assets/mobile-notifications_two.png"
              alt="mobile-img"
              width={500}
              height={531}
              sizes="100vw"
              className="w-full h-auto object-contain rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartTools;
