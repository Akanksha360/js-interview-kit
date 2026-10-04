"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { javascriptQuestions } from "@/app/data/javascriptQuestions";
import { createClient } from "@/lib/supabase/client";
import MarkComplete from "@/app/components/MarkComplete";

export default function PracticePage() {
  const [availableQuestions, setAvailableQuestions] = useState(
    javascriptQuestions
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getQuestions() {
      const supabase = createClient();

      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        setLoading(false);
        return;
      }

      const { data } = await supabase
        .from("question_progress")
        .select("question_slug")
        .eq("user_id", user.id);

      const completedSlugs =
        data?.map((item) => item.question_slug) || [];

      const remainingQuestions = javascriptQuestions.filter(
        (question) => !completedSlugs.includes(question.slug)
      );

      const questionsToPractice =
        remainingQuestions.length > 0
          ? remainingQuestions
          : javascriptQuestions;

      const randomIndex = Math.floor(
        Math.random() * questionsToPractice.length
      );

      setAvailableQuestions(questionsToPractice);
      setCurrentIndex(randomIndex);
      setLoading(false);
    }

    getQuestions();
  }, []);

  function nextQuestion() {
    setShowAnswer(false);

    let nextIndex = Math.floor(
      Math.random() * availableQuestions.length
    );

    while (
      availableQuestions.length > 1 &&
      nextIndex === currentIndex
    ) {
      nextIndex = Math.floor(
        Math.random() * availableQuestions.length
      );
    }

    setCurrentIndex(nextIndex);
  }

  if (loading) {
    return (
      <main className="mx-auto max-w-4xl px-6 py-16">
        <p className="text-gray-500">
          Loading practice questions...
        </p>
      </main>
    );
  }

  const question = availableQuestions[currentIndex];

  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <Link
        href="/javascript"
        className="text-sm text-gray-500 hover:text-black hover:underline"
      >
        ← Back to Questions
      </Link>

      <div className="mt-10">
        <p className="text-sm font-medium text-gray-500">
          Practice Mode
        </p>

        <p className="mt-2 text-sm text-gray-400">
          {availableQuestions.length} questions available
        </p>

        <h1 className="mt-6 text-3xl font-bold">
          {question.title}
        </h1>

        <div className="mt-4 flex gap-3">
          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium">
            {question.category}
          </span>

          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium">
            {question.difficulty}
          </span>
        </div>

        {!showAnswer ? (
          <div className="mt-10">
            <p className="text-lg text-gray-600">
              Think about your answer before revealing it.
            </p>

            <button
              onClick={() => setShowAnswer(true)}
              className="mt-6 rounded-lg bg-black px-5 py-3 text-sm font-medium text-white hover:bg-gray-800"
            >
              Reveal Answer
            </button>
          </div>
        ) : (
          <div className="mt-10 rounded-xl border border-gray-200 p-6">
            <h2 className="text-xl font-semibold">
              Answer
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              {question.answer}
            </p>
            <div className="flex mt-6 gap-4 items-center">
            <div className="">
              <MarkComplete questionSlug={question.slug} />
            </div>

            <button
              onClick={nextQuestion}
              className="rounded-lg h-fit bg-black px-5 py-3 text-sm font-medium text-white hover:bg-gray-800"
            >
              Next Question →
            </button>
            </div>
            
          </div>
        )}
      </div>
    </main>
  );
}