import { createFileRoute } from '@tanstack/react-router'
import DraftTable from '@/components/table'
export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
        <div className="flex h-screen bg-background text-fuchsia-900">
          <DraftTable />
        </div>
  )
}
