import { supabase } from '../lib/supabase'

const TABLE = 'kepala_keluarga'

export async function fetchKKList({ search = '' } = {}) {
  let query = supabase
    .from(TABLE)
    .select('*')
    .order('created_at', { ascending: false })
    .limit(100)

  if (search.trim()) {
    const q = search.trim()
    query = query.or(`nama_kepala_keluarga.ilike.%${q}%,no_kk.ilike.%${q}%,blok.ilike.%${q}%`)
  }

  const { data, error } = await query
  if (error) throw error
  return data ?? []
}

export async function createKK(payload) {
  const row = {
    no_kk: payload.noKK,
    nama_kepala_keluarga: payload.namaKepala,
    nik_kepala: payload.nikKepala || null,
    alamat: payload.alamat,
    blok: payload.blok,
    no_rumah: payload.noRumah,
    rt: '04',
    rw: '08',
    kelurahan: 'Sukamaju',
    no_hp: payload.noHp || null,
    status_tinggal: payload.statusTinggal,
    status_verifikasi: 'Menunggu',
    jumlah_anggota: Number(payload.jumlahAnggota) || 1,
    keterangan: payload.keterangan || null,
  }

  const { data, error } = await supabase.from(TABLE).insert(row).select().single()
  if (error) throw error
  return data
}

export async function fetchKKCount() {
  const { count, error } = await supabase.from(TABLE).select('*', { count: 'exact', head: true })
  if (error) throw error
  return count ?? 0
}
