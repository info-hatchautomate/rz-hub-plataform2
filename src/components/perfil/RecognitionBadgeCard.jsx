export default function RecognitionBadgeCard({ recognition }) {
  if (!recognition) return null;
  const { emoji, title, subtitle, description } = recognition;

  return (
    <div className="relative overflow-hidden bg-brand-gradient rounded-3xl p-6 text-white shadow-lg">
      <div className="relative z-10">
        <div className="text-[10px] font-black uppercase tracking-widest opacity-90 mb-3">
          Reconocimiento
        </div>
        <div className="flex items-center gap-3 mb-4">
          {emoji ? <span className="text-4xl">{emoji}</span> : null}
          <div>
            <div className="font-black text-base leading-tight">{title}</div>
            <div className="text-white/80 text-xs">{subtitle}</div>
          </div>
        </div>
        {description && <p className="text-white/90 text-xs leading-relaxed">{description}</p>}
      </div>
    </div>
  );
}
