import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"
import { NormativeLink } from "@/components/normative-link"
import { CicloPresupuestario } from "@/components/ciclo-presupuestario"
import { Calendar, FileText, ExternalLink, Target, AlertCircle, CheckCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const evaluationTypes = [
  { name: "Diseño", description: "Análisis inicial de la estructura del programa" },
  { name: "Procesos", description: "Evaluación de la implementación operativa" },
  { name: "Resultados", description: "Medición de los logros obtenidos" },
  { name: "Impacto", description: "Análisis del cambio generado a largo plazo" },
  { name: "Indicadores", description: "Seguimiento de variables clave" },
  { name: "Estratégicas", description: "Evaluación de orientación y pertinencia" },
]

const navigationCards = [
  {
    title: "Programa Anual de Evaluación",
    icon: Calendar,
    href: "https://transparencia.morelos.gob.mx/index.php/s/wTm6A83BCa9dmbC?dir=/PBR%20-%20SED/III.%20PROGRAMA%20ANUAL%20DE%20EVALUACIONES&editing=false&openfile=true",
  },
  {
    title: "Resultados de Evaluaciones",
    icon: Target,
    href: "https://transparencia.morelos.gob.mx/index.php/s/wTm6A83BCa9dmbC?dir=/PBR%20-%20SED/VII.%20EVALUACIONES%20A%20PROGRAMAS%20PRESUPUESTARIOS",
  },
  {
    title: "Difusión de Evaluaciones (Formato CONAC)",
    icon: ExternalLink,
    href: "https://transparencia.morelos.gob.mx/index.php/s/wTm6A83BCa9dmbC?dir=/PBR%20-%20SED/V.%20EVALUACIONES%20DE%20DESEMPE%C3%91O",
  },
  {
    title: "Aspectos Susceptibles de Mejora",
    icon: AlertCircle,
    href: "https://transparencia.morelos.gob.mx/index.php/s/wTm6A83BCa9dmbC?dir=/PBR%20-%20SED/VI.%20ASPECTOS%20SUSCEPTIBLES%20DE%20MEJORA",
  },
  {
    title: "Términos de Referencia",
    icon: FileText,
    href: "https://transparencia.morelos.gob.mx/index.php/s/wTm6A83BCa9dmbC?dir=/T%C3%A9rminos%20de%20Referencia",
  },
]

export default function EvaluacionPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <div className="container py-8">
          <BreadcrumbNav items={[{ label: "Evaluación" }]} />

          <div className="space-y-12">
            {/* Introduction */}
            <section>
              <h1 className="mb-6 text-4xl font-bold tracking-tight">Evaluación</h1>
              <div className="space-y-4">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  La evaluación es la etapa del ciclo presupuestario que proporciona elementos metodológicos para medir
                  y mejorar programas y políticas públicas, permitiendo verificar el cumplimiento de objetivos y el uso
                  eficiente de los recursos.
                </p>
                <CicloPresupuestario highlightStage="evaluacion" />
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

            {/* Evaluation Types */}
            <section>
              <h2 className="mb-8 text-2xl font-semibold">Tipos de Evaluación</h2>
              <div className="relative">
                <div className="flex items-start justify-between gap-2 overflow-x-auto pb-4">
                  {evaluationTypes.map((type, index) => (
                    <div key={type.name} className="flex flex-col items-center flex-shrink-0" style={{ width: "160px" }}>
                      {/* Timeline dot */}
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground flex-shrink-0 z-10 relative">
                        <span className="text-sm font-bold">{index + 1}</span>
                      </div>

                      {/* Content card */}
                      <Card className="mt-4 w-full transition-all hover:shadow-md hover:border-primary/50">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm text-center">{type.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-xs text-muted-foreground text-center">{type.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
                
                {/* Horizontal connecting line */}
                <div className="absolute top-5 left-0 right-0 h-1 bg-primary/20 -z-10" style={{ height: "2px" }}></div>
              </div>
            </section>

            {/* Navigation Cards */}
            <section>
              <h2 className="mb-6 text-2xl font-semibold">Documentos y Recursos</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {navigationCards.map((card) => (
                  <a key={card.title} href={card.href} target="_blank" rel="noopener noreferrer" className="group">
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
