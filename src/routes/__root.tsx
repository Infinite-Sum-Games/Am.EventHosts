import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import type { QueryClient } from "@tanstack/react-query";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { NotFound } from "./not-found";
export type RouterContext = {
  queryClient: QueryClient;
  user: null; // auth-ready, injected later
};

function RootError({ error }: { error: Error }) {
  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold text-destructive">
        Something went wrong
      </h1>
      <pre className="mt-2 text-sm opacity-70">{error.message}</pre>
    </div>
  );
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => (
    <ThemeProvider defaultTheme="dark" attribute="class">
      <Outlet />
      <Toaster position="top-center" />
    </ThemeProvider>
  ),
  notFoundComponent: NotFound,
  errorComponent: RootError,
});
