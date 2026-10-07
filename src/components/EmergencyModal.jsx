import { emergencyContacts } from '../data/beranda'

export default function EmergencyModal({ open, onClose }) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 bg-on-surface/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-space-md">
      <div className="bg-surface-container-lowest w-full max-w-sm rounded-2xl p-space-lg shadow-xl flex flex-col gap-space-md animate-fade-in">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-space-xs text-error">
            <span className="material-symbols-outlined text-[24px]">emergency</span>
            <h3 className="font-headline-sm text-headline-sm">Panggilan Darurat</h3>
          </div>
          <button
            className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-on-surface"
            onClick={onClose}
            type="button"
            aria-label="Tutup modal darurat"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <p className="font-body-sm text-body-sm text-on-surface-variant">
          Hubungi layanan darurat atau pengurus lingkungan segera jika mendapati situasi genting.
        </p>

        <div className="flex flex-col gap-space-xs">
          {emergencyContacts.map((contact) => {
            const danger = contact.tone === 'danger'
            return (
              <a
                key={contact.title}
                href={contact.href}
                className={`flex items-center justify-between p-space-sm rounded-lg transition-colors ${
                  danger ? 'bg-error-container hover:opacity-90' : 'bg-surface-container-low hover:bg-surface-container'
                }`}
              >
                <div className="flex items-center gap-space-sm">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center ${contact.iconWrap}`}>
                    <span className="material-symbols-outlined text-[20px]">{contact.icon}</span>
                  </div>
                  <div className="flex flex-col">
                    <span
                      className={`font-label-md text-label-md ${danger ? 'text-on-error-container' : 'text-on-surface'}`}
                    >
                      {contact.title}
                    </span>
                    <span
                      className={`font-body-sm text-body-sm ${
                        danger ? 'text-on-error-container' : 'text-on-surface-variant'
                      }`}
                    >
                      {contact.subtitle}
                    </span>
                  </div>
                </div>
                <span className={`material-symbols-outlined text-[20px] ${danger ? 'text-error' : 'text-primary'}`}>
                  call
                </span>
              </a>
            )
          })}
        </div>

        <button
          className="w-full py-space-sm rounded-lg bg-surface-container text-on-surface font-label-md text-label-md"
          onClick={onClose}
          type="button"
        >
          Tutup
        </button>
      </div>
    </div>
  )
}
