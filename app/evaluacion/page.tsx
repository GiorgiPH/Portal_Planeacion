import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"
import { NormativeLink } from "@/components/normative-link"
import { CicloPresupuestario } from "@/components/ciclo-presupuestario"
import { Calendar, FileText, ExternalLink, Target, AlertCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const evaluationTypes = ["Diseño", "Procesos", "Resultados", "Impacto", "Indicadores", "Estratégicas"]

const navigationCards = [
  {
    title: "Programa Anual de Evaluación",
    icon: Calendar,
    href: "https://transparencia.morelos.gob.mx/index.php/s/wTm6A83BCa9dmbC?dir=/PBR%20-%20SED/III.%20PROGRAMA%20ANUAL%20DE%20EVALUACIONES&editing=false&openfile=true",
  },
  {
    title: "Resultados de Evaluaciones",
    icon: Target,
    href: "https://transparencia.morelos.gob.mx/index.php/s/wTm6A83BCa9dmbC?dir=/PBR%20-%20SED/III.%20PROGRAMA%20ANUAL%20DE%20EVALUACIONES&editing=false&openfile=true",
  },
  {
    title: "Difusión de Evaluaciones (Formato CONAC)",
    icon: ExternalLink,
    href: "#",
  },
  {
    title: "Aspectos Susceptibles de Mejora",
    icon: AlertCircle,
    href: "https://transparencia.morelos.gob.mx/index.php/s/wTm6A83BCa9dmbC?dir=/PBR%20-%20SED/VI.%20ASPECTOS%20SUSCEPTIBLES%20DE%20MEJORA",
  },
  {
    title: "Términos de Referencia",
    icon: FileText,
    href: "#",
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
              <h2 className="mb-6 text-2xl font-semibold">Tipos de Evaluación</h2>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-wrap gap-3">
                    {evaluationTypes.map((type) => (
                      <Badge key={type} variant="secondary" className="px-4 py-2 text-sm font-medium">
                        {type}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
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
