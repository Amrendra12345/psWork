// components/ContactLinks.jsx
'use client';
import React from 'react';
import Image from 'next/image';
const ContactLinks = () => {
  const phoneNumber = '+911234567890';
  const whatsappNumber = '911234567890';

  return (
    <div className='flex items-center justify-center md:justify-normal gap-3 md:px-5 pb-6'>
      <span className='text-white'>Contact Via</span>
      <a className='flex items-center text-white pr-5' href={`tel:${phoneNumber}`}>
        <Image src="/assets/phone.svg" alt="Phone Icon" className='mr-1' width={24} height={24} /> Phone
      </a>
      <a className='flex items-center text-white' href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
        <Image src="/assets/whatsapp.svg" alt="Phone Icon" className='mr-1' width={24} height={24} /> WhatsApp
      </a>
    </div>
  );
};

export default ContactLinks;
