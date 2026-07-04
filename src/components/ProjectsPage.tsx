import React, { useState } from "react";
import { Search, Filter, ExternalLink, GitBranch, Calendar, AlertCircle, X, ChevronRight, BookOpen, Layers, RotateCcw, Check, Play, Video, Image, Monitor, Eye, Edit, MoreVertical } from "lucide-react";
import { Project, CustomizationSettings } from "../types";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router-dom";
import ProjectDetailPage from "./ProjectDetailPage";

interface ProjectsPageProps {
  projects: Project[];
  onViewIncrement: (id: string) => void;
  customization?: CustomizationSettings;
  onEditProject?: (project: Project) => void;
}

export default function ProjectsPage({ projects, onViewIncrement, customization, onEditProject }: ProjectsPageProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<"All" | "Websites" | "SaaS" | "AI" | "KI" | "Mobile Apps" | "Design" | "Writing" | "Media" | "Research" >("All");
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const navigate = useNavigate();

  // Dynamic media list & timeline compiler from selected project details
  const stages = [
    { label: "Planning", desc: "Requirements & Scope" },
    { label: "Development", desc: "Core Development" },
    { label: "QA", desc: "Integration & Testing" },
    { label: "Deployed", desc: "Production Node Release" }
  ];

  const handleOpenDetails = (p: Project) => {
    setSelectedProject(p);
    setIsModalOpen(true);
    onViewIncrement(p.id);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const handleEditProject = (p: Project) => {
    handleCloseModal();
    if (onEditProject) {
      onEditProject(p);
    }
  };

  const handleViewProject = (p: Project) => {
    navigate(`/project/${p.id}`);
  };

  const categories = [
    "All", "Websites", "SaaS", "AI", "KI", "Mobile Apps", "Design", "Writing", "Media", "Research"
  ] as const;

  // Gather unique available filters dynamically
  const availableTechs = Array.from(
    new Set(projects.flatMap((p) => p.technologiesUsed || []))
  ).sort();

  const availableTags = Array.from(
    new Set(projects.flatMap((p) => p.tags || []))
  ).sort();

  const handleToggleTech = (tech: string) => {
    setSelectedTechs((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
    );
  };

  const handleToggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((td) => td !== tag) : [...prev, tag]
    );
  };

  const handleClearAllFilters = () => {
    setSelectedTechs([]);
    setSelectedTags([]);
    setSelectedCategory("All");
    setSearchTerm("");
  };

  // Filter list
  const filteredProjects = projects.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          p.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase())) ||
                          p.technologiesUsed.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;

    const matchesTech = selectedTechs.length === 0 ||
                        p.technologiesUsed.some(tech => selectedTechs.includes(tech));

    const matchesTags = selectedTags.length === 0 ||
                        p.tags.some(tag => selectedTags.includes(tag));

    return matchesSearch && matchesCategory && matchesTech && matchesTags;
  });

  const handleOpenCaseStudy = (p: Project) => {
    handleViewProject(p);
  };

  const getProjectFeatures = (proj: Project) => {
    if (typeof proj.features?.[0] === "string") {
      return proj.features.slice(0, 4);
    }
    return proj.features?.slice(0, 4).map(f => typeof f === "object" ? f.title : "") || [];
  };

  const getProjectTechnologies = (proj: Project) => {
    if (proj.technologies && proj.technologies.length > 0) {
      return proj.technologies.map(t => t.name);
    }
    return proj.technologiesUsed || [];
  };

  return (
    <div className="space-y-8 text-left text-slate-800">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-display font-extrabold text-slate-950 tracking-tight">
          {customization?.projectsTitle || "Technical Portfolio & Showcase"}
        </h1>
        <p className="text-xs text-slate-400 font-mono font-semibold">
          {customization?.projectsSubtitle || "COMPLETE ARCHIVE OF INTELLECTUAL WORK"}
        </p>
      </div>

      {/* Search & Filter Controls */}
      <div className="space-y-4 border-b border-slate-205 pb-6">
        <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
          {/* Search input */}
          <div className="relative flex-1 max-w-md font-sans">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
              <Search className="w-4 h-4 text-slate-400" />
            </span>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by name, technologies, or tags..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-lg text-xs text-slate-900 placeholder-slate-450 focus:outline-[#2563eb] focus:ring-1 focus:ring-blue-500 transition duration-150"
              id="portfolio-search-input"
            />
          </div>

          {/* Categories selector */}
          <div className="flex flex-wrap gap-1 bg-slate-100 p-1 border border-slate-200 rounded-lg overflow-x-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-md text-[10px] font-mono whitespace-nowrap transition duration-150 uppercase tracking-wider cursor-pointer font-bold ${selectedCategory === cat ? "bg-slate-900 text-white font-bold" : "text-slate-650 hover:text-slate-950"}`}
                id={`project-cat-${cat}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Advanced Filters Trigger and Active Parameter Badges */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs bg-slate-50 p-3 rounded-lg border border-slate-150 font-mono font-bold">
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setShowAdvanced(!showAdvanced)}
              className={`px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-slate-900 hover:border-slate-350 transition duration-150 text-[10px] flex items-center gap-1.5 uppercase cursor-pointer ${
                showAdvanced || selectedTechs.length > 0 || selectedTags.length > 0 ? "border-blue-300 text-blue-700 bg-blue-50/50" : "shadow-xs"
              }`}
              id="advanced-filters-trigger"
            >
              <Filter className="w-3.5 h-3.5 text-blue-600" />
              <span>Advanced Segment Filters</span>
              {(selectedTechs.length > 0 || selectedTags.length > 0) && (
                <span className="px-1.5 py-0.2 bg-blue-100 text-blue-700 text-[9px] rounded-full font-bold ml-1">
                  {selectedTechs.length + selectedTags.length}
                </span>
              )}
            </button>

            {/* Active Tech badging */}
            {selectedTechs.map((tech) => (
              <span
                key={tech}
                onClick={() => handleToggleTech(tech)}
                className="inline-flex items-center gap-1 px-2.5 py-1 bg-blue-50 hover:bg-red-50 border border-blue-200 hover:border-red-200 text-blue-700 hover:text-red-700 text-[10px] rounded-md cursor-pointer transition duration-150 group"
              >
                <span>tech:{tech}</span>
                <X className="w-3 h-3 text-blue-500 group-hover:text-red-500 transition animate-pulse" />
              </span>
            ))}

            {/* Active Tag badging */}
            {selectedTags.map((tag) => (
              <span
                key={tag}
                onClick={() => handleToggleTag(tag)}
                className="inline-flex items-center gap-1 px-2.5 py-1 bg-purple-50 hover:bg-red-50 border border-purple-205 hover:border-red-200 text-purple-700 hover:text-red-700 text-[10px] rounded-md cursor-pointer transition duration-150 group"
              >
                <span>tag:{tag}</span>
                <X className="w-3 h-3 text-purple-500 group-hover:text-red-500 transition animate-pulse" />
              </span>
            ))}
          </div>

          {(selectedCategory !== "All" || searchTerm || selectedTechs.length > 0 || selectedTags.length > 0) && (
            <button
              onClick={handleClearAllFilters}
              className="text-slate-400 hover:text-slate-700 transition duration-150 flex items-center gap-1 text-[10px] uppercase cursor-pointer"
              id="clear-all-filters-btn"
            >
              <RotateCcw className="w-3 h-3 text-slate-405" />
              <span>Reset parameters</span>
            </button>
          )}
        </div>

        {/* Animated Advanced panel choosing */}
        <AnimatePresence>
          {showAdvanced && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden bg-white p-4 border border-slate-200 rounded-xl space-y-4 shadow-inner"
              id="advanced-filters-panel"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* 1. Technologies used multi selection */}
                <div className="space-y-2 text-left animate-fadeIn">
                  <h4 className="text-[10px] text-slate-400 font-mono font-bold uppercase tracking-wider flex items-center gap-1 pb-1 border-b border-slate-100">
                    <Layers className="w-3.5 h-3.5 text-blue-600" /> Filter by Technologies Used
                  </h4>
                  {availableTechs.length === 0 ? (
                    <p className="text-[10px] text-slate-400 font-mono italic">No technologies defined.</p>
                  ) : (
                    <div className="flex flex-wrap gap-1.5 max-h-40 overflow-y-auto pr-2 custom-scrollbar">
                      {availableTechs.map((tech) => {
                        const isSelected = selectedTechs.includes(tech);
                        return (
                          <button
                            key={tech}
                            onClick={() => handleToggleTech(tech)}
                            className={`px-2 py-1 rounded-md text-[10px] font-mono transition duration-155 uppercase tracking-tight text-left cursor-pointer font-bold ${
                              isSelected
                                ? "bg-blue-600 text-white font-extrabold border border-blue-500"
                                : "bg-slate-55 border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                            }`}
                          >
                            <span>{tech}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* 2. Tags multi selection */}
                <div className="space-y-2 text-left animate-fadeIn">
                  <h4 className="text-[10px] text-slate-400 font-mono font-bold uppercase tracking-wider flex items-center gap-1 pb-1 border-b border-slate-100">
                    <Layers className="w-3.5 h-3.5 text-purple-600" /> Filter by Custom Tags
                  </h4>
                  {availableTags.length === 0 ? (
                    <p className="text-[10px] text-slate-400 font-mono italic">No tags defined.</p>
                  ) : (
                    <div className="flex flex-wrap gap-1.5 max-h-40 overflow-y-auto pr-2 custom-scrollbar">
                      {availableTags.map((tag) => {
                        const isSelected = selectedTags.includes(tag);
                        return (
                          <button
                            key={tag}
                            onClick={() => handleToggleTag(tag)}
                            className={`px-2 py-1 rounded-md text-[10px] font-mono transition duration-155 uppercase tracking-tight text-left cursor-pointer font-bold ${
                              isSelected
                                ? "bg-purple-600 text-white font-extrabold border border-purple-500"
                                : "bg-slate-55 border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                            }`}
                          >
                            <span>{tag}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Grid rendering */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-16 p-6 rounded-xl border border-slate-200 bg-white shadow-xs">
          <p className="text-sm text-slate-400 font-mono">No matching projects located in active index. Tweak search triggers.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="group rounded-xl border border-slate-200 bg-white p-5 hover:border-blue-400/40 hover:shadow-lg transition duration-300 flex flex-col justify-between space-y-6 shadow-xs"
            >
              <div className="space-y-4">
                {/* Cover Asset */}
                <div className="aspect-video w-full rounded-lg overflow-hidden bg-slate-100 relative border border-slate-200">
                  <img
                    src={proj.coverImage}
                    alt={proj.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent pointer-events-none" />

                  {/* Top indicators */}
                  <span className="absolute top-3 left-3 px-2.5 py-1 bg-slate-900/95 text-[9px] text-blue-300 font-mono uppercase tracking-wider rounded font-bold">
                    {proj.category}
                  </span>

                  <span className="absolute bottom-3 left-3 px-2.5 py-1 bg-slate-900/85 text-[9px] text-slate-100 font-mono rounded flex items-center gap-1 font-bold">
                    <Calendar className="w-3.5 h-3.5 text-blue-400" />
                    {proj.completionDate}
                  </span>

                  {/* Status */}
                  <span className={`absolute top-3 right-3 px-2 py-0.5 text-[9px] font-mono rounded border ${
                    proj.projectStatus === "Completed" ? "bg-emerald-50 border-emerald-200 text-emerald-700 font-extrabold" :
                    proj.projectStatus === "Active" ? "bg-blue-50 border-blue-205 text-blue-700 font-extrabold" :
                    "bg-amber-50 border-amber-205 text-amber-700 font-extrabold"
                  }`}>
                    {proj.projectStatus}
                  </span>
                </div>

                {/* Info Block */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-display text-slate-900 font-extrabold group-hover:text-blue-600 transition duration-150">
                      {proj.name}
                    </h3>
                    <span className="text-[10px] text-slate-400 font-mono font-bold">VIEWS: {proj.views}</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed font-sans max-w-full text-left">
                    {proj.description}
                  </p>
                </div>

                {/* Problem solved */}
                <div className="p-3.5 rounded-lg bg-blue-50 border border-blue-100 space-y-1">
                  <span className="text-[10px] text-blue-700 font-mono uppercase tracking-wider font-extrabold flex items-center gap-1.5 align-middle">
                    <AlertCircle className="w-3.5 h-3.5 text-blue-600" /> Problem Tackled
                  </span>
                  <p className="text-[11px] text-slate-650 leading-relaxed pr-1 text-left font-sans font-medium">
                    {proj.problemSolved}
                  </p>
                </div>

                {/* Feature bullets */}
                <div className="space-y-1.5 text-xs text-slate-550">
                  <span className="text-[10px] text-slate-400 font-mono uppercase tracking-wider block text-left font-bold">Key System Assets</span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 pl-1 font-sans font-medium">
                    {getProjectFeatures(proj).map((f, idx) => (
                      <li key={idx} className="flex items-center gap-1.5 text-[11px] text-left">
                        <span className="w-1.5 h-1.5 rounded-sm bg-blue-600" />
                        <span className="line-clamp-1">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-1 pt-1">
                  {getProjectTechnologies(proj).map((t, idx) => (
                    <span key={idx} className="px-2 py-0.5 bg-slate-100 border border-slate-200 text-[10px] text-slate-600 font-mono rounded font-semibold">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom buttons */}
              <div className="flex items-center gap-2 pt-4 border-t border-slate-100 font-mono text-[10px]">
                <button
                  onClick={() => handleViewProject(proj)}
                  className="flex-1 py-2 px-3 rounded-md border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-950 font-bold transition duration-150 flex items-center justify-center gap-1 shadow-xs cursor-pointer"
                  id={`view-details-btn-${proj.id}`}
                >
                  <Eye className="w-3.5 h-3.5 text-blue-600" />
                  <span>View Details</span>
                </button>

                {proj.caseStudy ? (
                  <button
                    onClick={() => handleOpenCaseStudy(proj)}
                    className="flex-1 py-2 px-3 rounded-md border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-950 font-bold transition duration-150 flex items-center justify-center gap-1 shadow-xs cursor-pointer"
                    id={`case-study-btn-${proj.id}`}
                  >
                    <BookOpen className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Case Study</span>
                  </button>
                ) : (
                  <div className="flex-1 text-center py-2 text-slate-400 border border-slate-100 bg-slate-50 rounded-md font-bold">
                    No Case Study
                  </div>
                )}

                {proj.liveUrl && (
                  <a
                    href={proj.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-md border border-slate-200 bg-white text-slate-500 hover:text-slate-900 hover:border-slate-350 hover:bg-slate-55 flex items-center justify-center"
                    id={`live-btn-${proj.id}`}
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-blue-600" />
                  </a>
                )}

                {proj.gitHubUrl && (
                  <a
                    href={proj.gitHubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-md border border-slate-200 bg-white text-slate-500 hover:text-slate-950 hover:border-slate-350 hover:bg-slate-55 flex items-center justify-center"
                    id={`github-btn-${proj.id}`}
                  >
                    <GitBranch className="w-3.5 h-3.5 text-blue-600" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 z-50 flex justify-end bg-slate-900/50 dark:bg-black/60 backdrop-blur-md p-0 select-none">
          <div className="w-full max-w-7xl h-full overflow-y-auto">
            <ProjectDetailPage
              project={selectedProject}
              onClose={handleCloseModal}
              onEdit={() => handleEditProject(selectedProject)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
