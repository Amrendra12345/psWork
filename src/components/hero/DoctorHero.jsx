import React from "react";

const DoctorHero = ({
  title,
  subtitle,
  bgImage,
  statsNumber,
  smallInfo,
  btnText,
}) => {
  return (
    <section
      className="relative h-[500px] md:h-[550px] lg:h-[650px] text-white pt-0 md:pt-10 lg:pt-16 w-full aspect-[16/9]  bg-no-repeat bg-[var(--main-theme-background)] bg-[position:100%_100%] 
bg-[size:100%_66%]
md:bg-[position:102%_30%] 
md:bg-[size:77%_111%]"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(26, 67, 78, 0) 59%, #1A434E 94.06%),linear-gradient(304deg, rgba(26, 67, 78, 0) 42.39%, #1A434E 92.03%),
      url(${bgImage})`, 
      
      }}
    >
      <div className="max-w-[var(--max-width)] mx-auto md:min-h-[300px] lg:min-h-[460px] flex flex-col justify-between px-3">
        <div className="w-full md:w-[50%]">
          <h1 className="text-[#FFE8DD] text-3xl md:text-4xl lg:text-5xl font-semibold font-epilogue pt-5 md:pt-0 mb-1 leading-normal md:leading-[64px]">
            {title}
          </h1>
          <p className="sm:text-lg md:text-xl lg:text-xl mb-12 font-light pl-0.5">
            {subtitle}
          </p>
        </div>
        <div className="bg-white rounded-3xl w-full md:w-[400px] lg:w-[363px] p-3 hidden md:block">
          <div className="flex items-center mb-3">
            <h4 className="text-[var(--main-primary-text-color)] text-4xl md:text-4xl lg:text-7xl pr-4">
              {statsNumber}
            </h4>
            <p className="text-[var(--main-primary-text-color)] sm:text-lg md:text-1xl lg:text-[19px]">
              {smallInfo}
            </p>
          </div>
          <button className="cursor-pointer bg-[var(--main-theme-background)] rounded-full px-5 py-2 w-full">
            {btnText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default DoctorHero;
