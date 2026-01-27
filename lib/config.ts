// Configuración del proyecto
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '/portal-planeacion';

// Helper para rutas con basePath
export function withBasePath(path: string): string {
  // Asegurar que el path no tenga doble slash
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${BASE_PATH}${cleanPath}`;
}