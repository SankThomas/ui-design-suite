import { ArrowLeft, ExternalLink, Layers3, Play } from "lucide-react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import ProjectMedia from "../components/ProjectMedia";
import { Footer } from "../components/Site";
import { projects } from "../data/projects";
import ScrollToTop from "../components/ScrollToTop";

function getYouTubeEmbedUrl(url: string) {
  const videoId = new URL(url).searchParams.get("v");
  return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
}

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = projects.find((item) => item.slug === slug);

  if (!project) return <Navigate to="/" replace />;

  const projectIndex = projects.indexOf(project);

  return (
    <>
      <ScrollToTop />
      <main className="shell project-view">
        <header className="topbar">
          <button className="back-button" onClick={() => navigate(-1)}>
            <ArrowLeft size={15} /> <span>Back to suite</span>
          </button>
          <span className="view-label">
            Project / {String(projectIndex + 1).padStart(2, "0")}
          </span>
          <Link className="brand" to="/">
            <span className="brand-mark">S</span>
            <span>Studio suite</span>
          </Link>
        </header>
        <section className="detail-hero">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-dot" /> Now exploring
            </div>
            <h1>
              {project.title}
              <br />
              <em>in detail.</em>
            </h1>
            <p className="hero-copy">{project.description}</p>
          </div>
          <div className="detail-index">
            {String(projectIndex + 1).padStart(2, "0")}
            <span>/{String(projects.length).padStart(2, "0")}</span>
          </div>
        </section>
        <section className="project-detail-grid">
          <div className="large-preview">
            <ProjectMedia project={project} index={projectIndex} />
            <div className="preview-caption">
              <Layers3 size={14} /> Project preview
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
                {project.tech.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
            <div className="detail-actions">
              <a href={project.githubRepo} target="_blank" rel="noreferrer">
                View source <ExternalLink size={15} />
              </a>
              <a href={project.youtubeVideo} target="_blank" rel="noreferrer">
                Watch on YouTube <ExternalLink size={15} />
              </a>
            </div>
          </aside>
        </section>
        <section className="video-section">
          <div className="section-heading">
            <span>Walkthrough</span>
            <span>From the studio</span>
          </div>
          <div className="video-frame">
            <iframe
              src={getYouTubeEmbedUrl(project.youtubeVideo)}
              title={`${project.title} walkthrough`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <div className="video-fallback">
              <Play size={20} /> Watch walkthrough
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
