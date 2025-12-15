import Image from "next/image";
import React from "react";

const HeroSecondBanner = ({ heroTitle, heroDescription, heroBannerImg }) => {
  return (
    <section className="relative overflow-hidden bg-[url('/assets/hero_main_banner_img.png')] bg-cover bg-center bg-no-repeat aspect-[16/9] w-full h-[400px] md:min-h-[450px] lg:min-h-[550px] px-5 py-5 md:py-20">
      <div className="absolute right-1 md:right-[70px] bottom-0 w-[180px] sm:w-[200px] md:w-[500px] lg:w-[520px]">
        <Image
          src={heroBannerImg}
          alt="mobile"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto"
        />
      </div>

      <div className="max-w-[var(--max-width)] mx-auto relative z-10">
        <div className="">
          <h2 className="leading-10 md:leading-20 w-full lg:w-[860px] font-epilogue text-3xl md:text-6xl font-semibold mb-3 text-[#FFE8DD]">
            {heroTitle}
          </h2>
          <p className="w-full lg:w-[730px] text-sm font-light md:text-[16px] text-white">
            {heroDescription}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSecondBanner;
