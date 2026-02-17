"use client"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import Image from "next/image";

export default function WhatSay() {
  var settings = {
    dots: true,
    infinite: true,    
    lazyLoad: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const testimonials = [
     {title: "iCanHeal helped us  navigate financial support when we were completely lost", 
      img:"/assets/profile2.png",
      name:"Ramesh",
      city:"Bengaluru"
     },
      {title: "The guidance and follow-up made a difficult journey easier to manage", 
      img:"/assets/profile3.png",
      name:"Anita",
      city:"Mumbai"
     },
      {title: "The guidance and follow-up made a difficult journey easier to manage", 
      img:"/assets/profile3.png",
      name:"Anita",
      city:"Mumbai"
     }
  ]

  return (
    <section className="w-full py-6 bg-zinc-50">
      <div className="max-w-7xl mx-auto">
        <p className="w-full text-center font-epilogue font-bold text-3xl text-(--main-primary-text-color)">
          What People Say
        </p>
        <div className="w-full mt-6">
          <Slider {...settings}>
            {testimonials.map((data, i) => (
              <div className="w-full  p-4 rounded px-4" key={i}>
                <div className="w-full  p-4 bg-white rounded border border-gray-200">
                  
                    <FaQuoteLeft className="text-xl text-gray-300" />
                    <p className="px-4 pt-6 pb-4 font-poppins text-gray-600">
                      {data.title}{" "}
                    </p>
                  
                  <div className="w-full flex items-center justify-start gap-4 mt-4">
                    <div className="w-13 h-13 p-2 rounded-full outline-blue-100 outline-4 relative">
                      <Image
                        src={data.img}
                        fill
                        alt="profile1"
                        className="w-full h-auto rounded-full object-cover"
                      />
                    </div>
                    <ul>
                      <li className="font-poppins text-gray-600 text-sm font-medium">
                        {data.name}
                      </li>
                      <li className="font-poppins text-gray-400 text-sm">
                        {data.city}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
