import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true, // Ignorar errores de TypeScript durante el build
  },
  // Otras configuraciones de Next.js aquí
};

export default nextConfig;
