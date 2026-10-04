"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { javascriptQuestions } from "@/app/data/javascriptQuestions";

export default function DashboardPage() {
  const [completedCount, setCompletedCount] = useState(0);

  async function handleLogout() {
    const supabase = createClient();

    await supabase.auth.signOut();

    window.location.href = "/login";
  }

  useEffect(() => {
    async function getProgress() {
      const supabase = createClient();

      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        return;
      }

      const { data } = await supabase
        .from("question_progress")
        .select("question_slug")
        .eq("user_id", user.id);

      setCompletedCount(data?.length || 0);
    }

    getProgress();
  }, []);

  const totalQuestions = javascriptQuestions.length;

  const progressPercentage =
    totalQuestions > 0
      ? Math.round((completedCount / totalQuestions) * 100)
      : 0;

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
            Dashboard
          </p>

          <h1 className="mt-3 text-4xl font-bold">
            Welcome to your dashboard
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            Your interview preparation journey starts here.
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-50"
        >
          Logout
        </button>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <div className="rounded-xl border p-6">
          <h2 className="text-xl font-semibold">
            JavaScript
          </h2>

          <p className="mt-2 text-gray-600">
            Practice JavaScript interview questions.
          </p>

          <a
            href="/javascript"
            className="mt-5 inline-block font-medium underline"
          >
            Start practicing →
          </a>
        </div>

        <div className="rounded-xl border p-6">
          <h2 className="text-xl font-semibold">
            Progress
          </h2>

          <p className="mt-2 text-3xl font-bold">
            {completedCount} / {totalQuestions}
          </p>

          <p className="mt-1 text-sm text-gray-500">
            questions completed
          </p>

          <div className="mt-5 h-2 w-full rounded-full bg-gray-200">
            <div
              className="h-2 rounded-full bg-black"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>

          <p className="mt-2 text-sm text-gray-500">
            {progressPercentage}% completed
          </p>
        </div>

        <div className="rounded-xl border p-6">
          <h2 className="text-xl font-semibold">
            Bookmarks
          </h2>

          <p className="mt-2 text-gray-600">
            Save important questions for later.
          </p>

          <a
            href="/dashboard/bookmarks"
            className="mt-5 inline-block font-medium underline"
          >
            View bookmarks →
          </a>
        </div>
      </div>
    </main>
  );
}