import CardUpperEffect from '@/components/cardUpperEffect/CardUpperEffect'
import Image from 'next/image'
import React from 'react'

const TermsConditions = () => {
  return (
    <>
      <div className="w-full px-4 py-10 bg-(--main-theme-background) h-90 md:h-130 relative flex items-center justify-center">
        <h1 className="text-3xl leading-11 sm:text-[28px]  md:text-4xl sm:leading-10 md:leading-12  md:pt-10 lg:text-5xl lg:leading-16 text-[#FFE8DD] px-1 font-bold font-epilogue z-20">
          Terms & Conditions
        </h1>

        <div className="w-155 h-90 absolute bottom-0 left-1/2 transform -translate-x-1/2 overflow-hidden z-0">
          <Image
            src="/assets/hero_icon.png"
            alt="Privacy Policy"
            width={400}
            height={450}
            className="w-full h-auto"
          />
        </div>
      </div>
      <CardUpperEffect />
    </>
  )
}

export default TermsConditions