"use client";

import { useState } from "react";
import QuestionCard from "@/app/components/QuestionCard";

type Question = {
  slug: string;
  title: string;
  category: string;
  difficulty: string;
  answer: string;
  interviewFrequency: string;
};

type Props = {
  questions: Question[];
};

export default function QuestionList({ questions }: Props) {
  const [search, setSearch] = useState("");

  const filteredQuestions = questions.filter((question) => {
    const searchText = search.toLowerCase();

    return (
      question.title.toLowerCase().includes(searchText) ||
      question.category.toLowerCase().includes(searchText) ||
      question.answer.toLowerCase().includes(searchText)
    );
  });

  return (
    <>
      <div className="mb-8">
        <input
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search JavaScript questions..."
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
        />
      </div>

      <p className="mb-6 text-sm text-gray-500">
        {filteredQuestions.length} questions found
      </p>

      {filteredQuestions.length === 0 ? (
        <p className="text-gray-500">
          No questions found.
        </p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {filteredQuestions.map((question) => (
            <QuestionCard
              key={question.slug}
              question={question}
            />
          ))}
        </div>
      )}
    </>
  );
}