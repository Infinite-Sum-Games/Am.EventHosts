import { createFileRoute, redirect } from "@tanstack/react-router";
import { GalleryVerticalEnd } from "lucide-react";
import { LoginForm } from "@/components/login-form";
import { axiosClient } from "@/lib/axios";
import { api } from "@/lib/api";

export default function LoginPage() {
  return (
    <div className="relative flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10 overflow-hidden">
      {/* --- GRID BACKGROUND START --- */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* The Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.15] dark:opacity-[0.2]"
          style={{
            backgroundImage: `linear-gradient(#64748b 1px, transparent 1px), linear-gradient(90deg, #64748b 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        {/* Radial fade to make the grid soft around the edges */}
        <div className="absolute inset-0 bg-linear-to-tr from-background via-transparent to-background" />
        <div className="absolute inset-0 mask-[radial-gradient(ellipse_at_center,transparent_20%,black)] bg-background/50" />
      </div>
      {/* --- GRID BACKGROUND END --- */}

      <div className="relative z-10 flex w-full max-w-sm flex-col gap-6">
        <a
          href="#"
          className="flex items-center gap-2 self-center font-medium group"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-amber-400 to-amber-600 shadow-lg shadow-amber-500/20 text-black transition-transform group-hover:scale-105">
            <GalleryVerticalEnd className="size-5" />
          </div>
          <span className="text-xl font-bold tracking-tight">Anokha 2026</span>
        </a>

        <div className="rounded-2xl border border-border bg-card/80 backdrop-blur-xl p-4 shadow-2xl">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export const Route = createFileRoute("/")({
  beforeLoad: async () => {
    try {
      // Check if session exists
      await axiosClient.get(api.SESSION);

      // If successful, THROW the redirect
      throw redirect({
        to: "/dashboard",
      });
    } catch (err) {
      // If axios throws (401/403), we catch it here.
      // If it's a redirect we just threw, re-throw it so the router handles it.
      if (err instanceof Object && "to" in err) throw err;

      // Otherwise, return null to stay on the login page
      return null;
    }
  },
  component: LoginPage,
});