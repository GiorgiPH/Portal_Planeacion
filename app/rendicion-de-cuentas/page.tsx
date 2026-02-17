import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"
import { NormativeLink } from "@/components/normative-link"
import { CicloPresupuestario } from "@/components/ciclo-presupuestario"
import { FileText, PieChart, ShieldCheck, TrendingUp } from "lucide-react"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"

const transparencyCards = [
  {
    title: "Índice de Transparencia Fiscal de la Unión Europea (ITF)",
    icon: TrendingUp,
    href: "https://transparenciafiscal.morelos.gob.mx/",
  },
  {
    title: "Índice de Transparencia y Disponibilidad de la Información Fiscal (ITDIF)",
    icon: PieChart,
    href: "https://transparencia.morelos.gob.mx/index.php/s/wTm6A83BCa9dmbC?dir=/Informaci%C3%B3n%20especifica%20de%20Transparencia/Indice%20de%20Transparencia%20y%20Disponibilidad%20de%20la%20Informaci%C3%B3n%20Fiscal%20-%20ITDIF",
  },
]

const otherCards = [
  {
    title: "Informes de Gobierno",
    icon: FileText,
    href: "https://transparencia.morelos.gob.mx/index.php/s/wTm6A83BCa9dmbC?dir=/Planeaci%C3%B3n%20Estrat%C3%A9gica/III.%20INFORMES%20DE%20GOBIERNO%20Y%20ANEXOS%20ESTADISTICOS",
  },
  {
    title: "Secretaría de Anticorrupción y Buen Gobierno",
    icon: ShieldCheck,
    href: "https://www.morelos.gob.mx/inicio/secretaria-anticorrupcion-y-buen-gobierno",
  },
]

export default function RendicionDeCuentasPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <div className="container py-8">
          <BreadcrumbNav items={[{ label: "Rendición de Cuentas" }]} />

          <div className="space-y-12">
            {/* Introduction */}
            <section>
              <h1 className="mb-6 text-4xl font-bold tracking-tight">Rendición de Cuentas</h1>
              <div className="space-y-4">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  La rendición de cuentas es la etapa final del ciclo presupuestario donde se da cuenta del ejercicio de
                  los recursos públicos, permitiendo la transparencia en la gestión gubernamental y la posibilidad de
                  corregir deficiencias identificadas.
                </p>
                <CicloPresupuestario highlightStage="rendicion" />
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
                  title="Ley de Planeación, Contabilidad y Gasto Público del Estado de Morelos"
                  href="http://marcojuridico.morelos.gob.mx/archivos/leyes/pdf/LPGASTOPEM.pdf"
                />
                <NormativeLink
                  title="Ley de Responsabilidad de los Servidores Públicos"
                  href="https://www.diputados.gob.mx/LeyesBiblio/pdf/LFRSP.pdf"
                />
              </div>
            </section>

            <section>
              <h2 className="mb-6 text-2xl font-semibold">Índice de Transparencia Fiscal</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {transparencyCards.map((card) => (
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

            <section>
              <h2 className="mb-6 text-2xl font-semibold">Otros Recursos</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {otherCards.map((card) => (
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
