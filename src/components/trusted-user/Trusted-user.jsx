import { FiUsers } from "react-icons/fi";
import { FaHeartCirclePlus, FaSuitcaseMedical } from "react-icons/fa6";
import { FaHandHoldingMedical } from "react-icons/fa";

export default function TrustedUser() {
  return (
    <div className='relative z-40 bg-[#f0f8f9] rounded-t-4xl -mt-13'>
        <div className='max-w-7xl mx-auto'>
        <ul className='flex justify-between items-center py-4 px-6 rounded '>
            <li className='flex gap-2 items-center text-lg font-semibold font-epilogue -tracking-wider'><FiUsers className="text-3xl text-green-900" /> Trusted by thousands of users”</li>
            <li className='flex gap-2 text-lg font-semibold font-epilogue tracking-wider'><FaHandHoldingMedical className="text-3xl text-green-900"/> Supporting patients across India</li>
            <li className='flex gap-2 text-lg font-semibold font-epilogue tracking-wider'><FaHeartCirclePlus className="text-3xl text-green-900"/> Healthcare &amp; pharma aligned support</li>
        </ul>
        </div>
     </div>
  )
}
