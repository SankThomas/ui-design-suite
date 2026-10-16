import { ArrowUpRight, Ellipsis } from "lucide-react";
import { useState } from "react";
import type { Project } from "../types/project";

type ProjectMediaProps = {
  project: Project;
  index: number;
};

export default function ProjectMedia({ project, index }: ProjectMediaProps) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div className="card-image">
      {!imageFailed && (
        <img
          className="project-image"
          src={project.image}
          alt={`${project.title} preview`}
          onError={() => setImageFailed(true)}
        />
      )}
      {imageFailed && <IllustrationFallback index={index} />}
      <div className="media-shade" />
      <span className="image-label">Preview / 0{index + 1}</span>
      <ArrowUpRight className="image-arrow" size={22} />
    </div>
  );
}

function IllustrationFallback({ index }: { index: number }) {
  return (
    <div
      className="illustration-fallback"
      aria-label="Illustrated project preview"
    >
      <div className="illustration-orbit illustration-orbit-one" />
      <div className="illustration-orbit illustration-orbit-two" />
      <div className="mini-profile">
        <div className="avatar">{index === 0 ? "T" : "S"}</div>
        <div>
          <strong>About me</strong>
          <span>Frontend Web Developer</span>
        </div>
        <b>
          <Ellipsis />
        </b>
      </div>
    </div>
  );
}
