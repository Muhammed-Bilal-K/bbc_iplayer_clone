import React, { useEffect, useState } from "react";
import { fetchTrends } from "../../services/apiTrend/trendApi";
import { ImageUrlW300 } from "../../services/utils/url";

const NewTrend = ({ value, genre, gen, genrname }) => {
  const [trends, setTrends] = useState([]);
  const [hovered, setHovered] = useState(false);
  const [showDiv, setShowDiv] = useState(false);

  useEffect(() => {
    const getTrends = async () => {
      try {
        const data = await fetchTrends(genre, gen);
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
    }, 400);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setShowDiv(false);
    clearTimeout(hoverTimeout);
  };

  return (
    <div
      className={`text-white w-full h-full relative ${value && "my-0"} mt-5`}
    >
      <div className="flex flex-row justify-between container mx-auto mb-5 md:px-6">
        <div className="text-2xl font-bold md:mb-0">
          <h1>{genrname}</h1>
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
                index === 0 ? "w-0% sm:w-[5%] visible sm:invisible" : ""
              } relative `}
              onMouseEnter={() => handleMouseOver(index)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                width={400}
                src={`${ImageUrlW300}${trend.backdrop_path}`}
                alt="Trend"
                className={`mt-5 cursor-pointer transform transition-border transition-all duration-300 hover:border-4 hover:border-white ${
                  hovered === index ? "border-4 border-white" : ""
                } `}
              />
              {hovered === index && (
                <div className={`absolute inset-4 bg-black border rounded shadow-md z-10 transition-opacity duration-700 ease-in-out shadow-setup-over
                  ${showDiv ? "opacity-100 translate-x-2 scale-110 " : "opacity-0 translate-x-0 scale-100"}`}>
                  <img
                    src={`${ImageUrlW300}${trend.backdrop_path}`}
                    width={600}
                  />
                  <strong className="text-lg font-bold pl-2">
                    {trend.title}
                  </strong>
                  <p className="mt-0 pl-2 text-sm opacity-75">
                    {trend && trend?.overview?.slice(0, 50)}
                  </p>
                </div>
              )}

              <h2 className="text-sm font-bold pb-5">
                {trend.title ? trend.title : "Title & Name"}
              </h2>
            </div>
          ))}
        </div>
        <div className="banner-overlay"></div>
      </div>
      {value && (
        <div className="container mx-auto ">
          <div className="border-b border-b-gray-800 bg-black"></div>
        </div>
      )}
    </div>
  );
};

export default NewTrend;
