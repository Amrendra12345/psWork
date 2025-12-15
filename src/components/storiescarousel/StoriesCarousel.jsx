'use client';

import React, { useState } from 'react';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';

const StoriesCarousel = () => {
  const testimonials = [
    {
      id: 1,
      content: "The doctors and support team gave me hope when I had none.",
      patientName: "– Riya, Cancer Survivor",
    },
    {
      id: 2,
      content: "The doctors and support team gave me hope when I had none.",
      patientName: "– Aman, Brain Tumor Fighter",
    },
    {
      id: 3,
      content: "I finally felt heard and guided during my cancer journey. Forever grateful.",
      patientName: "– Neha, Breast Cancer Survivor",
    },
      {
      id: 4,
      content: "I finally felt heard and guided during my cancer journey. Forever grateful.",
      patientName: "– Neha, Breast Cancer Survivor",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    breakpoints: {
      '(min-width: 1024px)': {
        slides: { perView: 3.5, spacing: 20 }, // 👈 3 + little overflow
      },
      '(min-width: 640px)': {
        slides: { perView: 2.5, spacing: 20 },
      },
    },
    slides: { perView: 1.5, spacing: 16 },
  });

  return (
    <div className="w-full overflow-x-visible px-5 pt-0 pb-10 md:pb-16"> {/* ✅ wrapper full width */}
      <div className='max-w-[var(--max-width)] mx-auto pb-10 md:pb-20'>
        <div className='flex items-start justify-between flex-col md:flex-row gap-3 px-5 md:px-5 xl:md-0'>
         <h4 className='text-center md:text-left w-full md:w-[45%] font-epilogue text-3xl md:text-5xl text-[var(--main-primary-text-color)] font-semibold'>Stories of <br/> Strength & Support</h4>
         <p className='text-justify md:text-left w-full md:w-[50%] text-[var(--main-primary-text-color)] px-3 md:px-0'>Hear from patients, caregivers, and doctors whose lives have been transformed by iCanHeal. From finding the right support to accessing life-saving care, these stories reflect the hope, clarity, and compassion at the heart of every journey we guide.</p>
      </div>
      </div>
      <div ref={sliderRef} className="keen-slider overflow-visible">
        {testimonials.map((story) => (
          <div key={story.id} className="keen-slider__slide">
            <div className="bg-[var(--main-theme-background)] rounded-xl p-5 md:p-10 mx-2 min-h-[300px] md:min-h-[388px] flex flex-col justify-between">
              <p className="text-white mb-8 md:mb-36 font-epilogue text-lg md:text-3xl font-semibold">
                “{story.content}”
              </p>
              <h5 className="text-white text-sm">{story.patientName}</h5>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => instanceRef.current?.moveToIdx(idx)}
            className={`w-3 h-3 cursor-pointer rounded-full transition-all ${
              currentSlide === idx ? 'bg-[#6E6E6E] w-24 h-3' : 'bg-gray-300'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default StoriesCarousel;
