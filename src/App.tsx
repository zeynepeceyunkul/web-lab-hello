import { useEffect, useMemo, useState } from "react";
import Alert from "./components/Alert";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProjectSection from "./components/ProjectSection";
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
      className="fixed right-4 top-4 z-50 rounded-full bg-gray-200 p-3 text-gray-800 shadow-lg transition hover:scale-105 dark:bg-gray-700 dark:text-gray-200"
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

      <a
        href="#main-content"
        className="sr-only z-50 bg-blue-800 p-2 text-white focus:not-sr-only focus:absolute focus:left-0 focus:top-0"
      >
        Ana içeriğe atla
      </a>

      <Header />

      <main id="main-content">
        <HeroSection />

        {status === "loading" && (
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <Alert variant="info" title="Yükleniyor">
              Projeler yükleniyor...
            </Alert>
          </div>
        )}

        {status === "error" && (
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <Alert variant="error" title="Hata">
              {error}
            </Alert>
          </div>
        )}

        <ProjectSection
          projects={filteredProjects}
          filters={filters}
          totalCount={filteredProjects.length}
          isReady={status === "success"}
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

        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}