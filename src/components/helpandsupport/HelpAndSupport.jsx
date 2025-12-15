import React from "react";
import Image from "next/image";

const HelpAndSupport = ({
  heading,
  icon1,
  icon1Text,
  icon2Heading,
  icon2Text,
  callNumber,
  callText,
  whatsappNumber,
  whatsappText,
  imageUrl,
}) => {
  return (
    <section className="px-5 pt-0 pb-10 md:pb-16">
      <div className="max-w-[var(--max-width)] mx-auto">
        <div className="flex flex-col md:flex-row items-stretch justify-between">
          <div className="w-full md:w-[49%] mb-5 md:mb-0">
            <h4 className="p-6 md:p-10 leading-normal md:leading-16 text-[var(--main-primary-text-color)] mb-3 md:mb-6 rounded-3xl text-3xl md:text-6xl font-semibold shadow-[0_0_20px_rgba(0,0,0,0.1)]">
              {heading}
            </h4>
            <div className="flex items-stretch justify-between mb-6">
              <div className="w-[48%] rounded-3xl p-4 shadow-[0_0_20px_rgba(0,0,0,0.1)]">
                <span className="mb-16 inline-flex justify-center w-10 h-10 bg-[var(--main-theme-background)] rounded-full px-2">
                  <Image src={icon1} alt="Icon" width={32} height={32} />
                </span>
                <p className="text-sm md:text-2xl text-[var(--secondary-text-color)] font-normal">
                  {icon1Text}
                </p>
              </div>
              <div className="w-[48%] p-4 rounded-3xl bg-[linear-gradient(180deg,_#FFE8DD_0%,_#FFCEC7_100%)]">
                <span className="text-[var(--main-primary-text-color)] inline-flex font-epilogue text-4xl mb-16 font-semibold">
                  {icon2Heading}
                </span>
                <p className="text-sm md:text-2xl text-[var(--secondary-text-color)] font-normal">
                  {icon2Text}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <a
                href={`tel:${callNumber}`}
                className="inline-flex justify-center w-full py-3 rounded-full text-white bg-[var(--main-theme-background)]"
              >
                {callText}
              </a>

              <a
                href={`https://wa.me/${whatsappNumber.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center w-full py-3 rounded-full border border-[var(--main-primary-text-color)] text-[var(--main-primary-text-color)]"
              >
                {whatsappText}
              </a>
            </div>
          </div>
          <div className="w-full md:w-[49%] rounded-3xl relative h-auto aspect-[16/9]">
            <Image
              src={imageUrl}
              alt="Support image"
              fill
              className="object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpAndSupport;
