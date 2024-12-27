import React from "react";

const QuestionsHeading: React.FC = () => {
  return (
    <div className="text-center mb-8">
      <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-bold mb-2 text-[#ECEEEC] pb-3">
        Frequently asked questions
      </h2>
      <p className="text-[16px] sm:text-[18px] font-medium text-[#AFB5AD] pb-9">
        Find answers to common questions about our bikes, services, and more.
      </p>
    </div>
  );
};

export default QuestionsHeading;
