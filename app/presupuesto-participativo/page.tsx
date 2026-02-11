import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"
import { NormativeLink } from "@/components/normative-link"
import { Radio, CheckCircle, Play, BarChart, MapPin, Users, Camera } from "lucide-react"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"

const cycleSteps = [
  {
    number: "1",
    title: "Difusión del sistema de presupuesto participativo",
    icon: Radio,
  },
  {
    number: "2",
    title: "Discusión, elaboración y análisis de viabilidad y factibilidad de proyectos",
    icon: Users,
  },
  {
    number: "3",
    title: "Ejecución y control de los proyectos a ejecutar",
    icon: Play,
  },
  {
    number: "4",
    title: "Evaluación de resultados",
    icon: BarChart,
  },
]

const navigationCards = [
  {
    title: "Informes Presupuesto Paticipativo",
    icon: MapPin,
    href: "https://transparencia.morelos.gob.mx/index.php/s/wTm6A83BCa9dmbC?dir=/Planeaci%C3%B3n%20Estrat%C3%A9gica/VIII.%20INFORME%20PRESUPUESTO%20PARTICIPATIVO",
  },
  /*{
    title: "Localidades Beneficiadas 2025",
    icon: CheckCircle,
    href: "https://transparencia.morelos.gob.mx/index.php/s/wTm6A83BCa9dmbC?dir=/Planeaci%C3%B3n%20Estrat%C3%A9gica/VIII.%20INFORME%20PRESUPUESTO%20PARTICIPATIVO",
  },
  {
    title: "Asambleas Comunitarias 2025",
    icon: Users,
    href: "https://transparencia.morelos.gob.mx/index.php/s/wTm6A83BCa9dmbC?dir=/Planeaci%C3%B3n%20Estrat%C3%A9gica/VIII.%20INFORME%20PRESUPUESTO%20PARTICIPATIVO",
  },
  {
    title: "Fotogalería",
    icon: Camera,
    href: "#",
  },*/
]

export default function PresupuestoParticipativoPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <div className="container py-8">
          <BreadcrumbNav items={[{ label: "Presupuesto Participativo" }]} />

          <div className="space-y-12">
            {/* Introduction */}
            <section>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance">Presupuesto Participativo</h1>
              <p className="text-lg leading-relaxed text-muted-foreground">
                El Presupuesto Participativo para el Estado de Morelos tiene como finalidad consolidar la participación
                ciudadana en decisiones del poder público para fijar el desarrollo social y el ejercicio del gasto
                público, involucrando a la participación social en la toma de decisiones de un porcentaje del
                presupuesto que atienda necesidades locales prioritarias para comunidades de alta y muy alta
                marginación.
              </p>
            </section>

            {/* Cycle */}
            <section>
              <h2 className="mb-6 text-2xl font-semibold">Ciclo del Presupuesto Participativo</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {cycleSteps.map((step) => (
                  <Card key={step.number} className="relative overflow-hidden">
                    <CardHeader>
                      <div className="absolute -right-4 -top-4 text-8xl font-bold text-primary/30">{step.number}</div>
                      <div className="relative mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <step.icon className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-sm leading-relaxed text-balance">{step.title}</CardTitle>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </section>

            {/* Normative Framework */}
            <section>
              <h2 className="mb-6 text-2xl font-semibold">Marco Normativo</h2>
              <div className="space-y-3">
                <NormativeLink
                  title="Constitución Política del Estado Libre y Soberano de Morelos"
                  href="http://marcojuridico.morelos.gob.mx/archivos/constitucion/pdf/CONSTMOR.pdf"
                />
                <NormativeLink
                  title="Ley de Presupuesto Participativo del Estado de Morelos"
                  href="http://marcojuridico.morelos.gob.mx/archivos/leyes/pdf/LPRESUPARTICIMO.pdf"
                />
                <NormativeLink
                  title="Reglamento de la Ley de Presupuesto Participativo del Estado de Morelos"
                  href="http://marcojuridico.morelos.gob.mx/archivos/reglamentos_estatales/pdf/RLEYPRESUP ARTICIPATIVO.pdf"
                />
                <NormativeLink
                  title="Reglamento de Asambleas en materia de Presupuesto Participativo del Instituto Morelense de Procesos Electorales y Participación Ciudadana"
                  href="https://impepac.mx/wp-content/uploads/2015/09/Ley-de-Participaci%C3%B3n-CiudadanaV2.pdf"
                />
                <NormativeLink
                  title="Reglas de Operación de Presupuesto Participativo del Estado de Morelos"
                  href="http://marcojuridico.morelos.gob.mx/archivos/reglamentos_estatales/pdf/RLEYPRESUP ARTICIPATIVO.pdf"
                />
              </div>
            </section>

            {/* Navigation Cards */}
            <section>
              <h2 className="mb-6 text-2xl font-semibold">Información y Recursos</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
