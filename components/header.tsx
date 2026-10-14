"use client"

import Link from "next/link"
import Image from "next/image"
import { Home, Menu, X } from "lucide-react"
import { useState } from "react"
import { withBasePath } from "@/lib/config"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white shadow-sm">
      <div className="relative flex h-16 w-full items-center justify-between px-3 sm:h-20 sm:px-6 md:px-8 lg:h-24 lg:px-10 xl:px-14">
        <Link href="/" className="flex min-w-0 shrink items-center gap-2 transition-opacity hover:opacity-80 sm:gap-4">
          <Image
            src={withBasePath("/images/MORELOS_011024.png")}
            alt="Logotipo Institucional Principal"
            width={230}
            height={60}
            className="h-9 w-auto max-w-[5.5rem] object-contain sm:h-11 sm:max-w-none lg:h-14"
            priority
          />

          <div className="h-7 w-px shrink-0 bg-gray-200 sm:h-9" aria-hidden="true" />

          <Image
            src={withBasePath("/images/logo-finanzas.png")}
            alt="Secretaría de Administración y Finanzas"
            width={220}
            height={50}
            className="h-8 w-auto max-w-[6rem] object-contain sm:h-10 sm:max-w-none lg:h-12"
            priority
          />
        </Link>

        <div className="flex shrink-0 items-center gap-3 sm:gap-6 lg:pr-4">
          <Link
            href="/"
            className="hidden h-11 w-11 items-center justify-center rounded-full bg-[#EAEBD8] text-[#1E2B1C] transition-transform hover:scale-105 lg:flex"
            aria-label="Ir al menú principal"
          >
            <Home className="h-5 w-5" />
          </Link>

          <nav aria-label="Navegación principal" className="hidden items-center gap-8 lg:flex">
            <Link
              href="/presupuesto-participativo"
              className="text-sm font-medium text-[#1E2B1C] transition-colors hover:text-black"
            >
              ¿Sabes que es el Presupuesto Participativo?
            </Link>
            <Link
              href="/rendicion-de-cuentas"
              className="text-sm font-medium text-[#1E2B1C] transition-colors hover:text-black"
            >
              Rendición de Cuentas
            </Link>
          </nav>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-[#1E2B1C] transition-colors hover:bg-[#EAEBD8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E2B1C] lg:hidden"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Navegación principal"
          className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-gray-100 bg-white px-4 py-2 shadow-lg lg:hidden"
        >
          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className="block rounded-md px-3 py-3 font-medium text-[#1E2B1C] hover:bg-[#EAEBD8]"
          >
            Inicio
          </Link>
          <Link
            href="/planeacion"
            onClick={() => setIsMenuOpen(false)}
            className="block rounded-md px-3 py-3 font-medium text-[#1E2B1C] hover:bg-[#EAEBD8]"
          >
            Planeación
          </Link>
          <Link
            href="/programacion"
            onClick={() => setIsMenuOpen(false)}
            className="block rounded-md px-3 py-3 font-medium text-[#1E2B1C] hover:bg-[#EAEBD8]"
          >
            Programación
          </Link>
          <Link
            href="/presupuestacion"
            onClick={() => setIsMenuOpen(false)}
            className="block rounded-md px-3 py-3 font-medium text-[#1E2B1C] hover:bg-[#EAEBD8]"
          >
            Presupuestación
          </Link>
          <Link
            href="/seguimiento"
            onClick={() => setIsMenuOpen(false)}
            className="block rounded-md px-3 py-3 font-medium text-[#1E2B1C] hover:bg-[#EAEBD8]"
          >
            Seguimiento
          </Link>
          <Link
            href="/evaluacion"
            onClick={() => setIsMenuOpen(false)}
            className="block rounded-md px-3 py-3 font-medium text-[#1E2B1C] hover:bg-[#EAEBD8]"
          >
            Evaluación
          </Link>
          <Link
            href="/presupuesto-participativo"
            onClick={() => setIsMenuOpen(false)}
            className="block rounded-md px-3 py-3 font-medium text-[#1E2B1C] hover:bg-[#EAEBD8]"
          >
            Presupuesto Participativo
          </Link>
          <Link
            href="/rendicion-de-cuentas"
            onClick={() => setIsMenuOpen(false)}
            className="block rounded-md px-3 py-3 font-medium text-[#1E2B1C] hover:bg-[#EAEBD8]"
          >
            Rendición de Cuentas
          </Link>
        </nav>
      )}
    </header>
  )
}