import Image from "next/image";
import React from "react";

const CareTaker = () => {
  return (
    <section className="py-5 yeh px-5 md:pt-20">
      <div className="max-w-[var(--max-width)] mx-auto bg-[linear-gradient(180deg,_#FFF_0%,_#FFF2EC_100%)] shadow-[0px_4px_20px_rgba(0,0,0,0.15)] rounded-4xl px-10 pt-5 md:pt-16 ">
        <h5 className="text-lg md:text-3xl text-center font-epilogue font-medium text-[var(--secondary-text-color)] mb-3">
          Enroll as a Caretaker
        </h5>
        <h2 className="w-full lg:w-[800px] font-semibold mx-auto text-3xl md:text-6xl font-epilogue text-center text-[var(--main-primary-text-color)] mb-5">
          Guidance and Tools for Every Caretaker
        </h2>
              <div className="relative w-full h-[300px] sm:h-[400px] md:h-[540px]">
        <Image
          src="/assets/caretaker_canvas.png"
          alt="caretaker_tool_image"
          fill
          className="object-cover"
        />
      </div>
      </div>
    </section>
  );
};

export default CareTaker;
