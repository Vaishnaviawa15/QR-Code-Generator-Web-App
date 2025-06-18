"use client"

import { useEffect, forwardRef } from "react"

interface QRCodeGeneratorProps {
  url: string
  size: number
  pixelColor: string
  backgroundColor: string
  onGenerated: (dataUrl: string) => void
}

const QRCodeGenerator = forwardRef<HTMLCanvasElement, QRCodeGeneratorProps>(
  ({ url, size, pixelColor, backgroundColor, onGenerated }, ref) => {
    useEffect(() => {
      if (!url) return

      const generateQR = async () => {
        try {
          // Dynamic import to avoid SSR issues
          const QRCode = (await import("qrcode")).default

          const canvas = document.createElement("canvas")

          await QRCode.toCanvas(canvas, url, {
            width: size,
            margin: 2,
            color: {
              dark: pixelColor,
              light: backgroundColor,
            },
          })

          const dataUrl = canvas.toDataURL("image/png")
          onGenerated(dataUrl)

          // Update the ref canvas if it exists
          if (ref && typeof ref === "object" && ref.current) {
            const ctx = ref.current.getContext("2d")
            if (ctx) {
              ref.current.width = size
              ref.current.height = size
              ctx.drawImage(canvas, 0, 0)
            }
          }
        } catch (error) {
          console.error("Error generating QR code:", error)
        }
      }

      generateQR()
    }, [url, size, pixelColor, backgroundColor, onGenerated, ref])

    return (
      <div className="flex justify-center">
        <canvas
          ref={ref}
          className="border-2 border-gray-300 rounded-lg shadow-lg"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
    )
  },
)

QRCodeGenerator.displayName = "QRCodeGenerator"

export default QRCodeGenerator
