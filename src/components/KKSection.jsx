import KKList from './KKList'

export default function KKSection({ onAdd, refreshKey }) {
  return (
    <div className="flex flex-col gap-space-sm">
      <button
        type="button"
        onClick={onAdd}
        className="w-full rounded-xl bg-primary text-on-primary p-space-md shadow-sm flex items-center justify-center gap-space-xs font-label-lg text-label-lg hover:opacity-90"
      >
        <span className="material-symbols-outlined text-[20px]">person_add</span>
        Tambah KK Baru
      </button>
      <KKList refreshKey={refreshKey} />
    </div>
  )
}
