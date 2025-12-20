import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard")({
  component: Dashboard,
});

export function Dashboard() {
  return (
    <div className="flex h-screen bg-background text-fuchsia-900">
      <p>HI</p>
    </div>
  );
}
