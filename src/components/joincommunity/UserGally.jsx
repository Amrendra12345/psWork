"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";
import Image from "next/image";

export default function UserGally() {
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: {
      perView: 2,
      spacing: 15,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 10 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 2, spacing: 24 },
      },
    },
  });

  const handlePrev = () => {
    slider.current?.prev();
  };

  const handleNext = () => {
    slider.current?.next();
  };

  const members = [
  { id: 1, name: "George M", role: "Doctor", image: "/assets/profile1.png" },
  { id: 2, name: "Anna L", role: "Nurse", image: "/assets/profile2.png" },
  { id: 3, name: "John D", role: "Therapist", image: "/assets/profile3.png" },
  { id: 4, name: "Lisa K", role: "Doctor", image: "/assets/profile4.png" },
  { id: 5, name: "Michael B", role: "Nurse", image: "/assets/profile5.png" },
  { id: 6, name: "Emily C", role: "Therapist", image: "/assets/profile2.png" },
  { id: 7, name: "James P", role: "Doctor", image: "/assets/profile5.png" },
  { id: 8, name: "Sophia R", role: "Nurse", image: "/assets/profile1.png" },
  { id: 9, name: "William S", role: "Therapist",image: "/assets/profile5.png",},
  { id: 10, name: "Olivia T", role: "Doctor", image: "/assets/profile3.png" },
  { id: 11, name: "Henry W", role: "Nurse", image: "/assets/profile2.png" },
  { id: 12, name: "Chloe N", role: "Therapist", image: "/assets/profile1.png" },
  { id: 13, name: "Daniel V", role: "Doctor", image: "/assets/profile2.png" },
  { id: 14, name: "Grace Y", role: "Nurse", image: "/assets/profile5.png" },
  { id: 15, name: "Leo Z", role: "Therapist", image: "/assets/profile3.png" },
];

  return (
    <div className="relative">
      {/* Slider */}
      <div ref={sliderRef} className="keen-slider me-4 px-4 ms-4">
        {members.map((member) => (
          <div
            key={member.id}
            className="keen-slider__slide bg-white rounded-xl shadow-md p-4 text-center hover:shadow-lg transition flex flex-col items-center max-w-2xl gap-4 border border-gray-300"
          >
             <div className="w-16 h-16 overflow-hidden rounded-full border p-1 flex items-center  justify-center mx-auto border-gray-800">
                    <Image
                        className="rounded-full object-cover aspect-square"
                        src={member.image}
                        alt={`${member.name} profile`}
                        width={60}
                        height={60}
                    />
              </div>
            <div className="w-3/4 flex justify-start flex-col md:items-start items-center">
                <h3 className="text-lg font-normal text-[var(--main-primary-text-color)] whitespace-nowrap">
                {member.name}
                </h3>
                <p className="text-[15px] font-medium text-[#6E6E6E]">
                {member.role}
                </p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="absolute bottom-[-60px] left-1/2 -translate-x-1/2 flex gap-4 z-20">
        <button onClick={handlePrev}>
          <CircleChevronLeft className="bg-[var(--main-theme-background)] text-white rounded-full w-10 h-10" />
        </button>
        <button onClick={handleNext}>
          <CircleChevronRight className="bg-[var(--main-theme-background)] text-white rounded-full w-10 h-10" />
        </button>
      </div>
    </div>
  );
}
