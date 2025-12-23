import Image from 'next/image'
import { FaWhatsapp } from 'react-icons/fa';
import { MdOutlinePhoneInTalk } from "react-icons/md";

const NeedAndSupport = () => {
  return (
    <section className='max-w-7xl min-h-120 mx-auto px-6 py-0 relative mt-25'>
        <div className='min-w-full md:bg-(--main-theme-background)  pl-0 pr-0 pt-4 pb-0 flex flex-col md:flex-row items-center justify-between rounded-3xl gap-0'>
            
           <div className='w-full bg-(--main-theme-background) md:w-[55%] h-auto pl-6 order-2 md:order-1 pt-6 pr-6 pb-0 rounded-2xl'>
               <h2 className='text-xl text-white/90 tracking-wider mb-1 font-semibold font-poppins'>Have questions or concerns?</h2>
                <h2 className='text-xl text-white/90 tracking-wider font-semibold font-poppins'>We're here to help you every step of the way.</h2>
                <ol className='list-disc flex flex-col gap-3 my-5 md:flex-row flex-wrap pl-5'>
                   <li className='text-lg w-full md:w-[48%]  text-white/90 font-poppins tracking-wide'>General Queries</li>
                   <li className='text-lg w-full md:w-[48%]  text-white/90 font-poppins tracking-wide'>Program Assistance</li>
                   <li className='text-lg w-full md:w-[48%]  text-white/90 font-poppins tracking-wide'>Loan & Financial Support</li>
                   <li className='text-lg w-full md:w-[48%]  text-white/90 font-poppins tracking-wide'>Treatment Navigation Help</li>
                </ol>
                <div className='flex justify-between gap-3 items-center mb-8 flex-col md:flex-row'>
                    <input type="email" placeholder='Enter your email' className='px-6 py-4 rounded-full text-lg w-full md:w-1/2 md:w-[60%] border border-white/20 focus:outline-none focus:border-white/30 bg-[#3a97af] text-white transition duration-300'/>
                    <button className='bg-white/90 text-(--main-primary-text-color) px-6 py-4 rounded-full text-lg hover:bg-(--main-theme-button-hover) font-semibold border border-white/90 hover:border-white/20 hover:text-white/90 cursor-pointer transition duration-300 w-full md:max-w-68'>Submit a Request</button>
                </div>
                <div className='flex justify-between md:items-center gap-2 flex-wrap flex-col md:flex-row pb-6 md:pb-0'>
                    <p className='text-white/90 font-poppins text-lg'>Contact Via:</p>
                    <p className='text-white/90 font-poppins text-lg flex gap-2 items-center'><MdOutlinePhoneInTalk />Phone : 9880287654</p>
                    <p className='text-white/90 font-poppins text-lg flex gap-2 items-center'><FaWhatsapp />WhatsApp : 9880287654</p>

                </div>
           </div>
            <div className='w-full md:w-[44%] h-auto order-1 md:order-2 mb-8 md:mb-0'>
                <Image src="/assets/bgneedMobile.png" alt="Need Support" width={400} height={160} className='w-full h-auto object-cover md:-mt-6 lg:-mt-20 rounded-6xl'/>
            </div>
        </div>
    </section>
  )
}

export default NeedAndSupport