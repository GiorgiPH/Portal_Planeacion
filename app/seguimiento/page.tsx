import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"
import { NormativeLink } from "@/components/normative-link"
import { CicloPresupuestario } from "@/components/ciclo-presupuestario"
import { FileText, Clock, Database } from "lucide-react"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"

const navigationCards = [
  {
    title: "Reportes Trimestrales de PPs 2025",
    icon: FileText,
    href: "https://transparencia.morelos.gob.mx/index.php/s/wTm6A83BCa9dmbC?dir=/PBR%20-%20SED/VII.%20EVALUACIONES%20A%20PROGRAMAS%20PRESUPUESTARIOS",
  },
  {
    title: "Reportes Trimestrales de PPs (Históricos)",
    icon: Clock,
    href: "https://transparencia.morelos.gob.mx/index.php/s/wTm6A83BCa9dmbC?dir=/PBR%20-%20SED/VII.%20EVALUACIONES%20A%20PROGRAMAS%20PRESUPUESTARIOS",
  },
  {
    title: "Reporte del Sistema de Recursos Federales Transferidos (SRFT - Módulo Indicadores)",
    icon: Database,
    href: "https://transparencia.morelos.gob.mx/index.php/s/wTm6A83BCa9dmbC?dir=/Informaci%C3%B3n%20especifica%20de%20Transparencia/Informes%20Trimestrales%2C%20Reportados%20en%20el%20Sistema%20de%20Recursos%20Federales%20Transferidos%20%28SRFT%29",
  },
  /*{
    title: "Reporte del SRFT (Módulo Indicadores) Histórico",
    icon: Clock,
    href: "https://transparencia.morelos.gob.mx/index.php/s/wTm6A83BCa9dmbC?dir=/PBR%20-%20SED/VII.%20EVALUACIONES%20A%20PROGRAMAS%20PRESUPUESTARIOS",
  },*/
]

export default function SeguimientoPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <div className="container py-8">
          <BreadcrumbNav items={[{ label: "Seguimiento" }]} />

          <div className="space-y-12">
            {/* Introduction */}
            <section>
              <h1 className="mb-6 text-4xl font-bold tracking-tight">Seguimiento</h1>
              <div className="space-y-4">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  El seguimiento es la etapa del ciclo presupuestario enfocada en la verificación del desempeño y el
                  seguimiento de indicadores a través de la Matriz de Indicadores para Resultados (MIR).
                </p>
                <CicloPresupuestario highlightStage="seguimiento" />
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

            {/* Reports */}
            <section>
              <h2 className="mb-6 text-2xl font-semibold">Reportes y Documentos</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 justify-items-center max-w-5xl mx-auto">
                {navigationCards.map((card) => (
                  <a key={card.title} href={card.href} target="_blank" rel="noopener noreferrer" className="group w-full">
                    <Card className="h-full cursor-pointer transition-all hover:shadow-lg hover:border-primary/50">
                      <CardHeader>
                        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <card.icon className="h-6 w-6" />
                        </div>
                        <CardTitle className="text-sm text-balance">{card.title}</CardTitle>
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
