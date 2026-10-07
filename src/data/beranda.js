export const user = {
  name: 'Pak Bambang Prakoso',
  location: 'RT 04 / RW 08 • Kelurahan Sukamaju',
  address: 'Warga Tetap • Blok C No. 14',
  avatar:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBDWdz4wdUV4-9ET3u8_0rEDZXSEilgOuYkHyZHgRDjKKf1Mx6xKXx4n1d7AwrlJOMPD1REuBHCV7UPeEdsvmbKGWbdiKjVEvHGqVGx7H40b8r-rtm6li_X89dbpYrkA8_9U6zYUX1tO3X3dkdtcjP4v0wm4-rZ4ao5oEMIWiBrDgRPXRHcJUhhiEgCIQmTJK5I4cVA_a9kX0cEr-hhamTi9gadkmtXn4ij_P1aEHvR',
  kasBalance: 'Rp 14.850.000',
}

export const stats = [
  { icon: 'groups', value: '184', label: 'Total Jiwa', iconColor: 'text-primary' },
  { icon: 'family_restroom', value: '52', label: 'Kepala Keluarga', iconColor: 'text-secondary' },
  { icon: 'domain', value: '48', suffix: '/52', label: 'Terisi (4 Kosong)', iconColor: 'text-tertiary' },
]

export const quickAccess = [
  { icon: 'payments', title: 'Bayar Iuran', subtitle: 'Bulan Okt Aktif', circle: 'bg-primary-fixed text-on-primary-fixed' },
  { icon: 'description', title: 'Surat Pengantar', subtitle: 'Online Cepat', circle: 'bg-surface-variant text-tertiary' },
  { icon: 'photo_camera', title: 'Lapor Masalah', subtitle: 'Kamera & Lokasi', circle: 'bg-secondary-fixed text-on-secondary-fixed-variant' },
  { icon: 'person_pin_circle', title: 'Tamu 1x24 Jam', subtitle: 'Wajib Lapor', circle: 'bg-surface-container-high text-on-surface' },
  { icon: 'flashlight_on', title: 'Jadwal Ronda', subtitle: 'Pos Kamling', circle: 'bg-surface-container-highest text-primary' },
]

export const heroImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAs5ZPiVvD0XR96guzLtxB6oS3QfTR_vB0HDDN7d9BOCcWYLb30sx5oUsZScPA-yjad2YZasr8MmRd0rHZuBYTjz-23eXFRAxyRybeLcSzh1mLVLX-pX-tcdloCg2J_NohHQYs8t-hfm0NyuXTB_xhFozktX8kfSb0wRDnYUAwmEcx2azwWiP1O4uN27S2ksIYxlkAYXJWILJQ7HkehmiB41auz1zmMrTqcCCgaTN1i'

export const emergencyContacts = [
  {
    icon: 'person',
    iconWrap: 'bg-primary-fixed text-on-primary-fixed',
    title: 'Ketua RT 04 (Bpk. Mulyono)',
    subtitle: '0812-3456-7890',
    href: 'tel:081234567890',
    tone: 'normal',
  },
  {
    icon: 'ambulance',
    iconWrap: 'bg-error text-on-error',
    title: 'Ambulans Gawat Darurat',
    subtitle: '118 / 119',
    href: 'tel:118',
    tone: 'danger',
  },
  {
    icon: 'fire_truck',
    iconWrap: 'bg-secondary-fixed text-on-secondary-fixed-variant',
    title: 'Pemadam Kebakaran (Damkar)',
    subtitle: '113',
    href: 'tel:113',
    tone: 'normal',
  },
  {
    icon: 'local_police',
    iconWrap: 'bg-tertiary-fixed text-on-tertiary-fixed',
    title: 'Polsek Sukamaju',
    subtitle: '110 / (021) 8876-1234',
    href: 'tel:110',
    tone: 'normal',
  },
]

export const bottomNav = [
  { icon: 'roofing', label: 'Beranda', path: 'beranda', active: true },
  { icon: 'description', label: 'Layanan', path: 'layanan', active: false },
  { icon: 'account_balance_wallet', label: 'Kas RT', path: 'kas-rt', active: false },
  { icon: 'admin_panel_settings', label: 'Pengurus', path: 'pengurus', active: false },
]
