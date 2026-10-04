"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

type Question = {
  slug: string;
  title: string;
  category: string;
  difficulty: string;
  answer: string;
  interviewFrequency: string;
};

type Props = {
  question: Question;
};

export default function QuestionCard({ question }: Props) {
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    async function checkProgress() {
      const supabase = createClient();

      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        return;
      }

      const { data } = await supabase
        .from("question_progress")
        .select("id")
        .eq("user_id", user.id)
        .eq("question_slug", question.slug)
        .maybeSingle();

      setCompleted(!!data);
    }

    checkProgress();
  }, [question.slug]);

  return (
    <div className="rounded-xl border border-gray-200 p-6">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-sm text-gray-500">
          {question.category}
        </span>

        <div className="flex items-center gap-2">
          {completed && (
            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
              ✓ Completed
            </span>
          )}

          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium">
            {question.difficulty}
          </span>
        </div>
      </div>

      <h2 className="mb-2 text-xl font-semibold">
        {question.title}
      </h2>

      <p className="mb-3 text-sm font-medium text-gray-500">
        {question.interviewFrequency === "Very Common" && "🔥 "}
        {question.interviewFrequency}
      </p>

      <p className="mb-5 text-sm leading-6 text-gray-600">
        {question.answer}
      </p>

      <Link
        href={`/javascript/${question.slug}`}
        className="text-sm font-medium text-black hover:underline"
      >
        View question →
      </Link>
    </div>
  );
}