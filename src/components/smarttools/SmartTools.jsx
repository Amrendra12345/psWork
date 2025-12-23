import Image from "next/image";
import Link from "next/link";
import React from "react";

const SmartTools = ({ withMargin = true }) => {
  return (
    <section
      className={`${
        withMargin ? "mb-10 md:mb-16" : ""
      } bg-(--main-theme-background) py-7 md:py-14 px-6`}
    >
        <div className="max-w-(--max-width) mx-auto">
          <div className="flex flex-col md:flex-row gap-4 justify-between mb-10 md:ml-22 items-center">
            <h4 className="text-white font-popping text-3xl md:text-4xl font-semibold md:max-w-1/4 leading-12"> Smart Tools Just for You:</h4>
            <Link className="bg-white py-5 px-7 rounded-4xl font-semibold mb-10 md:mr-22" href="/">
              LET'S NAVIGATE THIS TOGETHER
            </Link>
          </div>
          <div className="flex flex-col md:flex-row gap-4 justify-around">
            <div className="md:w-2/5  h-full md:p-4">
              <div className="bg-white w-full min-h-full rounded-2xl p-4 pb-1">
                <h3 className="text-2xl md:text-3xl font-medium font-poppins text-(--main-primary-text-color)">
                  Financing Eligibility Checker
                </h3>
                <p className="font-popping text-(--main-primary-text-color) mt-2 text-lg">
                  Know if you qualify for loans or support in under 2 minutes.
                </p>
                <div className="pt-5">
                  <Image
                    src="/assets/mobile-notifications_one.png"
                    alt="mobile-img"
                    width={500}
                    height={531}
                    sizes="100vw"
                    className="w-full h-auto object-contain rounded-3xl"
                  />
                </div>
              </div>
            </div>
            <div className="md:w-2/5  h-full md:p-4">
              <div className="bg-white w-full min-h-full rounded-2xl p-4 pb-1">
                <h3 className="text-2xl md:text-3xl font-medium font-poppins text-(--main-primary-text-color)">
                  Insurance Coverage Checker
                </h3>
                <p className="font-popping text-(--main-primary-text-color) mt-2 text-lg">
                  See what your policy actually covers before your treatment
                  starts.
                </p>
                <div className="pt-5">
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
          </div>
        </div>
    </section>
  );
};

export default SmartTools;
