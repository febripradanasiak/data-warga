import { quickAccess } from '../data/beranda'

export default function QuickAccess({ onEmergency }) {
  return (
    <section className="flex flex-col gap-space-sm">
      <div className="flex items-center justify-between">
        <h2 className="font-title-md text-title-md text-on-surface">Akses Cepat Warga</h2>
        <span className="font-label-sm text-label-sm text-primary">Layanan Mandiri</span>
      </div>

      <div className="grid grid-cols-3 gap-space-sm">
        {quickAccess.map((item) => (
          <button
            key={item.title}
            type="button"
            className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col items-center text-center gap-space-xs hover:bg-surface-container-low transition-colors group"
          >
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform ${item.circle}`}
            >
              <span className="material-symbols-outlined text-[24px]">{item.icon}</span>
            </div>
            <span className="font-label-md text-label-md text-on-surface line-clamp-1">{item.title}</span>
            <span className="font-label-sm text-[10px] text-on-surface-variant">{item.subtitle}</span>
          </button>
        ))}

        <button
          type="button"
          onClick={onEmergency}
          className="bg-error-container rounded-xl p-space-md shadow-sm flex flex-col items-center text-center gap-space-xs hover:opacity-95 transition-opacity group"
        >
          <div className="w-12 h-12 rounded-full bg-error flex items-center justify-center text-on-error group-hover:scale-105 transition-transform animate-pulse">
            <span className="material-symbols-outlined text-[24px]">e911_emergency</span>
          </div>
          <span className="font-label-md text-label-md text-on-error-container line-clamp-1">Nomor Darurat</span>
          <span className="font-label-sm text-[10px] text-error font-bold">24 Jam Panggil</span>
        </button>
      </div>
    </section>
  )
}
