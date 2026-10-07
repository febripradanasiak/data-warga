import { stats } from '../data/beranda'

export default function StatsSection() {
  return (
    <section className="flex flex-col gap-space-sm">
      <div className="flex items-center justify-between">
        <h2 className="font-title-md text-title-md text-on-surface flex items-center gap-space-xs">
          <span className="material-symbols-outlined text-primary text-[20px]">monitoring</span>
          Statistik Lingkungan RT
        </h2>
        <span className="font-label-sm text-label-sm text-on-surface-variant">Bulan Ini</span>
      </div>

      <div className="grid grid-cols-3 gap-space-sm">
        {stats.map((item) => (
          <div
            key={item.label}
            className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between"
          >
            <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center mb-space-sm">
              <span className={`material-symbols-outlined text-[18px] ${item.iconColor}`}>{item.icon}</span>
            </div>
            <div className="flex flex-col">
              {item.suffix ? (
                <div className="flex items-baseline gap-space-2xs">
                  <span className="font-headline-sm text-headline-sm text-on-surface">{item.value}</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">{item.suffix}</span>
                </div>
              ) : (
                <span className="font-headline-sm text-headline-sm text-on-surface">{item.value}</span>
              )}
              <span className="font-label-sm text-label-sm text-on-surface-variant truncate">{item.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
