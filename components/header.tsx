"use client"

import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState, useEffect } from "react"
import Image from "next/image"
import { withBasePath } from "@/lib/config"

export function Header() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark")
    setIsDark(isDarkMode)
  }, [])

  const toggleDarkMode = () => {
    const newMode = !isDark
    setIsDark(newMode)
    if (newMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-4 transition-opacity hover:opacity-80">
          
          {/* Nuevo Logo (Izquierdo) */}
          <Image
            src={withBasePath("/images/MORELOS_011024.png")} // <-- Aquí cambias el nombre de tu nueva imagen
            alt="Logotipo Institucional Principal"
            width={190}
            height={50}
            className="h-11 w-auto object-contain"
            priority
          />

          {/* Línea Divisoria Color Arena Desierto */}
          <div 
            className="h-8 w-[2px]" 
            style={{ backgroundColor: '#E6D5B8' }} 
            aria-hidden="true"
          />

          {/* Logo Existente (Derecho) */}
          <Image
            src={withBasePath("/images/logo-finanzas.png")}
            alt="Secretaría de Administración y Finanzas"
            width={180}
            height={40}
            className="h-10 w-auto object-contain"
            priority
          />
          
        </Link>

        <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="rounded-full" aria-label="Toggle theme">
          {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
      </div>
    </header>
  )
}