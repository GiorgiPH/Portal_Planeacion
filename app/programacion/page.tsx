import { Calendar } from "@/components/ui/calendar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"
import { NormativeLink } from "@/components/normative-link"
import { CicloPresupuestario } from "@/components/ciclo-presupuestario"
import { BookOpen, PenTool as Tool, FileText } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const navigationCards = [
  {
    title: "Catálogo de PPs",
    icon: BookOpen,
    href: "https://transparencia.morelos.gob.mx/index.php/s/wTm6A83BCa9dmbC?dir=/PBR%20-%20SED/VII.%20EVALUACIONES%20A%20PROGRAMAS%20PRESUPUESTARIOS/2024",
  },
  {
    title: "Instrumentos metodológicos",
    icon: Tool,
    href: "https://transparencia.morelos.gob.mx/index.php/s/wTm6A83BCa9dmbC?dir=/PBR%20-%20SED/VII.%20EVALUACIONES%20A%20PROGRAMAS%20PRESUPUESTARIOS/2024",
  },
  {
    title: "Presupuesto de Egresos",
    icon: FileText,
    href: "http://marcojuridico.morelos.gob.mx/archivos/decretos_legislativo/pdf/PEGRESOSEDOMOR2025.pdf",
  },
]

export default function ProgramacionPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <div className="container py-8">
          <BreadcrumbNav items={[{ label: "Programación" }]} />

          <div className="space-y-12">
            {/* Introduction */}
            <section>
              <h1 className="mb-6 text-4xl font-bold tracking-tight">Programación</h1>
              <div className="space-y-4">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  La programación es la segunda etapa del ciclo presupuestario, que sigue a la planeación y consiste en
                  definir los programas presupuestarios, las actividades, metas y recursos necesarios para cumplir con
                  los objetivos del gobierno.
                </p>
                <CicloPresupuestario highlightStage="programacion" />
              </div>
            </section>

            {/* Normative Framework */}
            <section>
              <h2 className="mb-6 text-2xl font-semibold">Marco Normativo</h2>
              <div className="space-y-3">
                <NormativeLink
                  title="Constitución Política de los Estados Unidos Mexicanos"
                  href="https://www.diputados.gob.mx/LeyesBiblio/pdf/CPEUM.pdf"
                />
                <NormativeLink
                  title="Constitución Política del Estado Libre y Soberano de Morelos"
                  href="http://marcojuridico.morelos.gob.mx/archivos/constitucion/pdf/CONSTMOR.pdf"
                />
                <NormativeLink
                  title="Ley Federal de Presupuesto y Responsabilidad Hacendaria"
                  href="https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPRH.pdf"
                />
                <NormativeLink
                  title="Ley de Planeación para el Estado de Morelos"
                  href="http://marcojuridico.morelos.gob.mx/archivos/leyes/pdf/LPLANEACIONMO.pdf"
                />
                <NormativeLink
                  title="Ley de Presupuesto, Contabilidad y Gasto Público del Estado de Morelos"
                  href="http://marcojuridico.morelos.gob.mx/archivos/leyes/pdf/LPGASTOPEM.pdf"
                />
              </div>
            </section>

            {/* Budget Program */}
            <section>
              <h2 className="mb-6 text-2xl font-semibold">Programa Presupuestario</h2>
              <Card className="mb-6">
                <CardContent className="pt-6">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Un PP es la categoría que permite organizar en forma representativa y homogénea las asignaciones de
                    los recursos y gastos públicos para el cumplimiento de los objetivos y metas.
                  </p>
                </CardContent>
              </Card>

              <div className="grid gap-4 sm:grid-cols-3">
                {navigationCards.map((card) => (
                  <a key={card.title} href={card.href} target="_blank" rel="noopener noreferrer" className="group">
                    <Card className="h-full cursor-pointer transition-all hover:shadow-lg hover:border-primary/50">
                      <CardHeader>
                        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <card.icon className="h-6 w-6" />
                        </div>
                        <CardTitle className="text-base text-balance">{card.title}</CardTitle>
                      </CardHeader>
                    </Card>
                  </a>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
