import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import ForgotPassword from "./ForgotPassword";
import ResetPassword from "./ResetPassword";
import VerifyEmail from "./VerifyEmail";
import { ShieldCheck, Command } from "lucide-react";

interface UnifiedAuthGateProps {
  onAuthSuccess: () => void;
  requiredRole?: string;
  subTitle?: string;
}

export default function UnifiedAuthGate({ onAuthSuccess, requiredRole, subTitle }: UnifiedAuthGateProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const modeFromPath = (path: string): "login" | "register" | "forgot" | "reset" | "verify" => {
    if (path.startsWith("/register")) return "register";
    if (path.startsWith("/forgot-password")) return "forgot";
    if (path.startsWith("/reset-password")) return "reset";
    if (path.startsWith("/verify-email")) return "verify";
    return "login";
  };
  const [mode, setMode] = useState<"login" | "register" | "forgot" | "reset" | "verify">(() => modeFromPath(location.pathname));
  const [resetToken, setResetToken] = useState("");
  const [verificationToken, setVerificationToken] = useState("");

  React.useEffect(() => {
    setMode(modeFromPath(location.pathname));
  }, [location.pathname]);

  const showMode = (nextMode: "login" | "register" | "forgot" | "reset" | "verify") => {
    setMode(nextMode);
    const route = {
      login: "/login",
      register: "/register",
      forgot: "/forgot-password",
      reset: "/reset-password",
      verify: "/verify-email"
    }[nextMode];
    if (location.pathname !== route) {
      navigate(route);
    }
  };

  const handleNavigateToReset = (token: string) => {
    setResetToken(token);
    showMode("reset");
  };

  const handleRegisterSuccess = () => {
    setVerificationToken("");
    showMode("verify");
  };

  return (
    <div className="py-12 px-4 max-w-7xl mx-auto space-y-8 animate-fadeIn font-sans text-slate-800 text-center">
      
      {/* Visual Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 border border-blue-200 text-blue-700 font-mono text-[9px] uppercase font-bold rounded-full">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>AfriWaid Studio Secure Identity Gate</span>
        </div>
        <h2 className="text-3.5xl font-display font-black tracking-tight text-slate-950">
          Enterprise Security Verification
        </h2>
        {subTitle ? (
          <p className="max-w-md mx-auto text-xs text-slate-500 leading-normal">{subTitle}</p>
        ) : (
          <p className="max-w-md mx-auto text-xs text-slate-500 leading-normal">
            Access to operation logs, portfolios, client portals, and workspace deliverables is isolated. Authenticate with your platform credentials to establish session clearances.
          </p>
        )}
      </div>

      {/* Screen Dispatcher cards */}
      <div className="w-full">
        {mode === "login" && (
          <Login
            onNavigateToRegister={() => showMode("register")}
            onNavigateToForgot={() => showMode("forgot")}
            onLoginSuccess={onAuthSuccess}
          />
        )}

        {mode === "register" && (
          <Register
            onNavigateToLogin={() => showMode("login")}
            onRegisterSuccess={handleRegisterSuccess}
          />
        )}

        {mode === "forgot" && (
          <ForgotPassword
            onNavigateToLogin={() => showMode("login")}
            onNavigateToReset={handleNavigateToReset}
          />
        )}

        {mode === "reset" && (
          <ResetPassword
            initialToken={resetToken}
            onNavigateToLogin={() => showMode("login")}
          />
        )}

        {mode === "verify" && (
          <VerifyEmail
            initialToken={verificationToken}
            onNavigateToLogin={() => showMode("login")}
          />
        )}
      </div>

      {/* Security notice banner */}
      <div className="max-w-md mx-auto p-4 rounded-xl border border-slate-200 bg-slate-50/50 text-[10px] text-slate-500 flex items-start gap-2.5 text-left font-sans">
        <Command className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
        <p className="leading-normal">
          <strong className="text-slate-900 font-sans block mb-0.5">Automated Protection Countermeasures</strong>
          AfriWaid employs dynamic lockout protocols. Consecutive failed password entry events will isolate the target operator address for 60 seconds. Activity registers are tracked permanently on security logs.
        </p>
      </div>

    </div>
  );
}
