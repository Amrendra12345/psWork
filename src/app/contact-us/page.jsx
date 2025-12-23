import CardUpperEffect from '@/components/cardUpperEffect/CardUpperEffect'
import ContactUsForm from '@/components/contactusform/ContactUsForm'
import HelpAndSupport from '@/components/helpandsupport/HelpAndSupport'
import HeroSecond from '@/components/homes/HeroSecond'
import NeedAndSupport from '@/components/needAndSupport/NeedAndSupport'
import Image from 'next/image'
import React from 'react'

const ContactUs = () => {
  return (
    <>
      <section className='w-full bg-(--main-theme-background) px-6  mb-10'>
         <div className='max-w-7xl mx-auto flex justify-start items-center h-full flex-col md:flex-row'>
              <div className='w-full md:w-3/5 order-2 md:order-1 p-6 md:p-10'>
                 <h1 className="text-3xl leading-11 sm:text-[28px]  md:text-4xl sm:leading-10 md:leading-12  md:pt-10 lg:text-5xl lg:leading-16 text-[#FFE8DD] px-1 font-bold font-epilogue">
                  We&#x27;re Here to Help. Let&#x27;s Talk.</h1>
                 <p className='mt-3 text-xl font-semibold text-white/80 font-epilogue'>
Whether you're a patient, doctor, hospital, or pharma partner, we&#x27;d love to hear from you.</p>
              </div>
              <div className='w-full md:w-2/5 order-1 md:order-2 mb-10 md:mb-0'>
                   <div className='max-w-4/5 mx-auto px-10 pt-20 pb-0'>
                       <Image src={'/assets/contact_us_mob2.png'} alt='contact us' width={500} height={500} className='w-full h-auto'/>
                   </div>
              </div>
          </div>
      </section>
       <CardUpperEffect />
      <ContactUsForm />
      <HelpAndSupport
         heading="Need Help Now?"
        icon1="/assets/Emergency_white.svg"
        icon1Text="Use our Live Chat or check out the Help Centre for common queries."     
        icon2Heading="24/7"
        icon2Text="Customer Support available"
        callNumber="+91-1234567890"
        callText="LIVE CHAT"
        whatsappNumber="+91-1234567890"
        whatsappText="HELP CENTRE"
        imageUrl="/assets/placeholderimg.png"
      
      />
      <NeedAndSupport/>
    </>
  )
}

export default ContactUs