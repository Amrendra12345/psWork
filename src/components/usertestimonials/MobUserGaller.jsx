"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";
import { X, Play } from "lucide-react";
import { useState } from "react";

export default function MobUserGaller() {
    const [videoId, setVideoId] = useState(null);
    
    const openModal = (id) => setVideoId(id);
    const closeModal = () => setVideoId(null);
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1, // mobile
      spacing: 12,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 3, spacing: 20 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 4, spacing: 24 },
      },
    },
  });

  const handlePrev = () => {
    slider.current?.prev();
  };

  const handleNext = () => {
    slider.current?.next();
  };
  return (
    <>
    <div className="relative">
      <div ref={sliderRef} className="keen-slider flex justify-between items-center">
             <div className="keen-slider__slide px-6">
                <div className="min-h-55 flex gap-4">
                     <div
                        onClick={() => openModal("VGUwYrAVIJ4")}
                        className="w-full h-auto relative cursor-pointer rounded-lg bg-[url('/assets/preview_thumb.png')] bg-cover bg-no-repeat bg-center aspect-video overflow-hidden"
                       >
                        <h3 className="font-semibold text-white text-sm flex items-center absolute top-2 left-3">
                        <span className="bg-white rounded-full w-3 h-3 inline-block mr-2"></span>
                        Ankita
                        </h3>
                        <div
                            className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                            aria-label="Play"
                            >
                          <Play className="text-black w-5 h-5" />
                      </div>
                     </div>
                      <div
                        onClick={() => openModal("yZgwW6Yuc_E")}
                        className="w-full h-auto relative cursor-pointer rounded-lg bg-[url('/assets/preview_thumb.png')] bg-cover bg-no-repeat bg-center aspect-video overflow-hidden"
                        >
                        <h3 className="font-semibold text-white text-sm flex items-center absolute top-2 left-3">
                        <span className="bg-white rounded-full w-3 h-3 inline-block mr-2"></span>
                        Ankita
                        </h3>
                        <div
                        className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        aria-label="Play"
                        >
                        <Play className="text-black w-5 h-5" />
                        </div>
                    </div>
                </div>                 
             </div>
             <div className="keen-slider__slide px-6">
                <div className="min-h-55 flex gap-4">
                     <div
                        onClick={() => openModal("yZgwW6Yuc_E")}
                        className="w-full h-auto relative cursor-pointer rounded-lg bg-[url('/assets/preview_thumb.png')] bg-cover bg-no-repeat bg-center aspect-video overflow-hidden"
                    >
                        <h3 className="font-semibold text-white text-sm flex items-center absolute top-2 left-3">
                        <span className="bg-white rounded-full w-3 h-3 inline-block mr-2"></span>
                        Ankita
                        </h3>
                        <div
                        className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        aria-label="Play"
                        >
                        <Play className="text-black w-5 h-5" />
                        </div>
                    </div>
                
                   <div
                        onClick={() => openModal("yZgwW6Yuc_E")}
                        className="w-full h-auto relative cursor-pointer rounded-lg bg-[url('/assets/preview_thumb.png')] bg-cover bg-no-repeat bg-center aspect-video overflow-hidden"
                    >
                    <h3 className="font-semibold text-white text-sm flex items-center absolute top-2 left-3">
                    <span className="bg-white rounded-full w-3 h-3 inline-block mr-2"></span>
                    Ankita
                    </h3>
                    <div
                    className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    aria-label="Play"
                    >
                    <Play className="text-black w-5 h-5" />
                    </div>
                   </div>
                  </div>
             </div> 
              <div className="keen-slider__slide px-6">
                <div className="min-h-55 flex gap-4">
                     <div
                        onClick={() => openModal("yZgwW6Yuc_E")}
                        className="w-full h-auto relative cursor-pointer rounded-lg bg-[url('/assets/preview_thumb.png')] bg-cover bg-no-repeat bg-center aspect-video overflow-hidden"
                    >
                        <h3 className="font-semibold text-white text-sm flex items-center absolute top-2 left-3">
                        <span className="bg-white rounded-full w-3 h-3 inline-block mr-2"></span>
                        Ankita
                        </h3>
                        <div
                        className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        aria-label="Play"
                        >
                        <Play className="text-black w-5 h-5" />
                        </div>
                    </div>
                
                   <div
                        onClick={() => openModal("yZgwW6Yuc_E")}
                        className="w-full h-auto relative cursor-pointer rounded-lg bg-[url('/assets/preview_thumb.png')] bg-cover bg-no-repeat bg-center aspect-video overflow-hidden"
                    >
                    <h3 className="font-semibold text-white text-sm flex items-center absolute top-2 left-3">
                    <span className="bg-white rounded-full w-3 h-3 inline-block mr-2"></span>
                    Ankita
                    </h3>
                    <div
                    className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    aria-label="Play"
                    >
                    <Play className="text-black w-5 h-5" />
                    </div>
                   </div>
                  </div>
             </div>
        </div>
      

      {/* Controls */}
      <div className="absolute -bottom-[48px] left-1/2 -translate-x-1/2 transform w-[130px]">
                  {/* Arrows */}
                  <button
                    onClick={handlePrev}
                    aria-label="Previous Slide"
                    role="button"
                    className="cursor-pointer absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2  text-white px-3 py-2 rounded-full z-10"
                  >
                    <CircleChevronLeft className="bg-[var(--main-theme-background)] rounded-full w-[42px] h-[42px] md:w-[35px] md:h-[35px]" />
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next Slide"
                    role="button"
                    className="cursor-pointer absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2  text-white px-3 py-2 rounded-full z-10"
                  >
                   <CircleChevronRight className="bg-[var(--main-theme-background)] rounded-full w-[42px] h-[42px] md:w-[35px] md:h-[35px]" />
                  </button>
    </div>
      {videoId && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4 overflow-y-auto">
          <div className="relative w-full max-w-[600px]">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute -top-5 -right-5 bg-white rounded-full shadow-lg p-2 z-50 hover:bg-[var(--main-theme-background)] hover:text-white transition"
            >
              <X size={20} />
            </button>

            <div className="bg-white rounded overflow-hidden">
              <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                <div className="absolute top-0 left-0 w-full h-full">
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&playsinline=1&enablejsapi=1`}
                    title="YouTube video"
                    allow="autoplay; encrypted-media; fullscreen"
                    allowFullScreen
                    className="w-full h-full rounded"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
}


