import { user } from '../data/beranda'

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 pt-safe bg-surface/85 backdrop-blur-xl shadow-header">
      <div className="h-16 px-margin-mobile flex items-center justify-between gap-space-sm max-w-xl mx-auto">
        <div className="flex items-center gap-space-sm min-w-0 flex-1">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-on-primary text-[20px]">home</span>
          </div>
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-space-xs">
              <span className="font-title-md text-title-md text-primary truncate leading-tight">WargaKu</span>
              <span className="inline-flex items-center px-space-xs py-space-2xs rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm shrink-0">
                RT 04 / RW 08
              </span>
            </div>
            <span className="font-label-md text-label-md text-on-surface-variant truncate leading-none mt-space-2xs">
              Beranda
            </span>
          </div>
        </div>

        <div className="flex items-center gap-space-xs shrink-0">
          <button
            aria-label="Pemberitahuan"
            type="button"
            className="w-11 h-11 flex items-center justify-center rounded-full text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-colors relative"
          >
            <span className="material-symbols-outlined text-[22px]">notifications</span>
            <span className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-secondary-container ring-2 ring-surface" />
          </button>
          <div className="flex items-center justify-center p-0.5 rounded-full ring-1 ring-outline-variant/30">
            <img alt="Foto profil warga" className="w-8 h-8 rounded-full object-cover" src={user.avatar} />
          </div>
        </div>
      </div>
    </header>
  )
}
