import React, { useState, useEffect } from "react";
import { Settings, User, Bell, Shield, Palette, Save } from "lucide-react";
import { useAuth } from "../../components/AuthContext";

export default function SettingsPage() {
  const { token } = useAuth();
  const [settings, setSettings] = useState({ profile: { firstName: "", lastName: "", username: "" }, notifications: { email: true, push: false } });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const loadSettings = async () => {
      if (!token) return;
      try {
        const res = await fetch("/api/settings", {
          headers: { "Authorization": `Bearer ${token}` }
        });
        if (res.ok) {
          const data = await res.json();
          setSettings(data.settings || { profile: {}, notifications: {} });
        }
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    loadSettings();
  }, [token]);

  const handleSave = async () => {
    setSaving(true);
    try {
      await fetch("/api/settings/profile", {
        method: "PUT",
        headers: { "Authorization": `Bearer ${token}` },
        body: JSON.stringify(settings.profile)
      });
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-display font-black text-slate-900 dark:text-white mb-2">
          Settings
        </h1>
        <p className="text-slate-500 dark:text-zinc-400 text-sm">
          Manage your account preferences and security settings.
        </p>
      </div>

      <div className="space-y-6">
        <div className="bg-white dark:bg-black border border-slate-200 dark:border-zinc-800 rounded-xl p-6">
          <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <User className="w-5 h-5" /> Profile Settings
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] font-mono text-slate-400 mb-1">First Name</label>
              <input
                type="text"
                value={settings.profile.firstName || ""}
                onChange={(e) => setSettings({...settings, profile: {...settings.profile, firstName: e.target.value}})}
                className="w-full px-3 py-2 bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-700 rounded-lg text-sm"
              />
            </div>
            <div>
              <label className="block text-[10px] font-mono text-slate-400 mb-1">Last Name</label>
              <input
                type="text"
                value={settings.profile.lastName || ""}
                onChange={(e) => setSettings({...settings, profile: {...settings.profile, lastName: e.target.value}})}
                className="w-full px-3 py-2 bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-700 rounded-lg text-sm"
              />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-black border border-slate-200 dark:border-zinc-800 rounded-xl p-6">
          <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <Bell className="w-5 h-5" /> Notification Preferences
          </h3>
          <div className="space-y-3">
            <label className="flex items-center justify-between">
              <span className="text-sm">Email Notifications</span>
              <input type="checkbox" checked={settings.notifications.email} onChange={(e) => setSettings({...settings, notifications: {...settings.notifications, email: e.target.checked}})} className="toggle" />
            </label>
            <label className="flex items-center justify-between">
              <span className="text-sm">Push Notifications</span>
              <input type="checkbox" checked={settings.notifications.push} onChange={(e) => setSettings({...settings, notifications: {...settings.notifications, push: e.target.checked}})} className="toggle" />
            </label>
          </div>
        </div>

        <div className="bg-white dark:bg-black border border-slate-200 dark:border-zinc-800 rounded-xl p-6">
          <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <Shield className="w-5 h-5" /> Security
          </h3>
          <button className="text-sm text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white">
            Change Password
          </button>
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleSave}
            disabled={saving}
            className="flex items-center gap-2 px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg text-sm font-medium disabled:opacity-50"
          >
            <Save className="w-4 h-4" /> Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}