import React, { useState } from "react";
import { X, Save, Eye, EyeOff, Plus, Trash2, GripVertical, Copy, ExternalLink, AlertCircle, Check } from "lucide-react";
import { Project, ProjectOverview, ProjectFeature, ProjectTechnology, ProjectTimelineEvent, ProjectChallenge, ProjectIntegration, ProjectDownload, ProjectRoadmapItem, ProjectPerformanceMetric, ProjectSecurity, ProjectSettings } from "../types";

interface AdminProjectEditorProps {
  project?: Project;
  onSave: (project: Project) => void;
  onCancel: () => void;
}

const emptyOverview: ProjectOverview = {
  name: "",
  subtitle: "",
  description: "",
  status: "Planning",
  category: "Websites",
  visibility: "Public",
  tags: [],
  technologies: [],
  coverImage: "",
  logo: "",
  backgroundVideo: "",
  colorTheme: { primary: "#2563eb", secondary: "#1d4ed8", accent: "#3b82f6" }
};

export default function AdminProjectEditor({ project, onSave, onCancel }: AdminProjectEditorProps) {
  const [formData, setFormData] = useState<Project>(project || {
    id: `proj-${Date.now()}`,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    views: 0,
    overview: emptyOverview,
    features: [],
    systemAssets: [],
    technologies: [],
    screenshots: [],
    timeline: [],
    challenges: [],
    performanceMetrics: [],
    integrations: [],
    downloads: [],
    roadmap: [],
    settings: {
      general: { isPublished: false, allowComments: true, enableAnalytics: true },
      permissions: { whoCanView: "public" }
    }
  });

  const [activeTab, setActiveTab] = useState<"overview" | "features" | "technology" | "media" | "timeline" | "settings">("overview");

  const handleChange = (path: string, value: any) => {
    setFormData(prev => {
      const keys = path.split(".");
      const newForm = { ...prev };
      let current: any = newForm;
      for (let i = 0; i < keys.length - 1; i++) {
        current = current[keys[i]];
      }
      current[keys[keys.length - 1]] = value;
      return newForm;
    });
  };

  const handleArrayUpdate = (arrayName: string, item: any, index?: number) => {
    setFormData(prev => {
      const newForm = { ...prev };
      const arr = [...(prev[arrayName as keyof typeof prev] as any[])] as any[];
      if (index !== undefined) {
        arr[index] = item;
      } else {
        arr.push(item);
      }
      newForm[arrayName as keyof typeof newForm] = arr as any;
      return newForm;
    });
  };

  const handleArrayRemove = (arrayName: string, index: number) => {
    setFormData(prev => {
      const newForm = { ...prev };
      const arr = [...(prev[arrayName as keyof typeof prev] as any[])];
      arr.splice(index, 1);
      newForm[arrayName as keyof typeof newForm] = arr as any;
      return newForm;
    });
  };

  const handleSave = () => {
    const finalProject = {
      ...formData,
      updatedAt: new Date().toISOString()
    };
    onSave(finalProject);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-900/50 backdrop-blur-sm">
      <div className="w-full max-w-4xl bg-white border-l border-slate-200 h-full overflow-y-auto">
        <div className="p-6 border-b border-slate-200 flex items-center justify-between">
          <h2 className="text-lg font-display font-bold text-slate-900">
            {project ? "Edit Project" : "Create New Project"}
          </h2>
          <div className="flex items-center gap-2">
            <button
              onClick={onCancel}
              className="p-2 rounded-lg border border-slate-200 text-slate-600 hover:text-slate-900"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex border-b border-slate-200 overflow-x-auto">
          {["overview", "features", "technology", "media", "timeline", "settings"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`px-4 py-2 text-xs font-mono font-bold capitalize transition border-b-2 ${
                activeTab === tab
                  ? "border-blue-600 text-blue-700"
                  : "border-transparent text-slate-500 hover:text-slate-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="p-6 space-y-6">          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-mono text-slate-500 uppercase mb-1">Project Name</label>
                  <input
                    type="text"
                    value={formData.overview.name}
                    onChange={(e) => handleChange("overview.name", e.target.value)}
                    className="w-full px-3 py-2 border border-slate-200 rounded text-sm font-medium"
                    placeholder="Enter project name"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-mono text-slate-500 uppercase mb-1">Subtitle</label>
                  <input
                    type="text"
                    value={formData.overview.subtitle}
                    onChange={(e) => handleChange("overview.subtitle", e.target.value)}
                    className="w-full px-3 py-2 border border-slate-200 rounded text-sm"
                    placeholder="Enter subtitle"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-mono text-slate-500 uppercase mb-1">Description</label>
                <textarea
                  value={formData.overview.description}
                  onChange={(e) => handleChange("overview.description", e.target.value)}
                  className="w-full px-3 py-2 border border-slate-200 rounded text-sm resize-none"
                  rows={3}
                  placeholder="Brief project description"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono text-slate-500 uppercase mb-1">Long Summary</label>
                <textarea
                  value={formData.overview.longSummary || ""}
                  onChange={(e) => handleChange("overview.longSummary", e.target.value)}
                  className="w-full px-3 py-2 border border-slate-200 rounded text-sm resize-none"
                  rows={6}
                  placeholder="Detailed project summary"
                />
              </div>

              <div className="grid grid-cols-4 gap-4">
                <div>
                  <label className="block text-[10px] font-mono text-slate-500 uppercase mb-1">Status</label>
                  <select
                    value={formData.overview.status}
                    onChange={(e) => handleChange("overview.status", e.target.value)}
                    className="w-full px-3 py-2 border border-slate-200 rounded text-sm"
                  >
                    <option value="Planning">Planning</option>
                    <option value="In Development">In Development</option>
                    <option value="QA">QA</option>
                    <option value="Active">Active</option>
                    <option value="Completed">Completed</option>
                    <option value="Maintained">Maintained</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-mono text-slate-500 uppercase mb-1">Category</label>
                  <select
                    value={formData.overview.category}
                    onChange={(e) => handleChange("overview.category", e.target.value)}
                    className="w-full px-3 py-2 border border-slate-200 rounded text-sm"
                  >
                    <option value="Websites">Websites</option>
                    <option value="SaaS">SaaS</option>
                    <option value="AI">AI</option>
                    <option value="KI">KI</option>
                    <option value="Design">Design</option>
                    <option value="Research">Research</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-mono text-slate-500 uppercase mb-1">Visibility</label>
                  <select
                    value={formData.overview.visibility}
                    onChange={(e) => handleChange("overview.visibility", e.target.value)}
                    className="w-full px-3 py-2 border border-slate-200 rounded text-sm"
                  >
                    <option value="Public">Public</option>
                    <option value="Private">Private</option>
                    <option value="Unlisted">Unlisted</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-mono text-slate-500 uppercase mb-1">Version</label>
                  <input
                    type="text"
                    value={formData.overview.currentVersion || ""}
                    onChange={(e) => handleChange("overview.currentVersion", e.target.value)}
                    className="w-full px-3 py-2 border border-slate-200 rounded text-sm"
                      placeholder="v1.0.0"
                    />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-mono text-slate-500 uppercase mb-1">Cover Image URL</label>
                  <input
                    type="text"
                    value={formData.overview.coverImage}
                    onChange={(e) => handleChange("overview.coverImage", e.target.value)}
                    className="w-full px-3 py-2 border border-slate-200 rounded text-sm"
                    placeholder="https://..."
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-mono text-slate-500 uppercase mb-1">Logo URL</label>
                  <input
                    type="text"
                    value={formData.overview.logo || ""}
                    onChange={(e) => handleChange("overview.logo", e.target.value)}
                    className="w-full px-3 py-2 border border-slate-200 rounded text-sm"
                    placeholder="https://..."
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-mono text-slate-500 uppercase mb-1">Tags (comma separated)</label>
                <input
                  type="text"
                  value={formData.overview.tags.join(", ")}
                  onChange={(e) => handleChange("overview.tags", e.target.value.split(",").map(t => t.trim()))}
                  className="w-full px-3 py-2 border border-slate-200 rounded text-sm"
                  placeholder="AI, Automation, Enterprise"
                />
              </div>
            </div>
          )}>

          {/* Features Tab */}
          {activeTab === "features" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-slate-800">Project Features</h3>
                <button
                  onClick={() => handleArrayUpdate("features", { id: `feat-${Date.now()}`, title: "", description: "", status: "Planned" })}
                  className="px-3 py-1.5 bg-blue-600 text-white text-xs font-mono font-bold rounded hover:bg-blue-700"
                >
                  Add Feature
                </button>
              </div>
              <div className="space-y-3">
                {(formData.features || []).map((feature, idx) => (
                  <div key={idx} className="border border-slate-200 rounded-lg p-3">
                    <div className="grid grid-cols-[1fr_100px] gap-3 mb-2">
                      <input
                        type="text"
                        value={feature.title}
                        onChange={(e) => handleArrayUpdate("features", { ...feature, title: e.target.value }, idx)}
                        className="px-2 py-1 border border-slate-150 rounded text-sm font-medium"
                        placeholder="Feature title"
                      />
                      <select
                        value={feature.status}
                        onChange={(e) => handleArrayUpdate("features", { ...feature, status: e.target.value as any }, idx)}
                        className="px-2 py-1 border border-slate-150 rounded text-xs"
                      >
                        <option value="Planned">Planned</option>
                        <option value="In Development">Dev</option>
                        <option value="Testing">Test</option>
                        <option value="Released">Released</option>
                        <option value="Deprecated">Deprecated</option>
                      </select>
                    </div>
                    <textarea
                      value={feature.description}
                      onChange={(e) => handleArrayUpdate("features", { ...feature, description: e.target.value }, idx)}
                      className="w-full px-2 py-1 border border-slate-150 rounded text-xs resize-none"
                      rows={2}
                      placeholder="Feature description"
                    />
                    <button
                      onClick={() => handleArrayRemove("features", idx)}
                      className="mt-2 text-xs text-red-600 hover:text-red-800 flex items-center gap-1"
                    >
                      <Trash2 className="w-3 h-3" /> Remove
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technology Tab */}
          {activeTab === "technology" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-slate-800">Technology Stack</h3>
                <button
                  onClick={() => handleArrayUpdate("technologies", { id: `tech-${Date.now()}`, name: "", version: "", purpose: "", category: "Other", status: "Active" })}
                  className="px-3 py-1.5 bg-blue-600 text-white text-xs font-mono font-bold rounded hover:bg-blue-700"
                >
                  Add Technology
                </button>
              </div>
              <div className="space-y-3">
                {(formData.technologies || []).map((tech, idx) => (
                  <div key={idx} className="border border-slate-200 rounded-lg p-3">
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="text"
                        value={tech.name}
                        onChange={(e) => handleArrayUpdate("technologies", { ...tech, name: e.target.value }, idx)}
                        className="px-2 py-1 border border-slate-150 rounded text-sm"
                        placeholder="Technology name"
                      />
                      <input
                        type="text"
                        value={tech.version}
                        onChange={(e) => handleArrayUpdate("technologies", { ...tech, version: e.target.value }, idx)}
                        className="px-2 py-1 border border-slate-150 rounded text-sm"
                        placeholder="Version"
                      />
                    </div>
                    <textarea
                      value={tech.purpose}
                      onChange={(e) => handleArrayUpdate("technologies", { ...tech, purpose: e.target.value }, idx)}
                      className="w-full px-2 py-1 border border-slate-150 rounded text-xs resize-none mt-2"
                      rows={2}
                      placeholder="Purpose/Description"
                    />
                    <div className="flex justify-end mt-2">
                      <button
                        onClick={() => handleArrayRemove("technologies", idx)}
                        className="text-xs text-red-600 hover:text-red-800 flex items-center gap-1"
                      >
                        <Trash2 className="w-3 h-3" /> Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Media Tab */}
          {activeTab === "media" && (
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-bold text-slate-800 mb-2">Screenshots</h3>
                <div className="grid grid-cols-3 gap-3">
                  {(formData.screenshots || []).map((scr, idx) => (
                    <div key={idx} className="aspect-video rounded-lg bg-slate-100 overflow-hidden border border-slate-200">
                      <img src={scr.url} alt="" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-800 mb-2">Timeline Events</h3>
                <div className="space-y-2">
                  {(formData.timeline || []).map((event, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2 bg-slate-50 rounded">
                      <GripVertical className="w-4 h-4 text-slate-400" />
                      <div className="flex-1">
                        <span className="text-sm font-medium">{event.title}</span>
                        <p className="text-[10px] text-slate-500">{event.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === "settings" && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-mono text-slate-500 uppercase mb-1">Slug</label>
                  <input
                    type="text"
                    value={formData.settings.general.slug || ""}
                    onChange={(e) => handleChange("settings.general.slug", e.target.value)}
                    className="w-full px-3 py-2 border border-slate-200 rounded text-sm"
                    placeholder="project-slug"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-mono text-slate-500 uppercase mb-1">Visit Count</label>
                  <input
                    type="number"
                    value={formData.views}
                    onChange={(e) => setFormData({ ...formData, views: parseInt(e.target.value) || 0 })}
                    className="w-full px-3 py-2 border border-slate-200 rounded text-sm"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={formData.settings.general.isPublished}
                    onChange={(e) => handleChange("settings.general.isPublished", e.target.checked)}
                    className="rounded"
                  />
                  <span className="text-sm font-medium">Publish immediately</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={formData.settings.general.allowComments}
                    onChange={(e) => handleChange("settings.general.allowComments", e.target.checked)}
                    className="rounded"
                  />
                  <span className="text-sm font-medium">Allow comments</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={formData.settings.general.enableAnalytics}
                    onChange={(e) => handleChange("settings.general.enableAnalytics", e.target.checked)}
                    className="rounded"
                  />
                  <span className="text-sm font-medium">Enable analytics</span>
                </label>
              </div>
            </div>
          )}
        </div>

        <div className="p-4 border-t border-slate-200 flex items-center justify-between">
          <button
            onClick={onCancel}
            className="px-4 py-2 text-slate-600 hover:text-slate-900 text-sm font-mono"
          >
            Cancel
          </button>
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 text-slate-600 hover:text-slate-900 text-sm font-mono flex items-center gap-1">
              <Eye className="w-4 h-4" /> Preview
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-blue-600 text-white text-sm font-mono font-bold rounded hover:bg-blue-700 flex items-center gap-1"
            >
              <Save className="w-4 h-4" /> Save Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}