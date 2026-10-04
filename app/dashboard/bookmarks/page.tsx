"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { javascriptQuestions } from "@/app/data/javascriptQuestions";

export default function BookmarksPage() {
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getBookmarks() {
      const supabase = createClient();

      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        window.location.href = "/login";
        return;
      }

      const { data } = await supabase
        .from("question_bookmarks")
        .select("question_slug")
        .eq("user_id", user.id);

      setBookmarks(
        data?.map((bookmark) => bookmark.question_slug) || []
      );

      setLoading(false);
    }

    getBookmarks();
  }, []);

  const bookmarkedQuestions = javascriptQuestions.filter((question) =>
    bookmarks.includes(question.slug)
  );

  if (loading) {
    return (
      <main className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-gray-500">
          Loading bookmarks...
        </p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <Link
        href="/dashboard"
        className="text-sm text-gray-500 hover:text-black hover:underline"
      >
        ← Back to Dashboard
      </Link>

      <div className="mt-8">
    
        <h1 className="mt-3 text-4xl font-bold">
          My Bookmarks
        </h1>

        <p className="mt-4 text-gray-600">
          Questions you saved for later.
        </p>
      </div>

      {bookmarkedQuestions.length === 0 ? (
        <div className="mt-10 rounded-xl border border-gray-200 p-8">
          <p className="text-gray-600">
            You haven't bookmarked any questions yet.
          </p>

          <Link
            href="/javascript"
            className="mt-4 inline-block font-medium underline"
          >
            Browse JavaScript questions →
          </Link>
        </div>
      ) : (
        <div className="mt-10 min-h-[200px] grid gap-6 md:grid-cols-2">
          {bookmarkedQuestions.map((question) => (
            <div
              key={question.slug}
              className="rounded-xl border border-gray-200 p-6"
            >
              <p className="text-sm text-gray-500">
                {question.category}
              </p>

              <h2 className="mt-2 text-xl font-semibold">
                {question.title}
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                {question.difficulty}
              </p>

              <Link
                href={`/javascript/${question.slug}`}
                className="mt-5 inline-block text-sm font-medium hover:underline"
              >
                View question →
              </Link>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}