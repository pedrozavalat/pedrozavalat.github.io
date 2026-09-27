import { useState, useEffect } from "react";
import Card from "../../../components/Card/Card";
import Projects from "./HomeProjects";
import { EDUCATION_EXPERIENCE, WORK_EXPERIENCE, LIBRARIES } from "./constants";
import { useDarkMode } from "../HomeContext";

export const InformationNavbar = ({ activeSection, setActiveSection }) => {
  return (
    <nav className="information-card-navbar">
      <ul
        style={{
          margin: 0,
          padding: 0,
          display: "flex",
          gap: "1rem",
          listStyle: "none",
        }}
      >
        {/* Home section */}
        <li>
          <a
            style={{
              cursor: "pointer",
              borderBottom:
                activeSection == "home"
                  ? "1px solid var(--primary-color)"
                  : "none",
            }}
            onClick={() => setActiveSection("home")}
          >
            Home
          </a>
        </li>
        {/* Projects section */}
        <li>
          <a
            onClick={() => setActiveSection("projects")}
            style={{
              cursor: "pointer",
              borderBottom:
                activeSection == "projects"
                  ? "1px solid var(--primary-color)"
                  : "none",
            }}
          >
            Projects
          </a>
        </li>
        {/* Experience */}
        <li>
          <a
            style={{
              cursor: "pointer",
              borderBottom:
                activeSection == "experience"
                  ? "1px solid var(--primary-color)"
                  : "none",
            }}
            onClick={() => setActiveSection("experience")}
          >
            Experience
          </a>
        </li>
        {/* Libraries */}
        <li>
          <a
            style={{
              cursor: "pointer",
              borderBottom:
                activeSection == "libraries"
                  ? "1px solid var(--primary-color)"
                  : "none",
            }}
            onClick={() => setActiveSection("libraries")}
          >
            Open Source
          </a>
        </li>
      </ul>
    </nav>
  );
};

export const InformationHomeCard = ({}) => {
  return (
    <>
      <section id="about-me">
        <h2>About me</h2>
        <p>
          I am a Computer Science Engineer graduate from{" "}
          <a href="https://www.ing.uc.cl/" target="_blank">
            Pontificia Universidad Católica de Chile (PUC)
          </a>
          , with a Major in Computing and Information Systems and a Minor in
          Data Science and Analytics. I am also an active collaborator in
          research projects with{" "}
          <a href="https://estacionpatagonia.uc.cl/">EPII UC</a> and{" "}
          <a href="https://www.linkedin.com/company/iot-uc/">IoT-UC Lab</a>,
          where I have contributed to the development of software solutions for
          environmental monitoring and scientific research.
        </p>
      </section>
      <section id="research-interest">
        <h2>Research interests</h2>
        <ul>
          <li>Distributed and Data-Intensive Systems</li>
          <li>Edge Computing and IoT Systems</li>

          <li>Applied ML for real-world problems</li>
        </ul>
        <p>
          My interests lie in interdisciplinary projects, particularly designing
          data-intensive systems and applied ML solutions for real-world
          problems.
        </p>
      </section>
    </>
  );
};

export const InformationExperienceCard = ({}) => {
  return (
    <section id="experience">
      <h2>Education</h2>
      <article id="education-experience">
        {EDUCATION_EXPERIENCE.map((exp, index) => (
          <div key={index} style={{ marginBottom: "0.5rem", gap: "0" }}>
            <h3 style={{}}>{exp.title}</h3>
            <p id="edu__date" style={{ margin: 0 }}>
              {exp.date}
            </p>
            <p id="edu__title-detail" style={{ margin: 0 }}>
              {exp.title_detail}
            </p>
            <p id="edu__uni" style={{ margin: 0 }}>
              {exp.subtitle}
            </p>
          </div>
        ))}
      </article>
      <h2>Work</h2>
      <article id="work-experience" style={{ marginBottom: "3rem" }}>
        {WORK_EXPERIENCE.map((exp, index) => (
          <div
            key={index}
            style={{
              marginBottom: "0.5rem",
              gap: "0",
              paddingBottom: "0.5rem",
            }}
          >
            <h3>{exp.title}</h3>
            <p style={{ margin: 0, color: "var(--primary-color)" }}>
              {exp.date}
            </p>
            <p style={{ marginTop: "0.15rem", marginBottom: 0 }}>
              {exp.subtitle}
            </p>
            {exp.details && exp.details.length > 0 && (
              <ul style={{ marginTop: "0.25rem", marginBottom: 0 }}>
                {exp.details.map((detail, detailIndex) => (
                  <li key={detailIndex}>{detail}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </article>
    </section>
  );
};

export const InformationLibrariesCard = ({}) => {
  const { darkMode } = useDarkMode();
  const [iconColor, setIconColor] = useState("gray");
  useEffect(() => {
    setIconColor(!darkMode ? "gray" : "var(--primary-color)");
  }, [darkMode]);
  return (
    <section id="libraries">
      <h2>Python Packages and HA Integrations</h2>
      <p>
        Here are some libraries and Home Assistant Integrations that I've been
        developing over the past few years:
      </p>
      {LIBRARIES.map((library, index) => (
        <div className="library-item" key={index}>
          <div className="library-item__header">
            <library.icon size={30} color={iconColor} />
            <a href={library.href} target="_blank" rel="noopener noreferrer">
              {library.label}
            </a>
          </div>
          <p>{library.description}</p>
        </div>
      ))}
    </section>
  );
};

export const InformationProjectsCard = ({}) => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <p>
        Here are some of the projects that I have been working on. Most of them
        were developed for scientific research purposes, providing software
        solutions to real-world problems.
      </p>
      <Projects />
    </section>
  );
};

export const InformationCard = ({}) => {
  const sections = ["home", "projects", "experience", "libraries"];
  const [activeSection, setActiveSection] = useState(sections[0]);

  const sectionComponents = {
    home: InformationHomeCard,
    projects: InformationProjectsCard,
    experience: InformationExperienceCard,
    libraries: InformationLibrariesCard,
  };
  const SectionComponent = sectionComponents[activeSection];

  if (!SectionComponent) return null;

  return (
    <Card styles={[`home-card section-card`]}>
      <InformationNavbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <SectionComponent />
    </Card>
  );
};
