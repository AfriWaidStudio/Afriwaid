import React, { createContext, useContext, useState, useEffect } from "react";
import { Project } from "../../types";
import { loadInitialData, saveInitialData } from "../../data";

interface ProjectsContextType {
  projects: Project[];
  loading: boolean;
  addProject: (project: Project) => void;
  updateProject: (project: Project) => void;
  deleteProject: (id: string) => void;
  getProjectById: (id: string) => Project | undefined;
}

const ProjectsContext = createContext<ProjectsContextType | null>(null);

export function ProjectsProvider({ children }: { children: React.ReactNode }) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = loadInitialData();
    setProjects(db.projects);
    setLoading(false);
  }, []);

  const addProject = (project: Project) => {
    const updated = [project, ...projects];
    setProjects(updated);
    const db = loadInitialData();
    saveInitialData({ ...db, projects: updated });
  };

  const updateProject = (project: Project) => {
    const updated = projects.map(p => p.id === project.id ? project : p);
    setProjects(updated);
    const db = loadInitialData();
    saveInitialData({ ...db, projects: updated });
  };

  const deleteProject = (id: string) => {
    const updated = projects.filter(p => p.id !== id);
    setProjects(updated);
    const db = loadInitialData();
    saveInitialData({ ...db, projects: updated });
  };

  const getProjectById = (id: string) => {
    return projects.find(p => p.id === id);
  };

  return (
    <ProjectsContext.Provider value={{ projects, loading, addProject, updateProject, deleteProject, getProjectById }}>
      {children}
    </ProjectsContext.Provider>
  );
}

export function useProjects() {
  const ctx = useContext(ProjectsContext);
  if (!ctx) throw new Error("useProjects must be used within ProjectsProvider");
  return ctx;
}