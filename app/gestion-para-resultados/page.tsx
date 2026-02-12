import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"
import { NormativeLink } from "@/components/normative-link"
import { Target, DollarSign, BarChart3, ArrowBigDownDashIcon } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Arrow } from "@radix-ui/react-context-menu"

export default function GestionParaResultadosPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <div className="container py-8">
          <BreadcrumbNav items={[{ label: "Gestión para Resultados" }]} />

          <div className="space-y-12">
            {/* Introduction */}
            <section>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance">Gestión para Resultados (GpR)</h1>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Es una forma de trabajar en el gobierno que se enfoca en lograr resultados. Esto quiere decir que no
                solo se realizan actividades o se usan recursos, sino que todo lo que se hace está planeado para
                alcanzar objetivos claros que ayuden a mejorar la vida de la comunidad y atender sus necesidades de
                manera efectiva.
              </p>
            </section>

            {/* Components */}
            <section>
              <h2 className="mb-6 text-2xl font-semibold">Componentes</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <DollarSign className="h-6 w-6" />
                    </div>
                    <CardTitle>Presupuesto Basado en Resultados (PbR)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Forma en que el gobierno planea y usa el dinero público enfocándose en los resultados que quiere
                      lograr.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <BarChart3 className="h-6 w-6" />
                    </div>
                    <CardTitle>Sistema de Evaluación del Desempeño (SED)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Evalúa políticas y programas del gobierno para mejorar desempeño y mostrar beneficios a la
                      población.
                    </p>
                  </CardContent>
                </Card>
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
                  title="Ley de Planeación del Estado de Morelos"
                  href="http://marcojuridico.morelos.gob.mx/archivos/leyes/pdf/LPLANEACIONMO.pdf"
                />
                <NormativeLink
                  title="Ley de Presupuesto, Contabilidad y Gasto Público del Estado de Morelos"
                  href="http://marcojuridico.morelos.gob.mx/archivos/leyes/pdf/LPGASTOPEM.pdf"
                />
              </div>
            </section>

            {/* Budget Cycle */}
            {/*<section>
              <h2 className="mb-6 text-2xl font-semibold">Ciclo Presupuestario</h2>
              <Card>
                <CardContent className="pt-6">
                  <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                    El ciclo presupuestario es el proceso que sigue el gobierno desde la perspectiva de PbR, para
                    planear, aprobar, usar y revisar el dinero público. Es la manera de analizar el presupuesto
                    enfocándose en los resultados que se quieren lograr. En México, este proceso comienza al inicio de
                    cada gobierno y se revisa cada año fiscal.
                  </p>
                  <div className="flex items-center justify-center rounded-lg bg-muted/50 p-8">
                    <div className="text-center">
                      <Target className="mx-auto mb-4 h-16 w-16 text-primary" />
                      <p className="text-sm text-muted-foreground">Diagrama del Ciclo Presupuestario</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>*/}
            {/* Budget Cycle */}
            <section>
              <h2 className="mb-6 text-2xl font-semibold">Presupuesto Ciudadano</h2>
              <Card>
                <CardContent className="pt-6">
                  <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                    El Presupuesto Ciudadano es una versión clara y sencilla del presupuesto público que explica de dónde viene el dinero del gobierno y en qué se gasta.
                    Su objetivo es que la población entienda las prioridades del gasto, pueda vigilar el uso de los recursos y participe de forma informada en los asuntos públicos.
                  </p>
                  <div className="flex items-center justify-center rounded-lg bg-muted/50 p-8">
                    <div className="text-center">
                      <a
                        href="https://transparencia.morelos.gob.mx/index.php/s/wTm6A83BCa9dmbC?dir=/Informaci%C3%B3n%20especifica%20de%20Transparencia/Indice%20de%20Transparencia%20y%20Disponibilidad%20de%20la%20Informaci%C3%B3n%20Fiscal%20-%20ITDIF/IV.%20RENDICION%20DE%20CUENTAS/Presupuesto%20Ciudadano"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ArrowBigDownDashIcon className="mx-auto mb-4 h-16 w-16 text-primary" />
                      </a>

                      <p className="text-sm text-muted-foreground">Documento de Presupuesto Ciudadano</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
