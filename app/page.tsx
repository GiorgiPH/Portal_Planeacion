import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ModuleCard } from "@/components/module-card"
import { withBasePath } from "@/lib/config"
import Image from "next/image"
import { Users, Wallet, Info, Target, Calendar, LineChart, ClipboardCheck, FileCheck, Building, BookOpen } from "lucide-react"

const modules = [
  {
    title: "Planeación",
    description: "1era etapa del ciclo de gestión para resultados, donde se definen objetivos, estrategias y metas",
    icon: BookOpen,
    href: "/planeacion",
  },
  
  /* 
  {
    title: "COPLADEMOR",
    description: "Comité de Planeación para el Desarrollo del Estado de Morelos",
    icon: Users,
    href: "/coplademor",
  }, 
  */

  {
    title: "Programación",
    description: "Definición de programas presupuestarios, actividades y metas",
    icon: Calendar,
    href: "/programacion",
  },  
  
  /*
  {
    title: "Presupuesto Participativo",
    description: "Consolidar la participación ciudadana en decisiones del poder público",
    icon: Wallet,
    href: "/presupuesto-participativo",
  },
  */

  {
    title: "Presupuestación",
    description: "Asignación de recursos públicos a programas y actividades para cumplir objetivos y metas",
    icon: Wallet,
    href: "/presupuestacion",
  },

  /* 
  {
    title: "Información Estratégica",
    description: "Marco normativo e información estadística del estado",
    icon: Info,
    href: "/informacion-estrategica",
  }, 
  */

  /* 
  {
    title: "Gestión para Resultados",
    description: "Enfoque en lograr resultados que mejoren la vida de la comunidad",
    icon: Target,
    href: "/gestion-para-resultados",
  }, 
  */
  
  {
    title: "Seguimiento",
    description: "Verificación del desempeño y seguimiento de indicadores",
    icon: LineChart,
    href: "/seguimiento",
  },
  {
    title: "Evaluación",
    description: "Elementos metodológicos para medir y mejorar programas públicos",
    icon: ClipboardCheck,
    href: "/evaluacion",
  },
  {
    title: "Rendición de Cuentas",
    description: "Dar cuentas del ejercicio de los recursos públicos",
    icon: FileCheck,
    href: "/rendicion-de-cuentas",
  },
  /*{
    title: "CCSEDE",
    description: "Comisión Coordinadora del Sistema de Evaluación del Desempeño Estatal",
    icon: Building,
    href: "/ccsede",
  },
  */
]

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-bg-surface-low">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-b-3xl lg:rounded-b-[2.5rem] bg-[#1E2B1C] shadow-xl w-full">
          {/* Contenedor principal que abarca todo el ancho */}
          <div className="relative w-full min-h-[450px] xl:min-h-[551px] flex items-center px-6 sm:px-12 md:px-16 lg:px-20 xl:px-28 py-16 xl:py-24">
            
            {/* 1. Bloque de texto alineado hacia la izquierda con más espacio */}
            <div className="relative z-30 w-full xl:w-7/12 max-w-4xl text-left">
              <h1 className="mb-4 text-3xl sm:text-4xl xl:text-6xl font-quetzalli tracking-tight text-balance text-content-inverse">
                Morelos con Gestión para Resultados 
              </h1>
              <p className="text-base sm:text-lg xl:text-xl text-balance font-medium text-content-inverse-low leading-relaxed">
                Conoce, consulta y da seguimiento a la planeación, programación, presupuestación, seguimiento, evaluación y la rendición de cuentas de las políticas y programas públicos del Estado de Morelos.
              </p>
            </div>

            {/* 2. Imagen de Preview comentada */}
            {/*
            <div className="hidden xl:flex absolute right-28 top-1/2 -translate-y-1/2 z-25 w-7/12 justify-end items-center pointer-events-none">
              <img
                src="/images/rgb_planeacion.jpeg"
                alt="Portal Planeación Preview"
                className="w-full max-w-2xl h-auto object-contain drop-shadow-2xl"
              />
            </div>
            */}

            {/* 3. Contenedor del Isotipo expandido desde el borde izquierdo hasta abarcar todo el fondo */}
            <div className="absolute inset-0 pointer-events-none flex justify-end overflow-hidden z-10">
              <img
                src={withBasePath("/images/Isotipo.svg")}
                alt="Isotipo"
                className="h-full w-auto max-w-none object-cover object-right opacity-30 xl:opacity-45 scale-125 translate-x-12"
              />
            </div>

          </div>
        </section>

        {/* Grid de Módulos */}
        <section className="container py-12 md:py-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {modules.map((module) => (
              <ModuleCard key={module.href} {...module} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}