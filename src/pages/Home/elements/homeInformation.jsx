import React, { useState } from "react";
import Card from "../../../components/Card/Card";
import { Column, Row } from "../../../components/Table/Table";
import Line from "../../../components/Line/Line";
import { FaChevronDown, FaGithub } from 'react-icons/fa';
import Projects from "./HomeProjects";
import { EDUCATION_EXPERIENCE, WORK_EXPERIENCE } from "./constants";

export const InformationNavbar = ({ setActiveSection }) => {
    return (
        <nav className="information-card-navbar">
            <ul style={{ margin: 0, padding: 0, display: 'flex', gap: '1rem', listStyle: 'none' }}>
                <li><a style={{ cursor: 'pointer', 'borderBottom': '1px solid var(--primary-color)' }} onClick={() => setActiveSection('home')}>Home</a></li>
                <li><a style={{ cursor: 'pointer' }} onClick={() => setActiveSection('experience')}>Experience</a></li>
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
                    I am also an active collaborator in research projects with <a href="https://estacionpatagonia.uc.cl/">EPII UC</a>, where I have contributed to the development of environmental monitoring systems and embedded applications.
                    My interests lie in interdisciplinary projects, particularly designing data-intensive systems and applied ML solutions for real-world problems.

                </p>
            </section>
            <section id="research-interest">
                <h2>Research interest</h2>
                <ul>
                    <li>Reliable data-intensive systems for environmental monitoring</li>
                    <li>Applied machine learning for real-world problems</li>
                    <li>IoT architectures and edge computing</li>
                </ul>
            </section>

            <section id="projects">
                <h2>Projects</h2>
                <p>I first joined these projects as an Undergraduate Research Assistant and have continued contributing to them in my current role as a Research Assistant. My work focuses on designing and developing technical infrastructure for scientific research, particularly in remote environments where data availability, connectivity, and system reliability are key challenges.</p>
                <Projects />
            </section>
        </>
    )
}


export const InformationExperienceCard = ({ }) => {
    return (
        <section id="experience">
            <h2>Education</h2>
            <article>
                {EDUCATION_EXPERIENCE.map((exp, index) => (
                    <div key={index} style={{ marginBottom: '0.5rem', gap: '0' }}>
                        <h3 style={{ marginBottom: '0.25rem' }}>{exp.title}</h3>
                        <p style={{ margin: 0 }}>{exp.date}</p>
                        <p style={{ marginTop: '0.15rem', marginBottom: 0 }}>{exp.subtitle}</p>
                    </div>
                ))}
            </article>
            <h2>Work</h2>
            <article style={{ marginBottom: '3rem' }}>
                {WORK_EXPERIENCE.map((exp, index) => (
                    <div key={index} style={{ marginBottom: '0.5rem', gap: '0' , paddingBottom: '0.5rem', }}>
                        <h3 style={{ marginBottom: '0.25rem', color: 'var(--quaternary-color)' }}>{exp.title}</h3>
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

export const InformationCard = ({ }) => {
    const sections = ['home', 'experience']
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
    }

    return null;
}