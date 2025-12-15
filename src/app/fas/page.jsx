import CardUpperEffect from "@/components/cardUpperEffect/CardUpperEffect";
import HeroSecondBanner from "@/components/herosecondbanner/HeroSecondBanner";
import SmartTools from "@/components/smarttools/SmartTools";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <HeroSecondBanner
        heroTitle="Struggling with Treatment Costs? We’re Here to Help."
        heroDescription="Cancer and critical care treatment can be expensive but you don’t have to face it alone. icanheal offers Financial Assistance Services (FAS) to help ease the burden through loans, partner programs, and personalized support based on your medical needs."
        heroBannerImg="/assets/fas_banner.png"
      />
      <CardUpperEffect />
      <section className="px-5 pt-4 pb-10 md:pb-16">
        <div className="max-w-[var(--max-width)] mx-auto">
          <div className="flex flex-col md:flex-row items-start justify-between mb-3 md:mb-16">
            <div className="w-full md:w-[50%] lg:w-[50%] mb-7 md:mb-0">
              <span className="text-[var(--secondary-text-color)] w-full md:w-auto text-lg md:text-2xl mb-4 inline-flex justify-center md:justify-start">
                Need Help Getting Started?
              </span>
              <h3 className="w-full md:leading-12 lg:leading-20 text-[var(--main-primary-text-color)] font-epilogue text-center md:text-left text-3xl md:text-4xl lg:text-6xl font-semibold">
                If you haven’t applied for financial help yet:
              </h3>
            </div>
            <ul className="w-full md:w-[48%] lg:w-[45%]">
              <li className="text-[var(--main-primary-text-color)] grid grid-cols-[auto_1fr] items-center mb-5 md:mb-9">
                <span className="font-bold text-white text-[16px] mr-4 md:mr-5 inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-[var(--main-theme-background)]">
                  01
                </span>
                <p className="text-sm md:text-[15px] lg:text-2xl">Check your eligibility in minutes</p>
              </li>
              <li className="text-[var(--main-primary-text-color)] grid grid-cols-[auto_1fr] items-center mb-5 md:mb-9">
                <span className="font-bold text-white text-[16px] mr-4 md:mr-5 inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-[var(--main-theme-background)]">
                  02
                </span>
                <p className="text-sm md:text-[15px] lg:text-2xl">Explore low-cost loan or deferred payment options</p>
              </li>
              <li className="text-[var(--main-primary-text-color)] grid grid-cols-[auto_1fr] items-center mb-5 md:mb-9">
                <span className="font-bold text-white text-[16px] mr-4 md:mr-5 inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-[var(--main-theme-background)]">
                  03
                </span>
                <p className="text-sm md:text-[15px] lg:text-2xl">Get support at every step</p>
              </li>
            </ul>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-5 md:gap-10">
            <Link className="text-white flex justify-center w-full md:w-1/3 rounded-full py-3 bg-[var(--main-theme-background)]" href="/">Apply for Financial Assistance </Link>
            <Link className="text-white flex justify-center w-full md:w-1/3 rounded-full py-3 bg-[var(--main-theme-background)]" href="/">Apply for Financial Assistance </Link>
          </div>
        </div>
      </section>
      <SmartTools />
    </>
  );
};

export default page;
