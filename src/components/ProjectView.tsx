import { ExternalLink } from "lucide-react";
import type { Project } from "../types/project";

type ProjectViewProps = {
  project: Project;
  onBack: () => void;
};

export default function ProjectView({ project }: ProjectViewProps) {
  return (
    <main className="shell project-view">
      <header className="topbar">
        <a
          href="/"
          className="brand"
          onClick={(event) => event.preventDefault()}
        >
          <span className="brand-mark">S</span>
          <span>TSB Suite</span>
        </a>

        <nav className="top-links" aria-label="External links">
          <a
            href="https://github.com/sankthomas"
            target="_blank"
            rel="noreferrer"
            className="flex"
          >
            GitHub{" "}
            <span>
              <ExternalLink size={16} />
            </span>
          </a>
          <a
            href="https://www.youtube.com/@tsbsankara"
            target="_blank"
            rel="noreferrer"
            className="flex"
          >
            YouTube{" "}
            <span>
              <ExternalLink size={16} />
            </span>
          </a>
        </nav>
      </header>

      <section className="detail-hero">
        <div>
          <div className="eyebrow">
            <span className="eyebrow-dot" /> Now exploring
          </div>

          <h1>
            {project.title} <br />
            <em>in detail.</em>
          </h1>
          <p className="hero-copy">{project.description}</p>
        </div>
        <div className="detail-index">
          01<span>/01</span>
        </div>
      </section>

      <section className="project-detail-grid">
        <div className="large-preview">
          <div className="preview-top">
            <span>{project.title}</span>
            <span>Live concept</span>
          </div>

          <div className="preview-card">
            <div className="preview-avatar">A</div>
            <div className="preview-card-copy">
              <span className="preview-kicker">Hello, I'm</span>
              <h2>Thomas Sankara</h2>
              <p>Building UI interfaces, one design at a time</p>

              <div className="preview-actions">
                <span>Let's connect</span>
                <span>
                  <ExternalLink size={16} />
                </span>
              </div>
            </div>
          </div>
        </div>

        <aside className="detail-sidebar">
          <div className="detail-block">
            <span className="detail-label">About this project</span>
            <p>{project.description}</p>
          </div>

          <div className="detail-block">
            <span className="detail-label">Built with</span>
            <div className="detail-tags">
              {project.tech.map((item: any) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>

          <div className="detail-actions">
            <a href={project.githubRepo} target="_blank" rel="noreferrer">
              View source{" "}
              <span>
                <ExternalLink size={16} />
              </span>
            </a>
            <a href={project.youtubeVideo} target="_blank" rel="noreferrer">
              YouTube walkthrough <span>↗</span>
            </a>
          </div>
        </aside>
      </section>

      <footer className="footer">
        <span>&copy; {new Date().getFullYear()} TSB Suite</span>
        <span>
          Built with intention, one project at a time <i>&middot;</i>
        </span>
      </footer>
    </main>
  );
}
