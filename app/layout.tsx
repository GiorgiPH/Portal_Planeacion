import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { BASE_PATH } from "@/lib/config"

export const metadata: Metadata = {
  title: "Unidad de Planeación del Estado de Morelos",
  description:
    "Portal oficial de la Unidad de Planeación del Estado de Morelos - Información sobre planeación, presupuesto, seguimiento y evaluación",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: `${BASE_PATH}/favicon.ico`,
        media: "(prefers-color-scheme: light)",
      },
      {
        url: `${BASE_PATH}/favicon.ico`,
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: `${BASE_PATH}/favicon.ico`,
        type: "image/svg+xml",
      },
    ],
    apple: `${BASE_PATH}/apple-icon.png`,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
