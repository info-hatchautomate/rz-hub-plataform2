Reconvertir el proyecto de TanStack Start a Vite clásico con una sola página en blanco.

Resumen
El proyecto actual está generado con TanStack Start (sin `index.html`, con rutas en `src/routes/`, entry SSR en `src/server.ts`, etc.). Se reescribirá la infraestructura para que sea un Vite SPA normal: `index.html`, `src/main.tsx`, `src/App.tsx`, y el `vite.config.ts` y `package.json` que proporcionaste. Quedará una sola página en blanco lista para que subas tus archivos desde GitHub.

Paso a paso

1. Reemplazar `package.json`
   - Usar tu versión como base.
   - Eliminar todo lo relacionado con TanStack: `@tanstack/react-router`, `@tanstack/react-start`, `@tanstack/router-plugin`, `@tanstack/react-query` (si quieres dejarla se puede discutir, pero para una página en blanco se quita), `@lovable.dev/vite-tanstack-config`, `nitro`.
   - Eliminar `react-router-dom` porque elegiste "sin router".
   - Mantener React 19, Tailwind CSS v4, `@tailwindcss/vite`, `vite-tsconfig-paths`, shadcn y sus dependencias Radix.
   - Conservar tus scripts de `deploy`/`predeploy` para gh-pages.

2. Reemplazar `vite.config.ts`
   - Usar exactamente el archivo que proporcionaste:
     - `base: "/rz-hub-platform/"`
     - plugins: `@vitejs/plugin-react`, `tsconfigPaths`, `tailwindcss`.
   - Quitar la configuración de `@lovable.dev/vite-tanstack-config`.

3. Reescribir `tsconfig.json`
   - Mantener `paths` con `@/*`.
   - Ajustar `types` para Vite clásico (`vite/client`).
   - Conservar `strict: true` y el resto de la configuración TypeScript actual.

4. Limpiar `eslint.config.js`
   - Eliminar la regla `no-restricted-imports` que menciona `server-only` y TanStack.
   - Mantener Prettier, React Hooks, React Refresh y TypeScript ESLint.

5. Crear estructura SPA clásica
   - `index.html`: Vite default con `<div id="root"></div>` y script `src/main.tsx`.
   - `src/main.tsx`: montar `<App />` en `document.getElementById("root")` e importar `src/styles.css`.
   - `src/App.tsx`: componente React con una página en blanco (solo un div vacío o un texto mínimo).

6. Eliminar archivos de TanStack Start
   - `src/routes/` y su contenido.
   - `src/router.tsx`.
   - `src/routeTree.gen.ts`.
   - `src/server.ts`.
   - `src/start.ts`.
   - `src/lib/error-capture.ts`.
   - `src/lib/error-page.ts`.
   - `src/lib/lovable-error-reporting.ts`.
   - Directorios ocultos de TanStack (`.tanstack/`) si aplica.

7. Preservar utilidades compatibles con Vite clásico
   - `src/lib/utils.ts` (función `cn`) se conserva.
   - `src/components/ui/` se conserva si existe y no depende de TanStack.
   - `src/hooks/use-mobile.tsx` se conserva si no depende de TanStack.

8. Reinstalar dependencias y verificar
   - Limpiar `node_modules` y `bun.lock` para evitar conflictos de resolución.
   - Ejecutar `bun install`.
   - Ejecutar `bun run build` para verificar que el build de Vite clásico funciona.
   - Verificar que `bun run dev` levanta el preview en localhost.

Entregables
- `package.json` limpio para Vite clásico.
- `vite.config.ts` con tu configuración exacta.
- `index.html`, `src/main.tsx`, `src/App.tsx`.
- Proyecto sin rastros de TanStack Start.
- Build verificado con `vite build`.

Nota importante sobre el entorno Lovable
Este cambio abandona la infraestructura TanStack Start que usa Lovable para el SSR y el deploy automatizado. El preview local seguirá funcionando con `vite dev`, pero algunas funciones específicas del deploy pipeline de Lovable podrían no aplicarse tras este cambio. Esto es intencional según tu solicitud de "vite normal".
