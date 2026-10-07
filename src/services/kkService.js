import { supabase, supabaseConfigError } from '../lib/supabase'

const TABLE = 'kepala_keluarga'

function friendlyError(e) {
  // Supabase-js melempar "TypeError: Failed to fetch" untuk semua masalah
  // jaringan: salah URL, project di-pause/dihapus, offline, CORS/ad-blocker.
  if (e instanceof TypeError || e?.message === 'Failed to fetch') {
    throw new Error(
      'Tidak bisa menghubungi Supabase (Failed to fetch). ' +
        'Cek: 1) URL & anon key di .env root sudah benar, 2) project Supabase aktif (tidak paused), ' +
        '3) tabel `kepala_keluarga` + RLS policy sudah dibuat via supabase/schema.sql, ' +
        '4) koneksi internet / matikan ad-blocker. Lalu restart `npm run dev`.',
    )
  }
  throw e
}

function assertConfigured() {
  if (supabaseConfigError) throw new Error(supabaseConfigError)
}

export async function fetchKKList({ search = '' } = {}) {
  assertConfigured()
  try {
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
  } catch (e) {
    friendlyError(e)
  }
}

export async function createKK(payload) {
  assertConfigured()
  try {
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
  } catch (e) {
    friendlyError(e)
  }
}

export async function fetchKKCount() {
  assertConfigured()
  try {
    const { count, error } = await supabase.from(TABLE).select('*', { count: 'exact', head: true })
    if (error) throw error
    return count ?? 0
  } catch (e) {
    friendlyError(e)
  }
}
