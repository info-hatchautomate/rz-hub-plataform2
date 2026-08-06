# Homologación visual: botones, cards y paleta rosa

Unificar todo el sistema visual alrededor del rosa de marca `#e61876` (hover `#a91054`), que ya existe como tokens `primary` / `primary-dim`.

## 1. Botones estandarizados

Crear un componente único de botón (`src/components/common/Button.jsx`) con variantes:

- `primary`: fondo `#e61876`, texto blanco, hover `#a91054`.
- `outline`: borde `#e61876`, texto rosa, fondo blanco; hover fondo `#e61876` + texto blanco.
- `subtle`: fondo rosa al 10%, texto rosa, hover fondo rosa lleno.

Radio, tipografía, padding y transición idénticos en todos los botones. Se reemplazan los botones ad-hoc en: Landing (hero y CTA final), Perks (categorías, bento, CTA "Ser Aliado"), Recursos (filtros, CTA), Calendario (filtros, evento destacado), Mentores, Alumni, Perfil y modales. Se eliminan los botones grises/slate-800 y los turquesa.

El botón "Activar" de las cards de perk pasa a variante `outline` (borde rosa, hover relleno rosa).

## 2. Hover unificado de cards

Un mismo comportamiento para todas las cards (el que ya tiene "Nuestros egresados"): se elevan ligeramente, sombra rosa suave y fondo con un tinte rosa muy bajo.

Se aplica a: MentorCard ("Aprende de los mejores"), PerkCard, ResourceCard, PerkBentoCard, EventTimelineItem, RoleExplainerCard, cards de Perfil y CurrentCohortCard. Se quitan los hovers inconsistentes (solo sombra, `scale`, bordes de color por rol).

## 3. Próximos eventos / Calendario

- `EventTimelineItem`: reemplazar `colorTheme` azul de los datos por la paleta rosa (marcador de fecha, línea de tiempo, badges y botones en rosa).
- `FeaturedEventHero`: glow y badge en rosa; botones a las variantes nuevas.
- Hero "Calendario RZ Hub": fondo con el rosa del botón (degradado `#e61876` → `#a91054`), sin el halo turquesa.

## 4. Landing — "¿Ya eres parte del Reto Zapopan?"

Degradado más saturado con la paleta del botón (`#e61876` → `#a91054`) y un glow rosa adicional para que el difuminado no se vea lavado.

## 5. Mentores — "¿Qué significa cada rol?"

`roleStyles.js` pasa a una escala rosa (rosa fuerte / medio / oscuro) en lugar de azul, turquesa y morado. En la cara trasera de la tarjeta (al hacer clic) se garantiza contraste: fondo rosa saturado con texto blanco, para que el contenido sea legible.

## 6. Perks — "Explora tus Ventajas"

Estandarizar `PerkBentoCard`: una sola estructura de card (mismo fondo claro rosado, mismo radio, mismo bloque de icono, mismo hover) y un solo tipo de CTA (`outline`). Se eliminan las variantes turquesa/rose/wide/tall con estilos distintos; el bento conserva los tamaños de grid pero no colores diferentes. El estado "activado" mantiene su indicador pero con el mismo formato.

## 7. Recursos — hero "Recursos para tu Startup"

Fondo del hero al rosa del botón (mismo degradado que Calendario) para que ambas vistas coincidan.

## 8. Perfil — card de reconocimiento

Quitar el velo blanco que borra el contenido y usar fondo rosa sólido/degradado de marca con texto blanco, asegurando legibilidad de título, subtítulo y descripción.

## Notas técnicas

- Los valores viven ya en `src/styles.css` (`--color-primary: #E61876`, `--color-primary-dim: #a91054`). Se añade un token de tinte para el hover de cards (`primary` al 4-6%) y una sombra rosa reutilizable; no se hardcodean hex en los componentes.
- Cambios exclusivamente de presentación: no se toca lógica, datos ni rutas (salvo el campo de color de tema en los eventos mock, que es puramente visual).
