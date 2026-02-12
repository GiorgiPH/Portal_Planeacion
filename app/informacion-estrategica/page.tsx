import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"
import { NormativeLink } from "@/components/normative-link"
import { BarChart, Database } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function InformacionEstrategicaPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <div className="container py-8">
          <BreadcrumbNav items={[{ label: "Información Estratégica" }]} />

          <div className="space-y-12">
            {/* Title */}
            <section>
              <h1 className="mb-6 text-4xl font-bold tracking-tight">Información Estratégica</h1>
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

            {/* Statistical Information */}
            <section>
              <h2 className="mb-6 text-2xl font-semibold">Información Estadística</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <a href="https://ceieg.morelos.gob.mx" target="_blank" rel="noopener noreferrer" className="group">
                  <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50">
                    <CardHeader>
                      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <BarChart className="h-6 w-6" />
                      </div>
                      <CardTitle>CEIEG MORELOS</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Comisión Estatal de Información Estadística y Geográfica de Morelos
                      </p>
                    </CardContent>
                  </Card>
                </a>

                <a
                  href="https://coespo.morelos.gob.mx/index.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50">
                    <CardHeader>
                      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Database className="h-6 w-6" />
                      </div>
                      <CardTitle>COESPO MORELOS</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Consejo Estatal de Población de Morelos
                      </p>
                    </CardContent>
                  </Card>
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
