import React from "react";
import { RiMovieLine } from "react-icons/ri";
import bannerAd from "../../assets/Banner1All.jpg";

const BannerAds = () => {
  return (
    <div className="text-white lg:container xl:container mx-auto w-screen mb-10 sm:mb-10 md:mb-5">
      <div className="flex flex-col-reverse lg:flex-row justify-center items-center relative">
        <div className="lg:w-1/3 w-full lg:text-left px-4 sm:absolute sm:z-10 md:absolute md:z-10 sm:bottom-24 md:bottom-24 lg:static xl:static sm-devices-uk">
          <h2 className="sm:text-xl md:text-3xl lg:text-3xl xl:text-4xl text-sm font-bold">
            UK True Crime Documentaries
          </h2>
          <p className="md:text-sm sm:text-xs font-thin opacity-70 text-sm py-1 md:py-6 sm:py-1">
            Must-see drama, loved by the critics.
          </p>
          <div className="flex lg:justify-start min-h-6 w-full">
            <div className="flex justify-between bg-white text-black gap-3 items-center px-1 sm:px-6 py-2 sm:py-3.5 text-xl hover:px-9">
              <RiMovieLine />
              <span className="text-base sm:text-xl md:text-xl font-semibold">
                Explore Collection
              </span>
            </div>
          </div>
        </div>
        <div className="relative w-full lg:w-4/6">
          <img src={bannerAd} alt="bannerads" className="w-full h-auto" />
          <div className="absolute inset-0 gradient-banner-sm"></div>
        </div>
      </div>
    </div>
  );
};

export default BannerAds;
