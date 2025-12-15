import CareTaker from "@/components/caretaker/CareTaker";
import HeroSecondBanner from "@/components/herosecondbanner/HeroSecondBanner";
import ServiceManage from "@/components/servicemanage/ServiceManage";
import ServicesInclude from "@/components/servicesinclude/ServicesInclude";
import React from "react";
import Image from "next/image";
import CardUpperEffect from "@/components/cardUpperEffect/CardUpperEffect";
import CareTakercard from "@/components/caretakercard/CareTakercard";

const page = () => {
  return (
    <>
      <HeroSecondBanner
        heroTitle="Value-Added Services (VAS)"
        heroDescription="Healing goes beyond medication. icanheal offers supportive services to make your treatment journey smoother and more comfortable."
        heroBannerImg="/assets/vas_banner.png"
      />
      <CardUpperEffect />
      <ServicesInclude />
      <ServiceManage />
      <CareTakercard />
      {/* <CareTaker /> */}
          <section className="py-5 mb-20 px-3">
            <div className="max-w-[var(--max-width)] mx-auto">
              <div className="flex flex-col md:flex-row items-stretch justify-between">
                <div className="w-full md:w-[49%] mb-5 md:mb-0">
                  <h4 className="p-6 md:p-10 leading-normal md:leading-16 text-[var(--main-primary-text-color)] mb-3 md:mb-6 rounded-3xl text-3xl md:text-6xl font-semibold shadow-[0_0_20px_rgba(0,0,0,0.1)]">
                    Need Support with finding services near you? 
                  </h4>
                  <div className="flex items-stretch justify-between mb-6">
                    
                    <div className="w-full p-4 rounded-3xl bg-[linear-gradient(180deg,_#FFE8DD_0%,_#FFCEC7_100%)]">
                      <span className="mb-16 inline-flex justify-center w-10 h-10 bg-[var(--main-theme-background)] rounded-full px-2">
                        <Image src="/assets/Emergency_white.svg" alt="Icon" width={32} height={32} />
                      </span>
                      <p className="text-sm md:text-2xl text-[var(--main-primary-text-color)] font-normal">
                        Explore services available near you and book what you need with help from our care team. Explore services available near you and book what you need with help from our care team. 
                      </p>
                    </div>
                  </div>
                  <div className="">
                    <a
                      href="tel:+91-1234567890"
                      className="inline-flex justify-center w-full py-3 rounded-full text-white bg-[var(--main-theme-background)]"
                    >
                      Access Support Services
                    </a>
                  </div>
                </div>
                <div className="w-full md:w-[49%] rounded-3xl relative h-auto aspect-[16/9]">
                  <Image
                    src="/assets/placeholderimg.png"
                    alt="Support image"
                    fill
                    className="object-cover rounded-3xl"
                  />
                </div>
              </div>
            </div>
          </section>
    </>
  );
};

export default page;
