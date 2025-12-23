import Image from "next/image";
import React from "react";

const CareTakercard = () => {
  return (
    <section className="px-5 pt-0 pb-10 md:pb-16 bg-[#ffe8dd] md:bg-white">
      <div className="max-w-(--max-width) mx-auto">
        <div
          className="w-full bg-cover bg-no-repeat bg-center rounded-3xl p-4 md:p-8 hidden md:block"
          style={{
            backgroundImage: `linear-gradient(to top, #FFE8DD 25%, transparent), url("/assets/caretakercardbg.jpg")`,
          }}
        >
          <div className="flex flex-col justify-end md:h-auto lg:h-200">
            <div className="flex flex-col lg:flex-row justify-between mb-3 md:mb-5 lg:mb-10">
              <div className="md:w-full lg:w-[42%]">
                <span className="font-epilogue font-medium text-xl text-(--main-primary-text-color)">
                  ICanHeal as Caretaker
                </span>
                <h4 className="font-epilogue text-3xl md:text-4xl lg:text-4xl font-semibold text-(--main-primary-text-color)">
                  Your Personal Care Manager
                </h4>
              </div>
              <div className="md:w-full lg:w-[48%]">
                <p className="text-lg text-[#232323] ">
                  ICanHeal as Caretaker assigns you a personal care manager to
                  handle everything - from enrolling in Patient Assistance
                  Programs and managing infusions to coordinating deliveries,
                  paperwork, and reimbursements. You’ll get timely reminders,
                  expert guidance, and constant support to smooth every step of
                  your treatment journey.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white rounded-2xl shadow-2xl p-4">
                <span className="mb-2 md:mb-10 inline-flex justify-center w-10 h-10 bg-(--main-theme-background) rounded-full px-2">
                  <Image
                    src="/assets/task-square.svg"
                    width={32}
                    height={32}
                    alt="icon"
                  />
                </span>
                <h2 className="font-epilogue text-lg md:text-2xl text-(--main-primary-text-color) border-b-2 border-[#beb9b9] pb-2 md:pb-8">
                  Care Manager
                </h2>
                <p className="text-[#232323] text-[15px] pt-2 md:pt-5">
                  A dedicated care manager to guide you through every step.
                </p>
              </div>
              <div className="bg-white rounded-2xl shadow-2xl p-4">
                <span className="mb-2 md:mb-10 inline-flex justify-center w-10 h-10 bg-(--main-theme-background) rounded-full px-2">
                  <Image
                    src="/assets/Drip.svg"
                    width={32}
                    height={32}
                    alt="icon"
                  />
                </span>
                <h2 className="font-epilogue text-lg md:text-2xl text-(--main-primary-text-color) border-b-2 border-[#beb9b9] pb-2 md:pb-8">
                  Infusions
                </h2>
                <p className="text-[#232323] text-[15px] pt-2 md:pt-5">
                  Schedule, track, and remind you of all your infusions.
                </p>
              </div>
              <div className="bg-white rounded-2xl shadow-2xl p-4">
                <span className="mb-2 md:mb-10 inline-flex justify-center w-10 h-10 bg-(--main-theme-background) rounded-full px-2">
                  <Image
                    src="/assets/doctor.svg"
                    width={32}
                    height={32}
                    alt="icon"
                  />
                </span>
                <h2 className="font-epilogue text-lg md:text-2xl text-(--main-primary-text-color) border-b-2 border-[#beb9b9] pb-2 md:pb-8">
                  PAP Service
                </h2>
                <p className="text-[#232323] text-[15px] pt-2 md:pt-5">
                  We find PAPs, enroll, and handle all paperwork for you.
                </p>
              </div>
              <div className="bg-white  rounded-2xl shadow-2xl p-4">
                <span className="mb-2 md:mb-10 inline-flex justify-center w-10 h-10 bg-(--main-theme-background) rounded-full px-2">
                  <Image
                    src="/assets/ambulance.svg"
                    width={32}
                    height={32}
                    alt="icon"
                  />
                </span>
                <h2 className="font-epilogue text-lg md:text-2xl text-(--main-primary-text-color) border-b-2 border-[#beb9b9] pb-2 md:pb-8">
                  Logistics
                </h2>
                <p className="text-[#232323] text-[15px] pt-2 md:pt-5">
                  We help manage deliveries so your infusions are on time.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden md:hidden">
        <Image src={'/assets/bg_plan_one.png'} width={1200} height={600} alt="CareTaker Card " />
          <div className="flex flex-col justify-end md:h-auto lg:h-200 pt-2">
            <div className="flex flex-col lg:flex-row justify-between mb-3 md:mb-5 lg:mb-10">
              <div className="md:w-full lg:w-[42%]">
                <span className="font-epilogue font-medium text-2xl text-(--main-primary-text-color)">
                  ICanHeal as Caretaker
                </span>
                <h4 className="font-epilogue text-3xl md:text-4xl lg:text-4xl xl:text-6xl font-semibold text-(--main-primary-text-color)">
                  Your Personal Care Manager
                </h4>
              </div>
              <div className="md:w-full lg:w-[48%]">
                <p className="text-lg text-[#232323] font-light">
                  ICanHeal as Caretaker assigns you a personal care manager to
                  handle everything - from enrolling in Patient Assistance
                  Programs and managing infusions to coordinating deliveries,
                  paperwork, and reimbursements. You’ll get timely reminders,
                  expert guidance, and constant support to smooth every step of
                  your treatment journey.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white rounded-2xl shadow-2xl p-4">
                <span className="mb-2 md:mb-10 inline-flex justify-center w-10 h-10 bg-(--main-theme-background) rounded-full px-2">
                  <Image
                    src="/assets/task-square.svg"
                    width={32}
                    height={32}
                    alt="icon"
                  />
                </span>
                <h2 className="font-epilogue text-lg md:text-2xl text-(--main-primary-text-color) border-b-2 border-[#beb9b9] pb-2 md:pb-8">
                  Care Manager
                </h2>
                <p className="text-[#232323] text-[15px] pt-2 md:pt-5">
                  A dedicated care manager to guide you through every step.
                </p>
              </div>
              <div className="bg-white rounded-2xl shadow-2xl p-4">
                <span className="mb-2 md:mb-10 inline-flex justify-center w-10 h-10 bg-(--main-theme-background) rounded-full px-2">
                  <Image
                    src="/assets/Drip.svg"
                    width={32}
                    height={32}
                    alt="icon"
                  />
                </span>
                <h2 className="font-epilogue text-lg md:text-2xl text-(--main-primary-text-color) border-b-2 border-[#beb9b9] pb-2 md:pb-8">
                  Infusions
                </h2>
                <p className="text-[#232323] text-[15px] pt-2 md:pt-5">
                  Schedule, track, and remind you of all your infusions.
                </p>
              </div>
              <div className="bg-white rounded-2xl shadow-2xl p-4">
                <span className="mb-2 md:mb-10 inline-flex justify-center w-10 h-10 bg-(--main-theme-background) rounded-full px-2">
                  <Image
                    src="/assets/doctor.svg"
                    width={32}
                    height={32}
                    alt="icon"
                  />
                </span>
                <h2 className="font-epilogue text-lg md:text-2xl text-(--main-primary-text-color) border-b-2 border-[#beb9b9] pb-2 md:pb-8">
                  PAP Service
                </h2>
                <p className="text-[#232323] text-[15px] pt-2 md:pt-5">
                  We find PAPs, enroll, and handle all paperwork for you.
                </p>
              </div>
              <div className="bg-white  rounded-2xl shadow-2xl p-4">
                <span className="mb-2 md:mb-10 inline-flex justify-center w-10 h-10 bg-(--main-theme-background) rounded-full px-2">
                  <Image
                    src="/assets/ambulance.svg"
                    width={32}
                    height={32}
                    alt="icon"
                  />
                </span>
                <h2 className="font-epilogue text-lg md:text-2xl text-(--main-primary-text-color) border-b-2 border-[#beb9b9] pb-2 md:pb-8">
                  Logistics
                </h2>
                <p className="text-[#232323] text-[15px] pt-2 md:pt-5">
                  We help manage deliveries so your infusions are on time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareTakercard;
