import React, { createContext, useContext, useState, useEffect } from "react";

interface AuthContextType {
  user: any;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("afriwaid_user");
    if (stored) {
      const u = JSON.parse(stored);
      setUser(u);
      setToken(u.token);
    }
  }, []);

  const login = async (email: string, password: string) => {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });
    if (res.ok) {
      const data = await res.json();
      setUser(data.user);
      setToken(data.token);
      localStorage.setItem("afriwaid_user", JSON.stringify({ ...data.user, token: data.token }));
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("afriwaid_user");
  };

return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}