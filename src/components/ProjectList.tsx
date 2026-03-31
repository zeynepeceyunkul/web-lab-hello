import Button from "./Button";
import Card from "./Card";
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
        <Card
          key={project.id}
          variant={project.featured ? "elevated" : "outlined"}
          title={project.title}
          image={project.image}
          imageAlt={project.title}
          footer={
            <div className="flex items-center justify-between">
              <span className="text-sm capitalize text-gray-500 dark:text-gray-400">
                {project.category}
              </span>
              <Button size="sm">Detay</Button>
            </div>
          }
        >
          <p className="mb-3 text-sm leading-6">{project.description}</p>

          <div className="mb-3 flex flex-wrap gap-2">
            {project.tech.map((item) => (
              <span
                key={item}
                className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 dark:bg-gray-700 dark:text-gray-200"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500 dark:text-gray-400">{project.year}</span>
            {project.featured && (
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-900 dark:text-emerald-200">
                Featured
              </span>
            )}
          </div>
        </Card>
      ))}
    </section>
  );
}