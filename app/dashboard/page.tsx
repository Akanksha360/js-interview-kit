"use client";

import { createClient } from "@/lib/supabase/client";

export default function DashboardPage() {

  async function handleLogout() {
  const supabase = createClient();

    await supabase.auth.signOut();

    window.location.href = "/login";
  }

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

          <p className="mt-2 text-gray-600">
            Your progress will appear here.
          </p>
        </div>

        <div className="rounded-xl border p-6">
          <h2 className="text-xl font-semibold">
            Bookmarks
          </h2>

          <p className="mt-2 text-gray-600">
            Save important questions for later.
          </p>
        </div>
      </div>
    </main>
  );
}