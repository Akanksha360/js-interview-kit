"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function Navbar() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const pathname = usePathname();

  useEffect(() => {
    const supabase = createClient();

    async function getUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      setUser(user);
      setLoading(false);
    }

    getUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  async function handleLogout() {
    const supabase = createClient();

    await supabase.auth.signOut();

    setUser(null);

    window.location.href = "/";
  }

  function isActive(path: string) {
    return pathname === path;
  }

  return (
    <nav className="border-b bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" className="text-xl font-bold">
          JS Interview Kit
        </a>

        <div className="flex items-center gap-3 text-sm">
          <a
            href="/"
            className={`rounded-lg px-4 py-2 ${isActive("/")
                ? "bg-black text-white"
                : "text-gray-600 hover:text-black"
              }`}
          >
            Home
          </a>

          <a
            href="/javascript"
            className={`rounded-lg px-4 py-2 ${isActive("/javascript")
                ? "bg-black text-white"
                : "text-gray-600 hover:text-black"
              }`}
          >
            JavaScript
          </a>

          <a
            href="/practice"
            className={`rounded-lg px-4 py-2 ${isActive("/practice")
                ? "bg-black text-white"
                : "text-gray-600 hover:text-black"
              }`}
          >
            Practice
          </a>

          {!loading && (
            <>
              {user ? (
                <>
                  <a
                    href="/dashboard"
                    className={`rounded-lg px-4 py-2 ${isActive("/dashboard")
                        ? "bg-black text-white"
                        : "text-gray-600 hover:text-black"
                      }`}
                  >
                    Dashboard
                  </a>

                  <button
                    onClick={handleLogout}
                    className="rounded-lg px-4 py-2 text-gray-600 hover:text-black"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <a
                    href="/login"
                    className={`rounded-lg px-4 py-2 ${isActive("/login")
                        ? "bg-black text-white"
                        : "text-gray-600 hover:text-black"
                      }`}
                  >
                    Login
                  </a>

                  <a
                    href="/signup"
                    className={`rounded-lg px-4 py-2 ${isActive("/signup")
                        ? "bg-black text-white"
                        : "text-gray-600 hover:text-black"
                      }`}
                  >
                    Sign Up
                  </a>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </nav>
  );
}