import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faDiscord, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faStar } from "@fortawesome/free-solid-svg-icons";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gumroad UI",
  description: "A collection of components and templates for Gumroad's UI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        {/* Top Navigation Bar */}
        <header className="bg-white shadow-sm border-b border-gray-200 fixed top-0 left-0 right-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
            {/* Left Side: Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-lg font-bold text-gray-900 flex items-center mr-10">
                Gumroad UI
                <span className="ml-2 text-xs font-medium text-gray-600 bg-gray-100 rounded-full px-2 py-0.5">Beta</span>
              </Link>
            </div>

            {/* Center: Links */}
            <nav className="flex-grow flex justify-center space-x-4">
              {/* Add your navigation links here */}
            </nav>

            {/* Right Side: Search, Icons, and GitHub Star */}
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/your-repo"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 text-white px-3 py-2 rounded-md flex items-center space-x-1 hover:bg-gray-800"
              >
                <FontAwesomeIcon icon={faStar} className="w-4 h-4" />
                <span>Star on GitHub</span>
              </a>
              <input
                type="text"
                placeholder="Search documentation..."
                className="border border-gray-300 rounded-md px-3 py-2 text-sm w-64"
              />
              <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
              </a>
              <button className="text-gray-600 hover:text-gray-900">
                <FontAwesomeIcon icon={faTwitter} className="w-5 h-5" />
              </button>
            </div>
          </div>
        </header>

        {/* Main Content with Sidebar */}
        <div className="flex pt-16">
          <aside className="w-64 h-screen bg-white border-r border-gray-200 overflow-y-auto">
            <nav className="p-4">
              <div className="mb-8">
                <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Getting Started</h2>
                <ul className="mt-2 space-y-2">
                  <li>
                    <Link href="/" className="block text-sm text-gray-600 hover:text-gray-900">
                      Introduction
                    </Link>
                  </li>
                  <li>
                    <Link href="/installation" className="block text-sm text-gray-600 hover:text-gray-900">
                      Installation
                    </Link>
                  </li>
                  <li>
                    <Link href="/cli" className="block text-sm text-gray-600 hover:text-gray-900">
                      CLI
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Components</h2>
                <ul className="mt-2 space-y-2">
                  <li>
                    <Link href="/button/" className="block text-sm text-gray-600 hover:text-gray-900">
                      Buttons
                    </Link>
                  </li>
                  <li>
                    <Link href="/alert/" className="block text-sm text-gray-600 hover:text-gray-900">
                      Alert
                    </Link>
                  </li>
                  {/* Add more component links as needed */}
                </ul>
              </div>
            </nav>
          </aside>

          <main className="flex-1 p-10 overflow-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}