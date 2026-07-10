import React from "react";
import { Navigate } from "react-router-dom";
import { Loader2, ShieldCheck } from "lucide-react";
import { useAuth } from "./AuthContext";

const ADMIN_ROLES = ["Admin", "Super Admin"];

export default function AdminRouteGuard({ children }: { children: React.ReactNode }) {
  const { user, token, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-neutral-950 text-white flex items-center justify-center">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400">
          <Loader2 className="h-4 w-4 animate-spin text-cyan-400" />
          <span>Validating admin session</span>
        </div>
      </div>
    );
  }

  if (!token) {
    return <Navigate to="/admin/login" replace />;
  }

  if (!user || !ADMIN_ROLES.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return (
    <>
      <div className="sr-only">
        <ShieldCheck aria-hidden="true" />
      </div>
      {children}
    </>
  );
}
