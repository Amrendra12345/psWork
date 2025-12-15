import BuildTools from "@/components/buildtools/BuildTools";
import CardUpperEffect from "@/components/cardUpperEffect/CardUpperEffect";
import DownloadAppCard from "@/components/downloadappcard/DownloadAppCard";
import DoctorHero from "@/components/hero/DoctorHero";


import React from "react";

const toolData = [
  {
    id: 1,
    title: "Track your current program status",
    description:
      "Explore our flexible financing options designed to meet your unique needs. We’re here to help you find the perfect solution for your budget.",
    btnUrl: "/",
    urlText: "Explore",
    imgIconUrl: "/assets/category.svg",
  },
  {
    id: 2,
    title: "Renew your application",
    description:
      "Explore our flexible financing options designed to meet your unique needs. We’re here to help you find the perfect solution for your budget.",
    btnUrl: "/",
    urlText: "Explore",
    imgIconUrl: "/assets/Emergency_white.svg",
  },
  {
    id: 3,
    title: "Get reminders and support",
    description:
      "Explore our flexible financing options designed to meet your unique needs. We’re here to help you find the perfect solution for your budget.",
    btnUrl: "/",
    urlText: "Explore",
    imgIconUrl: "/assets/medal.svg",
  },
];

const page = () => {
  return (
    <>
      <DoctorHero
        title="Empower Your Practice with icanheal"
        subtitle="Join icanheal's doctor network to expand your impact, access smart tools, and support patients through their cancer and critical care journey, financially, medically, and emotionally."
            bgImage="/assets/doctor_page_banner.png"
            statsNumber="4k"
            smallInfo="Doctors already simplifying critical care"
            btnText="DOWNLOAD THE APP"
      />
      <CardUpperEffect />
      <DownloadAppCard
        valueStats="4k"
        cardText="Doctors already simplifying critical care"
        btnUrl="/"
        btnText="DOWNLOAD THE APP"
      />
      <section className="px-5 pt-0 pb-10 md:pb-16">
        <div className="max-w-[var(--max-width)] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div className="w-full md:w-1/2">
              <h3 className="w-full md:w-[350px] leading-16 font-epilogue text-4xl md:text-6xl font-semibold text-center md:text-left text-[var(--main-primary-text-color)]">
                Why Join icanheal?
              </h3>
            </div>
            <div className="w-full md:w-1/2">
              <div className="bg-[#F3F8F9] rounded-2xl mb-5 p-4">
                <h5 className="font-epilogue text-2xl font-medium text-[var(--main-primary-text-color)]">
                  Streamline Patient Management
                </h5>
                <p className="text-[var(--secondary-text-color)]">
                  Refer, track, and coordinate patient care journey from a
                  single dashboard.
                </p>
              </div>
              <div className="bg-[#F3F8F9] rounded-2xl mb-5 p-4">
                <h5 className="font-epilogue text-2xl font-medium text-[var(--main-primary-text-color)]">
                  Reduce Patient Drop-Off 
                </h5>
                <p className="text-[var(--secondary-text-color)]">
                  Help patients continue treatment by connecting them to
                  financing, PAPs, and value-added services support. 
                </p>
              </div>
              <div className="bg-[#F3F8F9] rounded-2xl mb-5 p-4">
                <h5 className="font-epilogue text-2xl font-medium text-[var(--main-primary-text-color)]">
                  Offer Remote Consults
                </h5>
                <p className="text-[var(--secondary-text-color)]">
                  Enable secure, high-quality teleconsultation and reach
                  patients beyond your geography.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BuildTools
        tools={toolData}
        title="Tools Built for You:"
        ctaUrl="/"
        ctaText="Apply to Join the Doctor Network"
      />
    </>
  );
};

export default page;
