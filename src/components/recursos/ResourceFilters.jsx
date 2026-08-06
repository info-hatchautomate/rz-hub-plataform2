const FILTERS = [
  { value: "Todos", label: "Todos" },
  { value: "Validación", label: "Validación" },
  { value: "Crecimiento", label: "Crecimiento" },
  { value: "Escalamiento", label: "Escalamiento" },
];

export default function ResourceFilters({ active, onChange }) {
  return (
    <div className="flex flex-wrap gap-4 border-b border-slate-200 pb-4">
      {FILTERS.map((f) => {
        const isActive = active === f.value;
        return (
          <button
            key={f.value}
            onClick={() => onChange(f.value)}
            className={
              isActive
                ? "btn-base btn-primary btn-sm !px-6"
                : "btn-base btn-subtle btn-sm !px-6"
            }
          >
            {f.label}
          </button>
        );
      })}
    </div>
  );
}
