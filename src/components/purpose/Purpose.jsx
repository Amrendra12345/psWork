import { FaCoins } from "react-icons/fa";
import { HiArrowLongRight } from "react-icons/hi2";
import { LuUsers } from "react-icons/lu";

export default function Purpose() {
  return (
    <div className="max-w-5xl mx-auto flex gap-5 my-8">
      <div className="w-1/2  shadow-xl border border-gray-300 shadow-blue-200 p-5 rounded">
        <div className="w-full flex justify-center items-center py-4">
          <div className="w-20 h-20 rounded-full bg-(--main-theme-background) p-1 flex justify-center items-center">
            <LuUsers className="text-5xl text-white" />
          </div>
        </div>
        <p className="text-xl text-center font-semibold text-(--main-primary-text-color)">
          Patient Assistance Program (PAP)
        </p>
        <ul className="py-4 pl-8">
            <li className="text-sm font-semibold py-1 text-(--main-primary-text-color) flex gap-2 items-center"><HiArrowLongRight className="text-(--main-primary-text-color)"/> End-to-end program access</li>
            <li className="text-sm font-semibold py-1 text-(--main-primary-text-color) flex gap-2 items-center"><HiArrowLongRight className="text-(--main-primary-text-color)"/>Documentation & enrollment support</li>
            <li className="text-sm font-semibold py-1 text-(--main-primary-text-color) flex gap-2 items-center"><HiArrowLongRight className="text-(--main-primary-text-color)flex gap-2 items-center"/>Dedicated care navigator</li>
        </ul>
        <div className="flex justify-center items-center w-full py-4">
           <button className="border text-(--main-primary-text-color) rounded border-(--main-theme-background) text-sm font-bold py-3 px-6 cursor-pointer transition-all duration-500 hover:bg-(--main-theme-background) hover:text-white">Apply for PAP</button>
        </div>
      </div>
      <div className="w-1/2 shadow-xl border border-gray-300 shadow-blue-200 p-5 rounded">
        <div className="w-full flex justify-center items-center py-4">
          <div className="w-20 h-20 rounded-full bg-(--main-theme-background) p-1 flex justify-center items-center">
          <FaCoins className="text-4xl text-white" />
        </div>
        </div>
        <p className="text-xl text-center font-semibold text-(--main-primary-text-color)">
          Financial Assistance
        </p>
        <ul className="py-4 pl-8">
            <li className="text-sm font-semibold py-1 text-(--main-primary-text-color) flex gap-2 items-center"><HiArrowLongRight className="text-(--main-primary-text-color)"/> Cost Evaluation & Guidance</li>
            <li className="text-sm font-semibold py-1 text-(--main-primary-text-color) flex gap-2 items-center"><HiArrowLongRight className="text-(--main-primary-text-color)"/>Policy Understanding</li>
            <li className="text-sm font-semibold py-1 text-(--main-primary-text-color) flex gap-2 items-center"><HiArrowLongRight className="text-(--main-primary-text-color)flex gap-2 items-center"/>	Claims & Grievance Support</li>
        </ul>
        <div className="flex justify-center items-center w-full py-4">
           <button className="border text-(--main-primary-text-color) rounded border-(--main-theme-background) text-sm font-bold py-3 px-6 cursor-pointer transition-all duration-500 hover:bg-(--main-theme-background) hover:text-white">Get Financial Assistance</button>
        </div>
      </div>
    </div>
  );
}
