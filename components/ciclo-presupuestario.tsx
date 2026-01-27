"use client"

import { withBasePath } from "@/lib/config"
import { ArrowDown } from "lucide-react"

type Stage = "planeacion" | "programacion" | "presupuestacion" | "ejercicio" | "seguimiento" | "evaluacion" | "rendicion"

interface CicloPresupuestarioProps {
  highlightStage: Stage
}

const stagePositions: Record<Stage, { left: string; label: string }> = {
  planeacion: { left: "7%", label: "Planeación" },
  programacion: { left: "20%", label: "Programación" },
  presupuestacion: { left: "35%", label: "Presupuestación" },
  ejercicio: { left: "50%", label: "Ejercicio y Control" },
  seguimiento: { left: "64%", label: "Seguimiento" },
  evaluacion: { left: "78%", label: "Evaluación" },
  rendicion: { left: "92%", label: "Rendición de Cuentas" },
}

export function CicloPresupuestario({ highlightStage }: CicloPresupuestarioProps) {
  const position = stagePositions[highlightStage]

  return (
    <div className="flex flex-col items-center justify-center rounded-lg bg-muted/50 p-4 md:p-8">
      <div className="relative w-full max-w-4xl">
        {/* Arrow indicator */}
        <div
          className="absolute -top-2 flex flex-col items-center transition-all duration-300"
          style={{ left: position.left, transform: "translateX(-50%)" }}
        >
          <span className="mb-1 whitespace-nowrap rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-lg">
            {position.label}
          </span>
          <ArrowDown className="h-6 w-6 text-primary animate-bounce" />
        </div>

        {/* Budget cycle image */}
        <img
          src={withBasePath("/images/ciclo-presupuestario.png")}
          alt="Ciclo Presupuestario - 7 etapas: Planeación, Programación, Presupuestación, Ejercicio y Control, Seguimiento, Evaluación, Rendición de Cuentas"
          className="mt-10 w-full"
        />
      </div>
      <p className="mt-4 text-sm text-muted-foreground">Ciclo Presupuestario</p>
    </div>
  )
}
