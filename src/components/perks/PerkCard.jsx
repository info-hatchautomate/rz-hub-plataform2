import LockedTeaser from "../common/LockedTeaser.jsx";
import Button from "../common/Button.jsx";

export default function PerkCard({ perk, onOpen, locked = false, onUnlock }) {
  if (locked) return <LockedTeaser variant="perk" onUnlock={onUnlock} />;
  return (
    <div className="card-lift bg-white rounded-3xl p-6 border border-slate-100 shadow-sm flex flex-col justify-between relative group">
      <div className="space-y-4">
        <div className="flex justify-between items-start">
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-primary/10 text-primary">
            <span className="material-symbols-outlined text-2xl">{perk.icon}</span>
          </div>
          <span className="bg-primary/10 text-primary text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
            {perk.status}
          </span>
        </div>
        <div>
          <h4 className="text-xl font-bold text-slate-800">{perk.name}</h4>
          <p className="text-xs text-slate-500 mt-1 leading-relaxed">{perk.bannerDesc}</p>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-between gap-3 border-t border-slate-50 pt-4">
        <span className="text-xs font-bold text-primary">{perk.shortOffer}</span>
        <Button variant="outline" size="sm" onClick={() => onOpen(perk)}>
          Activar <span className="material-symbols-outlined text-sm">bolt</span>
        </Button>
      </div>
    </div>
  );
}
