import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { withBasePath } from "@/lib/config"

export interface RelatedPage {
  id: string
  title: string
  description: string
  href: string
  keywords: string
  image: string
  imageAlt: string
}

interface RelatedPagesCarouselProps {
  pages: RelatedPage[]
}

export function RelatedPagesCarousel({ pages }: RelatedPagesCarouselProps) {
  return (
    <section aria-labelledby="related-pages-title" className="mt-16">
      <div className="mb-6">
        <h2 id="related-pages-title" className="text-2xl font-semibold tracking-tight text-[#1E2B1C]">
          Páginas que te podrían interesar
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-gray-600">
          Explora recursos y sitios relacionados con la gestión pública.
        </p>
      </div>
      <Carousel opts={{ align: "start" }} aria-label="Páginas que te podrían interesar" className="px-1">
        <CarouselContent className="-ml-5">
          {pages.map((page) => (
            <CarouselItem
              key={page.id}
              id={page.id}
              className="scroll-mt-28 pl-5 sm:basis-1/2 lg:basis-1/3"
            >
              <Link
                href={page.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1E2B1C]"
              >
                <Card className="h-full overflow-hidden transition-all group-hover:-translate-y-1 group-hover:border-primary/50 group-hover:shadow-lg">
                  <div className="flex h-28 items-center justify-center bg-white p-4 sm:h-40 sm:p-8">
                    <Image
                      src={withBasePath(page.image)}
                      alt={page.imageAlt}
                      width={240}
                      height={64}
                      className="h-auto max-h-10 w-auto max-w-full object-contain sm:max-h-16"
                    />
                  </div>
                  <CardContent className="flex min-h-32 flex-col border-t border-gray-100 p-5">
                    <h3 className="flex items-center gap-2 font-semibold text-[#1E2B1C]">
                      <span>{page.title}</span>
                      <ExternalLink aria-hidden="true" className="h-4 w-4 shrink-0 opacity-60" />
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {page.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          aria-label="Mostrar página anterior"
          className="hidden left-[-2.5rem] top-1/2 z-10 size-10 -translate-y-1/2 bg-white shadow-md sm:flex sm:left-[-3rem]"
        >
          <ArrowLeft aria-hidden="true" />
          <span className="sr-only">Anterior</span>
        </CarouselPrevious>
        <CarouselNext
          aria-label="Mostrar página siguiente"
          className="hidden right-[-2.5rem] top-1/2 z-10 size-10 -translate-y-1/2 bg-white shadow-md sm:flex sm:right-[-3rem]"
        >
          <ArrowRight aria-hidden="true" />
          <span className="sr-only">Siguiente</span>
        </CarouselNext>
      </Carousel>
    </section>
  )
}
