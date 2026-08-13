import { resolveEventImage } from "@/lib/assetFallbacks";
import Button from "../common/Button.jsx";

function formatDate(iso) {
  const d = new Date(iso);
  const months = ["ENE", "FEB", "MAR", "ABR", "MAY", "JUN", "JUL", "AGO", "SEP", "OCT", "NOV", "DIC"];
  return { day: d.getDate(), month: months[d.getMonth()], year: d.getFullYear() };
}

function formatDateLong(iso) {
  const { day, month, year } = formatDate(iso);
  return `${month} ${day}, ${year}`;
}

export default function FeaturedEventHero({ event }) {
  if (!event) return null;

  return (
    <div className="relative max-w-6xl">
      <div className="card-lift relative bg-white rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-slate-100">
        <div className="w-full md:w-[40%] aspect-[4/3] md:aspect-square rounded-3xl overflow-hidden shadow-2xl bg-slate-100">
          <img
            src={resolveEventImage(event.imageUrl)}
            alt={event.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-grow space-y-6">
          <div className="flex items-center gap-4">
            <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">
              DESTACADO
            </span>
            <span className="text-slate-400 text-sm font-bold uppercase tracking-wider">
              {formatDateLong(event.startDatetime)}
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-800 leading-[1.1] tracking-tight">
            {event.title}
          </h2>
          <p className="text-slate-500 text-xl leading-relaxed font-medium max-w-2xl">
            {event.description}
          </p>
          <div className="flex items-center gap-4 pt-4">
            <Button variant="primary" size="lg">
              Registrarse Ahora
            </Button>
            <Button variant="outline" aria-label="Compartir evento" className="!px-5">
              <span className="material-symbols-outlined text-2xl">share</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
