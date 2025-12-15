import BuildTools from "@/components/buildtools/BuildTools";
import CardUpperEffect from "@/components/cardUpperEffect/CardUpperEffect";
import DownloadAppCard from "@/components/downloadappcard/DownloadAppCard";
import Hero from "@/components/hero/Hero";
import HospitalPageForm from "@/components/hospitalpageform/HospitalPageForm";
import React from "react";
const keyIntegration = [
  {
    id: 1,
    title: "Financing & Insurance Verification",
    description: "Track patient journeys, status updates, and treatment gaps. ",
    btnUrl: "/",
    urlText: "Explore",
    imgIconUrl: "/assets/additem.svg",
  },
  {
    id: 2,
    title: "EHR Connect for Patient Tracking",
    description: "Integrated video, scheduling, and notes. ",
    btnUrl: "/",
    urlText: "Explore",
    imgIconUrl: "/assets/card-tick.svg",
  },
];
const page = () => {
  return (
    <>
      <Hero
        title="Bridge the Gaps in Critical Care"
        subtitle="Empower your hospital ecosystem with financial support, patient engagement, and aftercare services from icanheal."
        bgImage="/assets/hospital_page_banner.png"
        statsNumber="3k"
        smallInfo="Hospitals already simplifying critical care"
        btnText="DOWNLOAD THE APP"
      />
      <CardUpperEffect />
      <DownloadAppCard
        valueStats="3k"
        cardText="Hospitals already simplifying critical care"
        btnUrl="/"
        btnText="DOWNLOAD THE APP"
      />
      <section className="px-5 pt-0 pb-10 md:pb-12">
        <div className="max-w-[var(--max-width)] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div className="w-full md:w-1/2">
              <h3 className="w-full md:w-[450px] leading-normal md:leading-16 font-epilogue text-4xl md:text-6xl font-semibold text-center md:text-left text-[var(--main-primary-text-color)] mb-4 md:mb-0">
                Why Partner with icanheal?
              </h3>
            </div>
            <div className="w-full md:w-1/2">
              <div className="bg-[#F3F8F9] rounded-2xl mb-5 p-4">
                <h5 className="font-epilogue text-2xl font-medium text-[var(--main-primary-text-color)]">
                  Enable Faster Treatment Decisions
                </h5>
                <p className="text-[var(--secondary-text-color)]">
                  Connect patients to insurance, loans, and pharma-sponsored PAP
                  programs.
                </p>
              </div>
              <div className="bg-[#F3F8F9] rounded-2xl mb-5 p-4">
                <h5 className="font-epilogue text-2xl font-medium text-[var(--main-primary-text-color)]">
                  Reduce Readmissions
                </h5>
                <p className="text-[var(--secondary-text-color)]">
                  Ensure post-treatment support for nutrition, physiotherapy,
                  and mental health.
                </p>
              </div>
              <div className="bg-[#F3F8F9] rounded-2xl mb-5 p-4">
                <h5 className="font-epilogue text-2xl font-medium text-[var(--main-primary-text-color)]">
                  Streamline Social Work Teams
                </h5>
                <p className="text-[var(--secondary-text-color)]">
                  Our backend systems handle documentation, eligibility
                  screening, and approvals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BuildTools
        tools={keyIntegration}
        title="Key Integrations:"
        ctaText="Partner with us"
        ctaUrl="/"
      />

      <section className="bg-white px-5 pt-0 pb-10 md:pb-16">
        <div className="max-w-[var(--max-width)] mx-auto">
          <div className="flex items-start flex-col md:flex-row justify-between">
                      <div className="w-full md:w-[45%]">
            <h2 className="text-3xl font-semibold md:text-6xl mb-3 text-[var(--main-primary-text-color)]">
              Have question? Let us know
            </h2>
            <p className="text-[var(--secondary-text-color)] mb-4 md:mb-0 text-lg font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              lacinia odio vitae vestibulum. Integer nec odio. Praesent libero.
              Sed cursus ante dapibus diam.
            </p>
          </div>
          <div className="w-full md:w-[45%]">
            <HospitalPageForm />
          </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
