import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL?.trim()
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY?.trim()

export const supabaseConfigError = (() => {
  if (!supabaseUrl || !supabaseAnonKey) {
    return (
      'Konfigurasi Supabase belum diisi. Isi VITE_SUPABASE_URL & VITE_SUPABASE_ANON_KEY ' +
      'di file .env (root project, sejajar package.json) lalu restart `npm run dev`.'
    )
  }
  try {
    const u = new URL(supabaseUrl)
    if (!u.hostname.endsWith('.supabase.co')) {
      return `VITE_SUPABASE_URL tidak valid: "${supabaseUrl}". Harusnya seperti https://xyzcompany.supabase.co`
    }
  } catch {
    return `VITE_SUPABASE_URL tidak valid: "${supabaseUrl}".`
  }
  return ''
})()

if (supabaseConfigError) {
  console.warn('[WargaKu] ' + supabaseConfigError)
}

// Jangan createClient dengan string kosong — itu selalu berakhir jadi
// "TypeError: Failed to fetch". Pakai URL dummy agar import tidak crash,
// tapi semua query akan melempar error konfigurasi yang jelas (lihat kkService).
const safeUrl = supabaseConfigError ? 'https://supabase-not-configured.supabase.co' : supabaseUrl
const safeKey = supabaseConfigError ? 'supabase-not-configured' : supabaseAnonKey

export const supabase = createClient(safeUrl, safeKey)
