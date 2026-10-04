import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JS Interview Kit",
  description: "Prepare for JavaScript interviews with structured questions and answers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav className="border-b bg-white">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <a href="/" className="text-xl font-bold">
              JS Interview Kit
            </a>

            <div className="flex items-center gap-6 text-sm">
              <a href="/" className="text-gray-600 hover:text-black">
                Home
              </a>

              <a href="/javascript" className="text-gray-600 hover:text-black">
                JavaScript
              </a>

              <a
                href="/login"
                className="rounded-lg bg-black px-4 py-2 text-white"
              >
                Login
              </a>
            </div>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}