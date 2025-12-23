import React from "react";
import Image from "next/image";
import Link from "next/link";

const PapCardData = [
  {
    id: 1,
    title: "Track your current program status",
    description:
      "Explore our flexible financing options designed to meet your unique needs. We’re here to help you find the perfect solution for your budget.",
    btnUrl: "/",
    urlText: "Explore",
    imgIconUrl: "/assets/heart-add.svg",
  },
  {
    id: 2,
    title: "Renew your application",
    description:
      "Explore our flexible financing options designed to meet your unique needs. We’re here to help you find the perfect solution for your budget.",
    btnUrl: "/",
    urlText: "Explore",
    imgIconUrl: "/assets/Pills.svg",
  },
  {
    id: 3,
    title: "Get reminders and support",
    description:
      "Explore our flexible financing options designed to meet your unique needs. We’re here to help you find the perfect solution for your budget.",
    btnUrl: "/",
    urlText: "Explore",
    imgIconUrl: "/assets/heart-add.svg",
  },
];

const PapInfoCards = ({
  cardsDefaultData = PapCardData,
  sectionTitle = "Let us help you:",
  upperExtraInfo = "Already on a PAP?"
}) => {
  return (
    <section className="px-5 pt-0 pb-10 md:pb-16">
      <div className="max-w-(--max-width) mx-auto">
        <h5 className="font-popping text-xl text-center text-(--secondary-text-color)">{upperExtraInfo}</h5>
        <h2 className="font-popping text-center text-3xl md:text-4xl  text-(--main-primary-text-color) font-bold pb-10">
          {sectionTitle}
        </h2>
        <div className="w-full md:max-w-6xl mx-auto">
        <div className="flex flex-wrap md:flex-wrap lg:flex-nowrap justify-between gap-5">
          {cardsDefaultData.map((card, index) => (
            <div
              key={card.id}
              className="w-full md:w-[48.5%] lg:w-[32%] bg-(--main-theme-background) rounded-2xl shadow-md p-6 cursor-pointer"
            >
              <span className="inline-flex w-10 h-10 bg-white rounded-full px-2 mb-4">
                <Image
                  alt="Icon"
                  width={32}
                  height={32}
                  src={card.imgIconUrl}
                />
              </span>
              <h3 className="w-auto md:w-75 font-popping text-2xl text-white font-semibold mb-2">
                {card.title}
              </h3>
              <hr className={`border-t border-white/30 mb-2  ${index === 1 ? 'mt-28' : 'mt-20'}`} />
              <p className="text-white/80 text-[17px] font-poppins mb-10 pt-5">
                {card.description}
              </p>
              <Link
                href={card.btnUrl}
                className="text-white border border-white rounded-full px-4 py-2"
              >
                {card.urlText}
              </Link>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};

export default PapInfoCards;
