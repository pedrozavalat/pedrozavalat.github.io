import { IoIosArrowDropdownCircle } from "react-icons/io";
import { useEffect, useState } from "react";
import { IoIosDocument } from "react-icons/io";
import { FaLinkedin, FaGithub, FaChevronDown } from "react-icons/fa";
import { MdMail } from 'react-icons/md';
import './HomeElements.css';
import Card from "../../../components/Card/Card";
import { Column, Row } from "../../../components/Table/Table";
import Line from "../../../components/Line/Line";
import MePhoto from "../../../../public/me1.png";
import saviia from '../../../../public/saviia.png';
import saviialib from '../../../../public/saviialib.png';
import ProjectsCard from "./HomeProjects";
import { PROJECTS } from './constants'

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
                                // <li><p key={talk.label}>{talk.label}</p></li>
                            ))}
                        </ul>
                    </div>
                ) : null}
            </div>
        </Card>
    );
};

export const HomeNavbar = ({ children, initPos }) => {
    return (
        <>
            <div className={`home-navbar-layout ${initPos}`}>
            </div>
            <nav className={`home-navbar ${initPos}`} >
                {children}
            </nav>
        </>
    );
}

export const ShowNavBar = ({ active, setActive, setInitPos }) => {
    const [bounce, setBounce] = useState(false);

    const handleNavbar = () => {
        if (!active) {
            setActive(true);
            setInitPos('show');
        } else {
            setActive(false);
            setInitPos('hide')
        }
        console.log(active);
    }
    useEffect(() => {
        if (!active) {
            const timer = setTimeout(() => {
                setBounce(true);
            }, 5000);
            return () => {
                clearTimeout(timer);
                setBounce(false);
            };
        }
    }, [active]);
    return (
        <button
            className={`show-navbar-button ${active ? 'active' : ''} ${bounce ? 'bounce' : ''}`}
            onClick={handleNavbar}>
            <IoIosArrowDropdownCircle className="icon" />
        </button>
    )
}

export const HomeContact = () => {
    const cvLink = 'https://raw.githubusercontent.com/pedrozavalat/home/main/public/docs/OFICIAL_CV.pdf';
    const cvName = 'CV_PedroPabloZavalaTejos.pdf'

    const downloadCV = async () => {
        try {
            const response = await fetch(cvLink);
            if (!response.ok) throw new Error('Error al descargar el archivo');
            const blob = await response.blob();
            const downloadUrl = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = downloadUrl;
            a.download = cvName;
            document.body.appendChild(a);
            a.click();
            a.remove();
            URL.revokeObjectURL(downloadUrl);
        } catch (error) {
            console.error('Error al descargar el archivo:', error);
        }
    };

    return (
        <Card styles={['row home-card']}>
            <Column>
                <h2>Email</h2>
                <a href="mailto:pedropablozavalat@uc.cl">
                    <MdMail size={50} />
                </a>
            </Column>
            <Line />
            <Column>
                <h2>CV</h2>
                <a target="_blank" rel="noopener noreferrer" onClick={downloadCV}>
                    <IoIosDocument size={50} />
                </a>
            </Column>
            <Line />
            <Column>
                <h2>Linkedin</h2>
                <a href="https://www.linkedin.com/in/pedro-pablo-zavala-tejos-671203244/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={50} />
                </a>
            </Column>
            <Line />
            <Column>
                <h2>Github</h2>
                <a href="https://github.com/pedrozavalat"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub size={50} />
                </a>
            </Column>
        </Card>
    )
}

export const HomeOverview = ({ isDarkMode }) => {
    const styles = isDarkMode ? ['home', 'dark'] : ['home', 'light'];
    return (
        <div className="home">
            <ProfileCard />
            <InformationCard />
        </div>
    );
}

export const ProfileCard = ({ isDarkMode }) => {
    const lightRed = '#ff6f61';
    return (
        <Card styles={[`home-card profile-card  ${isDarkMode ? 'dark' : 'light'}`]} style={{ width: '100%', maxWidth: '400px', textAlign: 'left' }}>
            <img src={MePhoto} width={100} height={225} alt="Profile" />
            <h3>Pedro Pablo Zavala Tejos</h3>
            <section>
                <p>Computer Engineer</p>
                <p>Pontificia Universidad Católica de Chile</p>
                <p>Santiago, Chile</p>
            </section>

            {/* <div class="hline"></div> */}
            {/* <ul>
                <a>About me</a>
                <a>Projects</a>

            </ul> */}

            <div class="hline"></div>

            <div>
                <p>
                    <MdMail style={{ verticalAlign: 'middle', marginRight: 8, color: "gray" }} />
                    <a
                        href="mailto:pedropablozavalat@uc.cl"

                    >
                        pedropablozavalat@uc.cl
                    </a>
                </p>
                <p>
                    <FaLinkedin style={{ verticalAlign: 'middle', marginRight: 8, color: "gray" }} />
                    <a
                        href="https://www.linkedin.com/in/pedro-pablo-zavala-tejos-671203244/"
                        target="_blank"
                        rel="noopener noreferrer"

                    >
                        LinkedIn
                    </a>
                </p>
                <p>
                    <FaGithub style={{ verticalAlign: 'middle', marginRight: 8, color: "gray" }} />
                    <a
                        href="https://github.com/pedrozavalat"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>
                </p>

                <p>
                    <IoIosDocument style={{ verticalAlign: 'middle', marginRight: 8, color: "gray" }} />
                    <a
                        href="docs/OFICIAL_CV.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Download Resume (CV)
                    </a>
                </p>
            </div>
        </Card>
    )
}

export const InformationCard = ({ isDarkMode }) => {

    return (
        <Card styles={[`home-card section-card`]} >
            <h2>About me</h2>
            <p>I am a Computer Science Engineer from <a href="https://www.ing.uc.cl/" target="_blank">Pontificia Universidad Católica de Chile (PUC)</a>, with a Major in Computing and Information Systems and a Minor in Data Science and Analytics. My background combines software development, data infrastructure, and applied research, with experience developing systems for environmental monitoring, edge computing, and embedded applications.</p>
            
            <h2>Research interest</h2>
            <p> My research interests lie in interdisciplinary projects that connect theoretical foundations with practical, real-world solutions. I am particularly interested in the design and development of <span style={{fontWeight: '500', color: 'gray'}}>IoT and edge computing architectures</span>, <span style={{fontWeight: '500', color: 'gray'}}>ETL and data pipelines</span>, and <span style={{fontWeight: '500', color: 'gray'}}>reliable data-intensive systems</span>. I am also interested in machine learning and MLOps, particularly when integrated into reproducible data workflows and distributed computing infrastructures. </p>

            <h2>Projects</h2>
            <p>I first joined these projects as an Undergraduate Research Assistant and have continued contributing to them in my current role as a Research Assistant. My work focuses on designing and developing technical infrastructure for scientific research, particularly in remote environments where data availability, connectivity, and system reliability are key challenges.</p>
            {PROJECTS.map((project) => (
                <ProjectAccordion key={project.title} project={project} />
            ))}

        </Card>
    )
}


export const PresentationCard = ({ }) => {
    return <Card>

    </Card>
}

