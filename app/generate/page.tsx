"use client"

import { useState, useEffect, useRef } from "react"
import { useSearchParams } from "next/navigation"
import { Download, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"
import QRCodeGenerator from "@/components/qr-generator"
import { colorOptions, sizeOptions } from "@/components/color-options"
import Link from "next/link"

const GeneratePage = () => {
  const searchParams = useSearchParams()
  const [url, setUrl] = useState("")
  const [selectedColor, setSelectedColor] = useState(colorOptions[0])
  const [selectedSize, setSelectedSize] = useState(sizeOptions[1])
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState("")
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const urlParam = searchParams.get("url")
    if (urlParam) {
      setUrl(decodeURIComponent(urlParam))
    }
  }, [searchParams])

  const handleDownload = () => {
    if (qrCodeDataUrl) {
      const link = document.createElement("a")
      link.download = "qrcode.png"
      link.href = qrCodeDataUrl
      link.click()
    }
  }

  return (
    <div className="min-h-screen relative">
      <Navigation />

      <main className="container mx-auto px-6 pt-24 pb-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-800 mb-6 italic">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Generator
            </Link>
            <h1 className="text-3xl font-bold mb-4 gradient-text italic">Customize Your QR Code</h1>
            <p className="text-gray-700 italic">
              {url && `URL: ${url.length > 80 ? url.substring(0, 80) + "..." : url}`}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Color Selection */}
            <div className="professional-card rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-6 italic">Color Options</h3>
              <div className="space-y-3">
                {colorOptions.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedColor(color)}
                    className={`option-card w-full p-4 rounded-lg transition-all ${
                      selectedColor.name === color.name ? "selected-option" : ""
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-800 italic">{color.name}</span>
                      <div className="flex gap-2">
                        <div
                          className="w-6 h-6 rounded border-2 border-gray-300"
                          style={{ backgroundColor: color.pixel }}
                        />
                        <div
                          className="w-6 h-6 rounded border-2 border-gray-300"
                          style={{ backgroundColor: color.background }}
                        />
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="professional-card rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-6 italic">Size Options</h3>
              <div className="space-y-3">
                {sizeOptions.map((size, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedSize(size)}
                    className={`option-card w-full p-4 rounded-lg transition-all ${
                      selectedSize.name === size.name ? "selected-option" : ""
                    }`}
                  >
                    <div className="text-center">
                      <div className="font-medium text-gray-800 italic">{size.name}</div>
                      <div className="text-sm text-gray-600 italic">
                        {size.value} × {size.value} pixels
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* QR Code Preview */}
            <div className="professional-card rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-6 italic text-center">Preview</h3>

              <div className="flex flex-col items-center space-y-6">
                {url && (
                  <div className="bg-white p-4 rounded-lg shadow-sm border">
                    <QRCodeGenerator
                      url={url}
                      size={selectedSize.value}
                      pixelColor={selectedColor.pixel}
                      backgroundColor={selectedColor.background}
                      onGenerated={setQrCodeDataUrl}
                      ref={canvasRef}
                    />
                  </div>
                )}

                <Button
                  onClick={handleDownload}
                  disabled={!qrCodeDataUrl}
                  className="professional-button w-full py-3 font-semibold italic"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download QR Code
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default GeneratePage
