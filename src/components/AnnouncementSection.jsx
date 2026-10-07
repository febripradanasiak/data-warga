import { heroImage } from '../data/beranda'

export default function AnnouncementSection() {
  return (
    <section className="flex flex-col gap-space-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-space-xs">
          <h2 className="font-title-md text-title-md text-on-surface">Pengumuman & Agenda</h2>
          <span className="w-2 h-2 rounded-full bg-secondary-container" />
        </div>
        <a className="font-label-sm text-label-sm text-primary hover:underline" href="#">
          Lihat Semua (5)
        </a>
      </div>
      <div className="flex flex-col gap-space-md">
        <article className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm flex flex-col">
          <div className="relative h-36 w-full">
            <img className="w-full h-full object-cover" alt="Gotong royong warga" src={heroImage} />
            <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-transparent to-transparent" />
            <div className="absolute top-space-sm left-space-sm flex items-center gap-space-xs">
              <span className="px-space-sm py-space-2xs rounded-full bg-error text-on-error font-label-sm text-label-sm shadow-sm">Wajib Hadir</span>
              <span className="px-space-sm py-space-2xs rounded-full bg-surface-container-lowest/90 backdrop-blur-md text-on-surface font-label-sm text-label-sm">Kerja Bakti</span>
            </div>
            <div className="absolute bottom-space-sm left-space-sm right-space-sm">
              <span className="font-label-sm text-label-sm text-secondary-fixed">Agenda Utama RT 04</span>
            </div>
          </div>
          <div className="p-space-md flex flex-col gap-space-xs">
            <h3 className="font-headline-sm text-headline-sm text-on-surface leading-snug">Kerja Bakti Saluran Air Menjelang Musim Hujan</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">Pembersihan gorong-gorong dan pemangkasan dahan pohon untuk mengantisipasi luapan air.</p>
            <ScheduleBox />
          </div>
        </article>
        <FoggingCard />
        <RondaCard />
      </div>
    </section>
  )
}

function ScheduleBox() {
  return (
    <div className="mt-space-xs flex flex-col gap-space-2xs font-label-sm text-label-sm text-on-surface-variant bg-surface-container-low p-space-sm rounded-lg">
      <div className="flex items-center gap-space-xs">
        <span className="material-symbols-outlined text-[16px] text-primary">calendar_today</span>
        <span>Minggu, 27 Okt • 07:00 WIB</span>
      </div>
      <div className="flex items-center gap-space-xs">
        <span className="material-symbols-outlined text-[16px] text-primary">location_on</span>
        <span>Titik Kumpul: Balai RT 04</span>
      </div>
    </div>
  )
}

function FoggingCard() {
  return (
    <article className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex items-start gap-space-md">
      <div className="w-12 h-12 rounded-xl bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed shrink-0">
        <span className="material-symbols-outlined text-[24px]">health_and_safety</span>
      </div>
      <div className="flex flex-col min-w-0 flex-1">
        <div className="flex items-center justify-between gap-space-xs">
          <span className="px-space-xs py-space-2xs rounded bg-surface-container font-label-sm text-[10px] text-on-surface-variant uppercase tracking-wider">Edaran Resmi RW</span>
          <span className="font-label-sm text-[11px] text-on-surface-variant">Sabtu, 2 Nov</span>
        </div>
        <h4 className="font-title-md text-title-md text-on-surface mt-space-2xs leading-snug">Jadwal Fogging Nyamuk DBD Serentak RW 08</h4>
        <div className="flex items-center gap-space-xs mt-space-xs text-on-surface-variant font-body-sm text-body-sm">
          <span className="material-symbols-outlined text-[16px] text-secondary">schedule</span>
          <span>Pukul 08:30 WIB - Selesai (Buka ventilasi rumah)</span>
        </div>
      </div>
    </article>
  )
}

function RondaCard() {
  return (
    <article className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm">
      <div className="flex items-center justify-between gap-space-sm">
        <div className="flex items-center gap-space-xs">
          <span className="material-symbols-outlined text-primary text-[20px]">shield</span>
          <h4 className="font-title-md text-title-md text-on-surface">Rekap Ronda Malam Ini</h4>
        </div>
        <span className="px-space-sm py-space-2xs rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm shrink-0">Aktif 22:00 - 05:00</span>
      </div>
      <div className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container-low gap-space-sm">
        <div className="flex items-center gap-space-sm min-w-0">
          <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-bold text-title-md shrink-0">B</div>
          <div className="flex flex-col min-w-0">
            <span className="font-label-lg text-label-lg text-on-surface truncate">Regu B (Blok B & C)</span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">Koordinator: Bpk. Hendra</span>
          </div>
        </div>
        <div className="flex items-center gap-space-2xs shrink-0">
          <span className="font-label-sm text-label-sm text-primary font-bold">5 Petugas</span>
          <span className="material-symbols-outlined text-[16px] text-primary">chevron_right</span>
        </div>
      </div>
    </article>
  )
}
