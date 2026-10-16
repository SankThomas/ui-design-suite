import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { Footer, Header } from "../components/Site";
import { filters, projects } from "../data/projects";
import { ProjectCard } from "../components/ProjectCard";

export default function HomePage() {
  const [activeFilter, setActiveFilter] = useState("All projects");
  const [query, setQuery] = useState("");

  const visibleProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return projects.filter((project) => {
      const matchesFilter =
        activeFilter === "All projects" || project.tech.includes(activeFilter);
      const searchableText =
        `${project.title} ${project.description} ${project.tech.join(" ")}`.toLowerCase();
      return (
        matchesFilter &&
        (!normalizedQuery || searchableText.includes(normalizedQuery))
      );
    });
  }, [activeFilter, query]);

  return (
    <main className="shell">
      <Header />

      <section className="hero">
        <div className="eyebrow">
          <span className="eyebrow-dot" /> A growing collection of UI Designs
        </div>

        <h1>
          Small ideas, <br /> <em>carefully built.</em>
        </h1>
        <p className="hero-copy">
          A suite of useful interface studies, interaction experiments, and
          little pieces of the web I enjoy making.
        </p>

        <div className="hero-meta">
          <span>
            {String(projects.length).padStart(2, "0")} / selected projects
          </span>
          <span className="meta-line" />
          <span>Open source &amp; learn in public</span>
        </div>
      </section>

      <section className="toolbar" aria-label="Project filters">
        <div className="filter-list">
          {filters.map((filter) => (
            <button
              className={`filter-button ${activeFilter === filter ? "active" : ""}`}
              key={filter}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <label className="search-box">
          <Search size={15} aria-hidden="true" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search projects"
            aria-label="Search projects"
          />
        </label>
      </section>

      <section className="project-section">
        <div className="section-heading">
          <span>Selected work</span>
          <span>
            {String(visibleProjects.length).padStart(2, "0")} projects
          </span>
        </div>
        {visibleProjects.length > 0 ? (
          <div className="project-grid">
            {visibleProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <strong>No projects found.</strong>
            <span>Try another search or reset the filters.</span>
            <button
              onClick={() => {
                setQuery("");
                setActiveFilter("All projects");
              }}
            >
              Clear filters
            </button>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}
