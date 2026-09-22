import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"
import { NormativeLink } from "@/components/normative-link"
import { CicloPresupuestario } from "@/components/ciclo-presupuestario"
import { Radio, CheckCircle, Play, BarChart, MapPin, Users, Camera, ArrowRight, FileText } from "lucide-react"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"

const navigationCards = [
{
    title: "Presupuestación",
    icon: FileText,
    href: "https://periodico.morelos.gob.mx/obtenerPDF/2025/6502.pdf",
},
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
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance">Presupuestación</h1>
            <div className="space-y-4">
                <p className="text-lg leading-relaxed text-muted-foreground">
                    La presupuestación es la etapa del ciclo hacendario en la que se calculan los ingresos  
                    estimados para financiar el gasto público y se determina la cantidad, forma de distribución     
                    y destino de los recursos aprobados mediante la Ley de Ingresos y el Presupuesto de Egresos.
                </p>
                <CicloPresupuestario highlightStage="presupuestacion" />
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
                title="Ley de Ingresos del Estado de Morelos"
                href="https://marcojuridico.morelos.gob.mx/buscar/resultados?documento=2892"
                />
                <NormativeLink
                title="Presupuesto de Egresos del Estado de Morelos / 2026"
                href="https://periodico.morelos.gob.mx/obtenerPDF/2025/6502.pdf"
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
