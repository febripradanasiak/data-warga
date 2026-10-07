import { user } from '../data/beranda'

export default function GreetingCard() {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md relative overflow-hidden">
      <div className="absolute -right-6 -bottom-6 w-28 h-28 rounded-full bg-primary-fixed/20 pointer-events-none blur-2xl" />

      <div className="flex items-start justify-between gap-space-sm">
        <div className="flex flex-col min-w-0">
          <div className="flex items-center gap-space-xs text-on-surface-variant">
            <span className="material-symbols-outlined text-[16px] text-primary">location_on</span>
            <span className="font-label-sm text-label-sm truncate">{user.location}</span>
          </div>
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface mt-space-2xs tracking-tight">
            Halo, {user.name}
          </h1>
        </div>
        <div
          className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-on-primary shrink-0 shadow-sm"
          title="Terverifikasi"
        >
          <span className="material-symbols-outlined fill text-[18px]">verified</span>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-space-xs">
        <span className="inline-flex items-center gap-space-2xs px-space-sm py-space-2xs rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
          <span className="material-symbols-outlined text-[14px]">home</span>
          {user.address}
        </span>
        <span className="inline-flex items-center gap-space-2xs px-space-sm py-space-2xs rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          Akun Terverifikasi
        </span>
      </div>

      <div className="rounded-lg bg-surface-container-low p-space-md flex items-center justify-between mt-space-xs gap-space-sm">
        <div className="flex items-center gap-space-sm min-w-0">
          <div className="w-9 h-9 rounded-full bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm shrink-0">
            <span className="material-symbols-outlined text-[20px]">account_balance_wallet</span>
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-label-sm text-label-sm text-on-surface-variant">Saldo Kas RT Terkini</span>
            <span className="font-headline-sm text-headline-sm text-primary font-bold">{user.kasBalance}</span>
          </div>
        </div>
        <button
          className="px-space-sm py-space-xs rounded-full bg-primary-container text-on-primary-container font-label-sm text-label-sm hover:opacity-90 transition-opacity shrink-0"
          type="button"
        >
          Detail
        </button>
      </div>
    </div>
  )
}
