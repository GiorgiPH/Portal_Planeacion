import { Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { withBasePath } from "@/lib/config"

export function Footer() {
  return (
    // Rediseño: Removido el borde sólido para dar paso a la cenefa como separación
    <footer className="w-full" style={{ backgroundColor: '#2E3B2B' }}>
      
      {/* CONTENEDOR DE LA CENEFA PNG (INICIO DEL FOOTER) */}
      {/* Sirve de transición exacta entre el fondo claro de la página y el verde oscuro */}
      <div className="w-full h-4 sm:h-6 pointer-events-none overflow-hidden">
        <img 
          src="/images/Cenefa.png" // Ajusta aquí la ruta y nombre exacto de tu archivo PNG
          alt="Cenefa Institucional" 
          className="w-full h-full object-cover object-top" 
        />
      </div>

      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              {/* Logo institucional de Finanzas */}
              <Image
                src={withBasePath("/images/logo-finanzas.png")}
                alt="Secretaría de Administración y Finanzas"
                width={200}
                height={40}
                className="h-14 w-auto brightness-0 invert" 
              />
            </div>
            <p className="text-sm leading-relaxed" style={{ color: '#CBCABE' }}>
              Gobierno del Estado de Morelos
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white uppercase tracking-wider text-xs">Contacto</h3>
            <div className="space-y-3 text-sm" style={{ color: '#CBCABE' }}>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#773357' }} />
                <span>Galeana 4, Edificio de la Beneficiencia Española, 3er Piso, Despacho 307, Cuernavaca Centro, Morelos, México</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" style={{ color: '#773357' }} />
                <span>(777) 318-9072</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white uppercase tracking-wider text-xs">Enlaces</h3>
            <ul className="space-y-2 text-sm" style={{ color: '#CBCABE' }}>
              <li>
              {/*<Link href="/" className="hover:text-white transition-colors">
                  Inicio
                </Link>*/}
              </li>
              <li>
                <a
                  href="http://marcojuridico.morelos.gob.mx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Marco Jurídico
                </a>
              </li>
              <li>
                <a
                  href="https://morelos.gob.mx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Gobierno de Morelos
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white uppercase tracking-wider text-xs">Transparencia</h3>
            <ul className="space-y-2 text-sm" style={{ color: '#CBCABE' }}>
              <li>
                {/*<Link href="/rendicion-de-cuentas" className="hover:text-white transition-colors">
                  Rendición de Cuentas
                </Link>*/}
              </li>
              <li>
                <a
                  href="https://transparencia.morelos.gob.mx/index.php/s/wTm6A83BCa9dmbC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Portal de Transparencia de la SAF
                </a>
              </li>
              <li>
                <a
                  href="https://morelos.gob.mx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Aviso de Privacidad
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Línea divisoria inferior de derechos de autor */}
        <div className="mt-8 pt-8 border-t text-center text-xs" style={{ borderColor: 'rgba(203, 202, 190, 0.2)', color: '#CBCABE' }}>
          <p>© {new Date().getFullYear()} Secretaría de Administración y Finanzas del Estado de Morelos / Dirección General de Sistemas y Armonización Contable. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}