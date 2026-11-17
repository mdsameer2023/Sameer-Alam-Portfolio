import React from "react";
import SectionHead from "../ui/SectionHead";
import { projects } from "../../data/portfolioData";
import "./SelectedWorkStack.css";

export default function Projects() {
  return (
    <section id="work" className="selected-work">
      <div className="selected-work-inner">
        <SectionHead index="03" title="Selected" em="work" />
        <div className="selected-work-stack">
          {projects.map((project, index) => (
            <article className="selected-work-item" key={project.title} style={{ "--card-index": index }}>
              <div className="selected-work-card">
                <div className="selected-work-meta">
                  <span>/ {String(index + 1).padStart(2, "0")}</span>
                  <span>{project.badge || "Project"}</span>
                </div>
                <div className="selected-work-content">
                  <div className="selected-work-copy">
                    <h3>{project.title}</h3>
                    <p>{project.desc}</p>
                    <div className="selected-work-tags">
                      {project.tags?.slice(0, 5).map((tag) => <span key={tag}>{tag}</span>)}
                    </div>
                    <div className="selected-work-actions">
                      {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer">Launch <span aria-hidden="true">↗</span></a>}
                      {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer">Source <span aria-hidden="true">↗</span></a>}
                    </div>
                  </div>
                  <div className="selected-work-image">
                    <img src={project.image} alt={`${project.title} project preview`} loading="lazy" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}