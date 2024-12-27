"use client";

import React from "react";
import QuestionsDropdown from "./QuestionsContent/QuestionsDropdown";

import QuestionsHeading from "./QuestionsContent/QuestionsHeading";
import MoreQuestions from "./QuestionsContent/MoreQuestions";

const QuestionsMerge: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      <QuestionsHeading />
      <QuestionsDropdown />
      <MoreQuestions />
    </div>
  );
};

export default QuestionsMerge;
