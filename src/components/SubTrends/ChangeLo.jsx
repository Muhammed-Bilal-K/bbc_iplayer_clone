import React from "react";

const ChangeLo = () => {
  return (
    <div className="container mx-auto pt-3 pb-10 px-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 text-center leading-10">
        <div className="flex items-center gap-2">
          <h4 className="inline text-sm">Change location:</h4>
          <h2 className="text-sm font-bold text-white">London</h2>
        </div>
        <div className="flex items-center gap-2">
          <h4 className="inline">Change language:</h4>
          <h2 className="text-sm font-bold text-white">English</h2>
        </div>
        <div className="flex items-end w-full lg:justify-end md:justify-start sm:justify-start text-sm">
          <h4 className="border-r border-gray-500 pr-3">Parent Controls</h4>
          <h4 className="px-3">Help & FAQ</h4>
        </div>
      </div>
    </div>
  );
};

export default ChangeLo;
