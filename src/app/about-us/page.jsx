import CardUpperEffect from "@/components/cardUpperEffect/CardUpperEffect"
import HeroSecond from "@/components/homes/HeroSecond"
import NeedAndSupport from "@/components/needAndSupport/NeedAndSupport";
import Image from "next/image";
import Link from "next/link";


const AboutUs = () => {
  return (
    <>
      <HeroSecond
        title="A Smarter, Kinder Way to Fight Cancer and Rare Diseases"
        subtitle="icanheal is a healthcare platform that helps cancer and critical care patients access the right care at the right time—without being held back by cost, confusion, or isolation."
        statsNumber="3k"
        smallInfo="Hospitals already simplifying critical care"
        btnText="DOWNLOAD THE APP"
        bgImage="/assets/hero_main_banner_img.png"
        heroBannerImg="/assets/phonewithhand.png"
        bgHeight="h-156 sm:h-120 md:h-130 lg:h-156"
        bgSize="bg-size-[105%_71%] sm:bg-size-[85%_96%] md:bg-size-[85%_96%] lg:bg-size-[69%_106%]"
        bgPosition="bg-position-[100%_98%] sm:bg-position-[101%_74%] md:bg-position-[103%_120%] lg:bg-position-[95%_88%]"
        bgGradient="linear-gradient(350deg, rgba(26, 67, 78, 0) 59%, rgb(26, 67, 78) 94.06%)"
      />
      <CardUpperEffect />
      <section className="px-5 pt-2 pb-10 md:pb-16">
        <div className="max-w-(--max-width) mx-auto">
          <div className="flex items-center flex-col md:flex-row justify-around gap-5 mb-5 md:mb-20">
            <div className="w-full md:w-1/2 sm:pl-10">
              <h3 className="w-full md:leading-12 lg:leading-20 text-(--main-primary-text-color) font-epilogue text-center md:text-left text-3xl md:text-4xl font-bold">
                Our Story
              </h3>
              <p className="text-(--secondary-text-color) text-justify font-epilogue text-lg md:text-xl">
                Founded by survivors, caregivers, and medical experts, icanheal
                was born out of a lived experience. We&#44;ve seen firsthand how
                difficult the journey can be. That&#44;s why we&#44;ve built a
                one-stop solution that supports the patient and their ecosystem,
                financially, clinically, and emotionally.
              </p>
            </div>
            <div className="w-full md:w-1/3 relative sm:pr-10">
              <Image
                src="/assets/placeholderimg.png"
                alt="placeholder_image"
                width={450}
                height={300}
                className="rounded-3xl w-full h-auto"
              />
            </div>            
          </div>
          <div className="flex items-center flex-col md:flex-row justify-around gap-5">
            <div className="w-full md:w-1/3 relative mb-1.5 order-2 md:order-1 sm:pl-10">
              <Image
                src="/assets/placeholderimg.png"
                alt="placeholder_image"
                width={450}
                height={300}
                className="rounded-3xl w-full h-auto"
              />
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2 sm:pr-10 ">
              <h3 className="w-full md:leading-12 lg:leading-20 text-(--main-primary-text-color) font-epilogue text-center md:text-left text-3xl md:text-4xl font-bold">
                Our Story
              </h3>
              <p className="text-(--secondary-text-color) text-justify font-epilogue text-lg md:text-xl">
                Founded by survivors, caregivers, and medical experts, icanheal
                was born out of a lived experience. We&#44;ve seen firsthand how
                difficult the journey can be. That&#44;s why we&#44;ve built a
                one-stop solution that supports the patient and their ecosystem,
                financially, clinically, and emotionally.
              </p>
            </div>
          </div>
        </div>
      </section>

        {/* we offer section */}

      <section className="bg-(--main-theme-background) py-10 md:py-20 px-5">
        <div className="max-w-(--max-width) mx-auto">
          <h2 className="text-white font-epilogue text-3xl md:text-4xl font-bold text-center pb-8 md:pb-16">
            What We Offer
          </h2>
          <div className="flex flex-col md:flex-row flex-wrap justify-between gap-5">
            <div className="w-full md:w-[48.5%] lg:w-[32%]  p-4 rounded-3xl shadow-2xl bg-[url('/assets/placeholder2.png')] bg-cover bg-center bg-no-repeat flex flex-col justify-between">
              <h3 className="text-white text-lg md:text-2xl font-medium pb-28">
                Patient and caregiver tools for planning and recovery
              </h3>
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-white inline-flex items-center text-(--main-primary-text-color) text-sm rounded-full py-2 px-3">
                  Tool Name 1
                </span>
                <span className="bg-white inline-flex items-center text-(--main-primary-text-color) text-sm rounded-full py-2 px-3">
                  Tool Name 1
                </span>
                <span className="bg-white inline-flex items-center text-(--main-primary-text-color) text-sm rounded-full py-2 px-3">
                  Tool Name 1
                </span>
                <span className="bg-white inline-flex items-center text-(--main-primary-text-color) text-sm rounded-full py-2 px-3">
                  Tool Name 1
                </span>
                <span className="bg-white inline-flex items-center text-(--main-primary-text-color) text-sm rounded-full py-2 px-3">
                  Tool Name 1
                </span>
              </div>
            </div>
            <div className="w-full md:w-[48.5%] lg:w-[32%]  p-4 bg-white rounded-3xl shadow-2xl">
              <h3 className="text-(--main-primary-text-color) text-lg md:text-2xl font-medium border-b-2 border-[#7e9499] pb-28">
                Mental health, nutrition, and physiotherapy access{" "}
              </h3>
              <p className="text-(--main-primary-text-color) text-[16px] font-light mb-6 whitespace-normal pt-3">
                Explore our flexible financing options designed to meet your
                unique needs. We&#44;re here to help you find the perfect solution
                for your budget.
              </p>
              <div className="flex items-center justify-between">
                <span className="inline-flex justify-center w-10 h-10 bg-(--main-theme-background) rounded-full px-2">
                  <Image
                    src="/assets/heart_add_white.svg"
                    alt="icon"
                    width={32}
                    height={32}
                  />
                </span>
                <span className="text-3xl md:text-4xl text-(--main-primary-text-color) font-semibold">
                  200+
                </span>
              </div>
            </div>
            <div className="w-full md:w-[48.5%] lg:w-[32%]  p-4 bg-white rounded-3xl shadow-2xl">
              <h3 className="text-(--main-primary-text-color) text-lg md:text-2xl font-medium border-b-2 border-[#7e9499] pb-28">
                Mental health, nutrition, and physiotherapy access{" "}
              </h3>
              <p className="text-(--main-primary-text-color) text-[16px] font-light mb-6 whitespace-normal pt-3">
                Explore our flexible financing options designed to meet your
                unique needs. We&#44;re here to help you find the perfect solution
                for your budget.
              </p>
              <div className="flex items-center justify-between">
                <span className="inline-flex justify-center w-10 h-10 bg-(--main-theme-background) rounded-full px-2">
                  <Image
                    src="/assets/heart_add_white.svg"
                    alt="icon"
                    width={32}
                    height={32}
                  />
                </span>
                <span className="text-3xl md:text-4xl text-(--main-primary-text-color) font-semibold">
                  200+
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* our diff */}

      <section className="bg-white py-10 md:py-20 px-3">
        <div className="max-w-(--max-width) mx-auto">
          <h4 className="text-(--main-primary-text-color) font-epilogue text-3xl md:text-5xl font-semibold text-center pb-5 md:pb-4">
            Our Difference
          </h4>
          <p className="text-center text-(--main-primary-text-color) text-2xl mb-10 md:mb-10">
            Human-first design. Doctor-led systems. Verified programs. Impact
            tracking.{" "}
          </p>

          <div className="flex flex-col md:flex-row justify-between gap-5 w-1/2 mx-auto">
            <Link
              href="/"
              className="w-full inline-flex justify-center md:w-80 rounded-full py-2 text-white bg-(--main-theme-background)"
            >
              Explore Our Services
            </Link>
            <Link
              href="/"
              className="w-full inline-flex justify-center md:w-80 rounded-full py-2 text-white bg-(--main-theme-background)"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </section>
      <NeedAndSupport/>
    </>
  );
}

export default AboutUs