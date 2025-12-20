import { createFileRoute } from '@tanstack/react-router'
import EventTableView from '@/components/event-table'
export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
        <div className="flex h-screen bg-background text-fuchsia-900">
          <EventTableView />
        </div>
  )
}
