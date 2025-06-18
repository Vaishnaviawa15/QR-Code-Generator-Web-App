"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Info } from "lucide-react"

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 professional-card border-b">
      <div className="container mx-auto px-6">
        <div className="flex justify-center items-center h-16">
          <div className="flex space-x-8">
            <Link
              href="/"
              className={`flex items-center space-x-2 px-6 py-2 rounded-lg transition-all ${
                pathname === "/"
                  ? "professional-button text-white"
                  : "text-gray-700 hover:text-gray-900 hover:bg-white/50"
              }`}
            >
              <Home className="w-4 h-4" />
              <span className="font-medium italic">Home</span>
            </Link>

            <Link
              href="/about"
              className={`flex items-center space-x-2 px-6 py-2 rounded-lg transition-all ${
                pathname === "/about"
                  ? "professional-button text-white"
                  : "text-gray-700 hover:text-gray-900 hover:bg-white/50"
              }`}
            >
              <Info className="w-4 h-4" />
              <span className="font-medium italic">About</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
