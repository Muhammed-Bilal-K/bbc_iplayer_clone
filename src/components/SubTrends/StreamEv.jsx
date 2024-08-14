import React, { useEffect, useState } from "react";
import { GetStream } from "../../services/api/movieApi";
import { ImageUrlW300 } from "../../services/utils/url";

const StreamEv = ({gen}) => {
  const [trends, setTrends] = useState([]);
  const [hovered, setHovered] = useState(false);
  const [showDiv, setShowDiv] = useState(false);

  useEffect(() => {
    const getTrends = async () => {
      try {
        const data = await GetStream(gen);
        setTrends(data.results);
      } catch (err) {
        console.log(err);
      }
    };

    getTrends();
  }, []);

  let hoverTimeout;

  const handleMouseOver = (index) => {
    setHovered(index);
    hoverTimeout = setTimeout(() => {
      setShowDiv(true);
    }, 200);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setShowDiv(false);
    clearTimeout(hoverTimeout);
  };

  return (
    <div className="text-white w-full h-full relative">
      <div className="flex flex-row justify-between container mx-auto mb-5 px-4 md:px-2">
        <div className="sm:text-base md:text-xl lg:text-2xl xl:text2xl text-xl font-bold md:mb-0 px-5 sm:px-11">
          <h1>Stream Every Episode</h1>
        </div>
        <div className="text-sm font-medium">
          <h1>View All</h1>
        </div>
      </div>
      <div className="relative">
        <div className="carousel flex overflow-x-auto space-x-4 px-4">
          {trends.map((trend, index) => (
            <div
              key={trend.id}
              className={`carousel-item flex-shrink-0 flex flex-col gap-3 ${
                index === 0 ? "w-[5%] invisible" : ""
              } relative`} 
              onMouseEnter={() => handleMouseOver(index)}
              onMouseLeave={handleMouseLeave}
            >
              <img
              width={300}
                src={`${ImageUrlW300}${trend.poster_path}`}
                alt="Trend"
                className={`mt-5 cursor-pointer transform transition-border transition-all duration-300 hover:border-4 hover:border-white ${
                  index === 0 ? "" : ""
                }`}
              />

              {hovered === index && (
                <div className={`absolute inset-6 bg-black border rounded shadow-md z-10 transition-opacity duration-700 ease-in-out shadow-setup-over
                  ${showDiv ? "opacity-100 translate-x-2 scale-110 " : "opacity-0 translate-x-0 scale-100"}`}>
                  <img
                    src={`${ImageUrlW300}${trend.backdrop_path}`}
                    width={300}
                  />
                  <strong className="text-lg font-bold pl-2">
                    {trend.title}
                  </strong>
                  <p className="mt-0 pl-2 text-sm opacity-75">
                    {trend && trend?.overview?.slice(0, 50)}
                  </p>
                  <div className="flex flex-col justify-end h-1/3 pl-2">
                    <p className="">{trend.release_date}</p>
                  </div>
                </div>
              )}

              <h2 className="text-sm font-bold">
                {trend.title ? trend.title : "Title & Name"}
              </h2>
            </div>
          ))}
        </div>
        <div className="banner-overlay"></div>
      </div>
    </div>
  );
};

export default StreamEv;
