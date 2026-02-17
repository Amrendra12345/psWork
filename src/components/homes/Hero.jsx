import Image from "next/image";


const Hero = () => {
  return (
    <section className="w-full bg-primary pt-4 pb-2">
        <div className="w-full lg:max-w-350 flex gap-0 items-center relative ml-auto  flex-col md:flex-row">
            <div className="w-full md:w-1/2 pl-4 md:pl-2 lg:pl-0">
                <h1 className="text-[#FFE8DD] text-3xl lg:text-[31px] font-bold leading-12 font-epilogue tracking-wider">Simplifying access to treatment, financial support, and care services</h1>
                <p className="text-white/80 text-xl my-2">Patient assistance programs, financial guidance, and digital tools — all in one place.</p>
                <div className="bg-white p-4 rounded max-w-80 mt-8 text-center shadow border-t border-t-gray-500">
                    <div className="w-full flex gap-4 items-center mb-4">
                        <h2 className="text-primary text-4xl font-bold">10K</h2>
                        <p className="text-primary text-left text-lg font-epilogue">Families already simplifying critical care</p>
                    </div>
                    <button type="button" className="w-full bg-primary text-white/80 py-3 px-6 rounded-full">DOWNLOAD THE APP</button>
                </div>
            </div>
            <div className="w-full md:w-1/2 relative p-4">
               <div className="relative">
                <Image src={'/assets/home_bg244.png'} className="w-full h-auto rounded" width={600} height={500} alt="banner" />
                </div>
                
            </div>
        </div>
    </section>
  );
};

export default Hero;
