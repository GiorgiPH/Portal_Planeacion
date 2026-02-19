import { Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { withBasePath } from "@/lib/config"

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src={withBasePath("/images/logo-finanzas.png")}
                alt="Secretaría de Administración y Finanzas"
                width={120}
                height={27}
                className="h-7 w-auto"
              />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">Gobierno del Estado de Morelos</p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Contacto</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>Galeana 4, Edificio de la Beneficiencia Española, 3er Piso, Despacho 307, Cuernavaca Centro, Morelos, México</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <span>(777) 318-9072</span>
              </div>
              {/*<div className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <span>contacto@morelos.gob.mx</span>
              </div>*/}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Enlaces</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
              {/*<Link href="/" className="hover:text-foreground transition-colors">
                  Inicio
                </Link>*/}
              </li>
              <li>
                <a
                  href="http://marcojuridico.morelos.gob.mx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  Marco Jurídico
                </a>
              </li>
              <li>
                <a
                  href="https://morelos.gob.mx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  Gobierno de Morelos
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Transparencia</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                {/*<Link href="/rendicion-de-cuentas" className="hover:text-foreground transition-colors">
                  Rendición de Cuentas
                </Link>*/}
              </li>
              <li>
                <a
                  href="https://transparencia.morelos.gob.mx/index.php/s/wTm6A83BCa9dmbC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  Portal de Transparencia de la SAF
                </a>
              </li>
              <li>
                <a
                  href="https://morelos.gob.mx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  Aviso de Privacidad
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Secretaría de Administración y Finanzas del Estado de Morelos / Dirección General de Sistemas y Armonización Contable. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
