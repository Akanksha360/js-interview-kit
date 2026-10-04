"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

type Props = {
  questionSlug: string;
};

export default function BookmarkButton({ questionSlug }: Props) {
  const [bookmarked, setBookmarked] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkBookmark() {
      const supabase = createClient();

      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        setLoading(false);
        return;
      }

      const { data } = await supabase
        .from("question_bookmarks")
        .select("id")
        .eq("user_id", user.id)
        .eq("question_slug", questionSlug)
        .maybeSingle();

      setBookmarked(!!data);
      setLoading(false);
    }

    checkBookmark();
  }, [questionSlug]);

  async function toggleBookmark() {
    const supabase = createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      window.location.href = "/login";
      return;
    }

    if (bookmarked) {
      const { error } = await supabase
        .from("question_bookmarks")
        .delete()
        .eq("user_id", user.id)
        .eq("question_slug", questionSlug);

      if (!error) {
        setBookmarked(false);
      }

      return;
    }

    const { error } = await supabase
      .from("question_bookmarks")
      .insert({
        user_id: user.id,
        question_slug: questionSlug,
      });

    if (!error) {
      setBookmarked(true);
    }
  }

  if (loading) {
    return null;
  }

  return (
    <button
      onClick={toggleBookmark}
      className=" rounded-lg border border-gray-300 px-5 py-3 text-sm font-medium hover:bg-gray-50"
    >
      {bookmarked ? "🔖 Bookmarked" : "🔖 Bookmark"}
    </button>
  );
}