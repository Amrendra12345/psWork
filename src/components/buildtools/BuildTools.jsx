import React from "react";
import Image from "next/image";
import Link from "next/link";

const BuildTools = ({pageName, title, ctaUrl, ctaText, tools = [] }) => {
  const isTwoCards = tools.length === 2;

  return (
    <section className="bg-(--main-theme-background) mb-10 md:mb-20 px-5 py-10 md:py-16">
      <div className={`${pageName === "hospitals" ?  "max-w-4xl" :"max-w-(--max-width)"} mx-auto`}>
        <h2 className="text-white/90 font-epilogue tracking-wider text-3xl md:text-4xl font-bold text-center pb-8 md:pb-16">
          {title}
        </h2>

        <div
          className={`flex flex-wrap mb-10 md:mb-20 ${
            isTwoCards
              ? "justify-between gap-y-5"
              : "justify-center md:justify-between gap-5"
          }`}
        >
          {tools.map((card, index) => (
            <div
              key={card.id}
              className={`w-full ${
                isTwoCards ? "md:w-[48%]" : "sm:w-[48%] lg:w-[30%]"
              } bg-white rounded-2xl shadow-lg p-4 pb-6 cursor-pointer`}
            >
              <span className="inline-flex w-10 h-10 bg-(--main-theme-background) rounded-full px-2 mb-4">
                <Image
                  alt="Icon"
                  width={32}
                  height={32}
                  src={card.imgIconUrl}
                />
              </span>
              <h3 className="w-auto font-epilogue text-2xl text-(--main-primary-text-color) font-semibold py-4">
                {card.title}
              </h3>
              <hr className={`border-gray-400 ${pageName === "hospitals" || index === 0 ? "mt-6" : "mt-14"}`}/>
              <p className="text-(--main-primary-text-color)/80 font-popping mb-10 pt-5">
                {card.description}
              </p>
              <Link
                href={card.btnUrl}
                className="text-(--main-primary-text-color) border border-(--main-primary-text-color) rounded-full px-4 py-2"
              >
                {card.urlText}
              </Link>
            </div>
          ))}
        </div>

        <Link
          href={ctaUrl}
          className="bg-white py-5 px-10 font-epilogue text-(--main-primary-text-color) font-semibold text-lg rounded-full flex w-full max-w-125 mx-auto justify-center tracking-wider transition-all duration-300 hover:bg-[#245c6c] hover:text-white border border-white/20"
        >
          {ctaText}
        </Link>
      </div>
    </section>
  );
};

export default BuildTools;
