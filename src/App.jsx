import { useState } from 'react'
import Header from './components/Header'
import GreetingCard from './components/GreetingCard'
import StatsSection from './components/StatsSection'
import QuickAccess from './components/QuickAccess'
import KKFormModal from './components/KKFormModal'
import KKSection from './components/KKSection'
import AnnouncementSection from './components/AnnouncementSection'
import ChatBanner from './components/ChatBanner'
import EmergencyModal from './components/EmergencyModal'
import BottomNav from './components/BottomNav'

export default function App() {
  const [emergencyOpen, setEmergencyOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('beranda')
  const [kkFormOpen, setKkFormOpen] = useState(false)
  const [kkRefresh, setKkRefresh] = useState(0)

  return (
    <div className="bg-surface font-body-md text-on-surface flex flex-col min-h-screen selection:bg-primary-fixed selection:text-on-primary-fixed">
      <Header />

      <main className="flex flex-col relative w-full pt-16 pb-28 bg-surface min-h-screen">
        <div className="flex flex-col w-full max-w-xl mx-auto">
          <div className="px-margin-mobile pt-space-md pb-space-lg flex flex-col gap-space-lg">
            <GreetingCard />
            <StatsSection />
            <QuickAccess onEmergency={() => setEmergencyOpen(true)} />
            <KKSection onAdd={() => setKkFormOpen(true)} refreshKey={kkRefresh} />
            <AnnouncementSection />
            <ChatBanner />
          </div>

          <EmergencyModal open={emergencyOpen} onClose={() => setEmergencyOpen(false)} />
          <KKFormModal
            open={kkFormOpen}
            onClose={() => setKkFormOpen(false)}
            onSaved={() => setKkRefresh((n) => n + 1)}
          />
        </div>
      </main>

      <BottomNav active={activeTab} onNavigate={setActiveTab} />
    </div>
  )
}
