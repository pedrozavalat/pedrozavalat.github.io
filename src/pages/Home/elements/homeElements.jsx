import { IoIosArrowDropdownCircle } from "react-icons/io";
import { useEffect, useState } from "react";
import { IoIosDocument } from "react-icons/io";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdMail } from 'react-icons/md';
import './HomeElements.css';
import Card from "../../../components/Card/Card";
import { Column, Row } from "../../../components/Table/Table";
import Line from "../../../components/Line/Line";
import MePhoto from "../../../../public/me.jpg";
import saviia from '../../../../public/saviia.png';
import saviialib from '../../../../public/saviialib.png';
import ProjectsCard from "./HomeProjects";

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

export const HomeOverview = ({isDarkMode}) => {
    const styles = isDarkMode ? ['home', 'dark'] : ['home', 'light'];
    return (
        <div className="home" style={{ backgroundColor: isDarkMode ? '#001524' : '#f0f0f0' }}>
            {/* <h1 style={{ color: "#ffecd1", fontWeight: 400 }}>Pedro Pablo Zavala Tejos</h1>
            <h3 style={{ color: "#ffecd1", margin: '0 0 2rem 0', fontWeight: 200, padding: 0 }}>
                Computer Science Student
            </h3> */}
            <Row>
                <ProfileCard isDarkMode={isDarkMode}/>
                <Column>
                    <InformationCard isDarkMode={isDarkMode} />    
                </Column>
            </Row>
            
        </div>
    );
}

export const ProfileCard = ({isDarkMode}) => {
    const lightRed = '#ff6f61';
    return (
        <Card styles={[`home-card profile-card  ${isDarkMode ? 'dark' : 'light'}`]} style={{ width: '100%', maxWidth: '400px', textAlign: 'left' }}>
            <img src={MePhoto} width={100} height={225} alt="Profile" />
            <h2>Pedro Pablo Zavala Tejos</h2>
            <p>Computer Science Student</p> 
            <p>Pontificia Universidad Católica de Chile</p> 
            <p>Santiago, Chile</p> 

            <div style={{ marginTop: '3rem' }}>
                <p>
                    <MdMail style={{ verticalAlign: 'middle', marginRight: 8 }} />
                    <a
                        href="mailto:pedropablozavalat@uc.cl"
                        style={{
                            color: isDarkMode ? '#0072b1' : lightRed,
                            textDecoration: 'none'
                        }}
                    >
                        pedropablozavalat@uc.cl
                    </a>
                </p>
                <p>
                    <FaLinkedin style={{ verticalAlign: 'middle', marginRight: 8 }} />
                    <a
                        href="https://www.linkedin.com/in/pedro-pablo-zavala-tejos-671203244/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            color: isDarkMode ? '#0072b1' : lightRed,
                            textDecoration: 'none'
                        }}
                    >
                        LinkedIn
                    </a>
                </p>
                <p>
                    <FaGithub style={{ verticalAlign: 'middle', marginRight: 8 }} />
                    <a
                        href="https://github.com/pedrozavalat"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            color: isDarkMode ? '#0072b1' : lightRed,
                            textDecoration: 'none'
                        }}
                    >
                        GitHub
                    </a>
                </p>

                <p>
                    <IoIosDocument style={{ verticalAlign: 'middle', marginRight: 8 }} />
                    <a
                        href="https://raw.githubusercontent.com/pedrozavalat/home/main/public/docs/OFICIAL_CV.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            color: isDarkMode ? '#0072b1' : lightRed,
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

export const InformationCard = ({isDarkMode}) => {
    
    return (
        <Card styles={[`home-card section-card ${isDarkMode ? 'dark' : 'light'}`]} >
            <h2>About me</h2>
            <p>
                Hi! I am Pedro, fifth-year student pursuing a degree in Civil Engineering with a major in Computer Science and Information Systems, and a minor in Data Science and Analytics.
                My main focus is on data science, and I am eager to participate in various projects and courses related to data analysis and processing. I have experience in machine learning and strong software development skills.
            </p>
            <p>
                If you are interested in collaborating on a data science project, I would be delighted to hear from you!
                Contact me via email or through my LinkedIn profile.
            </p>

            <h2>Projects</h2>
            <p>Here are some of the projects I have worked on. You can find more details and the source code on my GitHub.</p>
            
                <Card styles={[`home-card project-card ${isDarkMode ? 'dark' : 'light'}`]} >
                <h3>Sistema de Administración y Visualización de Información para la Investigación y Análisis (SAVIIA)</h3>
                    {/* <img 
                        src={saviia} 
                        alt="SAVIIA Logo" 
                        style={{ 
                            display: 'block', 
                            margin: '0 auto', 
                            maxWidth: '20px', 
                            maxHeight: '100px',
                            objectFit: 'contain',
                            borderRadius: '25%',
                        }}
                    /> */}
                    <p>Home Assistant integration for remote data extraction at the UC Patagonia Research Center.</p>
                    
                    <a href="https://github.com/raxlab/saviia" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                        <FaGithub style={{ verticalAlign: 'middle' }} />
                        raxlab/saviia
                    </a>
                </Card>
                <Card styles={[`home-card project-card ${isDarkMode ? 'dark' : 'light'}`]} >
                <h3>SaviiaLib</h3>
                    {/* <img 
                        src={saviialib} 
                        alt="SAVIIA Library Logo" 
                        style={{ 
                            display: 'block', 
                            margin: '0 auto', 
                            maxWidth: '20px', 
                            maxHeight: '70px',
                            objectFit: 'contain',
                            
                        }} 
                        /> */}
                    <p>
                        This library is designed for use with the SAVIIA Home Assistant Integration. It provides an API to retrieve files from a THIES Data Logger via an FTP server and upload them to a Microsoft SharePoint folder using the SharePoint REST API.
                    </p>
                    <a href="https://github.com/pedrozavalat/saviia-lib" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                        <FaGithub style={{ verticalAlign: 'middle' }} />
                        pedrozavalat/saviia-lib
                    </a>
                </Card>
        </Card>
    )
}



