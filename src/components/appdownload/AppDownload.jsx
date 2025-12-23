import Image from "next/image";
import Link from "next/link";
import React from "react";

const AppDownload = () => {
  return (
    <>
      <section className="hidden md:block">
        <div className="relative w-full bg-[url('/assets/downloadapp.png')] bg-cover bg-center bg-no-repeat aspect-video md:aspect-auto md:min-h-175 flex items-center mb-10 md:mb-16">
          <div className="flex flex-col items-end md:items-end w-full">
            <h5 className="font-epilogue text-white text-2xl text-center md:text-[32px] font-semibold leading-tight mb-5 max-w-[40%] pr-5">
              Join thousands simplifying their critical care experience.
            </h5>
             <h5 className="font-epilogue text-white text-center text-2xl md:text-[28px] font-semibold leading-tight mb-5 max-w-[40%] pr-4">
             Over 10K families trust us to make care easier.
            </h5>

            <div className="flex gap-3 w-full md:max-w-[40%] px-3 md:px-0 justify-center">
              <Link
                href="/"
                className="w-full text-sm md:text-[15px] md:w-auto inline-flex items-center justify-center gap-1 md:gap-2 bg-white rounded-full px-3 md:px-5 py-2"
              >
                <Image
                  src="/assets/apple.svg"
                  alt="apple_icon"
                  width={29}
                  height={29}
                />
                Download Now
              </Link>

              <Link
                href="/"
                className="w-full text-sm md:text-[15px] md:w-auto inline-flex items-center justify-center gap-1 md:gap-2 bg-white rounded-full px-3 md:px-5 py-2"
              >
                <Image
                  src="/assets/group.svg"
                  alt="playstore_icon"
                  width={21}
                  height={22}
                />
                Download Now
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-(--main-theme-background) min-h-100 w-full md:hidden">
        <div className="bg-(--main-theme-background) w-full">
          <Image
            src="/assets/downloadapp.png"
            alt="download_app_bg"
            width={1920}
            height={400}
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="px-4 pt-8 pb-5">
          <h5 className="font-epilogue text-white text-2xl md:text-3xl font-semibold leading-10  mb-5">
            Join thousands simplifying their critical care experience.
          </h5>
          <div className="flex gap-3 w-full md:w-110 px-3 md:px-0">
            <Link
              href="/"
              className="w-full text-sm md:text-[15px] md:w-auto inline-flex items-center justify-center gap-1 md:gap-2 bg-white rounded-full px-3 md:px-5 py-2"
            >
              <Image
                src="/assets/apple.svg"
                alt="apple_icon"
                width={29}
                height={29}
              />
              Download Now
            </Link>

            <Link
              href="/"
              className="w-full text-sm md:text-[15px] md:w-auto inline-flex items-center justify-center gap-1 md:gap-2 bg-white rounded-full px-3 md:px-5 py-2"
            >
              <Image
                src="/assets/group.svg"
                alt="playstore_icon"
                width={21}
                height={22}
              />
              Download Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AppDownload;
