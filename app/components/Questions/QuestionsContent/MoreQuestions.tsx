import React from "react";
import { Button } from "@/components/ui/button";

const StillHaveQuestions: React.FC = () => {
  return (
    <div className="text-center pt-16">
      <h3 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-bold mb-2 pb-4 text-[#ECEEEC]">
        Still have questions?
      </h3>
      <p className="text-[16px] sm:text-[18px] font-medium text-[#AFB5AD] pb-8">
        Support details to capture customers that might be on the fence.
      </p>
      <Button
        className="relative text-[#ECEEEC] bg-transparent rounded-xl px-8 py-2 
                   border-2 border-purple-500 hover:bg-purple-700 hover:text-white 
                   hover:shadow-[0_5px_15px_rgba(145,92,182,0.5)]"
      >
        Contact
      </Button>
    </div>
  );
};

export default StillHaveQuestions;
