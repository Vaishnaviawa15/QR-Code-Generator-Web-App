"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Navigation from "@/components/navigation"

export default function HomePage() {
  const [link, setLink] = useState("")
  const router = useRouter()

  const handleGenerate = () => {
    if (link.trim()) {
      router.push(`/generate?url=${encodeURIComponent(link)}`)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleGenerate()
    }
  }

  return (
    <div className="min-h-screen relative">
      <Navigation />

      <main className="container mx-auto px-6 pt-32 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text italic">QR Code Generator</h1>
            <p className="text-xl text-gray-700 mb-12 italic max-w-2xl mx-auto">
              Create professional QR codes for your business needs with customizable colors and sizes
            </p>
          </div>

          <div className="max-w-2xl mx-auto mb-20">
            <div className="professional-card rounded-lg p-6">
              <label className="block text-sm font-semibold text-gray-700 mb-3 italic">Enter URL</label>
              <div className="relative">
                <Input
                  type="url"
                  placeholder="https://example.com"
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="professional-input pr-16 h-14 text-lg rounded-lg"
                />
                <Button
                  onClick={handleGenerate}
                  disabled={!link.trim()}
                  className="professional-button absolute right-2 top-2 h-10 w-12 rounded-md p-0"
                >
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="professional-card p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">🎨</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-3 italic text-lg">Color Customization</h3>
              <p className="text-gray-600 text-sm italic leading-relaxed">
                Choose from professionally curated color combinations to match your brand
              </p>
            </div>

            <div className="professional-card p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">📏</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-3 italic text-lg">Multiple Sizes</h3>
              <p className="text-gray-600 text-sm italic leading-relaxed">
                Generate QR codes in small, medium, or large sizes for different use cases
              </p>
            </div>

            <div className="professional-card p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">⬇️</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-3 italic text-lg">Instant Download</h3>
              <p className="text-gray-600 text-sm italic leading-relaxed">
                Download high-quality PNG files ready for print or digital use
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
