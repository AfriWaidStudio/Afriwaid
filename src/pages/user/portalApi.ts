import { getPortalAuthHeaders, getPortalAuthToken } from "./auth";

export async function portalRequest<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  if (!getPortalAuthToken()) {
    throw new Error("Authentication is not ready.");
  }

  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => controller.abort(), 15000);
  const headers = {
    ...getPortalAuthHeaders(),
    ...(options.body ? { "Content-Type": "application/json", "x-csrf-token": "afriwaid-csrf-v1" } : {}),
    ...(options.headers || {}),
  };
  try {
    const res = await fetch(endpoint, { ...options, headers, signal: options.signal || controller.signal });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      throw new Error(data.error || data.message || `Request failed (${res.status})`);
    }
    return data;
  } catch (error) {
    if (error instanceof DOMException && error.name === "AbortError") {
      throw new Error("Request timed out. Please check that the AfriWaid server is running and try again.");
    }
    throw error;
  } finally {
    window.clearTimeout(timeoutId);
  }
}

export function formatDate(value?: string) {
  if (!value) return "Not scheduled";
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? value : date.toLocaleDateString();
}

export function downloadTextFile(filename: string, content: string, type = "text/plain") {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}
