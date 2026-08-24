"use client"

import Link from "next/link"
import Image from "next/image"
import { Home } from "lucide-react"
import { withBasePath } from "@/lib/config"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white shadow-sm">
      <div className="w-full flex h-24 items-center justify-between px-3 sm:px-6 lg:px-10">
        
        {/* Lado Izquierdo: Logotipos institucionales pegados al borde */}
        <Link href="/" className="flex items-center gap-5 transition-opacity hover:opacity-80">
          <Image
            src={withBasePath("/images/MORELOS_011024.png")}
            alt="Logotipo Institucional Principal"
            width={230}
            height={60}
            className="h-14 w-auto object-contain"
            priority
          />

          <div className="h-10 w-[2px] bg-gray-200" aria-hidden="true" />

          <Image
            src={withBasePath("/images/logo-finanzas.png")}
            alt="Secretaría de Administración y Finanzas"
            width={220}
            height={50}
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>

        {/* Centro/Derecha: Botón de inicio (casa) y enlaces personalizados */}
        <div className="flex items-center gap-6 pr-4 sm:pr-8">
          
          {/* Botón de la casa para regresar al menú principal */}
          <Link 
            href="/" 
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#EAEBD8] text-[#1E2B1C] transition-transform hover:scale-105"
            aria-label="Ir al menú principal"
          >
            <Home className="h-5 w-5" />
          </Link>

          {/* Enlaces de navegación */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link 
              href="/presupuesto-participativo" 
              className="text-[#1E2B1C] font-medium text-sm transition-colors hover:text-black"
            >
              ¿Sabes que es el Presupuesto Participativo?
            </Link>

            <Link 
              href="/rendicion-de-cuentas" 
              className="text-[#1E2B1C] font-medium text-sm transition-colors hover:text-black"
            >
              Rendición de Cuentas
            </Link>
          </nav>
        </div>

      </div>
    </header>
  )
}