import Link from 'next/link'
import React from 'react'

const SupportLink = () => {
     const supportLink = [
        { name: "FAQs", href: "/faqs" },
        { name: "Contact Us", href: "/contact-us" },
        
    ]
  return (
    <ul className='flex flex-col gap-4'>
         {supportLink.map((link) => (
            <li key={link.name}>
                <Link className="text-white/70 leading-[24px] hover:text-white" href={link.href}>{link.name}</Link>
            </li>
         ))}
     </ul>
  )
}

export default SupportLink
