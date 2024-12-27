import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface BikeDetailsProps {
  bikeName: string;
  description: string;
  imageUrl: StaticImport;
  bikeImageSide: "left" | "right";
}

const FeatureCardImage = ({
  bikeName,
  description,
  imageUrl,
  bikeImageSide,
}: BikeDetailsProps) => {
  const imageContent = (
    <div className="lg:w-1/2 w-full relative flex items-center justify-center -mt-14 ">
      <div className="relative w-full h-[180px] sm:h-[250px] md:h-[300px] lg:h-[400px] min-w-[180px] min-h-[180px] ">
        <Image
          src={imageUrl}
          alt={bikeName}
          fill
          priority
          className="object-contain"
          sizes="(max-width: 640px) 180px,
                 (max-width: 768px) 250px,
                 (max-width: 1024px) 300px,
                 400px"
        />
      </div>
    </div>
  );

  const textContent = (
    <div className="lg:w-1/2 w-full flex flex-col justify-center space-y-6 px-4 lg:px-16">
      <h2 className="text-[22px] sm:text-[24px] md:text-[26px] lg:text-[30px] font-semibold text-[#ECEEEC] tracking-wide">
        {bikeName}
      </h2>
      <p className="text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] font-normal text-[#AFB5AD] max-w-[400px] leading-relaxed">
        {description}
      </p>
      <Button
        className="relative bg-[#56468B] text-[#ECEEEC] rounded-md px-8 py-2 w-fit
          hover:bg-purple-700 after:content-[''] after:absolute after:inset-0 
          after:rounded-md after:border-2 after:border-transparent after:opacity-0 
          hover:after:opacity-70 hover:after:animate-glow animate-gradient transition-all duration-300"
      >
        Buy Now
      </Button>
    </div>
  );

  return (
    <div className="flex flex-col lg:flex-row items-center w-full bg-[#14121F] p-4 lg:p-8 gap-8 lg:gap-0">
      {bikeImageSide === "left" ? (
        <>
          {imageContent}
          {textContent}
        </>
      ) : (
        <div className="flex flex-col-reverse lg:flex-row items-center w-full">
          {textContent}
          {imageContent}
        </div>
      )}
    </div>
  );
};

export default FeatureCardImage;
