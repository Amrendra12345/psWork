import Image from "next/image";

export default function Hero2() {
  return (
    <div className="w-full bg-(--main-theme-background) flex gap-0 md:flex-row flex-col">
       <div className="py-10 w-full md:w-1/2 xl:[60%] lg-w-20 ml-auto">
          <div className="lg:flex lg:justify-end lg:flex-col">
           <h1 className="text-3xl lg:text-[42px] [text-shadow:0_2px_6px_rgba(0,0,0,0.1)] lg:pl-10 xl:pl-30 font-bold text-[#FFE8DD] lg:leading-14 font-bold font-epilogue">
             Simplifying access to treatment, financial support, and care services
           </h1>
           <p className="lg:pl-10 xl:pl-30 text-xl font-medium font-poppins text-gray-200 py-5">Patient assistance programs, financial guidance, and digital tools — all in one place.</p>
           </div>
           <div className="lg:ml-10 xl:ml-30 bg-(--main-theme-background) sm:bg-white rounded-3xl z-10 border border-gray-400/80 w-[94%]  sm:w-3/4 mx-2  md:w-1/2 lg:w-90 p-3 md:mt-0  shadow-2xl p-4 mt-auto sm:mt-0 absolute left-0 lg:left-3% -bottom-3 sm:relative sm:bottom-auto">
              <div className="flex items-center mb-3">
                <h4 className="text-white sm:text-(--main-primary-text-color) text-4xl md:text-5xl lg:text-7xl pr-4">
                  10k
                </h4>
                <p className="text-white sm:text-(--main-primary-text-color)  md:text-1xl lg:text-[19px]">
                  families already simplifying critical care
                </p>
              </div>
              <button className="cursor-pointer bg-white sm:bg-(--main-theme-background) rounded-full px-5 py-4 w-full text-(--main-primary-text-color)  sm:text-white mt-4 sm:mt-0 p">
                DOWNLOAD THE APP
              </button>
            </div>
        </div> 
        <div className="w-full md:w-1/2 xl:[40%] relative pt-4">
           <Image src={'/assets/home_banner.png'} width={500} height={300}  priority  alt="home banner" className="w-full h-auto" />
        </div>
    </div>
  )
}
