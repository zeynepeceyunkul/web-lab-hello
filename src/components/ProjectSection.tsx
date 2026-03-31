import type {
  Category,
  FilterState,
  Project,
  SortField,
  SortOrder,
} from "../types/project";
import ProjectFilters from "./ProjectFilters";
import ProjectList from "./ProjectList";

type ProjectSectionProps = {
  projects: Project[];
  filters: FilterState;
  totalCount: number;
  isReady: boolean;
  onSearchChange: (value: string) => void;
  onCategoryChange: (value: Category | "all") => void;
  onSortFieldChange: (value: SortField) => void;
  onSortOrderChange: (value: SortOrder) => void;
};

export default function ProjectSection({
  projects,
  filters,
  totalCount,
  isReady,
  onSearchChange,
  onCategoryChange,
  onSortFieldChange,
  onSortOrderChange,
}: ProjectSectionProps) {
  return (
    <section
      id="projeler"
      className="mx-auto max-w-7xl space-y-8 px-4 py-14 sm:px-6 lg:px-8"
    >
      <div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Projelerim
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          JSON verisinden yüklenen projeleri filtreleyebilir ve sıralayabilirsin.
        </p>
      </div>

      <ProjectFilters
        search={filters.search}
        category={filters.category}
        sortField={filters.sortField}
        sortOrder={filters.sortOrder}
        onSearchChange={onSearchChange}
        onCategoryChange={onCategoryChange}
        onSortFieldChange={onSortFieldChange}
        onSortOrderChange={onSortOrderChange}
      />

      {isReady && (
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Toplam <span className="font-semibold">{totalCount}</span> proje gösteriliyor.
        </p>
      )}

      {isReady && <ProjectList projects={projects} />}
    </section>
  );
}