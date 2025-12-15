import CardUpperEffect from "@/components/cardUpperEffect/CardUpperEffect";
import CareTakercard from "@/components/caretakercard/CareTakercard";
import HelpAndSupport from "@/components/helpandsupport/HelpAndSupport";
import HeroSecondBanner from "@/components/herosecondbanner/HeroSecondBanner";
import PapInfoCards from "@/components/papinfocards/PapInfoCards";
import SmartTools from "@/components/smarttools/SmartTools";
import React from "react";

const page = () => {
  return (
    <>
      <HeroSecondBanner
        heroTitle="Get Help with the Cost of Critical Care Medication"
        heroDescription="If you're worried about how to afford your cancer and critical care treatment, you're not alone. icanheal partners with trusted pharma companies like Roche, Servier, and Alkem to help patients access free or subsidized medication, based on your needs and doctor’s advice."
        heroBannerImg="/assets/pap_banner.png"
      />
      <CardUpperEffect />
      <PapInfoCards />
      <SmartTools withMargin={false} />
      <section className="bg-[var(--main-theme-background)] px-5 pb-10 mb-10 md:mb-16">
        <div className="max-w-[var(--max-width)] mx-auto">
          <div className="flex flex-col md:flex-row items-start justify-between">
            <div className="w-full md:w-[50%] lg:w-[52%] mb-10 md:mb-0">
              <span className="text-white w-full md:w-auto text-lg md:text-2xl mb-4 inline-flex justify-center md:justify-start">
                Need Help Enrolling?
              </span>
              <h3 className="w-full lg:w-[530px] text-white font-epilogue text-center md:text-left text-3xl md:text-4xl lg:text-6xl font-semibold">
                If you’re not yet on a Patient Access Program:
              </h3>
            </div>
            <ul className="w-full md:w-[49%] lg:w-[48%]">
              <li className="text-white flex items-center text-sm md:text-[15px] lg:text-2xl mb-9">
                <span className="font-bold text-[var(--main-primary-text-color)] text-[16px] mr-4 md:mr-5 inline-flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full bg-white">
                  01
                </span>
                Check if you're eligible
              </li>
              <li className="text-white flex items-center text-sm md:text-[15px] lg:text-2xl mb-9">
                <span className="font-bold text-[var(--main-primary-text-color)] text-[16px] mr-4 md:mr-5 inline-flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full bg-white">
                  02
                </span>
                Get step-by-step help with paperwork
              </li>
              <li className="text-white flex items-center text-sm md:text-[15px] lg:text-2xl mb-9">
                <span className="font-bold text-[var(--main-primary-text-color)] text-[16px] mr-4 md:mr-5 inline-flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full bg-white">
                  03
                </span>
                Start receiving support faster
              </li>
            </ul>
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
  );
};

export default page;
