import { createFileRoute } from "@tanstack/react-router";
import EventTableView from "@/components/event-table";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="flex h-screen flex-col bg-background">
      {/* Top Bar */}
      <header className="relative flex items-center border-b px-6 py-4">
        {/* Left: Logo + Fest Name */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-primary-foreground font-bold">
            A
          </div>
          <span className="text-sm font-medium text-muted-foreground">
            Anokha 2026
          </span>
        </div>

        {/* Center: Page Title */}
        <h1 className="absolute left-1/2 -translate-x-1/2 text-xl font-semibold tracking-tight">
          Organiser Panel
        </h1>

        {/* Right: Logout */}
        <div className="ml-auto">
          <button className="rounded-md border px-4 py-1.5 text-sm font-medium hover:bg-accent">
            Logout
          </button>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 overflow-hidden p-6">
        <div className="h-full rounded-lg border bg-card p-4">
          <EventTableView />
        </div>
      </main>
    </div>
  );
}
