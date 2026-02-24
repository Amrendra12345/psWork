import Image from "next/image";


const Hero = () => {
  return (
    <section className="w-full bg-primary pt-4 pb-2">
        <div className="w-full  mr-0 flex gap-0 items-center relative  flex-col md:flex-row ">
            <div className="w-full md:w-1/2 pl-4 md:pl-19 xl:pl-30 order-2 md:order-1">
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
            <div className="w-full md:w-1/2 relative p-4 order-1 md:order-2">
               <div className="relative -mr-5 ">
                <Image src={'/assets/home_bg244.png'} className="w-full h-auto rounded" width={600} height={500} alt="banner" />                
                </div>  
                <div className="absolute top-0 -left-4 w-[120%] h-full bg-[linear-gradient(275deg,rgba(26,67,78,0)_59%,#1A434E_94.06%),linear-gradient(360deg,rgba(26,67,78,0)_70%,#1A434E_92.03%)]"></div>              
            </div>
        </div>
    </section>
  );
};

export default Hero;
