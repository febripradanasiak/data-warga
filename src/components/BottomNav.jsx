import { bottomNav } from '../data/beranda'

export default function BottomNav({ active = 'beranda', onNavigate }) {
  return (
    <nav className="fixed bottom-0 w-full z-50 pb-safe bg-surface/90 backdrop-blur-xl shadow-tabbar">
      <div className="flex justify-around items-center h-16 px-space-xs max-w-xl mx-auto">
        {bottomNav.map((item) => {
          const isActive = item.path === active
          return (
            <a
              key={item.path}
              href="#"
              aria-current={isActive ? 'page' : undefined}
              onClick={(e) => {
                e.preventDefault()
                onNavigate?.(item.path)
              }}
              className={`flex flex-col items-center justify-center gap-space-2xs min-w-[64px] min-h-[48px] py-space-xs transition-colors ${
                isActive ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              <span className="material-symbols-outlined text-[24px]">{item.icon}</span>
              <span className="font-label-sm text-label-sm tracking-tight">{item.label}</span>
            </a>
          )
        })}
      </div>
    </nav>
  )
}
