import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ModuleCard } from "@/components/module-card"
import { Users, Wallet, Info, Target, Calendar, LineChart, ClipboardCheck, FileCheck, Building } from "lucide-react"

const modules = [
  {
    title: "COPLADEMOR",
    description: "Comité de Planeación para el Desarrollo del Estado de Morelos",
    icon: Users,
    href: "/coplademor",
  },
  {
    title: "Presupuesto Participativo",
    description: "Consolidar la participación ciudadana en decisiones del poder público",
    icon: Wallet,
    href: "/presupuesto-participativo",
  },
  {
    title: "Información Estratégica",
    description: "Marco normativo e información estadística del estado",
    icon: Info,
    href: "/informacion-estrategica",
  },
  {
    title: "Gestión para Resultados",
    description: "Enfoque en lograr resultados que mejoren la vida de la comunidad",
    icon: Target,
    href: "/gestion-para-resultados",
  },
  {
    title: "Programación",
    description: "Definición de programas presupuestarios, actividades y metas",
    icon: Calendar,
    href: "/programacion",
  },
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
  {
    title: "CCSEDE",
    description: "Comisión Coordinadora del Sistema de Evaluación del Desempeño Estatal",
    icon: Building,
    href: "/ccsede",
  },
]

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-bg-surface-low">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-b-3xl lg:rounded-b-[2.5rem] bg-[#1E2B1C] shadow-xl w-full">
          {/* Contenedor principal */}
          <div className="relative w-full min-h-[450px] md:min-h-[551px] flex items-center justify-between px-6 sm:px-10 md:px-16 py-16 md:py-24">
            
            {/* 1. Bloque de texto a la izquierda con mayor amplitud */}
            <div className="relative z-30 w-full max-w-3xl text-left ml-2 sm:ml-6 md:ml-12">
              <h1 className="mb-4 text-4xl font-quetzalli tracking-tight text-balance text-content-inverse md:text-5xl lg:text-6xl">
                Morelos Planea 
              </h1>
              <p className="text-lg md:text-xl text-balance font-medium text-content-inverse-low">
                Conoce, consulta y da seguimiento a la planeación, programación, presupuesto, seguimiento y evaluación de los programas públicos del Estado de Morelos.
              </p>
            </div>

            {/* 2. Imagen de Preview más desplazada hacia la izquierda */}
            <div className="hidden lg:flex absolute right-28 top-1/2 -translate-y-1/2 z-20 w-7/12 justify-end items-center pointer-events-none">
              <img
                src="/images/portal_planeacion.png"
                alt="Portal Planeación Preview"
                className="w-full max-w-2xl h-auto object-contain drop-shadow-2xl"
              />
            </div>

            {/* 3. Contenedor del Isotipo al fondo (atrás) */}
            <div className="absolute right-0 top-0 bottom-0 h-full w-full sm:w-1/2 pointer-events-none flex justify-end overflow-hidden z-10">
              <img
                src="/images/Isotipo.svg"
                alt="Isotipo"
                className="h-full w-auto object-cover object-right opacity-20 md:opacity-40"
              />
            </div>

          </div>
        </section>

        {/* Grid de Módulos */}
        <section className="container py-12 md:py-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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