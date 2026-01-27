import { ExternalLink, FileText } from "lucide-react"

interface NormativeLinkProps {
  title: string
  href: string
}

export function NormativeLink({ title, href }: NormativeLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-start gap-3 rounded-lg border bg-card p-4 transition-all hover:border-primary/50 hover:shadow-md group"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <FileText className="h-5 w-5" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium leading-relaxed text-card-foreground group-hover:text-primary transition-colors">
          {title}
        </p>
      </div>
      <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-primary transition-colors" />
    </a>
  )
}
