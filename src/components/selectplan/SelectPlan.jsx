import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaUser } from "react-icons/fa";

const SelectPlan = () => {
  const bgOne = {
    backgroundImage: "url('/assets/bg_plan_one.png')",
    backgroundSize: "100%, 0%",
    backgroundPosition: "50% 0%",
    backgroundRepeat: "no-repeat",
  };
  const bgTwo = {
    backgroundImage: "url('/assets/bg_plan_two.png')",
    backgroundSize: "100%, 0%",
    backgroundPosition: "50% 0%",
    backgroundRepeat: "no-repeat",
  };
  return (
    <>
       <section className="px-5 pt-0 pb-10 md:pb-16 mt-34 sm:mt-0">
        <div className="max-w-(--max-width) mx-auto">
            <h2
            className="w-full text-center font-epilogue font-bold text-3xl md:text-4xl md:leading-12    lg:leading-20 mb-8 md:mb-12 text-(--main-primary-text-color)" >
            Select Your Journey
          </h2>
          <div className="flex flex-col sm:flex-row  w-full md:justify-around items-center gap-x-2 md:gap-x-5 md:w-4/5 mx-auto">
            <div className="bg-(--main-theme-background) rounded-2xl overflow-hidden mb-8">
              <div className="">
                <Image
                  src={"/assets/bg_plan_one (1).png"}
                  width={500}
                  height={500}
                  alt="select_plan_img"
                  className="w-full h-auto"
                />
              </div>
                <div className="relative p-4">
                <h3 className="text-white font-epilogue text-2xl sm:xl sm:leading-8 md:text-3xl mb-1 font-semibold leading-10 md:leading-10">
                  Plan care, Cut costs, Feel supported
                </h3>
                <p className="text-white text-sm  mb-5 sm:mb-10 md:mb-5 font-poppins leading-6 font-[17px] ">
                  Discover a supportive community that guides you through the
                  complexities of cancer care. Access resources, expert advice,
                  and emotional support tailored to your journey.
                </p>
                <Link
                  className="flex justify-center items-center bg-white w-full p-3 md:p-5 rounded-full gap-2 font-epilogue text-3xl text-(--main-primary-text-color)"
                  href="/patients"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    viewBox="0 0 35 35"
                    fill="none"
                  >
                    <path
                      d="M17.5001 2.91663C13.6792 2.91663 10.573 6.02288 10.573 9.84371C10.573 13.5916 13.5042 16.625 17.3251 16.7562C17.4417 16.7416 17.5584 16.7416 17.6459 16.7562C17.6751 16.7562 17.6897 16.7562 17.7188 16.7562C17.7334 16.7562 17.7334 16.7562 17.748 16.7562C21.4813 16.625 24.4126 13.5916 24.4272 9.84371C24.4272 6.02288 21.3209 2.91663 17.5001 2.91663Z"
                      fill="#1A434E"
                    />
                    <path
                      d="M24.9084 20.6354C20.8396 17.9229 14.2042 17.9229 10.1063 20.6354C8.25423 21.875 7.2334 23.5521 7.2334 25.3459C7.2334 27.1396 8.25423 28.8021 10.0917 30.0271C12.1334 31.398 14.8167 32.0834 17.5001 32.0834C20.1834 32.0834 22.8667 31.398 24.9084 30.0271C26.7459 28.7875 27.7667 27.125 27.7667 25.3167C27.7522 23.523 26.7459 21.8604 24.9084 20.6354Z"
                      fill="#1A434E"
                    />
                  </svg>
                  <span className="-mb-1.5 font-epilogue text-sm md:text-3xl text-(--main-primary-text-color)">
                    Patients
                  </span>
                </Link>
              </div>
            </div>
            <div className="bg-(--main-theme-background) rounded-2xl overflow-hidden mb-8">
              <div className="">
                <Image
                  src={"/assets/bg_plan_two.png"}
                  width={500}
                  height={500}
                  alt="select_plan_img"
                  className="w-full h-auto"
                />
              </div>
                <div className="relative p-4">
                <h3 className="text-white font-epilogue text-2xl sm:xl sm:leading-8 md:text-3xl mb-1 font-semibold leading-10 md:leading-10">
                  Refer fast See, AI summaries, Stay connected
                </h3>
                <p className="text-white text-sm  mb-5 sm:mb-10 md:mb-5 font-poppins leading-6 font-[17px] ">
                  Discover a supportive community that guides you through the
                  complexities of cancer care. Access resources, expert advice,
                  and emotional support tailored to your journey.
                </p>
                <Link
                  className="flex justify-center items-center bg-white w-full p-3 md:p-5 rounded-full gap-2 font-epilogue text-3xl text-(--main-primary-text-color)"
                  href="/patients"
                >
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="35"
                  viewBox="0 0 36 35"
                  fill="none"
                >
                  <path
                    d="M18.0001 2.91663C14.1792 2.91663 11.073 6.02288 11.073 9.84371C11.073 13.5916 14.0042 16.625 17.8251 16.7562C17.9417 16.7416 18.0584 16.7416 18.1459 16.7562C18.1751 16.7562 18.1897 16.7562 18.2188 16.7562C18.2334 16.7562 18.2334 16.7562 18.248 16.7562C21.9813 16.625 24.9126 13.5916 24.9272 9.84371C24.9272 6.02288 21.8209 2.91663 18.0001 2.91663Z"
                    fill="#1A434E"
                  />
                  <path
                    d="M25.4084 20.6354C21.3396 17.9229 14.7042 17.9229 10.6063 20.6354C8.75423 21.875 7.7334 23.5521 7.7334 25.3459C7.7334 27.1396 8.75423 28.8021 10.5917 30.0271C12.6334 31.3979 15.3167 32.0834 18.0001 32.0834C20.6834 32.0834 23.3667 31.3979 25.4084 30.0271C27.2459 28.7875 28.2667 27.125 28.2667 25.3167C28.2521 23.523 27.2459 21.8604 25.4084 20.6354ZM20.9167 26.4396H19.0938V28.2625C19.0938 28.8604 18.598 29.3563 18.0001 29.3563C17.4021 29.3563 16.9063 28.8604 16.9063 28.2625V26.4396H15.0834C14.4855 26.4396 13.9896 25.9438 13.9896 25.3459C13.9896 24.7479 14.4855 24.2521 15.0834 24.2521H16.9063V22.4292C16.9063 21.8313 17.4021 21.3354 18.0001 21.3354C18.598 21.3354 19.0938 21.8313 19.0938 22.4292V24.2521H20.9167C21.5146 24.2521 22.0105 24.7479 22.0105 25.3459C22.0105 25.9438 21.5146 26.4396 20.9167 26.4396Z"
                    fill="#1A434E"
                  />
                </svg>
                  <span className="-mb-1.5 font-epilogue text-sm md:text-3xl text-(--main-primary-text-color)">
                    Doctors
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default SelectPlan;
