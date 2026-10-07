# WargaKu — Data Warga RT/RW

Portal layanan warga berbasis mobile-web (React + Vite + Tailwind CSS),
diadaptasi dari desain `design/beranda_ringkasan_rt/code.html`.

## Menjalankan

```bash
npm install
npm run dev
```

Buka `http://localhost:5173`.

## Setup Supabase (Data KK)

1. Buat project di [supabase.com](https://supabase.com) → salin **Project URL**
   dan **anon key** dari Settings → API.
2. Jalankan `supabase/schema.sql` di **SQL Editor** Supabase
   (membuat tabel `kepala_keluarga` + `anggota_keluarga` + RLS policy).
3. Salin `.env.example` menjadi `.env` di root, isi kredensial:

```bash
VITE_SUPABASE_URL=https://xyzcompany.supabase.co
VITE_SUPABASE_ANON_KEY=...
```

4. Restart `npm run dev`. Bagian **Daftar Induk KK** di Beranda kini
   membaca dari Supabase; tombol **Tambah KK Baru** menyimpan ke sana.

## Build produksi

```bash
npm run build
npm run preview
```

## Struktur

```
src/
  App.jsx                 # rakitan halaman Beranda
  main.jsx                # entry point React
  index.css               # Tailwind + font Material Symbols + util safe-area
  data/beranda.js         # data dummy (user, statistik, kontak darurat, nav)
  components/
    Header.jsx
    GreetingCard.jsx      # sapaan + saldo kas RT
    StatsSection.jsx
    QuickAccess.jsx       # 5 layanan + tombol darurat
    AnnouncementSection.jsx
    ChatBanner.jsx
    EmergencyModal.jsx
    BottomNav.jsx
```
