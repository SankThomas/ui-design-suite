import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { Project } from "../types/project";
import ProjectMedia from "./ProjectMedia";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article className={`project-card card-tone-${index % 3}`}>
      <Link className="card-open" to={`/projects/${project.slug}`}>
        <ProjectMedia project={project} index={index} />

        <div className="card-content">
          <div className="card-number">0{index + 1}</div>
          <h2>{project.title}</h2>
          <p>{project.description}</p>

          <div className="card-bottom">
            <span className="open-label">
              Open project <ArrowUpRight size={16} />
            </span>
            <span className="tech-count">{project.tech.length} tools</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
