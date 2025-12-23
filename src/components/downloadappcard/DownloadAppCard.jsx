import React from "react";
import Link from "next/link";
const DownloadAppCard = ({ valueStats, cardText, btnUrl, btnText }) => {
  return (
    <div className="bg-(--main-theme-background) relative -top-9 w-[93%] mx-auto rounded-3xl p-5 block md:hidden">
      <div className="flex items-center mb-4">
        <h4 className="text-white text-6xl pr-4">{valueStats}</h4>
        <p className="text-white text-lg">{cardText}</p>
      </div>
      <Link
        href={btnUrl}
        className="cursor-pointer inline-flex justify-center bg-white rounded-full px-5 py-2 w-full"
      >
        {btnText}
      </Link>
    </div>
  );
};

export default DownloadAppCard;
