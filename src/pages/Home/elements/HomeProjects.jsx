import "./HomeElements.css";
import { useState, useEffect } from "react";
import Card from "../../../components/Card/Card";
import { Column, Row } from "../../../components/Table/Table";
import Line from "../../../components/Line/Line";
import { FaChevronDown, FaGithub } from "react-icons/fa";
import { IoGlobeSharp } from "react-icons/io5";
import { useDarkMode } from "../HomeContext";
import "./HomeProjects.css";
import { PROJECTS } from "./constants";

const renderDescriptionWithLinks = (description, descriptionLinks = {}) => {
  const linkEntries = Object.entries(descriptionLinks);

  if (!linkEntries.length) {
    return description;
  }

  return linkEntries.reduce(
    (nodes, [label, href]) => {
      return nodes.flatMap((node) => {
        if (typeof node !== "string") {
          return [node];
        }

        const segments = node.split(label);

        if (segments.length === 1) {
          return [node];
        }

        return segments.flatMap((segment, index) => {
          const parts = [segment];

          if (index < segments.length - 1) {
            parts.push(
              <a
                className={"desc-link"}
                key={`${label}-${index}`}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {label}
              </a>,
            );
          }

          return parts;
        });
      });
    },
    [description],
  );
};

const ProjectAccordion = ({ project, open, onToggle }) => {
  const [darkColor, setDarkColor] = useState("gray");
  const [revDarkColor, setRevDarkColor] = useState("var(--primary-color)");
  const { darkMode } = useDarkMode();
  useEffect(() => {
    setDarkColor(!darkMode ? "gray" : "var(--primary-color)");
    setRevDarkColor(!darkMode ? "var(--primary-color)" : "gray");
  }, [darkMode]);

  const getCodeTitle = (links) => {
    const types = links.map((link) => link.type);
    let title = "";
    if (types.includes("git") && !types.includes("web")) {
      title = "Code repositories";
    } else if (!types.includes("git") && types.includes("web")) {
      title = "Web applications";
    } else if (types.includes("git") && types.includes("web")) {
      title = "Code repositories and web applications";
    }
    return title;
  };

  return (
    <Card styles={["home-card project-card project-accordion"]}>
      <button
        type="button"
        className={`project-accordion__trigger ${open ? "is-open" : ""}`}
        onClick={onToggle}
        aria-expanded={open}
      >
        {/* The main information */}
        <div className="project-accordion__summary">
          <img
            className="project-accordion__image "
            src={!darkMode ? project.icon.light : project.icon.dark}
            alt="project-icon"
          />
          <span>
            <h3 style={{ color: "var(--primary-color)" }}>{project.title}</h3>
            {project.subtitle ? (
              <h6 className="project-accordion__subtitle">
                {project.subtitle}
              </h6>
            ) : null}
          </span>
        </div>
        <FaChevronDown
          className={`project-accordion__icon ${open ? "is-open" : ""}`}
          aria-hidden="true"
        />
      </button>
      {/* Rest of the information */}
      <div className={`project-accordion__content ${open ? "is-open" : ""}`}>
        <div className="hline"></div>
        <span className="project-accordion__meta">
          <span>{project.role}</span>
          <span>{project.date}</span>
        </span>
        <br />
        <br />
        {project.description.map((desc, index) => (
          <p
            key={`${project.title}-description-${index}`}
            className="project-accordion__description"
          >
            {renderDescriptionWithLinks(desc, project.description_links)}
          </p>
        ))}
        {project.code?.length ? (
          <div className="project-accordion__section">
            <h4 style={{ color: darkColor, fontWeight: 600 }}>
              {getCodeTitle(project.code)}
            </h4>
            <div className="project-code-grid">
              {project.code.map((link) => (
                <a
                  className="project-code-card"
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="project-code-card__title">
                    {link.type === "git" ? <FaGithub /> : null}
                    {link.type === "web" ? <IoGlobeSharp /> : null}
                    {link.label}
                  </span>

                  {link.image ? (
                    <span className="project-code-card__image-wrap">
                      <img
                        className="project-code-card__image"
                        src={link.image}
                        alt={link.label}
                      />
                    </span>
                  ) : null}

                  {link.description ? (
                    <p className="project-code-card__description">
                      {link.description}
                    </p>
                  ) : null}
                </a>
              ))}
            </div>
          </div>
        ) : null}
        {project.related?.length ? (
          <div className="project-accordion__section">
            <h4 style={{ color: darkColor, fontWeight: 600 }}>Related</h4>
            <ul className="project-accordion__links">
              {project.related.map((link) => (
                <li key={link.href}>
                  <a
                    className="project-accordion__related-link"
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {project.talks?.length ? (
          <div className="project-accordion__section">
            <h4 style={{ color: darkColor, fontWeight: 600 }}>Talks</h4>
            <ul className="project-accordion__links">
              {project.talks.map((talk) => (
                <li key={talk.href}>
                  <a
                    className="project-accordion__related-link"
                    href={talk.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {talk.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </Card>
  );
};

const Projects = ({}) => {
  const [openProject, setOpenProject] = useState(null);
  useEffect(() => {
    if (!openProject) return;

    requestAnimationFrame(() => {
      document.getElementById("projects")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }, [openProject]);

  const visibleProjects = openProject
    ? PROJECTS.filter((project) => project.title === openProject)
    : PROJECTS;

  const toggleProject = (title) => {
    setOpenProject((current) => (current === title ? null : title));
  };

  return (
    <div
      className={`projects-section ${openProject ? "has-open-project" : ""}`}
    >
      {visibleProjects.map((project) => (
        <ProjectAccordion
          key={project.title}
          project={project}
          open={project.title === openProject}
          onToggle={() => toggleProject(project.title)}
        />
      ))}
    </div>
  );
};

export default Projects;
