import { useEffect, useMemo, useState } from "react";
import ProjectFilters from "./components/ProjectFilters";
import ProjectList from "./components/ProjectList";
import { fetchProjects } from "./services/projectService";
import type { FilterState, Project, Status } from "./types/project";
import {
  filterByCategory,
  filterBySearch,
  sortProjects,
} from "./utils/projectHelpers";

const initialFilters: FilterState = {
  search: "",
  category: "all",
  sortField: "year",
  sortOrder: "desc",
};

function ThemeToggle() {
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 rounded-full bg-gray-200 p-3 text-gray-800 shadow-lg transition hover:scale-105 dark:bg-gray-700 dark:text-gray-200"
      aria-label="Temayı değiştir"
    >
      <span className="dark:hidden">☾</span>
      <span className="hidden dark:inline">☀</span>
    </button>
  );
}

export default function App() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");
  const [filters, setFilters] = useState<FilterState>(initialFilters);

  useEffect(() => {
    async function load() {
      setStatus("loading");
      setError("");

      try {
        const data = await fetchProjects();
        setProjects(data);
        setStatus("success");
      } catch (err) {
        console.error("Projeler yüklenemedi:", err);
        setError("Projeler yüklenirken bir hata oluştu.");
        setStatus("error");
      }
    }

    load();
  }, []);

  const filteredProjects = useMemo(() => {
    let result = filterBySearch(projects, filters.search);
    result = filterByCategory(result, filters.category);
    result = sortProjects(result, filters.sortField, filters.sortOrder);
    return result;
  }, [projects, filters]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-white">
      <ThemeToggle />

      <header className="border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-blue-700 dark:text-blue-300">
            LAB-5
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            TypeScript Proje Listesi
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-400">
            JSON verisinden proje çekme, filtreleme, sıralama ve state yönetimi
            örneği.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <ProjectFilters
          search={filters.search}
          category={filters.category}
          sortField={filters.sortField}
          sortOrder={filters.sortOrder}
          onSearchChange={(value) =>
            setFilters((prev) => ({ ...prev, search: value }))
          }
          onCategoryChange={(value) =>
            setFilters((prev) => ({ ...prev, category: value }))
          }
          onSortFieldChange={(value) =>
            setFilters((prev) => ({ ...prev, sortField: value }))
          }
          onSortOrderChange={(value) =>
            setFilters((prev) => ({ ...prev, sortOrder: value }))
          }
        />

        {status === "loading" && (
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6 text-blue-700 dark:border-blue-900 dark:bg-blue-950 dark:text-blue-200">
            Projeler yükleniyor...
          </div>
        )}

        {status === "error" && (
          <div
            role="alert"
            className="rounded-2xl border border-red-200 bg-red-50 p-6 text-red-700 dark:border-red-900 dark:bg-red-950 dark:text-red-200"
          >
            {error}
          </div>
        )}

        {status === "success" && (
          <>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Toplam <span className="font-semibold">{filteredProjects.length}</span> proje gösteriliyor.
              </p>
            </div>

            <ProjectList projects={filteredProjects} />
          </>
        )}
      </main>
    </div>
  );
}