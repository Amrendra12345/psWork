import Image from "next/image";

const ServiceHero = ({title, subtitle, bgImage}) => {
  return (
    <section className="w-full h-full bg-(--main-theme-background) px-5 pt-5 md:pt-30 pb-9">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-start items-start gap-5 flex-col md:flex-row">
          <div className="w-full sm:w-1/2 md:w-3/5 h-auto pt-8 md:pb-20 md:-mt-20">
            <h2 className="text-3xl leading-11 sm:text-[28px]  md:text-4xl sm:leading-10 md:leading-12  md:pt-10 lg:text-5xl lg:leading-16 text-[#FFE8DD] px-1 font-bold font-epilogue">
             {title}
            </h2>
            <p className="mt-3 font-popping text-xl text-white/90">
               {subtitle}
            </p>
          </div>
          <div className="w-full sm:w-1/2 md:w-2/5 h-auto  px-4 md:px-0">
            <Image
              src={bgImage}
              alt="pap form banner"
              width={400}
              height={400}
              className="h-auto w-full object-contain transform md:scale-[1.098]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
