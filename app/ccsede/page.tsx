import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"
import { NormativeLink } from "@/components/normative-link"
import { Building, Users, Scroll, FileText, Camera } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const purposes = [
  "I. Cooordinar la implementación del Sistema de Evaluación del Desempeño",
  "II. Establecer los lineamientos para el seguimiento de programas y proyectos",
  "III. Emitir disposiciones para el Sistema de Evaluación del Desempeño",
  "IV. Aprobar el Programa Anual de Evaluación",
  "V. Dar seguimiento a los aspectos susceptibles de mejora",
  "VI. Promover la transparencia y rendición de cuentas",
  "VII. Impulsar la mejora continua de programas presupuestarios",
]

const members = [
  { role: "Presidente", entity: "Titular del Poder Ejecutivo" },
  { role: "Secretario Técnico", entity: "Secretaría de Administración y Finanzas" },
  { role: "Vocal", entity: "Secretaría de Bienestar a través del CONEVAL" },
  { role: "Vocal", entity: "Secretaría de la Contraloría" },
]

const invitees = [
  "Subsecretaría de Egresos",
  "Subsecretaría de Administración",
  "Dirección General de Planeación Participativa e Información Estratégica",
  "Dirección General de Seguimiento y Evaluación",
  "Agencia de Transformación Digital",
]

const navigationCards = [
  {
    title: "Actas de Sesiones",
    icon: Scroll,
    href: "https://www.morelos.gob.mx/ultimas-noticias/inician-trabajos-de-la-comision-coordinadora-del-sistema-de-evaluacion-del-desempeno-estatal",
  },
  {
    title: "Acuerdos",
    icon: FileText,
    href: "https://www.morelos.gob.mx/ultimas-noticias/avanza-morelos-en-la-implementacion-del-presupuesto-basado-en-resultados-y-el-sistema-de-evaluacion-del-desempeno",
  },
  {
    title: "Fotogalería",
    icon: Camera,
    href: "https://www.morelos.gob.mx/ultimas-noticias/aprueba-gobierno-de-morelos-programa-anual-de-trabajo-de-la-comision-del-sede-2025",
  },
]

export default function CcsedePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <div className="container py-8">
          <BreadcrumbNav items={[{ label: "CCSEDE" }]} />

          <div className="space-y-12">
            {/* Introduction */}
            <section>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance">
                Comisión Coordinadora del Sistema de Evaluación del Desempeño Estatal
              </h1>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Instancia colegiada responsable de coordinar y supervisar la implementación del Sistema de Evaluación
                del Desempeño en el Estado de Morelos, promoviendo la mejora continua de la gestión pública mediante la
                evaluación de programas y políticas gubernamentales.
              </p>
            </section>

            {/* Purposes */}
            <section>
              <h2 className="mb-6 text-2xl font-semibold">Fines de la Comisión</h2>
              <Card>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {purposes.map((purpose, index) => (
                      <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <Badge variant="outline" className="shrink-0 mt-0.5">
                          {index + 1}
                        </Badge>
                        <span className="leading-relaxed">{purpose}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* Members */}
            <section>
              <h2 className="mb-6 text-2xl font-semibold">Integrantes</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Users className="h-5 w-5" />
                      </div>
                      <CardTitle className="text-lg">Integrantes Oficiales</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {members.map((member, index) => (
                        <li key={index} className="text-sm">
                          <span className="font-medium text-foreground">{member.role}:</span>{" "}
                          <span className="text-muted-foreground">{member.entity}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10 text-secondary-foreground">
                        <Building className="h-5 w-5" />
                      </div>
                      <CardTitle className="text-lg">Invitados Permanentes</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {invitees.map((invitee, index) => (
                        <li key={index} className="text-sm text-muted-foreground leading-relaxed">
                          • {invitee}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Normative Framework */}
            <section>
              <h2 className="mb-6 text-2xl font-semibold">Marco Normativo</h2>
              <div className="space-y-3">
                <NormativeLink
                  title="Ley de Presupuesto, Contabilidad y Gasto Público del Estado de Morelos"
                  href="http://marcojuridico.morelos.gob.mx/archivos/leyes/pdf/LPGASTOPEM.pdf"
                />
                <NormativeLink
                  title="Acuerdo por el que se crea y regula la Comisión Coordinadora del Sistema de Evaluación del Desempeño Estatal"
                  href="https://www.gob.mx/shcp/documentos/acuerdo-por-el-que-se-establecen-las-disposiciones-generales-del-sistema-de-evaluacion-del-desempeno"
                />
              </div>
            </section>

            {/* Information */}
            <section>
              <h2 className="mb-6 text-2xl font-semibold">Información y Documentos</h2>
              <div className="grid gap-4 sm:grid-cols-3">
                {navigationCards.map((card) => (
                  <a key={card.title} href={card.href} target="_blank" rel="noopener noreferrer" className="group">
                    <Card className="h-full cursor-pointer transition-all hover:shadow-lg hover:border-primary/50">
                      <CardHeader>
                        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <card.icon className="h-6 w-6" />
                        </div>
                        <CardTitle className="text-base">{card.title}</CardTitle>
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
