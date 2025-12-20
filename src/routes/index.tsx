import { createFileRoute } from '@tanstack/react-router'
export const Route = createFileRoute('/')({ component: App })

function App() {
  

  return (
    <div className="min-h-screen from-slate-900 via-slate-800 to-slate-900">
      <p className='text-white'>Hellp</p>
    </div>
  )
}
