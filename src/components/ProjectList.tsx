import type { Project } from "../types/project";

type ProjectListProps = {
  projects: Project[];
};

export default function ProjectList({ projects }: ProjectListProps) {
  if (projects.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-gray-300 p-8 text-center text-gray-500 dark:border-gray-700 dark:text-gray-400">
        Eşleşen proje bulunamadı.
      </div>
    );
  }

  return (
    <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) => (
        <article
          key={project.id}
          className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-gray-700 dark:bg-gray-900"
        >
          <img
            src={project.image}
            alt={project.title}
            className="h-48 w-full object-cover"
          />

          <div className="space-y-4 p-5">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                {project.title}
              </h2>
              <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900 dark:text-blue-200">
                {project.year}
              </span>
            </div>

            <p className="text-sm leading-6 text-gray-600 dark:text-gray-400">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm font-medium capitalize text-gray-500 dark:text-gray-400">
                {project.category}
              </span>

              {project.featured && (
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-900 dark:text-emerald-200">
                  Featured
                </span>
              )}
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}