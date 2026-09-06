import React, { useState, useEffect } from "react";
import Card from "../../../components/Card/Card";
import { Column, Row } from "../../../components/Table/Table";
import Line from "../../../components/Line/Line";
import { FaChevronDown, FaGithub } from 'react-icons/fa';
import { SiPypi, SiPython, SiHomeassistantcommunitystore } from "react-icons/si";
import Projects from "./HomeProjects";
import { EDUCATION_EXPERIENCE, WORK_EXPERIENCE, LIBRARIES } from "./constants";

import { useDarkMode } from "../HomeContext";

export const InformationNavbar = ({ setActiveSection }) => {
    return (
        <nav className="information-card-navbar">
            <ul style={{ margin: 0, padding: 0, display: 'flex', gap: '1rem', listStyle: 'none' }}>
                <li><a style={{ cursor: 'pointer', 'borderBottom': '1px solid var(--primary-color)' }} onClick={() => setActiveSection('home')}>Home</a></li>
                <li><a style={{ cursor: 'pointer' }} onClick={() => setActiveSection('experience')}>Experience</a></li>
                <li><a style={{ cursor: 'pointer' }} onClick={() => setActiveSection('libraries')}>Libraries</a></li>
            </ul>
        </nav>
    )
}

export const InformationHomeCard = ({ }) => {
    return (
        <>
            <section id="about-me">
                <h2>About me</h2>
                <p>
                    I am a graduated Computer Science Engineer from <a href="https://www.ing.uc.cl/" target="_blank">Pontificia Universidad Católica de Chile (PUC)</a>, with a Major in Computing and Information Systems and a Minor in Data Science and Analytics.
                    I am also an active collaborator in research projects with <a href="https://estacionpatagonia.uc.cl/">EPII UC</a> and <a href="https://www.linkedin.com/company/iot-uc/">IoT-UC Lab</a>, where I have contributed to the development of software solutions for environmental monitoring and scientific research.

                </p>
            </section>
            <section id="research-interest">
                <h2>Research interest</h2>
                <ul>
                    <li>Distributed and Data-Intensive Systems</li>
                    <li>Edge Computing and IoT Systems</li>
                    
                    <li>Applied ML for real-world problems</li>
                </ul>
                <p>My interests lie in interdisciplinary projects, particularly designing data-intensive systems and applied ML solutions for real-world problems.</p>
            </section>

            <section id="projects">
                <h2>Projects</h2>
                <p>I've worked on different software systems that move, process and serve data across cloud and edge environemnts. </p>
                <Projects />
            </section>
        </>
    )
}


export const InformationExperienceCard = ({ }) => {
    return (
        <section id="experience">
            <h2>Education</h2>
            <article id="education-experience">
                {EDUCATION_EXPERIENCE.map((exp, index) => (
                    <div key={index} style={{ marginBottom: '0.5rem', gap: '0' }}>
                        <h3>{exp.title}</h3>
                        <p style={{ margin: 0 }}>{exp.date}</p>
                        <p style={{ marginTop: '0.15rem', marginBottom: 0 }}>{exp.subtitle}</p>
                    </div>
                ))}
            </article>
            <h2>Work</h2>
            <article id="work-experience" style={{ marginBottom: '3rem' }}>
                {WORK_EXPERIENCE.map((exp, index) => (
                    <div key={index} style={{ marginBottom: '0.5rem', gap: '0', paddingBottom: '0.5rem', }}>
                        <h3>{exp.title}</h3>
                        <p style={{ margin: 0, color: 'var(--primary-color)' }}>{exp.date}</p>
                        <p style={{ marginTop: '0.15rem', marginBottom: 0 }}>{exp.subtitle}</p>
                        {exp.details && exp.details.length > 0 && (
                            <ul style={{ marginTop: '0.25rem', marginBottom: 0 }}>
                                {exp.details.map((detail, detailIndex) => (
                                    <li key={detailIndex}>{detail}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </article>
        </section>
    )
}

export const InformationLibrariesCard = ({ }) => {
    const { darkMode } = useDarkMode();
    const [iconColor, setIconColor] = useState("gray");
    useEffect(() => {
        setIconColor(!darkMode ? "gray" : "var(--primary-color)");
    }, [darkMode]);
    return (
        <section id="libraries">
            <h2>Python Packages and HA Integrations</h2>
            <p>Here are some libraries and Home Assistant Integrations that I've been developing over the past few years:</p>
            {LIBRARIES.map((library, index) => (
                <div className="library-item" key={index}>
                    <div className="library-item__header">
                        <library.icon size={30} color={iconColor} />
                        <a
                            href={library.href}
                            target="_blank"
                            rel="noopener noreferrer"
                        >{library.label}</a>
                    </div>
                    <p>{library.description}</p>
                </div>
            ))}
        </section>
    )
}




export const InformationCard = ({ }) => {
    const sections = ['home', 'experience', 'libraries'];
    const [activeSection, setActiveSection] = useState(sections[0]);

    if (activeSection === 'home') {
        return (
            <Card styles={[`home-card section-card`]} >
                <InformationNavbar setActiveSection={setActiveSection} />
                <InformationHomeCard />
            </Card>
        )
    } else if (activeSection === 'experience') {
        return (
            <Card styles={[`home-card section-card`]} >
                <InformationNavbar setActiveSection={setActiveSection} />
                <InformationExperienceCard />
            </Card>
        )
    } else if (activeSection === 'libraries') {
        return (
            <Card styles={[`home-card section-card`]} >
                <InformationNavbar setActiveSection={setActiveSection} />
                <InformationLibrariesCard />
            </Card>
        )
    }

    return null;
}