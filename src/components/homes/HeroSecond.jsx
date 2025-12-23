import Image from 'next/image'
import React from 'react'

const HeroSecond = ({
  title,
  subtitle,
  statsNumber,
  smallInfo,
  btnText,
  heroBannerImg,
  bgImage,
  bgHeight,
  bgSize,
  bgPosition,
  bgGradient
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
          <div className="flex justify-start sm:items-start sm:py-4 flex-col items-center h-full sm:w-1/2 md:w-4/5 relative">
            <div className="pt-4 px-4">
              <h1 className="text-3xl leading-11 sm:text-[28px]  md:text-4xl sm:leading-10 md:leading-12  md:pt-10 lg:text-5xl lg:leading-16 text-[#FFE8DD] px-1 font-bold font-epilogue">
                {title}
              </h1>
              <p className="sm:text-lg md:text-xl mt-6 mb-12 font-light pl-0.5 text-white font-poppins md:w-4/5 lg:w-3/4">
                {subtitle}
              </p>
            </div>           
          </div>
        </div>
        <div className='w-2/5 absolute bottom-[4%] right-[9%]'>
            <Image src={`${heroBannerImg}`} alt="hero banner" width={400} height={800} className='h-auto w-full object-contain'/>
            
        </div>
      </div>
    </section>
  )
}

export default HeroSecond