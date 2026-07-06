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
    // Color Hueso/Arena (#ECEBE6) aplicado como fondo base
    <div className="flex min-h-screen flex-col" style={{ backgroundColor: '#ECEBE6' }}>
      <Header />

      <main className="flex-1">
        {/* Hero Section: Ahora limpio de la cenefa absoluta para que luzca el Isotipo completo */}
        <section
          className="relative overflow-hidden"
          style={{ backgroundColor: '#2E3B2B' }}
        >
          {/* Contenedor principal */}
          <div className="relative w-full min-h-[350px] md:min-h-[450px] flex items-center justify-center px-4 sm:px-6 md:px-8 py-16 md:py-24">
            
            {/* Bloque de texto */}
            <div className="relative z-10 w-full max-w-3xl text-center">
              <h1 className="mb-4 text-4xl font-quetzalli tracking-tight text-balance md:text-5xl lg:text-6xl text-white">
                Unidad de Planeación del Estado de Morelos
              </h1>
              <p className="text-lg md:text-xl text-balance font-medium" style={{ color: '#CBCABE' }}>
                Aquí encontrarás información disponible para ti
              </p>
            </div>

            {/* Contenedor del Isotipo: Ya no se tapa con nada */}
            <div className="absolute right-0 top-0 bottom-0 h-full w-full sm:w-1/2 pointer-events-none flex justify-end overflow-hidden">
              <img
                src="/images/Isotipo.svg"
                alt="Isotipo"
                className="h-full w-auto object-cover object-right opacity-30 md:opacity-50"
              />
            </div>

          </div>
        </section>

        {/* CONTENEDOR DE LA CENEFA PNG (FUERA DEL HERO) */}
        {/* Al estar en el flujo normal, se sienta justo debajo del bloque verde y encima de los módulos */}
        <div className="w-full h-4 sm:h-6 pointer-events-none overflow-hidden">
          <img 
            src="/images/Cenefa.png" 
            alt="Cenefa Institucional" 
            className="w-full h-full object-cover object-top" 
          />
        </div>

        {/* Grid de Módulos */}
        <section className="container py-12 md:py-16">
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