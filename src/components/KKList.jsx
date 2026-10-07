import { useEffect, useState } from 'react'
import { fetchKKList } from '../services/kkService'

function statusBadge(status) {
  if (status === 'Terverifikasi') return 'bg-primary-fixed text-on-primary-fixed'
  if (status === 'Ditolak') return 'bg-error-container text-on-error-container'
  return 'bg-secondary-fixed text-on-secondary-fixed-variant'
}

export default function KKList({ refreshKey }) {
  const [items, setItems] = useState([])
  const [search, setSearch] = useState('')
  const [debounced, setDebounced] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const t = setTimeout(() => setDebounced(search), 400)
    return () => clearTimeout(t)
  }, [search])

  useEffect(() => {
    let cancelled = false
    async function load() {
      setLoading(true)
      setError('')
      try {
        const rows = await fetchKKList({ search: debounced })
        if (!cancelled) setItems(rows)
      } catch (e) {
        if (!cancelled) setError(e.message || 'Gagal memuat data KK.')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    load()
    return () => {
      cancelled = true
    }
  }, [debounced, refreshKey])

  return (
    <section className="flex flex-col gap-space-sm">
      <div className="flex items-center justify-between">
        <h2 className="font-title-md text-title-md text-on-surface flex items-center gap-space-xs">
          <span className="material-symbols-outlined text-primary text-[20px]">family_restroom</span>
          Daftar Induk Kepala Keluarga (KK)
        </h2>
        <span className="font-label-sm text-label-sm text-on-surface-variant">{items.length} KK</span>
      </div>

      <label className="flex items-center gap-space-xs bg-surface-container-lowest rounded-xl px-space-md py-space-sm shadow-sm">
        <span className="material-symbols-outlined text-[20px] text-on-surface-variant">search</span>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Cari nama, No. KK, atau blok…"
          className="bg-transparent outline-none flex-1 font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/60"
        />
      </label>

      {loading && (
        <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm text-center font-body-md text-body-md text-on-surface-variant">
          Memuat data KK…
        </div>
      )}

      {!loading && error && (
        <div className="bg-error-container rounded-xl p-space-md shadow-sm">
          <p className="font-label-md text-label-md text-on-error-container">Gagal memuat: {error}</p>
          <p className="font-body-sm text-body-sm text-on-error-container mt-space-2xs">
            Pastikan skema SQL sudah dijalankan & kredensial Supabase di .env sudah benar.
          </p>
        </div>
      )}

      {!loading && !error && items.length === 0 && (
        <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm text-center">
          <span className="material-symbols-outlined text-[32px] text-outline">inbox</span>
          <p className="font-label-md text-label-md text-on-surface mt-space-xs">Belum ada data KK</p>
          <p className="font-body-sm text-body-sm text-on-surface-variant">Tambahkan KK baru lewat tombol di bawah.</p>
        </div>
      )}

      {!loading && !error && items.length > 0 && (
        <div className="flex flex-col gap-space-sm">
          {items.map((kk) => (
            <article key={kk.id} className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
              <div className="flex items-start justify-between gap-space-sm">
                <div className="flex items-center gap-space-sm min-w-0">
                  <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-bold shrink-0">
                    {(kk.nama_kepala_keluarga || '?').charAt(0).toUpperCase()}
                  </div>
                  <div className="min-w-0">
                    <p className="font-label-lg text-label-lg text-on-surface truncate">{kk.nama_kepala_keluarga}</p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      No. KK {kk.no_kk} • Blok {kk.blok} No. {kk.no_rumah}
                    </p>
                  </div>
                </div>
                <span className={`px-space-sm py-space-2xs rounded-full font-label-sm text-label-sm shrink-0 ${statusBadge(kk.status_verifikasi)}`}>
                  {kk.status_verifikasi}
                </span>
              </div>
              <div className="flex items-center gap-space-md mt-space-xs font-body-sm text-body-sm text-on-surface-variant">
                <span className="inline-flex items-center gap-space-2xs">
                  <span className="material-symbols-outlined text-[16px]">groups</span>
                  {kk.jumlah_anggota} jiwa
                </span>
                <span className="inline-flex items-center gap-space-2xs">
                  <span className="material-symbols-outlined text-[16px]">home</span>
                  {kk.status_tinggal}
                </span>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}
