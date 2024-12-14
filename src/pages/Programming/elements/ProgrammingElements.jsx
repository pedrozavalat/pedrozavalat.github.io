
import './ProgrammingElements.css';
import '../../../styles/container.css';
import "animate.css/animate.min.css";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdMail } from 'react-icons/md';
import { Typewriter } from 'react-simple-typewriter'
import { IoIosDocument } from "react-icons/io";
import { Text } from 'react-font';
import { Row, Column } from '../../../components/Table/Table';
// import { Line } from '../../../components/Line/Line';
import React from 'react';
import Horario from '../../../components/Horario/Horario';
import myimg from '../../../../public/me.jpg';
import Card from '../../../components/Card/Card';

export const ProgrammingHeader = () => {
    return (
        <>
            <section className='section-title'>
                <h1>
                    <span className='purple-neon'>Clases Particulares de Introducción a la Programación en Python </span><span className='green-neon'>🐍</span>
                </h1>
                <Text family='Press Start 2P' className='header-title'>
                    <Typewriter
                        words={[
                            '¡Reserva tu clase ya!',
                            '¡Desde cero!',
                            '¡Resuelve tus dudas!',
                            '¡Aprende Python con clases personalizadas a tu ritmo!'
                        ]}
                        loop={true}
                        cursor={true}
                        cursorStyle='|'
                        typeSpeed={60}
                    />
                </Text>
            </section>
        </>
    );
}

export const ProgrammingGeneral = ({ generalId }) => {
    return (
        <section className='info-container' id={generalId}>
            <h1>Informacion general </h1>
            <Card styles={['container-programming']}>
                <p>
                    ¡Ofrezco clases particulares para estudiantes que necesiten ayuda en programación!
                    Ya sea que quieras:
                </p>
                <ul>
                    <li>Reforzar tus conocimientos en programación con Python,</li>
                    <li>Resolver dudas en tareas o proyectos académicos o personales,</li>
                    <li>O aprender Python desde cero.</li>
                </ul>

                <p>
                    Cada clase estará diseñada de acuerdo a tu nivel, intereses y metas.
                </p>
            </Card>
        </section>
    )
}

export const ProgrammingPrices = () => {
    return (
        <>
            <h1>Modalidades y Precios</h1>
            <Card styles={['container-programming']}>
                <div className='row'>
                    <div className='col card-style-1' >
                        <h3>Modalidad Online</h3>
                        <p>$20.000 por hora</p>
                    </div>
                    <div className='col card-style-1'>
                        <h3>Modalidad Presencial (*)</h3>
                        <p>$25.000 por hora</p>
                    </div>
                    <p>
                        (*) Solamente en lugares como: Colina, Chicureo, y alrededores. También puede
                        ser en el Campus San Joaquín de la PUC.
                    </p>
                </div>
            </Card>
        </>
    )
}

export const ProgrammingExperience = () => {
    return (
        <section className='info-container' id='programming/#sobre-mi'>
            <h1>Sobre mi </h1>
            <Card styles={['container-programming']}>
                <div className="information">
                    <img src={myimg} alt="Yo" />
                    <article>
                        <p>
                            Soy estudiante de 4to año de Ingeniería Civil en la Pontificia Universidad Católica de Chile,
                            con major en Computación y Sistemas de Información y un minor en Data Science & Analytics.
                        </p>
                        <p>
                            Tengo experiencia en docencia, realizando clases particulares y además he sido ayudantes en cursos de programación,
                            como Programación Avanzada (IIC2233) en los semestres 2023-1, 2023-2 y 2024-1.
                        </p>
                    </article>
                </div>

                <p>
                    <span className='bolder'>Lenguajes de programación que manejo:</span> Python, C, JavaScript, SQL, Ruby, entre otros.
                </p>
                <button className='button-69'>
                    <a href="https://www.linkedin.com/in/pedro-pablo-zavala-tejos-671203244/" target='_blank'>Mas información</a>
                </button>
            </Card>
        </section>
    )
}

export const ProgrammingAvailability = () => {
    return (
        <section className='info-container' id='programming/#horarios'>
            <h1>Horarios Disponibles </h1>
            <p>Idealmente agendar con <span className='bolder'>3 días de anticipación</span>. </p>
            <Card styles={['container-programming']}>
                <Horario />
            </Card>

        </section>
    )
}

export const ProgrammingContact = ({ showWhatsApp, showResume, custom }) => {
    const generateWhatsAppLink = (phoneNumber, message) => {
        const encodedMessage = encodeURIComponent(message);
        return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    }
    const phoneNumber = '56952231388';
    const message = '¡Hola! Estoy interesado en tener una clase de programación :)';
    const whatsAppLink = generateWhatsAppLink(phoneNumber, message);

    const cvLink = 'https://raw.githubusercontent.com/pedrozavalat/home/main/public/docs/OFICIAL_CV.pdf';
    const cvName = 'CV_PedroPabloZavalaTejos.pdf'

    const downloadCV = async () => {
        try {
            const response = await fetch(cvLink);
            if (!response.ok) throw new Error('Error al descargar el archivo');

            // Convierte la respuesta en un Blob
            const blob = await response.blob();
            const downloadUrl = URL.createObjectURL(blob);

            // Crea un enlace temporal para descargar el archivo
            const a = document.createElement('a');
            a.href = downloadUrl;
            a.download = cvName; // Usa la variable cvName para el nombre del archivo
            document.body.appendChild(a); // Agrega el enlace al DOM
            a.click(); // Simula el clic para iniciar la descarga
            a.remove(); // Limpia el DOM

            // Revoca la URL temporal para liberar memoria
            URL.revokeObjectURL(downloadUrl);
        } catch (error) {
            console.error('Error al descargar el archivo:', error);
        }
    };




    return (
        <>
            <Card styles={['container-programming']}>
                <Row>
                    <Column>
                        <h2>Email</h2>
                        <a href="mailto:pedropablozavalat@uc.cl">
                            <MdMail size={50} />
                        </a>
                    </Column>
                    <Column>
                        <h2>WhatsApp</h2>
                        <a href={whatsAppLink} target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp size={50} />
                        </a>
                    </Column>
                    <Column>
                        <h2>Linkedin</h2>
                        <a href="https://www.linkedin.com/in/pedro-pablo-zavala-tejos-671203244/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={50} />
                        </a>
                    </Column>
                    <Column>
                        <h2>Github</h2>
                        <a href="https://github.com/pedrozavalat" target="_blank" rel="noopener noreferrer" >
                            <FaGithub size={50} />
                        </a>
                    </Column>
                </Row>
            </Card>
        </>
    );
}
