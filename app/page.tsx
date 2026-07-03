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
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section con tu fondo personalizado y alineación izquierda */}
          <section 
            className="relative border-b overflow-hidden" 
            style={{ backgroundColor: '#181e08' }}
          >
            {/* Cambiamos el contenedor por un grid de dos columnas sin padding horizontal restrictivo a la derecha */}
            <div className="pl-4 sm:pl-6 md:pl-8 lg:pl-25 w-full flex flex-col md:flex-row items-center justify-between gap-8">
              
              {/* Bloque de texto a la izquierda con padding vertical */}
              <div className="max-w-3xl text-left py-16 md:py-24 pr-4 md:pr-0">
                <h1 className="mb-4 text-4xl font-quetzalli tracking-tight text-balance md:text-5xl lg:text-6xl text-white">
                  Unidad de Planeación del Estado de Morelos
                </h1>
                <p className="text-lg text-white/80 md:text-xl text-balance">
                  Aquí encontrarás información disponible para ti
                </p>
              </div>

              {/* Contenedor del Isotipo modificado */}
              <div className="w-full md:w-auto flex-1 flex justify-end items-stretch self-stretch overflow-hidden">
                <img 
                  src="/images/Isotipo.svg" 
                  alt="Isotipo" 
                  // h-full obliga a la imagen a medir el 100% del alto de la sección Hero, 
                  // sin importar si la pantalla es mediana, grande o extra grande.
                  // object-right pega el dibujo al extremo derecho absoluto.
                  className="h-full w-auto object-cover object-right ml-auto" 
                />
              </div>

            </div>
          </section>

        {/* Modules Grid */}
        <section className="container py-6 md:py-12">
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