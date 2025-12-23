import CardUpperEffect from "@/components/cardUpperEffect/CardUpperEffect"
import CareTakercard from "@/components/caretakercard/CareTakercard"
import ServiceHero from "@/components/serviceHero/ServiceHero"
import ServiceManage from "@/components/servicemanage/ServiceManage"
import ServicesInclude from "@/components/servicesinclude/ServicesInclude"
import Image from "next/image"


const Vas = () => {
  return (
    <>
      <ServiceHero
        title="Healing goes beyond medication"
        bgImage="/assets/vas_banner.png"
        subtitle="At icanheal, we understand that treatment is only one part of your journey. Our Value-Added Services are designed to support you through the practical, emotional, and logistical challenges that often come with critical care."
      />
      <CardUpperEffect/>
      <ServicesInclude />
      <ServiceManage />
      <CareTakercard />

      <section className="py-6 mb-20 px-4">
            <div className="max-w-(--max-width) mx-auto">
              <div className="flex flex-col md:flex-row items-stretch justify-between">
                <div className="w-full md:w-[49%] mb-5 md:mb-0">
                  <h4 className="p-6 md:p-10  leading-12 text-(--main-primary-text-color) mb-3 md:mb-6 rounded-3xl text-3xl md:text-4xl font-bold shadow-[0_0_20px_rgba(0,0,0,0.1)] font-popping">
                    Need Support with finding services near you?
                  </h4>
                  <div className="flex items-stretch justify-between mb-6">
                    
                    <div className="w-full p-4 rounded-3xl bg-[linear-gradient(180deg,_#FFE8DD_0%,_#FFCEC7_100%)]">
                      <span className="mb-16 inline-flex justify-center w-10 h-10 bg-(--main-theme-background) rounded-full px-2">
                        <Image src="/assets/Emergency_white.svg" alt="Icon" width={32} height={32} />
                      </span>
                      <p className="text-lg md:text-xl text-(--main-primary-text-color) font-normal">
                        Explore services available near you and book what you need with help from our care team. Explore services available near you and book what you need with help from our care team.
                      </p>
                    </div>
                  </div>
                  <div className="">
                    <a
                      href="tel:+91-1234567890"
                      className="inline-flex justify-center w-full py-5 rounded-full text-white bg-(--main-theme-background)"
                    >
                      Access Support Services
                    </a>
                  </div>
                </div>
                <div className="w-full md:w-[49%] rounded-3xl relative h-auto aspect-video">
                  <Image
                    src="/assets/placeholderimg.png"
                    alt="Support image"
                    fill
                    className="object-cover rounded-3xl"
                  />
                </div>
              </div>
            </div>
      </section>
    </>
  )
}

export default Vas