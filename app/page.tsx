import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ModuleCard } from "@/components/module-card"
import { PageSearch, type SearchEntry } from "@/components/page-search"
import { RelatedPagesCarousel, type RelatedPage } from "@/components/related-pages-carousel"
import { withBasePath } from "@/lib/config"
import { BookOpen, Calendar, ClipboardCheck, FileCheck, LineChart, Wallet } from "lucide-react"

const modules = [
  {
    title: "Planeación",
    description: "1era etapa del ciclo de gestión para resultados, donde se definen objetivos, estrategias y metas",
    icon: BookOpen,
    href: "/planeacion",
    keywords: "estrategia objetivos metas plan desarrollo estatal municipal",
  },
  
  /* 
  {
    title: "COPLADEMOR",
    description: "Comité de Planeación para el Desarrollo del Estado de Morelos",
    icon: Users,
    href: "/coplademor",
  }, 
  */

  {
    title: "Programación",
    description: "Definición de programas presupuestarios, actividades y metas",
    icon: Calendar,
    href: "/programacion",
    keywords: "programas presupuestarios actividades indicadores metas",
  },  
  
  /*
  {
    title: "Presupuesto Participativo",
    description: "Consolidar la participación ciudadana en decisiones del poder público",
    icon: Wallet,
    href: "/presupuesto-participativo",
  },
  */

  {
    title: "Presupuestación",
    description: "Asignación de recursos públicos a programas y actividades para cumplir objetivos y metas",
    icon: Wallet,
    href: "/presupuestacion",
    keywords: "presupuesto gasto recursos públicos asignación financiero PbR",
  },

  /* 
  {
    title: "Información Estratégica",
    description: "Marco normativo e información estadística del estado",
    icon: Info,
    href: "/informacion-estrategica",
  }, 
  */

  /* 
  {
    title: "Gestión para Resultados",
    description: "Enfoque en lograr resultados que mejoren la vida de la comunidad",
    icon: Target,
    href: "/gestion-para-resultados",
  }, 
  */
  
  {
    title: "Seguimiento",
    description: "Verificación del desempeño y seguimiento de indicadores",
    icon: LineChart,
    href: "/seguimiento",
    keywords: "indicadores desempeño monitoreo avance programas",
  },
  {
    title: "Evaluación",
    description: "Elementos metodológicos para medir y mejorar programas públicos",
    icon: ClipboardCheck,
    href: "/evaluacion",
    keywords: "evaluación mejora continua resultados desempeño PAE",
  },
  {
    title: "Rendición de Cuentas",
    description: "Dar cuentas del ejercicio de los recursos públicos",
    icon: FileCheck,
    href: "/rendicion-de-cuentas",
    keywords: "transparencia cuentas ejercicio gasto público",
  },
  /*{
    title: "CCSEDE",
    description: "Comisión Coordinadora del Sistema de Evaluación del Desempeño Estatal",
    icon: Building,
    href: "/ccsede",
  },
  */
]

const relatedPages: RelatedPage[] = [
  {
    id: "related-agenda-2030",
    title: "Agenda 2030",
    description: "Consulta los objetivos de desarrollo sostenible y sus avances en México.",
    href: "https://agenda2030.mx/#/home",
    keywords: "objetivos desarrollo sostenible ODS agenda global",
    image: "/images/un-logo.png",
    imageAlt: "Organización de las Naciones Unidas",
  },
  {
    id: "related-transparencia-presupuestaria",
    title: "Transparencia Presupuestaria",
    description: "Explora información sobre el presupuesto, el gasto y las finanzas públicas.",
    href: "https://www.transparenciapresupuestaria.gob.mx/",
    keywords: "presupuesto transparencia gasto finanzas públicas recursos",
    image: "/images/ciclo_presupuestario.png",
    imageAlt: "Secretaría de Administración y Finanzas",
  },
  {
    id: "related-redmyeval",
    title: "RedMyeval",
    description: "Conoce la red de monitoreo y evaluación de políticas públicas.",
    href: "https://redmyeval.org.mx/",
    keywords: "monitoreo evaluación políticas públicas programas",
    image: "/images/RED_logo.jpg",
    imageAlt: "Red de Monitoreo y Evaluación",
  },
  {
    id: "related-shcp",
    title: "Secretaría de Hacienda y Crédito Público",
    description: "Accede al sitio oficial de la Secretaría de Hacienda y Crédito Público.",
    href: "https://www.gob.mx/shcp",
    keywords: "SHCP hacienda crédito público federal finanzas",
    image: "/images/logo_hacienda_2.png",
    imageAlt: "Secretaría de Hacienda y Crédito Público",
  },
  {
    id: "related-inegi",
    title: "INEGI",
    description: "Consulta información estadística y geográfica de México.",
    href: "https://www.inegi.org.mx/",
    keywords: "estadística geografía datos censo población indicadores",
    image: "/images/inegi_logo.png",
    imageAlt: "Instituto Nacional de Estadística y Geografía",
  },
]

const sitePages: SearchEntry[] = [
  {
    id: "site-planeacion",
    title: "Planeación",
    description: "Contenido, secciones y tarjetas de Planeación.",
    keywords: "desarrollo objetivos metas",
    href: "/planeacion/",
    fetchContent: true,
  },
  {
    id: "site-programacion",
    title: "Programación",
    description: "Contenido, secciones y tarjetas de Programación.",
    keywords: "programas presupuestarios instrumentos metodológicos",
    href: "/programacion/",
    fetchContent: true,
  },
  {
    id: "site-presupuestacion",
    title: "Presupuestación",
    description: "Contenido, secciones y tarjetas de Presupuestación.",
    keywords: "ingresos egresos presupuesto recursos",
    href: "/presupuestacion/",
    fetchContent: true,
  },
  {
    id: "site-seguimiento",
    title: "Seguimiento",
    description: "Contenido, secciones y tarjetas de Seguimiento.",
    keywords: "indicadores reportes desempeño",
    href: "/seguimiento/",
    fetchContent: true,
  },
  {
    id: "site-evaluacion",
    title: "Evaluación",
    description: "Contenido, secciones y tarjetas de Evaluación.",
    keywords: "PAE evaluaciones ASM indicadores",
    href: "/evaluacion/",
    fetchContent: true,
  },
  {
    id: "site-rendicion-de-cuentas",
    title: "Rendición de Cuentas",
    description: "Contenido, secciones y tarjetas de Rendición de Cuentas.",
    keywords: "transparencia fiscal informes presupuesto ciudadano",
    href: "/rendicion-de-cuentas/",
    fetchContent: true,
  },
  {
    id: "site-coplademor",
    title: "COPLADEMOR",
    description: "Contenido, secciones y tarjetas de COPLADEMOR.",
    keywords: "planes estatales municipales desarrollo",
    href: "/coplademor/",
    fetchContent: true,
  },
  {
    id: "site-presupuesto-participativo",
    title: "Presupuesto Participativo",
    description: "Contenido, secciones y tarjetas de Presupuesto Participativo.",
    keywords: "asambleas ciudadanía proyectos localidades",
    href: "/presupuesto-participativo/",
    fetchContent: true,
  },
  {
    id: "site-informacion-estrategica",
    title: "Información Estratégica",
    description: "Contenido, secciones y tarjetas de Información Estratégica.",
    keywords: "estadística CEIEG COESPO marco normativo",
    href: "/informacion-estrategica/",
    fetchContent: true,
  },
  {
    id: "site-gestion-para-resultados",
    title: "Gestión para Resultados",
    description: "Contenido, secciones y tarjetas de Gestión para Resultados.",
    keywords: "GpR PbR SED ciclo presupuestario",
    href: "/gestion-para-resultados/",
    fetchContent: true,
  },
  {
    id: "site-ccsede",
    title: "CCSEDE",
    description: "Contenido, secciones y tarjetas de CCSEDE.",
    keywords: "comisión sistema evaluación desempeño estatal",
    href: "/ccsede/",
    fetchContent: true,
  },
]

const searchEntries: SearchEntry[] = [
  {
    id: "hero",
    title: "Portal de Planeación",
    description: "Planeación, programación, presupuestación, seguimiento, evaluación y rendición de cuentas.",
    keywords: "Morelos gestión resultados políticas programas públicos estado",
  },
  ...modules.map(({ title, description, href, keywords }) => ({
    id: `module-${href.slice(1)}`,
    title,
    description,
    keywords,
  })),
  ...relatedPages.map(({ id, title, description, keywords }) => ({
    id,
    title,
    description,
    keywords,
  })),
  ...sitePages,
]

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-bg-surface-low">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section id="hero" className="relative scroll-mt-28 overflow-hidden rounded-b-3xl bg-[#1E2B1C] shadow-xl w-full lg:rounded-b-[2.5rem]">
          {/* Contenedor principal que abarca todo el ancho */}
          <div className="relative w-full min-h-[450px] xl:min-h-[551px] flex items-center px-6 sm:px-12 md:px-16 lg:px-20 xl:px-28 py-16 xl:py-24">
            
            {/* 1. Bloque de texto alineado hacia la izquierda con más espacio */}
            <div className="relative z-30 w-full xl:w-7/12 max-w-4xl text-left">
              <h1 className="mb-4 text-3xl sm:text-4xl xl:text-6xl font-quetzalli tracking-tight text-balance text-content-inverse">
                Morelos con Gestión para Resultados 
              </h1>
              <p className="text-base sm:text-lg xl:text-xl text-balance font-medium text-content-inverse-low leading-relaxed">
                Conoce, consulta y da seguimiento a la planeación, programación, presupuestación, seguimiento, evaluación y la rendición de cuentas de las políticas y programas públicos del Estado de Morelos.
              </p>
            </div>

            {/* 2. Imagen de Preview comentada */}
            {/*
            <div className="hidden xl:flex absolute right-28 top-1/2 -translate-y-1/2 z-25 w-7/12 justify-end items-center pointer-events-none">
              <img
                src="/images/rgb_planeacion.jpeg"
                alt="Portal Planeación Preview"
                className="w-full max-w-2xl h-auto object-contain drop-shadow-2xl"
              />
            </div>
            */}

            {/* 3. Contenedor del Isotipo expandido desde el borde izquierdo hasta abarcar todo el fondo */}
            <div className="absolute inset-0 pointer-events-none flex justify-end overflow-hidden z-10">
              <img
                src={withBasePath("/images/Isotipo.svg")}
                alt="Isotipo"
                className="h-full w-auto max-w-none object-cover object-right opacity-30 xl:opacity-45 scale-125 translate-x-12"
              />
            </div>

          </div>
        </section>

        {/* Grid de Módulos */}
        <section className="container py-12 md:py-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PageSearch entries={searchEntries} />
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {modules.map((module) => (
              <div id={`module-${module.href.slice(1)}`} key={module.href} className="scroll-mt-28">
                <ModuleCard
                  title={module.title}
                  description={module.description}
                  icon={module.icon}
                  href={module.href}
                />
              </div>
            ))}
          </div>

          <RelatedPagesCarousel pages={relatedPages} />
        </section>
      </main>

      <Footer />
    </div>
  )
}