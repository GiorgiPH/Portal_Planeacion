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
        {/* Hero Section */}
        <section className="border-b bg-gradient-to-b from-muted/30 to-background">
          <div className="container py-16 md:py-24">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-4 text-4xl font-bold tracking-tight text-balance md:text-5xl lg:text-6xl">
                Unidad de Planeación del Estado de Morelos
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl text-balance">
                Aquí encontrarás información disponible para ti
              </p>
            </div>
          </div>
        </section>

        {/* Modules Grid */}
        <section className="container py-8 md:py-12">
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
