import { Button } from "@/components/ui/button";

const HeroContent = () => {
  return (
    <div className="text-center  max-w-3xl md:max-w-2xl lg:max-w-lg mx-auto">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#ECEEEC] mb-4 leading-tight">
        Ride with passion <span className="block md:inline">Ride with us</span>
      </h1>
      <p className="text-base md:text-lg lg:text-l text-[#ECEEEC] mb-6 whitespace-normal md:whitespace-nowrap mx-auto md:ml-[-20px] lg:ml-[-30px]">
        Experience the thrill of the open road with our premium selection of
        bikes.
      </p>
      <Button
        className="relative bg-[#56468B] text-[#ECEEEC] rounded-md px-8 py-2 
             hover:bg-purple-700  after:content-[''] after:absolute after:inset-0 
             after:rounded-md after:border-2 after:border-transparent after:opacity-0 
             hover:after:opacity-70 hover:after:animate-glow animate-gradient transition-all duration-300"
      >
        Buy Now
      </Button>
    </div>
  );
};

export default HeroContent;
