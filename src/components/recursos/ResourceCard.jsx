const categoryStyles = {
  "Validación": { pill: "bg-primary/10 text-primary", emoji: "" },
  "Crecimiento": { pill: "bg-primary/10 text-primary", emoji: "" },
  "Escalamiento": { pill: "bg-primary/10 text-primary", emoji: "" },
};

const formatIcons = {
  PDF: "picture_as_pdf",
  XLSX: "table_chart",
  DOCX: "description",
  PPT: "slideshow",
  PPTX: "slideshow",
};

function initials(name = "") {
  return name
    .replace(/\(.*?\)/g, "")
    .trim()
    .split(/\s+/)
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

import LockedTeaser from "../common/LockedTeaser.jsx";

export default function ResourceCard({ resource, onPreview, locked = false, onUnlock }) {
  if (locked) return <LockedTeaser variant="resource" onUnlock={onUnlock} />;
  const style = categoryStyles[resource.category] || categoryStyles["Crecimiento"];
  const icon = formatIcons[resource.format] || "description";
  const isAlumni = resource.contributorType === "alumni";

  return (
    <div className="card-lift bg-white rounded-3xl border border-slate-200/60 p-6 shadow-sm flex flex-col relative overflow-hidden">
      <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -z-10" />

      <div className="mb-4 flex justify-between items-start">
        <span className={`${style.pill} text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full`}>
          {style.emoji} {resource.category}
        </span>
        <span className="material-symbols-outlined text-slate-300 text-3xl">{icon}</span>
      </div>

      <h3 className="text-xl font-bold mb-2 text-slate-800">
        {resource.title}
      </h3>
      <p className="text-slate-500 text-sm mb-6 flex-1">{resource.description}</p>

      <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-2xl mb-6 border border-slate-100">
        {isAlumni ? (
          <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center text-primary text-xs font-bold">
            {initials(resource.contributorDisplayName)}
          </div>
        ) : (
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold">
            RZ
          </div>
        )}
        <div>
          <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">
            {isAlumni ? "Aportado por Alumni" : "Recurso Oficial"}
          </div>
          <div className="text-xs font-bold text-slate-800">{resource.contributorDisplayName}</div>
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-slate-100">
        <div className="flex items-center gap-1.5 text-slate-500" title="Descargas">
          <span className="material-symbols-outlined text-lg text-success">download_done</span>
          <span className="text-xs font-bold">{resource.downloadCount.toLocaleString()}</span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => onPreview(resource)}
            className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
            title="Vista Previa"
          >
            <span className="material-symbols-outlined text-[20px]">visibility</span>
          </button>
          <a
            href={resource.fileUrl}
            download
            className="btn-base btn-primary btn-sm"
          >
            Descargar
          </a>
        </div>
      </div>
    </div>
  );
}
