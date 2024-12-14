import { IoIosArrowDropdownCircle } from "react-icons/io";
import { useEffect, useState } from "react";
import { IoIosDocument } from "react-icons/io";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdMail } from 'react-icons/md';
import './HomeElements.css';
import Card from "../../../components/Card/Card";
import { Column, Row } from "../../../components/Table/Table";
import Line from "../../../components/Line/Line";

export const HomeNavbar = ({ children, initPos }) => {
    return (
        <nav className={`home-navbar ${initPos}`} >
            {children}
        </nav>
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

export const HomeOverview = () => {
    return (
        <div className="home">
            <h1 style={{ color: "#ffecd1", fontWeight: 400 }}>Pedro Pablo Zavala Tejos</h1>
            <h3 style={{ color: "#ffecd1", margin: '0 0 2rem 0', fontWeight: 200, padding: 0 }}>
                Computer Science Student
            </h3>
            <HomeContact />
        </div>
    );
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


