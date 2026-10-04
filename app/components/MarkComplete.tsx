"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

type Props = {
  questionSlug: string;
};

export default function MarkComplete({ questionSlug }: Props) {
  const [completed, setCompleted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkProgress() {
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
        .select("id")
        .eq("user_id", user.id)
        .eq("question_slug", questionSlug)
        .maybeSingle();

      setCompleted(!!data);
      setLoading(false);
    }

    checkProgress();
  }, [questionSlug]);

  async function markComplete() {
    const supabase = createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      window.location.href = "/login";
      return;
    }

    const { error } = await supabase
      .from("question_progress")
      .insert({
        user_id: user.id,
        question_slug: questionSlug,
      });

    if (!error) {
      setCompleted(true);
    }
  }

  if (loading) {
    return null;
  }

  if (completed) {
    return (
      <div className="rounded-lg h-fit border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-medium">
        ✓ Completed
      </div>
    );
  }

  return (
    <button
      onClick={markComplete}
      className="rounded-lg h-fit bg-black px-5 py-3 text-sm font-medium text-white hover:bg-gray-800"
    >
      Mark as Completed
    </button>
  );
}