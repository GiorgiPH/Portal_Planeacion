# ============================================
# DOCKERFILE PARA PORTAL WEB DE PLANEACIÓN - GOBIERNO DE MORELOS
# Next.js 14+ con App Router y basePath configurado
# Versión optimizada para entorno gubernamental
# ============================================

# Etapa 1: Builder
FROM node:20-alpine AS builder
RUN apk add --no-cache python3 make g++
WORKDIR /app

# Copiar archivos de dependencias
COPY package.json package-lock.json ./

# Instalar dependencias
RUN npm install

# Copiar código fuente
COPY . .

# Variables de entorno para build
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

# Construir la aplicación con basePath configurado
RUN npm run build

# Etapa 2: Producción
FROM node:20-alpine AS runner
WORKDIR /app

# Configurar zona horaria (México)
RUN apk add --no-cache tzdata && \
    cp /usr/share/zoneinfo/America/Mexico_City /etc/localtime && \
    echo "America/Mexico_City" > /etc/timezone

# Crear usuario no-root para seguridad
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nextjs -u 1001 -G nodejs

# Variables de entorno de producción
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000

# ✅ Copiar archivos necesarios del builder (standalone output)
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

# Configurar permisos
USER nextjs

# Exponer puerto
EXPOSE 3000

# Comando de inicio
CMD ["node", "server.js"]

# ============================================
# CONFIGURACIÓN AVANZADA
# ============================================

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000/portal-planeacion || exit 1

# Labels para metadata
LABEL org.opencontainers.image.title="Portal Web de Planeación - Gobierno de Morelos"
LABEL org.opencontainers.image.description="Portal oficial de la Unidad de Planeación del Estado de Morelos"
LABEL org.opencontainers.image.version="1.0.0"
LABEL org.opencontainers.image.authors="Gobierno de Morelos - Unidad de Planeación"
LABEL org.opencontainers.image.licenses="Propietario"
LABEL org.opencontainers.image.source="https://github.com/gobierno-morelos/portal-web-de-planeacion"
LABEL org.opencontainers.image.vendor="Gobierno del Estado de Morelos"

# ============================================
# INSTRUCCIONES DE USO
# ============================================

# 1. CONSTRUIR LA IMAGEN:
#    docker build -t portal-planeacion:latest .
#
# 2. EJECUTAR LOCALMENTE:
#    docker run -p 3000:3000 --env-file .env.production portal-planeacion:latest
#
# 3. PARA PRODUCCIÓN:
#    - Subir la imagen al registro de contenedores
#    - Usar docker-compose.prod.yml para orquestación
#    - Configurar variables de entorno mediante secrets
#
# 4. VARIABLES DE ENTORNO CRÍTICAS:
#    - NODE_ENV: production
#    - PORT: 3000
#    - NEXT_PUBLIC_*: Variables públicas de Next.js