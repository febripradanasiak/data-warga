-- ============================================================
-- WargaKu — Skema Database Supabase
-- Jalankan di: Supabase Dashboard → SQL Editor → New Query
-- ============================================================

-- 1) Tabel induk Kepala Keluarga
create table if not exists public.kepala_keluarga (
  id uuid primary key default gen_random_uuid(),
  no_kk varchar(16) not null unique,
  nama_kepala_keluarga text not null,
  nik_kepala varchar(16),
  alamat text not null default '',
  blok varchar(10) not null default '',
  no_rumah varchar(10) not null default '',
  rt varchar(3) not null default '04',
  rw varchar(3) not null default '08',
  kelurahan text not null default 'Sukamaju',
  no_hp varchar(16),
  status_tinggal text not null default 'Tetap'
    check (status_tinggal in ('Tetap', 'Kontrak', 'Kos', 'Menumpang')),
  status_verifikasi text not null default 'Menunggu'
    check (status_verifikasi in ('Terverifikasi', 'Menunggu', 'Ditolak')),
  jumlah_anggota integer not null default 1 check (jumlah_anggota >= 1),
  keterangan text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- 2) Tabel anggota keluarga (satu KK punya banyak anggota)
create table if not exists public.anggota_keluarga (
  id uuid primary key default gen_random_uuid(),
  kk_id uuid not null references public.kepala_keluarga (id) on delete cascade,
  nik varchar(16),
  nama_lengkap text not null,
  tanggal_lahir date,
  jenis_kelamin text check (jenis_kelamin in ('L', 'P')),
  hubungan text not null default 'Anggota Keluarga',
  created_at timestamptz not null default now()
);

-- 3) Index untuk pencarian cepat
create index if not exists idx_kk_nama on public.kepala_keluarga (nama_kepala_keluarga);
create index if not exists idx_kk_blok on public.kepala_keluarga (blok);
create index if not exists idx_anggota_kk on public.anggota_keluarga (kk_id);

-- 4) Trigger auto-update updated_at
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists trg_kk_updated_at on public.kepala_keluarga;
create trigger trg_kk_updated_at
  before update on public.kepala_keluarga
  for each row execute function public.set_updated_at();

-- 5) Row Level Security: buka akses baca publik (data listing),
--    tulis dibatasi service_role ATAU sesuaikan dengan auth kamu.
alter table public.kepala_keluarga enable row level security;
alter table public.anggota_keluarga enable row level security;

drop policy if exists "kk_read_all" on public.kepala_keluarga;
create policy "kk_read_all"
  on public.kepala_keluarga for select
  using (true);

drop policy if exists "kk_insert_all" on public.kepala_keluarga;
create policy "kk_insert_all"
  on public.kepala_keluarga for insert
  with check (true);

drop policy if exists "kk_update_all" on public.kepala_keluarga;
create policy "kk_update_all"
  on public.kepala_keluarga for update
  using (true);

drop policy if exists "anggota_read_all" on public.anggota_keluarga;
create policy "anggota_read_all"
  on public.anggota_keluarga for select
  using (true);

drop policy if exists "anggota_insert_all" on public.anggota_keluarga;
create policy "anggota_insert_all"
  on public.anggota_keluarga for insert
  with check (true);

-- 6) Contoh seed (opsional — hapus jika tidak perlu)
/*
insert into public.kepala_keluarga (no_kk, nama_kepala_keluarga, nik_kepala, alamat, blok, no_rumah, no_hp, status_tinggal, status_verifikasi, jumlah_anggota)
values
  ('3273010101010001', 'Bambang Prakoso', '3273010101800001', 'Blok C No. 14', 'C', '14', '081234567890', 'Tetap', 'Terverifikasi', 4),
  ('3273010101010002', 'Hendra Gunawan', '3273010101750002', 'Blok B No. 07', 'B', '07', '081298765432', 'Tetap', 'Terverifikasi', 3);
*/
