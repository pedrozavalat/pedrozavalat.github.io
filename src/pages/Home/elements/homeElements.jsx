import { IoIosArrowDropdownCircle } from "react-icons/io";
import { useEffect, useState } from "react";
import { IoIosDocument } from "react-icons/io";
import { FaLinkedin, FaGithub, FaChevronDown } from "react-icons/fa";
import { MdMail } from 'react-icons/md';
import './HomeElements.css';
import Card from "../../../components/Card/Card";
import { Column, Row } from "../../../components/Table/Table";
import Line from "../../../components/Line/Line";
import MePhoto from "../../../../public/me.jpg";
import saviia from '../../../../public/saviia.png';
import saviialib from '../../../../public/saviialib.png';
import ProjectsCard from "./HomeProjects";

const PROJECTS = [
    {
        title: "PISMA-WP: Platform for Intelligent Socio-Environmental Monitoring and Analysis",
        date: "March 2026 - Present",
        role: "Research Assistant / ETL and Backend Engineer",
        description:
            ["I contribute to the development of a socio-environmental monitoring platform for Western Patagonia. My work focuses on designing reproducible ETL pipelines and backend services for integrating satellite, geospatial, environmental, and locally collected data. I also support the development of APIs and data architectures that incorporate metadata, traceability, versioning, and quality-control mechanisms for the analysis and visualization of socio-environmental indicators."],
    },
    {
        title: "SAVIIA and ECHO: Trusted Data Infrastructures for Field Science",
        date: "March 2025 - Present",
        role: "Research Assistant",
        description:
            [
                "SAVIIA (Sistema de Administración y Visualización de Información para la Investigación y Análisis) and ECHO (Edge Computing and Hardware Orchestration) form a hybrid data infrastructure for UC’s Regional Field Stations Network (RCER). ECHO operates at the station level, coordinating local data acquisition, monitoring, and automation, while SAVIIA provides the centralized environment for storing, governing, integrating, and analyzing scientific and operational data. This edge-to-cloud architecture is designed to improve data traceability, reproducibility, and secure collaboration across research teams.",
                "I joined the initiative as an Undergraduate Research Assistant and currently continue as a Research Assistant. At the pilot site, Estación Patagonia UC (EPII UC), I developed ECHO, a Home Assistant integration for orchestrating data acquisition workflows, monitoring sensors, executing automations, and interacting with local IoT devices, and EchoLib, a Python library that implements the connection and data-processing logic for heterogeneous sources such as FTP/SFTP servers, REST APIs, sensors, and cloud storage services. Together, both components support the automated extraction, validation, backup, synchronization, and monitoring of data in an environment with limited connectivity, restricted energy availability, and minimal on-site maintenance."
            ],
        code: [
            {
                label: "raxlab/echo",
                href: "https://github.com/raxlab/echo",
            },
            {
                label: "echo-lib / saviialib",
                href: "https://github.com/pedrozavalat/echo-lib/tree/main/src/saviialib",
            },
        ],
        related: [
            {
                label:
                    "Ciencia de datos desde la Patagonia: investigación de pregrado mejora la gestión de datos científicos en la Estación UC",
                href: "https://estacionpatagonia.uc.cl/ipre/ciencia-de-datos-desde-la-patagonia-investigacion-de-pregrado-mejora-gestion-de-datos-cientificos-en-la-estacion-uc/",
            },
        ],
        talks: [
            "ECHO: Plataforma de monitoreo y automatización para estaciones remotas, Pedro Zavala Catalina Ortega, May 14 2026, Congreso Ingeniería para Chile (IPch), PUC.",
        ],
    },
    {
        title: "ECHO ML-edge: Machine Learning at the Edge",
        date: "March 2026 - Present",
        role: "Research Assistant",
        description:
            ["I am working on the development and evaluation of machine-learning models using camera-trap datasets collected at Estación Patagonia UC. My work includes dataset preparation, animal detection, species classification, transfer learning, model evaluation, and experimentation with different computer-vision architectures. The broader objective is to develop an MLOps and edge-inference infrastructure that connects cloud-based model training with local inference in remote scientific stations."],
    },
    {
        title: "SCORPIO: Satellite Communication and Radio Propagation for the Internet of Things",
        date: "March - June 2026",
        role: "Undergraduate Researcher",
        description:
            ["I designed and implemented an edge-to-cloud architecture for acquiring, processing, storing, transmitting, and visualizing satellite LoRa data. The system uses containerized edge services, MQTT-based communication, local SQLite storage, a REST API, and a web-based geospatial interface. It was designed to preserve experimental traceability and continue operating under intermittent connectivity, providing a foundation for distributed satellite signal-measurement stations."],
        code: [
            {
                label: "ScorpioIoTUC",
                href: "https://github.com/ScorpioIoTUC",
            },
        ],
    },
];

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
                        <i style={{color: '#ADADAD', fontWeight: 100}}>{project.role}</i>
                    </span>
                </div>
                <FaChevronDown className={`project-accordion__icon ${open ? 'is-open' : ''}`} aria-hidden="true" />
            </button>

            <div className={`project-accordion__content ${open ? 'is-open' : ''}`}>
                {project.description.map((desc) => (
                    <>
                    <p className="project-accordion__description">{desc}</p> <br />
                    </>
                ))}
                {project.code?.length ? (
                    <div className="project-accordion__section">
                        <h4>Code</h4>
                        <div className="project-accordion__links">
                            {project.code.map((link) => (
                                <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
                                    <FaGithub style={{ verticalAlign: 'middle' }} />
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>
                ) : null}

                {project.related?.length ? (
                    <div className="project-accordion__section">
                        <h4>Related</h4>
                        <div className="project-accordion__links">
                            {project.related.map((link) => (
                                <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>
                ) : null}

                {project.talks?.length ? (
                    <div className="project-accordion__section">
                        <h4>Talks</h4>
                        <div className="project-accordion__talks">
                            {project.talks.map((talk) => (
                                <p key={talk}>{talk}</p>
                            ))}
                        </div>
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

            <div class="hline"></div>

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
                        href="https://raw.githubusercontent.com/pedrozavalat/home/main/public/docs/OFICIAL_CV.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            textDecoration: 'none'
                        }}
                        download="CV_PedroPabloZavalaTejos.pdf"
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
            <div className="hline2"></div>
            <p>I am a Computer Science Engineer from Pontificia Universidad Católica de Chile (PUC), with a Major in Computing and Information Systems and a Minor in Data Science and Analytics. My background combines software development, data-driven systems, and applied research, with experience building solutions for environmental monitoring, edge computing, and embedded systems.</p>
            <h2>Research interest</h2>
            <p>I am interested in interdisciplinary projects that balance theory with practical solutions and focus on the development of IoT architectures and ETL pipelines. I am interested in Edge computing, Machine Learning & MLOps, data pipeline infrastructures, data-first systems.</p>

            <h2>Projects</h2>
            <p>Across these projects, I have progressed from working as an Undergraduate Research Assistant to my current role as a Research Assistant. My work focuses on designing technical infrastructures that support scientific research, particularly in remote environments where data availability, connectivity, reproducibility, and system reliability are central challenges.</p>
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

