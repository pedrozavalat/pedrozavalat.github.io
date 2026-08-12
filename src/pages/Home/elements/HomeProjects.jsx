import './HomeElements.css';
import { useState } from 'react';
import Card from "../../../components/Card/Card";
import { Column, Row } from "../../../components/Table/Table";
import Line from "../../../components/Line/Line";
import { FaChevronDown, FaGithub } from 'react-icons/fa';
import { PROJECTS } from './constants';



const renderDescriptionWithLinks = (description, descriptionLinks = {}) => {
    const linkEntries = Object.entries(descriptionLinks);

    if (!linkEntries.length) {
        return description;
    }

    return linkEntries.reduce((nodes, [label, href]) => {
        return nodes.flatMap((node) => {
            if (typeof node !== 'string') {
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
                        <a className={'desc-link'} key={`${label}-${index}`} href={href} target="_blank" rel="noopener noreferrer">
                            {label}
                        </a>
                    );
                }

                return parts;
            });
        });
    }, [description]);
};

const ProjectAccordion = ({ project }) => {
    const [open, setOpen] = useState(false);
    return (
        <Card styles={["home-card project-card project-accordion"]}>
            <button
                type="button"
                className={`project-accordion__trigger ${open ? 'is-open' : ''}`}
                onClick={() => setOpen((current) => !current)}
                aria-expanded={open}
            >
                <div className="project-accordion__summary">
                    <h3>{project.title}</h3>
                    {project.subtitle ? <p className="project-accordion__subtitle">{project.subtitle}</p> : null}
                    <span className="project-accordion__meta">
                        <i>{project.date}</i>
                        <i style={{ color: '#ADADAD', fontWeight: 100 }}>{project.role}</i>
                    </span>
                </div>
                <FaChevronDown className={`project-accordion__icon ${open ? 'is-open' : ''}`} aria-hidden="true" />
            </button>

            <div className={`project-accordion__content ${open ? 'is-open' : ''}`}>
                {project.description.map((desc, index) => (
                    <p key={`${project.title}-description-${index}`} className="project-accordion__description">
                        {renderDescriptionWithLinks(desc, project.description_links)}
                    </p>
                ))}
                {project.code?.length ? (
                    <div className="project-accordion__section">
                        <h4>Code</h4>
                        <div className="project-accordion__links">
                            {project.code.map((link) => (
                                <><a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
                                    <FaGithub style={{ verticalAlign: 'middle' }} />
                                    {link.label}
                                </a> <br /><br /></>

                            ))}
                        </div>
                    </div>
                ) : null}
                {project.related?.length ? (
                    <div className="project-accordion__section">
                        <h4>Related</h4>
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
                        <h4>Talks</h4>
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

const Projects = ({ }) => {
    return (
        <>
            {PROJECTS.map((project) => (
                <ProjectAccordion key={project.title} project={project} />
            ))}
        </>
    );
};

export default Projects;