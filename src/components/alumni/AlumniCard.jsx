import Badge from "../common/Badge.jsx";
import LockedTeaser from "../common/LockedTeaser.jsx";
import Button from "../common/Button.jsx";
import { resolvePhoto } from "@/lib/assetFallbacks";


/**
 * AlumniCard — tarjeta para el directorio de alumni egresados.
 * Recibe el objeto `alumnus` completo y un `onViewProfile(alumnus)` opcional.
 */
export default function AlumniCard({ alumnus, onViewProfile, locked = false, onUnlock }) {
  if (locked) return <LockedTeaser variant="alumni" onUnlock={onUnlock} />;
  const {
    fullName,
    startupName,
    industry,
    industryIcon,
    programType,
    generationYear,
    badge,
    photoUrl,
  } = alumnus;

  return (
    <div className="card-lift bg-surface-container-lowest rounded-lg overflow-hidden group border border-transparent shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
      <div className="relative h-48">
        <img
          alt={fullName}
          src={resolvePhoto(photoUrl)}
          className="w-full h-full object-cover"
        />
        {badge ? (
          <div className="absolute top-4 right-4">
            <Badge variant={badge}>{badge}</Badge>
          </div>
        ) : null}
      </div>
      <div className="p-6 space-y-4">
        <div>
          <span className="text-[10px] font-extrabold text-primary tracking-widest uppercase bg-primary-container/20 px-2 py-1 rounded-md">
            Reto Zapopan {generationYear}
          </span>
          <h3 className="text-xl font-bold text-on-surface mt-2">{fullName}</h3>
        </div>
        <div className="space-y-1">
          <p className="text-sm font-semibold text-secondary">{startupName}</p>
          <p className="text-xs text-on-surface-variant flex items-center gap-1">
            {industryIcon ? (
              <span className="material-symbols-outlined text-sm">{industryIcon}</span>
            ) : null}
            {industry}
          </p>
        </div>
        <div className="pt-4 flex items-center justify-between border-t border-surface-container-high">
          <Button type="button" size="sm" onClick={() => onViewProfile?.(alumnus)}>
            Ver Perfil
          </Button>

          <span className="text-[10px] font-bold text-outline uppercase tracking-widest">
            {programType}
          </span>
        </div>
      </div>
    </div>
  );
}
