import CardUpperEffect from '@/components/cardUpperEffect/CardUpperEffect'
import CareTakercard from '@/components/caretakercard/CareTakercard'
import HelpAndSupport from '@/components/helpandsupport/HelpAndSupport'
import PapInfoCards from '@/components/papinfocards/PapInfoCards'
import ServiceHero from '@/components/serviceHero/ServiceHero'
import SmartTools from '@/components/smarttools/SmartTools'
import Image from 'next/image'
import React from 'react'

const Pap = () => {
  return (
    <>
    <ServiceHero 
        title="Affordable Access to Treatment"
        bgImage="/assets/pap_banner.png"
        subtitle="If you're worried about how to afford your cancer or critical care treatment, you're not alone. icanheal connects patients to programs that offer free or subsidized medication based on individual needs and medical recommendations so that cost doesn't stand in the way of care."
    />  
    <CardUpperEffect/>
    <PapInfoCards />
    <SmartTools withMargin={false} />
    <section className="bg-(--main-theme-background) px-5 pb-10 mb-10 md:mb-16">
        <div className="w-full md:max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-start justify-between">
            <div className="w-full md:w-3/5  mb-4 md:mb-0">
              <p className="text-center md:text-left text-white/80 font-poppins mb-4 text-lg md:text-xl">
                Need Help Enrolling?
              </p>
              <h3 className="text-3xl md:text-4xl leading-12 font-popping font-semibold text-white/90 mb-8 text-center md:text-left md:max-w-3/4">
                If you&#x27;re not yet on a Patient Access Program:
              </h3>
            </div>
            <ul className="w-full md:w-2/5">
                <li className="text-white/90 font-poppins  flex items-center text-xl mb-4">
                    <span className="font-bold text-(--main-primary-text-color) text-[16px] mr-4 md:mr-5 inline-flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full bg-white/80">
                      01
                    </span>
                    Check if you're eligible
                </li>
                <li className="text-white/90 font-poppins  flex items-center text-xl mb-4">
                    <span className="font-bold text-(--main-primary-text-color) text-[16px] mr-4 md:mr-5 inline-flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full bg-white/80">
                      02
                    </span>
                    Get step-by-step help with paperwork
                </li>
                <li className="text-white/90 font-poppins  flex items-center mb-4 text-xl">
                    <span className="font-bold text-(--main-primary-text-color) text-[16px] mr-4 md:mr-5 inline-flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full bg-white/80">
                      03
                    </span>
                    Start receiving support faster
                </li>
            </ul>
            {/* <ul className="w-full md:w-2/5">
              <li className="text-white flex items-center text-sm md:text-[15px] lg:text-2xl mb-9">
                <span className="font-bold text-(--main-primary-text-color) text-[16px] mr-4 md:mr-5 inline-flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full bg-white">
                  01
                </span>
                Check if you're eligible
              </li>
              <li className="text-white flex items-center text-sm md:text-[15px] lg:text-2xl mb-9">
                <span className="font-bold text-(--main-primary-text-color) text-[16px] mr-4 md:mr-5 inline-flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full bg-white">
                  02
                </span>
                Get step-by-step help with paperwork
              </li>
              <li className="text-white flex items-center text-sm md:text-[15px] lg:text-2xl mb-9">
                <span className="font-bold text-(--main-primary-text-color) text-[16px] mr-4 md:mr-5 inline-flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full bg-white">
                  03
                </span>
                Start receiving support faster
              </li>
            </ul> */}
          </div>
        </div>
    </section>
    <CareTakercard />
    <HelpAndSupport
        heading="Need help deciding what’s right for you?"
        icon1="/assets/Emergency_white.svg"
        icon1Text="We’re here to guide you through this journey."
        icon2Heading="24/7"
        icon2Text="Customer Support available"
        callNumber="+91-1234567890"
        callText="Call us at +91-1234567890"
        whatsappNumber="+91-1234567890"
        whatsappText="WhatsApp us"
        imageUrl="/assets/placeholderimg.png"
      />
    </>
  )
}

export default Pap