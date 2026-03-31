import Input from "./Input";
import type { Category, SortField, SortOrder } from "../types/project";

type ProjectFiltersProps = {
  search: string;
  category: Category | "all";
  sortField: SortField;
  sortOrder: SortOrder;
  onSearchChange: (value: string) => void;
  onCategoryChange: (value: Category | "all") => void;
  onSortFieldChange: (value: SortField) => void;
  onSortOrderChange: (value: SortOrder) => void;
};

export default function ProjectFilters({
  search,
  category,
  sortField,
  sortOrder,
  onSearchChange,
  onCategoryChange,
  onSortFieldChange,
  onSortOrderChange,
}: ProjectFiltersProps) {
  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-900">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        <Input
          id="search"
          label="Proje Ara"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="React, API, blog..."
        />

        <div>
          <label
            htmlFor="category"
            className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Kategori
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) =>
              onCategoryChange(e.target.value as Category | "all")
            }
            className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
          >
            <option value="all">Tümü</option>
            <option value="frontend">Frontend</option>
            <option value="fullstack">Fullstack</option>
            <option value="backend">Backend</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="sortField"
            className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Sıralama Alanı
          </label>
          <select
            id="sortField"
            value={sortField}
            onChange={(e) => onSortFieldChange(e.target.value as SortField)}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
          >
            <option value="year">Yıl</option>
            <option value="title">Başlık</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="sortOrder"
            className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Sıra
          </label>
          <select
            id="sortOrder"
            value={sortOrder}
            onChange={(e) => onSortOrderChange(e.target.value as SortOrder)}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
          >
            <option value="asc">Artan</option>
            <option value="desc">Azalan</option>
          </select>
        </div>
      </div>
    </section>
  );
}