// DisplayImage.tsx
import Image from "next/image";
import RedBike from "@/app/public/RedBike.png"; // Adjust the path according to your project structure

const HeroImage = () => {
  return (
    <div className="relative w-300 flex justify-center  bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-white to-inherit">
      <Image
        src={RedBike}
        alt="Red Bike"
        className="w-full max-w-[400px] md:max-w-[950px] h-auto object-contain"
        priority
      />
    </div>
  );
};

export default HeroImage;
