import { ReactNode } from "react";
import { useRouter, createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { axiosClient } from "@/lib/axios";
import { api } from "@/lib/api";
import { DashboardHeader } from "@/components/dashboard";
import EventTableView from "@/components/event-table";

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
      <div className="flex h-screen items-center justify-center">
        Loading Please Wait...
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

export const Route = createFileRoute("/dashboard")({
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
