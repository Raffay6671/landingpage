import React from "react";

const FunctionHeader: React.FC = () => {
  return (
    <header className="bg-[#14121F] py-10 text-center">
      <h2 className="text-[#7D66D9] font-semibold text-base sm:text-lg md:text-xl">
        Main feature
      </h2>
      <h1 className="text-[#ECEEEC] font-bold text-3xl sm:text-4xl md:text-5xl mt-4">
        Discover The Perfect Ride
      </h1>
      <p className="text-[#AFB5AD] font-medium text-base sm:text-lg md:text-xl mt-4">
        Explore the key features that make our bikes stand out from the crowd.
      </p>
    </header>
  );
};

export default FunctionHeader;
