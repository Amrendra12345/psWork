import Link from 'next/link'
import React from 'react'

const ServicesLink = () => {
    const serviceLink = [
        { name: "Financial Assistance", href: "/financial-assistance" },
        { name: "Doctor Consultations", href: "/doctor-consultations" },
        { name: "Medicines & Diagnostics", href: "/medicines-diagnostics" },
        { name: "Transport & Stay", href: "/transport-stay" },
        { name: "Health Records", href: "/health-records" },
    ]
  return (    
     <ul className='flex flex-col gap-4'>
         {serviceLink.map((link) => (
            <li key={link.name}>
                <Link className="text-white/70 leading-[24px] hover:text-white" href={link.href}>{link.name}</Link>
            </li>
         ))}
     </ul>    
  )
}

export default ServicesLink