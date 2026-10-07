export default function ChatBanner() {
  return (
    <div className="bg-surface-container rounded-xl p-space-md flex items-center justify-between gap-space-sm">
      <div className="flex items-center gap-space-sm min-w-0">
        <div className="w-10 h-10 rounded-full bg-surface-container-lowest flex items-center justify-center text-primary shrink-0 shadow-sm">
          <span className="material-symbols-outlined text-[20px]">forum</span>
        </div>
        <div className="flex flex-col min-w-0">
          <span className="font-label-md text-label-md text-on-surface truncate">Grup Diskusi Warga RT 04</span>
          <span className="font-body-sm text-body-sm text-on-surface-variant">Ada 12 pesan baru hari ini</span>
        </div>
      </div>
      <button
        className="px-space-md py-space-xs rounded-full bg-primary text-on-primary font-label-sm text-label-sm shadow-sm hover:opacity-90 shrink-0"
        type="button"
      >
        Buka Chat
      </button>
    </div>
  )
}
