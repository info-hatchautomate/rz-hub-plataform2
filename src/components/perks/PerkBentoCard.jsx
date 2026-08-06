import Button from "../common/Button.jsx";

/**
 * PerkBentoCard — card estandarizada del bento "Explora tus Ventajas".
 * Todas las cards comparten fondo, radio, bloque de icono, hover y CTA.
 * `variant` sólo controla el ancho dentro del grid de 12 columnas.
 */
const SPANS = {
  wide: "md:col-span-7",
  tall: "md:col-span-5",
  turquoise: "md:col-span-6",
  rose: "md:col-span-6",
};

export default function PerkBentoCard({
  variant = "wide",
  icon,
  title,
  description,
  ctaLabel,
  onCta,
  activated = false,
  activatedDate,
}) {
  const span = SPANS[variant] || SPANS.wide;

  return (
    <div
      className={`${span} card-lift bg-primary/5 border border-primary/15 rounded-3xl p-8 flex flex-col justify-between`}
    >
      <div>
        <div className="bg-primary text-white w-fit p-4 rounded-2xl mb-8">
          <span className="material-symbols-outlined text-4xl">{icon}</span>
        </div>
        <h3 className="text-3xl font-black text-slate-800">{title}</h3>
        <p className="text-slate-500 text-lg mt-2 font-medium">{description}</p>
      </div>
      <div className="mt-8">
        {activated ? (
          <div className="inline-flex items-center gap-3 bg-primary/10 border-2 border-primary text-primary px-6 py-3 rounded-full">
            <span className="material-symbols-outlined text-xl">check_circle</span>
            <div className="text-left">
              <div className="font-black text-sm">Beneficio Activado</div>
              {activatedDate && (
                <div className="text-[10px] uppercase tracking-widest font-bold opacity-70">
                  {activatedDate}
                </div>
              )}
            </div>
          </div>
        ) : (
          <Button variant="outline" onClick={onCta}>
            <span className="material-symbols-outlined text-lg">bolt</span>
            {ctaLabel || "Activar beneficio"}
          </Button>
        )}
      </div>
    </div>
  );
}
