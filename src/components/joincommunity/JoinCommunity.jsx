"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link"; 

const members = [
  { id: 1, name: "George M", role: "Doctor", image: "/assets/profile1.png" },
  { id: 2, name: "Anna L", role: "Nurse", image: "/assets/profile2.png" },
  { id: 3, name: "John D", role: "Therapist", image: "/assets/profile3.png" },
  { id: 4, name: "Lisa K", role: "Doctor", image: "/assets/profile4.png" },
  { id: 5, name: "Michael B", role: "Nurse", image: "/assets/profile5.png" },
  { id: 6, name: "Emily C", role: "Therapist", image: "/assets/profile2.png" },
  { id: 7, name: "James P", role: "Doctor", image: "/assets/profile5.png" },
  { id: 8, name: "Sophia R", role: "Nurse", image: "/assets/profile1.png" },
  { id: 9, name: "William S", role: "Therapist",image: "/assets/profile5.png",},
  { id: 10, name: "Olivia T", role: "Doctor", image: "/assets/profile3.png" },
  { id: 11, name: "Henry W", role: "Nurse", image: "/assets/profile2.png" },
  { id: 12, name: "Chloe N", role: "Therapist", image: "/assets/profile1.png" },
  { id: 13, name: "Daniel V", role: "Doctor", image: "/assets/profile2.png" },
  { id: 14, name: "Grace Y", role: "Nurse", image: "/assets/profile5.png" },
  { id: 15, name: "Leo Z", role: "Therapist", image: "/assets/profile3.png" },
];

const cardsPerRow = 5;
const rowCount = Math.ceil(members.length / cardsPerRow);

const JoinCommunity = () => {
  return (
    <section className="pb-10 md:pb-16">
      <div className="px-5">
        <div className="text-center mb-0 md:mb-10">
          <h4 className="text-[var(--main-primary-text-color)] text-2xl mb-6">
            We have More Than
          </h4>
          <h3 className="text-[var(--main-primary-text-color)] font-epilogue font-medium text-6xl md:text-9xl mb-3">
            12,068
          </h3>
          <p className="text-[var(--main-primary-text-color)]">Active Users</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-2 lg:gap-6 px-5">
        {members.map((member) => (
          <div
            key={member.id}
            className="bg-white rounded-xl shadow-md p-4 text-center hover:shadow-lg transition flex flex-col items-center md:items-start md:flex-row gap-4 md:rounded-full"
          >
            <div className="w-16 h-16 overflow-hidden rounded-full border p-1 flex items-center md:justify-start justify-center mx-auto border-red-500">
                <Image
                    className="rounded-full object-cover aspect-square"
                    src={member.image}
                    alt={`${member.name} profile`}
                    width={60}
                    height={60}
              />
            </div>
            <div className="w-3/4 flex justify-start flex-col md:items-start items-center">
            <h3 className="text-lg font-normal text-[var(--main-primary-text-color)] whitespace-nowrap">
              {member.name}
            </h3>
            <p className="text-[15px] font-medium text-[#6E6E6E]">
              {member.role}
            </p>
            </div>
          </div>
        ))}
       </div>
        <Link className='flex justify-center bg-[var(--main-theme-background)] mt-10 pt-3 pb-2 w-72 md:w-96 mx-auto font-epilogue rounded-full text-white' href="/">JOIN THE COMMUNITY</Link>
      </div>
    </section>
  );
};

export default JoinCommunity;
