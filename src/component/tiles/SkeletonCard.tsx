import React from "react";

const SkeletonCard: React.FC = () => {
  return (
    <div className="px-3 grid grid-cols-4 gap-2 items-center py-3  border-b border-[#443f3f] sm:border sm:border-[#443f3f] sm:rounded-xl animate-pulse">
      <div className="relative w-14 h-12">
        <div className="w-12 h-12 bg-gray-700 rounded-full absolute left-0 top-0" />
        <div className="w-12 h-12 bg-gray-700 rounded-full absolute left-4 top-1" />
      </div>
      <div className="flex flex-col space-y-2">
        <div className="h-3 w-14 bg-gray-700 rounded"></div>
        <div className="h-4 w-20 bg-gray-700 rounded"></div>
        <div className="h-3 w-16 bg-gray-700 rounded"></div>
      </div>


      <div className="flex flex-col justify-center items-center space-y-2">
        <div className="h-4 w-10 bg-gray-700 rounded"></div>
        <div className="h-3 w-8 bg-gray-700 rounded"></div>
      </div>


      <div className="flex flex-col justify-center items-center space-y-2">
        <div className="h-4 w-10 bg-gray-700 rounded"></div>
        <div className="h-3 w-8 bg-gray-700 rounded"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
