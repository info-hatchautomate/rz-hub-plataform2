import LockedTeaser from "../common/LockedTeaser.jsx";
import Button from "../common/Button.jsx";

const MONTHS = ["ENE", "FEB", "MAR", "ABR", "MAY", "JUN", "JUL", "AGO", "SEP", "OCT", "NOV", "DIC"];

function fmtDate(iso) {
  const d = new Date(iso);
  return { day: d.getDate(), month: MONTHS[d.getMonth()] };
}

function fmtTime(iso) {
  const d = new Date(iso);
  const hh = String(d.getHours()).padStart(2, "0");
  const mm = String(d.getMinutes()).padStart(2, "0");
  return `${hh}:${mm}h`;
}

function metaIcon(event) {
  if (event.modality === "Online") return "schedule";
  if (event.location) return "location_on";
  return "schedule";
}

function metaLabel(event) {
  if (event.location) return event.location;
  if (event.modality === "Online") return `${fmtTime(event.startDatetime)} · Online`;
  return fmtTime(event.startDatetime);
}

export default function EventTimelineItem({
  event,
  statusLabel = "Próximamente",
  locked = false,
  onUnlock,
}) {
  if (locked) return <LockedTeaser variant="event" onUnlock={onUnlock} />;
  const { day, month } = fmtDate(event.startDatetime);

  return (
    <div className="relative flex flex-col md:flex-row gap-8 items-start group">
      {/* Desktop date marker */}
      <div className="flex-shrink-0 w-52 pt-2 text-right hidden md:block">
        <span className="text-4xl font-black text-slate-500 block">
          {month} {day}
        </span>
        <span className="font-bold uppercase tracking-widest text-sm text-primary">
          {statusLabel}
        </span>
      </div>

      {/* Mobile marker */}
      <div className="md:hidden flex items-center gap-4 mb-2">
        <span className="text-2xl font-black text-primary">
          {month} {day}
        </span>
        <span className="h-px flex-grow bg-primary/20" />
      </div>

      {/* Card */}
      <div className="card-lift flex-grow bg-white p-8 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.02)] border border-slate-100">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary">
                {event.eventType}
              </span>
              <span className="flex items-center gap-1 text-slate-500 text-sm font-medium">
                <span className="material-symbols-outlined text-sm">{metaIcon(event)}</span>
                {metaLabel(event)}
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">{event.title}</h3>
            <p className="text-slate-500 text-lg">{event.description}</p>
          </div>
          <Button variant="primary" className="shrink-0">
            Registrarse
            <span className="material-symbols-outlined">arrow_forward</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
