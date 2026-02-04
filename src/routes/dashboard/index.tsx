import { ReactNode } from "react";
import { useRouter, createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { axiosClient } from "@/lib/axios";
import { api } from "@/lib/api";
import { DashboardHeader } from "@/components/dashboard";
import EventTableView from "@/components/event-table";
import { Loader2 } from "lucide-react";

type Props = {
  children: ReactNode;
};

export function ProtectedLayout({ children }: Props) {
  const router = useRouter();

  const { isLoading, data, isError } = useQuery({
    queryKey: ["organizer-session"],
    queryFn: async () => {
      const res = await axiosClient.get(api.SESSION);
      return res.data;
    },
    retry: false,
  });

  if (isLoading) {
    return (
      <div className="flex h-screen w-full flex-col items-center justify-center bg-background">
        <div className="relative flex items-center justify-center">
          <div className="relative rounded-full bg-primary p-4 text-primary-foreground">
            <Loader2 className="h-7 w-7 animate-spin" />
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-2">
          <h2 className="text-xl font-semibold tracking-tight">
            {import.meta.env.VITE_EVENT_NAME} {import.meta.env.VITE_EVENT_YEAR} Organizer Console
          </h2>
          <p className="text-sm text-muted-foreground animate-pulse">
            Loading...
          </p>
        </div>
      </div>
    );
  }

  if (isError || !data) {
    router.navigate({ to: "/", replace: true });
    return null;
  }

  return <>{children}</>;
}

export function Dashboard() {
  return (
    <ProtectedLayout>
      <div className="flex h-screen flex-col bg-background">
        <DashboardHeader />
        <main className="flex-1 overflow-hidden">
          <EventTableView />
        </main>
      </div>
    </ProtectedLayout>
  );
}

export const Route = createFileRoute("/dashboard/")({
  // beforeLoad: async () => {
  //   try {
  //     const response = await axiosClient.get(api.SESSION);
  //     return {
  //       user: response.data,
  //     };
  //   } catch (error) {
  //     throw redirect({
  //       to: "/",
  //     });
  //   }
  // },
  component: Dashboard,
});
