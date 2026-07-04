import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Calendar, Tag, ExternalLink, GitBranch, Download, Share2, Bookmark, ChevronRight, BookOpen, Layers, Monitor, Image, Video, FileText, ShieldCheck, Settings, Users, BarChart3, Clock, Check, AlertCircle, Code, Database, Globe, Mail, Copy, CheckCircle2 } from "lucide-react";
import { Project } from "../types";

interface ProjectDetailPageProps {
  project: Project;
  onClose?: () => void;
  onEdit?: () => void;
}

const statusConfig = {
  Planning: { color: "bg-amber-100 text-amber-700 border-amber-200", icon: "⏳" },
  "In Development": { color: "bg-blue-100 text-blue-700 border-blue-200", icon: "🔧" },
  QA: { color: "bg-purple-100 text-purple-700 border-purple-200", icon: "🧪" },
  Active: { color: "bg-cyan-100 text-cyan-700 border-cyan-200", icon: "🚀" },
  Completed: { color: "bg-emerald-100 text-emerald-700 border-emerald-200", icon: "✅" },
  Maintained: { color: "bg-slate-100 text-slate-700 border-slate-200", icon: "🔧" },
};

const featureStatusConfig = {
  Planned: { color: "bg-slate-100 text-slate-600", icon: "⏳" },
  "In Development": { color: "bg-blue-100 text-blue-700", icon: "🔧" },
  Testing: { color: "bg-purple-100 text-purple-700", icon: "🧪" },
  Released: { color: "bg-emerald-100 text-emerald-700", icon: "✅" },
  Deprecated: { color: "bg-red-100 text-red-700", icon: "⚠️" },
};

export default function ProjectDetailPage({ project, onClose, onEdit }: ProjectDetailPageProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "case-study" | "documentation" | "settings">("overview");
  const [selectedMedia, setSelectedMedia] = useState<{ type: string; url: string; title: string } | null>(null);

  const overview = project.overview;
  const techStack = project.technologies || [];
  const features = project.features || [];
  const screenshots = project.screenshots || [];
  const timeline = project.timeline || [];
  const challenges = project.challenges || [];
  const integrations = project.integrations || [];
  const downloads = project.downloads || [];
  const performanceMetrics = project.performanceMetrics || [];
  const security = project.security;

  const tabs = [
    { id: "overview", label: "Overview", icon: Monitor },
    { id: "case-study", label: "Case Study", icon: BookOpen },
    { id: "documentation", label: "Documentation", icon: FileText },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 text-left">
      <div className="flex items-start justify-between mb-8">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-display font-extrabold text-slate-900">{overview.name}</h1>
            <span className={`px-3 py-1 text-xs font-mono font-bold rounded-full border ${statusConfig[overview.status]?.color || "bg-slate-100 text-slate-700"}`}>
              {overview.status}
            </span>
          </div>
          {overview.subtitle && (
            <p className="text-lg text-slate-500 font-medium">{overview.subtitle}</p>
          )}
        </div>
        <div className="flex items-center gap-2">
          {onEdit && (
            <button
              onClick={onEdit}
              className="px-4 py-2 bg-blue-600 text-white text-xs font-mono font-bold rounded-lg hover:bg-blue-700 transition"
            >
              Edit Project
            </button>
          )}
          {onClose && (
            <button
              onClick={onClose}
              className="px-3 py-2 bg-slate-100 text-slate-700 text-xs font-mono font-bold rounded-lg hover:bg-slate-200 transition"
            >
              Back
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
        <aside className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-xl p-4 space-y-4">
            <div className="aspect-square w-full rounded-lg overflow-hidden bg-slate-100">
              {overview.coverImage ? (
                <img src={overview.coverImage} alt={overview.name} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-slate-400">
                  <Monitor className="w-8 h-8" />
                </div>
              )}
            </div>
            
            <div className="space-y-2 text-xs font-mono">
              <div className="flex justify-between">
                <span className="text-slate-400">Status</span>
                <span className="font-bold">{overview.status}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Category</span>
                <span className="font-bold">{overview.category}</span>
              </div>
              {overview.completedDate && (
                <div className="flex justify-between">
                  <span className="text-slate-400">Completed</span>
                  <span className="font-bold">{overview.completedDate}</span>
                </div>
              )}
              {overview.currentVersion && (
                <div className="flex justify-between">
                  <span className="text-slate-400">Version</span>
                  <span className="font-bold">{overview.currentVersion}</span>
                </div>
              )}
            </div>
          </div>

          <nav className="space-y-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`w-full flex items-center gap-3 px-3 py-2 text-xs font-mono font-bold rounded-lg transition ${
                    isActive
                      ? "bg-blue-50 text-blue-700 border-l-2 border-blue-600"
                      : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </aside>

        <main className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-display font-bold text-slate-900">Project Information</h2>
              <div className="flex items-center gap-2">
                <button className="p-1.5 rounded bg-slate-100 text-slate-600 hover:text-blue-600">
                  <Share2 className="w-4 h-4" />
                </button>
                <button className="p-1.5 rounded bg-slate-100 text-slate-600 hover:text-emerald-600">
                  <Bookmark className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-[10px] text-slate-400 font-mono uppercase">Description</span>
                <p className="text-slate-700 font-sans mt-1">{overview.description}</p>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 font-mono uppercase">Industry</span>
                <p className="text-slate-700 font-sans mt-1">{overview.industry || "—"}</p>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 font-mono uppercase">Owner</span>
                <p className="text-slate-700 font-sans mt-1">{overview.owner || "—"}</p>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 font-mono uppercase">Client</span>
                <p className="text-slate-700 font-sans mt-1">{overview.client || "—"}</p>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <h3 className="text-xs font-mono text-slate-400 uppercase font-bold">Technology Stack</h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, idx) => (
                  <span key={idx} className="px-2.5 py-1 bg-slate-100 border border-slate-200 text-xs font-mono rounded">
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <h3 className="text-xs font-mono text-slate-400 uppercase font-bold">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {overview.tags.map((tag, idx) => (
                  <span key={idx} className="px-2 py-0.5 bg-indigo-50 border border-indigo-150 text-indigo-700 text-[10px] font-mono rounded">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6">
            <h3 className="text-xs font-mono text-slate-400 uppercase font-bold mb-4">Key Features</h3>
            <ul className="space-y-2">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-slate-800">{feature.title}</span>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded ${featureStatusConfig[feature.status]?.color || "bg-slate-100"}`}>
                        {feature.status}
                      </span>
                    </div>
                    <p className="text-slate-500 text-xs mt-1">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {timeline.length > 0 && (
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-xs font-mono text-slate-400 uppercase font-bold mb-4">Project Timeline</h3>
              <div className="space-y-3">
                {timeline.map((event) => (
                  <div key={event.id} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                      <Check className="w-3 h-3 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-slate-800">{event.title}</span>
                        <span className="text-[10px] text-slate-400 font-mono">{event.date}</span>
                      </div>
                      <p className="text-xs text-slate-500 mt-1">{event.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {screenshots.length > 0 && (
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-xs font-mono text-slate-400 uppercase font-bold mb-4">Screenshots & Gallery</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {screenshots.map((scr, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedMedia({ type: "image", url: scr.url, title: scr.title })}
                    className="aspect-video rounded-lg overflow-hidden bg-slate-100 border border-slate-200 hover:border-blue-400 transition"
                  >
                    <img src={scr.url} alt={scr.title} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {performanceMetrics.length > 0 && (
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-xs font-mono text-slate-400 uppercase font-bold mb-4">Performance Metrics</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {performanceMetrics.map((metric, idx) => (
                  <div key={idx} className="p-3 bg-slate-50 rounded-lg text-center">
                    <div className="text-lg font-bold text-slate-900">{metric.value}{metric.unit}</div>
                    <div className="text-[10px] text-slate-500 font-mono uppercase">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {integrations.length > 0 && (
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-xs font-mono text-slate-400 uppercase font-bold mb-4">Integrations</h3>
              <div className="space-y-2">
                {integrations.map((int) => (
                  <div key={int.id} className="flex items-center justify-between p-2 bg-slate-50 rounded">
                    <div>
                      <span className="text-sm font-medium text-slate-800">{int.provider}</span>
                      <p className="text-[10px] text-slate-500">{int.description}</p>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded">
                      {int.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {downloads.length > 0 && (
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-xs font-mono text-slate-400 uppercase font-bold mb-4">Downloads</h3>
              <div className="space-y-2">
                {downloads.map((dl) => (
                  <a
                    key={dl.id}
                    href={dl.url}
                    className="flex items-center justify-between p-3 bg-slate-50 rounded hover:bg-slate-100 transition"
                  >
                    <div>
                      <span className="text-sm font-medium text-slate-800">{dl.name}</span>
                      <p className="text-[10px] text-slate-500">{dl.description}</p>
                    </div>
                    <Download className="w-4 h-4 text-slate-500" />
                  </a>
                ))}
              </div>
            </div>
          )}

          {security && (
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-xs font-mono text-slate-400 uppercase font-bold mb-4 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Security
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                {security.authentication && (
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase">Authentication</span>
                    <p className="text-slate-700">{security.authentication}</p>
                  </div>
                )}
                {security.authorization && (
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase">Authorization</span>
                    <p className="text-slate-700">{security.authorization}</p>
                  </div>
                )}
                {security.encryption && (
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase">Encryption</span>
                    <p className="text-slate-700">{security.encryption}</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </main>
      </div>

      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMedia(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[80vh]"
            >
              <img
                src={selectedMedia.url}
                alt={selectedMedia.title}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <button
                onClick={() => setSelectedMedia(null)}
                className="absolute -top-10 right-0 p-2 bg-white rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}