import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { BASE_PATH } from "@/lib/config"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Unidad de Planeación del Estado de Morelos",
  description:
    "Portal oficial de la Unidad de Planeación del Estado de Morelos - Información sobre planeación, presupuesto, seguimiento y evaluación",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: `${BASE_PATH}/icon-light-32x32.png`,
        media: "(prefers-color-scheme: light)",
      },
      {
        url: `${BASE_PATH}/icon-dark-32x32.png`,
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: `${BASE_PATH}/icon.svg`,
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
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
