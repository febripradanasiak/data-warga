import { useState } from 'react'
import { createKK } from '../services/kkService'

const initial = {
  noKK: '',
  namaKepala: '',
  nikKepala: '',
  blok: '',
  noRumah: '',
  noHp: '',
  statusTinggal: 'Tetap',
  jumlahAnggota: '1',
  keterangan: '',
}

function Field({ label, children, hint }) {
  return (
    <label className="flex flex-col gap-space-2xs">
      <span className="font-label-md text-label-md text-on-surface">{label}</span>
      {children}
      {hint && <span className="font-body-sm text-body-sm text-on-surface-variant">{hint}</span>}
    </label>
  )
}

const inputCls = 'w-full rounded-lg bg-surface-container-low px-space-md py-space-sm font-body-md text-body-md text-on-surface outline-none placeholder:text-on-surface-variant/50'

export default function KKFormModal({ open, onClose, onSaved }) {
  const [form, setForm] = useState(initial)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  if (!open) return null

  function set(key, value) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  function valid() {
    if (form.noKK.replace(/\D/g, '').length !== 16) return 'No. KK harus 16 digit angka.'
    if (!form.namaKepala.trim()) return 'Nama kepala keluarga wajib diisi.'
    if (!form.blok.trim() || !form.noRumah.trim()) return 'Blok dan No. rumah wajib diisi.'
    return ''
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const msg = valid()
    if (msg) {
      setError(msg)
      return
    }
    setSaving(true)
    setError('')
    try {
      await createKK({ ...form, alamat: `Blok ${form.blok.trim().toUpperCase()} No. ${form.noRumah.trim()}` })
      setForm(initial)
      onSaved?.()
      onClose()
    } catch (err) {
      setError(err.message || 'Gagal menyimpan data.')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 bg-on-surface/60 backdrop-blur-sm flex items-end sm:items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-surface-container-lowest w-full max-w-md rounded-t-2xl sm:rounded-2xl p-space-lg shadow-xl flex flex-col gap-space-md animate-fade-in max-h-[90vh] overflow-y-auto"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-primary text-[24px]">person_add</span>
            <h3 className="font-headline-sm text-headline-sm text-on-surface">Tambah KK Baru</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup form"
            className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>
        {error && <div className="bg-error-container rounded-lg p-space-sm font-body-sm text-body-sm text-on-error-container">{error}</div>}
        <FormFields form={form} set={set} inputCls={inputCls} />
        <button
          type="submit"
          disabled={saving}
          className="w-full py-space-sm rounded-lg bg-primary text-on-primary font-label-md text-label-md disabled:opacity-60"
        >
          {saving ? 'Menyimpan…' : 'Simpan ke Supabase'}
        </button>
      </form>
    </div>
  )
}

function FormFields({ form, set, inputCls }) {
  return (
    <>
      <Field label="No. Kartu Keluarga (16 digit)" hint="Contoh: 3273010101010001">
        <input className={inputCls} inputMode="numeric" maxLength={16} placeholder="16 digit No. KK" value={form.noKK} onChange={(e) => set('noKK', e.target.value.replace(/\D/g, ''))} />
      </Field>
      <Field label="Nama Kepala Keluarga">
        <input className={inputCls} placeholder="Nama lengkap" value={form.namaKepala} onChange={(e) => set('namaKepala', e.target.value)} />
      </Field>
      <div className="grid grid-cols-2 gap-space-sm">
        <Field label="Blok">
          <input className={inputCls} placeholder="C" value={form.blok} onChange={(e) => set('blok', e.target.value.toUpperCase())} />
        </Field>
        <Field label="No. Rumah">
          <input className={inputCls} placeholder="14" value={form.noRumah} onChange={(e) => set('noRumah', e.target.value)} />
        </Field>
      </div>
      <div className="grid grid-cols-2 gap-space-sm">
        <Field label="NIK (opsional)">
          <input className={inputCls} inputMode="numeric" maxLength={16} placeholder="16 digit NIK" value={form.nikKepala} onChange={(e) => set('nikKepala', e.target.value.replace(/\D/g, ''))} />
        </Field>
        <Field label="No. HP (opsional)">
          <input className={inputCls} inputMode="tel" placeholder="08xx…" value={form.noHp} onChange={(e) => set('noHp', e.target.value)} />
        </Field>
      </div>
      <div className="grid grid-cols-2 gap-space-sm">
        <Field label="Status Tinggal">
          <select className={inputCls} value={form.statusTinggal} onChange={(e) => set('statusTinggal', e.target.value)}>
            <option>Tetap</option>
            <option>Kontrak</option>
            <option>Kos</option>
            <option>Menumpang</option>
          </select>
        </Field>
        <Field label="Jumlah Anggota">
          <input className={inputCls} type="number" min={1} value={form.jumlahAnggota} onChange={(e) => set('jumlahAnggota', e.target.value)} />
        </Field>
      </div>
      <Field label="Keterangan (opsional)">
        <textarea className={`${inputCls} min-h-[72px]`} placeholder="Catatan tambahan…" value={form.keterangan} onChange={(e) => set('keterangan', e.target.value)} />
      </Field>
    </>
  )
}
