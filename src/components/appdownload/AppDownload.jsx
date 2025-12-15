import Image from "next/image";
import Link from "next/link";
import React from "react";

const AppDownload = () => {
  return (
    <section className="relative w-full bg-[url('/assets/downloadapp.png')] bg-cover bg-center bg-no-repeat aspect-video md:aspect-auto md:min-h-[700px] flex items-center mb-10 md:mb-16">
      <div className="flex flex-col items-center md:items-end w-full md:w-[95%]">
        <h5 className="font-epilogue text-white text-2xl md:text-4xl font-semibold leading-tight mb-5">
          Join 10k families already <br /> simplifying critical care.
        </h5>

        <div className="flex gap-3 w-full md:w-[440px] px-3 md:px-0">
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
  );
};

export default AppDownload;
