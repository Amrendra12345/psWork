import Link from 'next/link'
import React from 'react'
import { BsGooglePlay } from 'react-icons/bs'
import { FaApple } from 'react-icons/fa'

const GetAppLink = () => {
  return (
    <ul className='flex flex-col gap-4'>
         <li>
             <Link className="text-white/70 leading-[24px] hover:text-white flex gap-1 items-center" href={''}>
              <BsGooglePlay />
               Google Play
             </Link>
         </li>
          <li>
             <Link className="text-white/70 leading-[24px] hover:text-white flex gap-1 items-center" href={''}>
             <FaApple  className='text-xl'/>
             App Store</Link>
         </li>
       
     </ul>
  )
}

export default GetAppLink