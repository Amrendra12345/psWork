"use client";
import { useState } from "react";
import { X, Play } from "lucide-react";
import MobUserGaller from "./MobUserGaller";

const UserTestimonials = () => {
  const [videoId, setVideoId] = useState(null);

  const openModal = (id) => setVideoId(id);
  const closeModal = () => setVideoId(null);

  return (
    <div className="user-testimonials bg-white py-5">
       <p className=" py-5 mb-4 w-full text-center font-epilogue font-bold text-3xl text-(--main-primary-text-color)">Take a look at our users sharing their healing journey</p>
      <div className="relative hidden md:block">
        <div className="min-h-auto xl:min-h-70 flex justify-center items-center">
          <div
            onClick={() => openModal("VGUwYrAVIJ4")}
            className="w-full h-auto md:w-[49%] lg:w-[49%] xl:w-1/2 xl:h-75 relative cursor-pointer rounded-lg bg-[url('/assets/preview_thumb.png')] bg-cover bg-no-repeat aspect-video overflow-hidden"
          >
            <h3 className="font-semibold text-white text-sm flex items-center absolute top-5 left-5">
              <span className="bg-white rounded-full w-5 h-5 inline-block mr-2"></span>
              Ankita
            </h3>
            <div
              className="bg-white rounded-full p-4 shadow-md hover:bg-gray-100 transition absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              aria-label="Play"
            >
              <Play className="text-black w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
      <div className="relative md:hidden">
        <MobUserGaller />
      </div>
      {/* Modal */}
      {videoId && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4 overflow-y-auto">
          <div className="relative w-full max-w-150">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute -top-5 -right-5 bg-white rounded-full shadow-lg p-2 z-50 hover:bg-(--main-theme-background) hover:text-white transition"
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
  );
};

export default UserTestimonials;
