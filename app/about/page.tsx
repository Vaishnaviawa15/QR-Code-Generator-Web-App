import Navigation from "@/components/navigation"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen relative">
      <Navigation />

      <main className="container mx-auto px-6 pt-24 pb-16 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-800 mb-6 italic">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Generator
            </Link>
            <h1 className="text-3xl font-bold mb-4 gradient-text italic">About</h1>
          </div>

          <div className="professional-card rounded-lg p-8 mb-12">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-rose-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">👋</span>
              </div>
            </div>
            <p className="text-lg text-gray-800 leading-relaxed italic text-center">
              This is a professional QR code generator designed for businesses and individuals who need high-quality,
              customizable QR codes. The tool offers various color combinations and sizes to meet different branding and
              use case requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="professional-card p-6 rounded-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl text-white">⚡</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-3 italic text-lg">Fast & Reliable</h3>
              <p className="text-gray-600 text-sm italic leading-relaxed">
                Generate professional QR codes instantly with reliable performance and consistent quality output.
              </p>
            </div>

            <div className="professional-card p-6 rounded-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl text-white">🎯</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-3 italic text-lg">Business Ready</h3>
              <p className="text-gray-600 text-sm italic leading-relaxed">
                Designed with professional use cases in mind, offering customization options suitable for business
                needs.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
