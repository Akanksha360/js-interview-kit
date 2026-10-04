"use client";

import { FormEvent, useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleLogin(event: FormEvent) {
        event.preventDefault();

        setLoading(true);
        setMessage("");
        const supabase = createClient();

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            setMessage(error.message);
        } else {
            window.location.href = "/dashboard";
        }

        setLoading(false);
    }

    return (
        <main className="flex min-h-[calc(100vh-73px)] items-center justify-center bg-gray-50 px-6">
            <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                <h1 className="text-3xl font-bold">
                    Welcome back
                </h1>

                <p className="mt-2 text-gray-600">
                    Login to continue your interview preparation.
                </p>

                <form onSubmit={handleLogin} className="mt-8 space-y-5">
                    <div>
                        <label className="text-sm font-medium">
                            Email
                        </label>

                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            placeholder="you@example.com"
                            className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium">
                            Password
                        </label>

                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            placeholder="••••••••"
                            className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full rounded-lg bg-black px-4 py-3 font-medium text-white hover:bg-gray-800 disabled:opacity-50"
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>

                {message && (
                    <p className="mt-5 rounded-lg bg-gray-100 p-3 text-sm text-gray-700">
                        {message}
                    </p>
                )}

                <p className="mt-6 text-center text-sm text-gray-600">
                    Don't have an account?{" "}
                    <a href="/signup" className="font-medium text-black underline">
                        Create account
                    </a>
                </p>
            </div>
        </main>
    );
}