import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"
import { NormativeLink } from "@/components/normative-link"
import { CicloPresupuestario } from "@/components/ciclo-presupuestario"
import { FileText, Users, BookOpen, MapPin, Scroll, ClipboardCheck } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const navigationCards = [
  {
    title: "PED 2025-2030",
    icon: FileText,
    href: "https://transparencia.morelos.gob.mx/index.php/s/wTm6A83BCa9dmbC?dir=/Planeaci%C3%B3n%20Estrat%C3%A9gica/I.%20PLAN%20ESTATAL%20DE%20DESARROLLO",
  },
  {
    title: "Programas Derivados del PED 2025-2030",
    icon: BookOpen,
    href: "https://transparencia.morelos.gob.mx/index.php/s/wTm6A83BCa9dmbC?dir=/Planeaci%C3%B3n%20Estrat%C3%A9gica/II.%20PROGRAMAS%20DERIVADOS%20DEL%20PLAN%20ESTATAL%20DE%20DESARROLLO%202019-2024",
  },
  {
    title: "Planes Municipales de Desarrollo",
    icon: MapPin,
    href: "https://transparencia.morelos.gob.mx/index.php/apps/files/files/20566?dir=/Secretar%C3%ADa%20de%20Administraci%C3%B3n%20y%20Finanzas/Planeaci%C3%B3n%20Estrat%C3%A9gica/PLANES%20MUNICIPALES%20PUBLICADOS%202025-2027",
  },
  {
    title: "Comité de Planeación para el Desarrollo del Estado de Morelos (COPLADEMOR) Subcomités Sectoriales",
    icon: Users,
    href: "#",
  },
  {
    title: "Actas de las Sesiones Plenarias del COPLADEMOR",
    icon: Scroll,
    href: "https://transparencia.morelos.gob.mx/index.php/s/wTm6A83BCa9dmbC?dir=/Planeaci%C3%B3n%20Estrat%C3%A9gica/V.%20ACTAS%20DE%20SESION%20DEL%20COPLADEMOR",
  },
  {
    title: "Evaluación al PED 2025-2030",
    icon: ClipboardCheck,
    href: "https://transparencia.morelos.gob.mx/index.php/s/wTm6A83BCa9dmbC?dir=/PBR%20-%20SED/IV.%20EVALUACION%20DEL%20PLAN%20ESTATAL%20DE%20DESARROLLO",
  },
]

/*const municipalities = [
  { name: "Cuernavaca", href: "https://cuernavaca.gob.mx/?p=9958" },
  { name: "Cuautla", href: "https://cuautla.gob.mx/wp-content/uploads/2025/06/01.-PMD-2025-2027_FINAL.pdf" },
  { name: "Emiliano Zapata", href: "https://zapatamorelos.gob.mx/plan-de-desarrollo-urbano/" },
  { name: "Temixco", href: "https://temixco.gob.mx/desarrollo-urbano/" },
  {
    name: "Tepoztlán",
    href: "http://marcojuridico.morelos.gob.mx/archivos/reglamentos_municipales/pdf/PLANMUNITEPOZMORE.pdf",
  },
] */

export default function CoplademorPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <div className="container py-8">
          <BreadcrumbNav items={[{ label: "COPLADEMOR" }]} />

          <div className="space-y-12">
            {/* Introduction */}
            <section>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance">
                Comité de Planeación para el Desarrollo del Estado de Morelos
              </h1>
              <div className="space-y-4">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Órgano del Poder Ejecutivo Estatal que se encarga de formular, actualizar, instrumentar y evaluar el
                  plan y los programas de desarrollo del estado. Su función principal es coordinar los esfuerzos de
                  planeación a nivel estatal, asegurando que los planes municipales se alineen con los estatales y
                  nacionales y fomentando la participación ciudadana en la toma de decisiones para el bienestar de la
                  población.
                </p>
                <CicloPresupuestario highlightStage="planeacion" />
              </div>
            </section>

            {/* Normative Framework */}
            <section>
              <h2 className="mb-6 text-2xl font-semibold">Marco Normativo</h2>
              <div className="space-y-3">
                <NormativeLink
                  title="Ley de Planeación para el Estado de Morelos"
                  href="http://marcojuridico.morelos.gob.mx/archivos/leyes/pdf/LPLANEACIONMO.pdf"
                />
                <NormativeLink
                  title="Reglamento del Comité de Planeación para el Desarrollo del Estado de Morelos"
                  href="http://marcojuridico.morelos.gob.mx/archivos/decretos_ejecutivo/pdf/DCPLANDESMOR.pdf"
                />
              </div>
            </section>

            {/* Navigation Cards */}
            <section>
              <h2 className="mb-6 text-2xl font-semibold">Recursos y Documentos</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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

            {/*}
            <section>
              <h2 className="mb-6 text-2xl font-semibold">Planes Municipales de Desarrollo</h2>
              <Card>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {municipalities.map((municipality) => (
                      <li key={municipality.name}>
                        
                          href={municipality.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 text-sm text-primary hover:underline"
                        >
                          <MapPin className="h-4 w-4 shrink-0" />
                          <span>{municipality.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </section>
            */}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}


