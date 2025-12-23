import Image from "next/image";
import React from "react";

const Hero = ({
  title,
  subtitle,
  statsNumber,
  smallInfo,
  btnText,
  bgImage,
  bgHeight,
  bgSize,
  bgPosition,
  bgGradient,
}) => {
  return (
    <section className="w-full px-0 bg-(--main-theme-background)">
      <div
        className={`w-full ${bgHeight} ${bgSize} ${bgPosition} bg-no-repeat`}
        style={{
          backgroundImage: `${bgGradient}, url(${bgImage})`,
        }}
      >
        <div className="max-w-(--max-width) mx-auto h-full z-10 relative">
          <div className="flex justify-start sm:items-start sm:py-4 flex-col items-center h-full sm:w-1/2 md:w-3/5 relative">
            <div className="pt-4 px-4">
              <h1 className="text-3xl leading-11 sm:text-[28px]  md:text-4xl sm:leading-10 md:leading-12  md:pt-10 lg:text-5xl lg:leading-16 text-[#FFE8DD] px-1 font-bold font-epilogue">
                {title}
              </h1>
              <p className="sm:text-lg md:text-xl mt-6 mb-12 font-light pl-0.5 text-white font-poppins md:w-4/5 lg:w-3/4">
                {subtitle}
              </p>
            </div>
            <div className="bg-(--main-theme-background) sm:bg-white rounded-3xl z-10 border border-gray-400/80 w-[94%]  sm:w-3/4 mx-2  md:w-1/2 lg:w-90 p-3 md:mt-0  shadow-2xl p-4 mt-auto sm:mt-0 absolute left -bottom-34 sm:relative sm:bottom-auto">
              <div className="flex items-center mb-3">
                <h4 className="text-white sm:text-(--main-primary-text-color) text-4xl md:text-5xl lg:text-7xl pr-4">
                  {statsNumber}
                </h4>
                <p className="text-white sm:text-(--main-primary-text-color)  md:text-1xl lg:text-[19px]">
                  {smallInfo}
                </p>
              </div>
              <button className="cursor-pointer bg-white sm:bg-(--main-theme-background) rounded-full px-5 py-4 w-full text-(--main-primary-text-color)  sm:text-white mt-4 sm:mt-0 p">
                {btnText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
