"use client";
import 'keen-slider/keen-slider.min.css'
import KeenSlider from 'keen-slider'
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import Link from "next/link";
import {CircleChevronLeft,CircleChevronRight} from "lucide-react"
const defaultCards = [
  {
    id: 1,
    type: "standard",
    title: "Support Services",
    description:
      "Explore our flexible financing options designed to meet your unique needs. We're here to help you find the perfect solution for your budget.",
    buttonText: "Explore",
    buttonUrl: "/",
    icon: "/assets/heart-add.svg",
    stats: "100+",
  },
  {
    id: 2,
    type: "tags",
    title: "Smart Tools",
    buttonText: "Explore",
    buttonUrl: "/",
    backgroundImage: "/assets/placeholder2.png",
    tags: [
      "Tool Name 1",
      "Tool Name 2",
      "Tool Name 3",
      "Tool Name 4",
      "Tool Name 5",
    ],
  },
  {
    id: 3,
    type: "standard",
    title: "Emergency Support",
    description: "24/7 help anytime, anywhere.",
    buttonText: "Contact",
    buttonUrl: "/",
    icon: "/assets/heart-add.svg",
    stats: "200+",
  },
  {
    id: 4,
    type: "tags",
    title: "Smart Tools",
    buttonText: "Explore",
    buttonUrl: "/",
    backgroundImage: "/assets/placeholder2.png",
    tags: [
      "Tool Name 4",
      "Tool Name 5",
      "Tool Name 3",
      "Tool Name 4",
      "Tool Name 5",
    ],
  },
];

const CardCarousel = ({ 
  sectionTitle = "Your Section Title",
  sectionExtraTitle,
  cards = defaultCards,
  bgColor = "#F3F8F9",
  withBg = true}) => {
      const [sliderInstance, setSliderInstance] = useState(null);

const [sliderRef] = useKeenSlider({
  loop: true,
  slides: {
    perView: 1, // show 1 full + partial sides
    spacing: 15,
    origin: "center", // centers the active slide
  },
  breakpoints: {
    "(min-width: 640px)": {
      slides: { perView: 2, spacing: 20, origin: "center" },
    },
    "(min-width: 1024px)": {
      slides: { perView: 3, spacing: 20, origin: "center" },
    },
  },
  created(slider) {
    setSliderInstance(slider);
  },
});
  const handlePrev = () => {
    sliderInstance?.prev();
  };

  const handleNext = () => {
    sliderInstance?.next();
  };
  return (
      <section className="relative overflow-hidden pt-0 pb-10 md:pb-16 ">
           <div style={{ backgroundColor: bgColor }} className={`${withBg? 'pt-10 md:pt-14 pb-8 md:pb-10' : ''} `}>
        {sectionExtraTitle && <p className="pb-2 text-(--secondary-text-color) font-epilogue text-3xl text-center font-medium">{sectionExtraTitle}</p>}
        <h2 className="w-full text-center font-epilogue font-bold text-3xl md:text-4xl md:leading-12 lg:leading-20 mb-8 md:mb-8 text-(--main-primary-text-color)">
          {sectionTitle}
        </h2>
        <div className='px-4 sm:px-10'>
         <div ref={sliderRef} className="keen-slider pt-3 pb-20">
          {cards.map((card) => (
            <div
              key={card.id}
              className="keen-slider__slide w-[320px] md:w-[400px] rounded-2xl shadow-md flex flex-col justify-between cursor-pointer"
            >
              {/* Standard Card */}
              {card.type === "standard" && (
                <div className="bg-[var(--main-theme-background)] p-6 h-full flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-4 border-b border-white pb-16 md:pb-24">
                    <h3 className="text-lg md:text-3xl text-white font-medium w-[220px]">
                      {card.title}
                    </h3>
                    <Link
                      href={card.buttonUrl}
                      className="text-white border border-white rounded-full px-3 md:px-6 py-2"
                    >
                      {card.buttonText}
                    </Link>
                  </div>
                  <p className="text-white text-[16px] font-light mb-6 whitespace-normal">
                    {card.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex justify-center items-center w-10 h-10 bg-white rounded-full p-2">
                      {card.icon ? (
                        <Image
                          src={card.icon}
                          alt={`${card.title} icon`}
                          width={32}
                          height={32}
                        />
                      ) : null}
                    </span>
                    <span className="text-3xl md:text-5xl text-white font-semibold">
                      {card.stats}
                    </span>
                  </div>
                </div>
              )}

              {/* Tags Card */}
              {card.type === "tags" && (
                <div
                  className="p-4 shadow-2xl h-full bg-cover bg-center bg-no-repeat flex flex-col justify-between"
                  style={{ backgroundImage: `url(${card.backgroundImage})` }}
                >
                  <div className="flex items-center justify-between mb-4 pb-16 md:pb-24">
                    <h3 className="text-lg md:text-3xl text-white font-medium">
                      {card.title}
                    </h3>
                    <Link
                      href={card.buttonUrl}
                      className="text-white border border-white rounded-full px-3 md:px-6 py-2"
                    >
                      {card.buttonText}
                    </Link>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    {card.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-white inline-flex items-center text-(--main-primary-text-color) text-sm rounded-full py-2 px-3"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <div className="absolute bottom-[25px] left-1/2 -translate-x-1/2 transform w-[130px]">
            {/* Arrows */}
            <button
              onClick={handlePrev}
              aria-label="Previous Slide"
              role="button"
              className="cursor-pointer absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2  text-white px-3 py-2 rounded-full z-10"
            >
              <CircleChevronLeft className="bg-(--main-theme-background) rounded-full w-10.5 h-10.5 md:w-9 md:h-9" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next Slide"
              role="button"
              className="cursor-pointer absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2  text-white px-3 py-2 rounded-full z-10"
            >
             <CircleChevronRight className="bg-[var(--main-theme-background)] rounded-full w-[42px] h-[42px] md:w-[35px] md:h-[35px]" />
            </button>
          </div>
        </div>
        </div>
        </div>
      </section>
  )
}

export default CardCarousel