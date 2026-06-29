import React, { useState, useEffect } from "react";
import { CheckSquare, Clock, Archive, RefreshCw } from "lucide-react";
import { useAuth } from "../../components/AuthContext";

interface Approval {
  id: string;
  name: string;
  status: "pending" | "approved" | "rejected";
  projectId: string;
}

export default function ApprovalsPage() {
  const { token } = useAuth();
  const [approvals, setApprovals] = useState<Approval[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadApprovals = async () => {
      if (!token) return;
      try {
        const res = await fetch("/api/approvals", {
          headers: { "Authorization": `Bearer ${token}` }
        });
        if (res.ok) {
          const data = await res.json();
          setApprovals(data.approvals || data);
        }
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    loadApprovals();
  }, [token]);

  const stats = {
    total: approvals.length,
    pending: approvals.filter(a => a.status === "pending").length,
    approved: approvals.filter(a => a.status === "approved").length,
    rejected: approvals.filter(a => a.status === "rejected").length,
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-display font-black text-slate-900 dark:text-white mb-2">
          Approvals
        </h1>
        <p className="text-slate-500 dark:text-zinc-400 text-sm">
          Review and manage pending approvals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="p-4 rounded-xl bg-white dark:bg-black border border-slate-200 dark:border-zinc-800">
          <CheckSquare className="w-6 h-6 text-slate-500 mb-2" />
          <p className="text-[10px] text-slate-400 font-mono uppercase">Total</p>
          <p className="text-2xl font-bold text-slate-900 dark:text-white">{stats.total}</p>
        </div>
        <div className="p-4 rounded-xl bg-white dark:bg-black border border-slate-200 dark:border-zinc-800">
          <Clock className="w-6 h-6 text-blue-500 mb-2" />
          <p className="text-[10px] text-slate-400 font-mono uppercase">Pending</p>
          <p className="text-2xl font-bold text-slate-900 dark:text-white">{stats.pending}</p>
        </div>
        <div className="p-4 rounded-xl bg-white dark:bg-black border border-slate-200 dark:border-zinc-800">
          <CheckSquare className="w-6 h-6 text-emerald-500 mb-2" />
          <p className="text-[10px] text-slate-400 font-mono uppercase">Approved</p>
          <p className="text-2xl font-bold text-slate-900 dark:text-white">{stats.approved}</p>
        </div>
        <div className="p-4 rounded-xl bg-white dark:bg-black border border-slate-200 dark:border-zinc-800">
          <Archive className="w-6 h-6 text-purple-500 mb-2" />
          <p className="text-[10px] text-slate-400 font-mono uppercase">Rejected</p>
          <p className="text-2xl font-bold text-slate-900 dark:text-white">{stats.rejected}</p>
        </div>
      </div>

      <div className="bg-white dark:bg-black border border-slate-200 dark:border-zinc-800 rounded-xl p-6">
        <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white mb-4">
          Approvals List
        </h3>
        {loading ? (
          <div className="text-center py-12 text-slate-500">
            <RefreshCw className="w-12 h-12 mx-auto mb-4 text-slate-300 animate-spin" />
            <p className="font-mono text-xs">Loading approvals...</p>
          </div>
        ) : approvals.length === 0 ? (
          <div className="text-center py-12 text-slate-500">
            <Archive className="w-12 h-12 mx-auto mb-4 text-slate-300" />
            <p className="font-mono text-xs">No approvals found</p>
          </div>
        ) : (
          <div className="space-y-3">
            {approvals.map((a) => (
              <div key={a.id} className="flex items-center justify-between p-3 bg-slate-50 dark:bg-zinc-950 rounded-lg">
                <div>
                  <p className="text-sm font-medium text-slate-900 dark:text-white">{a.name}</p>
                  <p className="text-[10px] text-slate-400">Project: {a.projectId}</p>
                </div>
                <span className={`text-[10px] px-2 py-1 rounded font-mono uppercase ${
                  a.status === "approved" ? "bg-emerald-500/20 text-emerald-600" :
                  a.status === "rejected" ? "bg-red-500/20 text-red-600" :
                  "bg-blue-500/20 text-blue-600"
                }`}>
                  {a.status}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}