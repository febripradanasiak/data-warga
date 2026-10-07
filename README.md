# WargaKu — Data Warga RT/RW

Portal layanan warga berbasis mobile-web (React + Vite + Tailwind CSS),
diadaptasi dari desain `design/beranda_ringkasan_rt/code.html`.

## Menjalankan

```bash
npm install
npm run dev
```

Buka `http://localhost:5173`.

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
