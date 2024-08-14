import React, { useState, useEffect } from "react";
import { RiMovieLine } from "react-icons/ri";
import { GetStream } from "../services/api/movieApi";
import { ImageUrlW500 } from "../services/utils/url";

const FirstBanner = () => {
  const [customFour, setCustomFour] = useState([]);
  const [firstOne, setFirstOne] = useState({});

  useEffect(() => {
    const getTVShows = async () => {
      try {
        const data = await GetStream();
        const shuffledResults = data.results.sort(() => 0.5 - Math.random());
        const randomFour = shuffledResults.slice(0, 4);
        setCustomFour(randomFour);
        setFirstOne(randomFour[0]);
      } catch (err) {
        console.log(err);
      }
    };

    getTVShows();
  }, []);

  const handleImageClick = (show) => {
    setFirstOne(show);
  };

  return (
    <div className="text-white w-full">
      <div className="md:container lg:container lg:mx-auto md:mx-auto w-full relative h-screen">
        <div className="hidden md:flex lg:flex">
          <div className="flex relative items-center w-full">
            <div className="w-1/4 flex flex-col gap-5 pl-3">
              <div>
                <h2 className="text-3xl font-extrabold">
                  {firstOne.original_title}
                </h2>
              </div>
              <div>
                <p className="text-sm text-gray-400">
                  {firstOne && firstOne?.overview?.slice(0, 90)}
                </p>
              </div>
              <div className="text-lg md:text-sm sm:text-xs font-semibold">
                <span>It could take you to a very dark place</span>
              </div>
              <div className="flex min-h-6 w-full">
                <div className="flex justify-between bg-white text-black gap-3 items-center px-6 py-3.5 text-xl">
                  <RiMovieLine />
                  <span className="text-xl sm:text-base md:text-sm font-semibold">
                    Watch now
                  </span>
                </div>
              </div>
            </div>
            <div className="relative w-3/4">
              <div className="w-full h-full">
                <img
                  src={`${ImageUrlW500}${firstOne.backdrop_path}`}
                  alt="movie_image"
                  className="w-full h-auto object-cover"
                />
                <div className="gradient-overlay"></div>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile Devices Img*/}

        <div className="relative w-full">
          <div className="w-full h-full sm:flex md:hidden lg:hidden xl:hidden">
            <img
              src={`${ImageUrlW500}${firstOne.backdrop_path}`}
              alt="movie_image"
              className="w-full h-auto object-cover"
            />
            <div className="gradient-overlay-sm"></div>
          </div>
          <div className="text-center absolute top-[100%] w-full py-5 sm:flex md:hidden lg:hidden xl:hidden">
            <div className="w-full text-center">
              <h2 className="text-2xl font-bold my-6">
                {firstOne.original_title}
              </h2>
              <p className="text-sm text-gray-400 px-2">
                {firstOne && firstOne?.overview?.slice(0, 90)}
              </p>
              <span className="my-2 text-lg md:text-sm sm:text-xs font-medium">
                It could take you to a very dark place
              </span>
              <div className="my-5 flex justify-center items-center">
                <div className="flex justify-between bg-white text-black gap-3 items-center px-3 py-3.5 text-xl">
                  <RiMovieLine />
                  <span className="text-xl sm:text-base md:text-sm font-semibold">
                    Watch now
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="image-showCase hidden md:flex absolute top-[60%] sm:top-[60%] lg:top-[60%] xl:top-[65%] left-[5%] gap-6 px-20 opacity-90 text-center">
          {customFour.slice(0, 4).map((show) => (
            <div
              key={show.id}
              onClick={() => handleImageClick(show)}
              className="relative cursor-pointer transform transition-border transition-all duration-300 hover:scale-105 hover:border-4 hover:border-white"
            >
              <img
                src={`${ImageUrlW500}${show.backdrop_path}`}
                alt={show.original_title}
                className="opacity-70 cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FirstBanner;
