import CardUpperEffect from "@/components/cardUpperEffect/CardUpperEffect";
import ContactUsForm from "@/components/contactusform/ContactUsForm";
import HelpAndSupport from "@/components/helpandsupport/HelpAndSupport";
import HeroSecondBanner from "@/components/herosecondbanner/HeroSecondBanner";
import React from "react";

const page = () => {
  return (
    <>
      <HeroSecondBanner
        heroTitle="We’re Here to Help. Let’s Talk."
        heroDescription="Whether you're a patient, doctor, hospital, or pharma partner, we’d love to hear from you. "
        heroBannerImg="/assets/contact_us_mob.png"
      />
      <CardUpperEffect />
      <ContactUsForm />
      <div className="flex flex-col md:flex-row flex-wrap justify-center w-full md:w-[850px] mx-auto gap-5 mb-3 md:mb-20 px-5 md:px-0">
        <p className="font-epilogue font-medium text-[var(--main-primary-text-color)] text-[15px]">
          Email: x@icanheal.in
        </p>
        <p className="font-epilogue font-medium  text-[var(--main-primary-text-color)] text-[15px]">
          Phone: +91-XXXXXXXXXX
        </p>
        <p className="font-epilogue font-medium  text-[var(--main-primary-text-color)] text-[15px]">
          Office: Office locations if applicable
        </p>
        <p className="font-epilogue font-medium  text-[var(--main-primary-text-color)] text-[15px]">
          Call Support: Available Mon–Sat, 9 AM to 6 PM{" "}
        </p>
      </div>
      <HelpAndSupport
        heading="Need Help Now?"
        icon1="/assets/Emergency_white.svg"
        icon1Text="Use our Live Chat or check out the Help Centre for common queries."
        icon2Heading="24/7"
        icon2Text="Customer Support available"
        callNumber="+91-1234567890"
        callText="LIVE CHAT"
        whatsappNumber="+91-1234567890"
        whatsappText="HELP CENTRE"
        imageUrl="/assets/placeholderimg.png"
      />
    </>
  );
};

export default page;
