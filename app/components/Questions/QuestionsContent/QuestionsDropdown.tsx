// QuestionsDropdown.tsx
"use client";

import React, { useState } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";

interface Question {
  id: number;
  question: string;
  answer: string;
}
const questions: Question[] = [
  {
    id: 1,
    question: "What is Bike Bliss?",
    answer:
      "Bike Bliss is a platform dedicated to biking enthusiasts. It showcases premium bikes, their unique features, user testimonials, and everything you need to know to find the perfect ride.",
  },
  {
    id: 2,
    question: "What kind of bikes do you feature?",
    answer:
      "We feature a range of bikes, from road bikes to mountain bikes and hybrids. Each bike is carefully selected for its performance, design, and reliability.",
  },
  {
    id: 3,
    question: "Can I buy a bike directly from your website?",
    answer:
      "Currently, the website focuses on providing detailed information about bikes and their features. However, we’re working on integrating an e-commerce platform soon!",
  },
  {
    id: 4,
    question: "How do I know which bike is right for me?",
    answer:
      "Our 'Features' section highlights key specifications of each bike, such as terrain suitability, speed, and comfort. Additionally, the testimonials from other users can help you make an informed choice.",
  },
  {
    id: 5,
    question: "Do you offer any support or bike maintenance tips?",
    answer:
      "Yes! Bike Bliss plans to launch a blog and support section where you’ll find maintenance tips, riding techniques, and answers to common biking questions.",
  },
];

const QuestionsDropdown: React.FC = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const toggleQuestion = (id: number) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  return (
    <div className="w-full space-y-0 border-t-[1px] border-gray-800">
      {questions.map((q) => (
        <div key={q.id} className="border-b-[1px] border-gray-800 w-full">
          <button
            className=" flex justify-between items-center w-full text-left py-4 px-4 md:px-6"
            onClick={() => toggleQuestion(q.id)}
          >
            <span className="  text-[#AFB5AD] text-[18px] font-semibold">
              {q.question}
            </span>
            {openQuestion === q.id ? (
              <ChevronDown className="text-[#AFB5AD]" />
            ) : (
              <ChevronRight className="text-[#AFB5AD]" />
            )}
          </button>
          {openQuestion === q.id && (
            <p className=" mt-2 pb-4 px-7 md:px-6 text-gray-600">{q.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default QuestionsDropdown;
