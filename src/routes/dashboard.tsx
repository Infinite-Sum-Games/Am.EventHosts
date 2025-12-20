import { useQueryClient } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import DraftTable from "@/components/table";
export const Route = createFileRoute("/dashboard")({
  component: Dashboard,
});

export function Dashboard() {
  const queryClient = useQueryClient();
  return (
    <div className="flex h-screen bg-background text-fuchsia-900">
      <p>HI</p>
      <DraftTable />
    </div>

  );
}
