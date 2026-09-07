"use client"

import { withBasePath } from "@/lib/config"
import { ArrowDown } from "lucide-react"

type Stage = "planeacion" | "programacion" | "presupuestacion" | "ejercicio" | "seguimiento" | "evaluacion" | "rendicion"

interface CicloPresupuestarioProps {
  highlightStage: Stage
}

const stagePositions: Record<Stage, { left: string; label: string }> = {
  planeacion: { left: "11%", label: "Planeación" },
  programacion: { left: "26%", label: "Programación" },
  presupuestacion: { left: "35%", label: "Presupuestación" },
  ejercicio: { left: "50%", label: "Ejercicio y Control" },
  seguimiento: { left: "68%", label: "Seguimiento" },
  evaluacion: { left: "82%", label: "Evaluación" },
  rendicion: { left: "99%", label: "Rendición de Cuentas" },
}

export function CicloPresupuestario({ highlightStage }: CicloPresupuestarioProps) {
  const position = stagePositions[highlightStage]

  return (
    <div className="flex flex-col items-center justify-center overflow-hidden rounded-lg bg-muted/50 p-3 sm:p-4 md:p-8">
      <div className="relative w-full max-w-6xl pt-14">
        {/* Arrow indicator */}
        <div
          className="absolute left-0 top-0 z-10 flex -translate-x-1/2 flex-col items-center transition-all duration-300"
          style={{ left: position.left, transform: "translateX(-50%)" }}
        >
          <span className="mb-1 max-w-[9rem] whitespace-normal rounded-full bg-primary px-3 py-1 text-center text-xs font-semibold leading-tight text-primary-foreground shadow-lg sm:max-w-none sm:whitespace-nowrap">
            {position.label}
          </span>
          <ArrowDown className="h-6 w-6 animate-bounce text-primary" aria-hidden="true" />
        </div>

        {/* Budget cycle image */}
        <img
          src={withBasePath("/images/rgb_planeacion.jpeg")}
          alt="Ciclo Presupuestario - 7 etapas: Planeación, Programación, Presupuestación, Ejercicio y Control, Seguimiento, Evaluación, Rendición de Cuentas"
          width={4000}
          height={1000}
          className="block aspect-[4/1] w-full object-contain"
        />
      </div>
      <p className="mt-4 text-sm text-muted-foreground">Ciclo Presupuestario</p>
    </div>
  )
}
