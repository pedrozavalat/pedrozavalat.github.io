import '../../styles/card.css';
import '../../styles/fonts.css';
import './Info.css';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdMail } from 'react-icons/md';
import { Typewriter } from 'react-simple-typewriter'
import React from 'react';
import Font, { Text } from 'react-font';
import Horario from '../Horario/Horario';
import myimg from '../../../public/me.jpg';
import Form from '../Form/Form';

const Header = () => {
    return (
        <>
        <section className='section-title'>
            <h1>
                <span className='purple-neon'>Clases Particulares de Introducción a la Programación en Python </span><span className='green-neon'>🐍</span></h1>
                
            
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
    )

}

const General = () => {
    return (
        <section className='info-container' id='general'>
            <h1>Informacion general </h1>
            <div className='card'>
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
            </div>
        </section>
    )
}

const Prices = () => {
    return (
        <>
        <h1>Modalidades y Precios</h1>
        <div className='card'>
            <div className="row">
                <div className="col card-style-1">
                    <h3>Modalidad Online</h3>
                    <p>$20.000 por hora</p>
                </div>
                <div className="col card-style-1">
                    <h3>Modalidad Presencial (*)</h3>
                    <p>$25.000 por hora</p>
                </div>
            <p>
            (*) Solamente en lugares como: Colina, Chicureo, y alrededores. También puede
            ser en el Campus San Joaquín de la PUC. 
            </p>
            </div>
        </div>
        </>
    )
}

const Experience = () => {
    return (
        <section className='info-container' id='sobre-mi'>
        <h1>Sobre mi </h1>
        <div className='card'>
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
            <p>
            <span className='bolder'>Cursos realizados:</span>
                <ul>
                    <li>Introducción a la Programación (IIC1103)</li>
                    <li>Programación Avanzada (IIC2233)</li>
                    <li>Matematicas Discretas (IIC1253)</li>
                    <li>Bases de Datos (IIC2413)</li>
                    <li>Ingenieria de Software (IIC2143)</li>
                    
                    <li>Estructuras de Datos y Algoritmos (IIC2133)</li>
                    <li>Minería de Datos (IIC2433)</li>
                    <li>Tecnologías y Aplicaciones Webs (IIC2513)</li>

                    <li>Inteligencia Artificial (IIC2613)</li>
                    <li>Visualización de la Información (IIC2026)</li>
                    <li>Procesamiento de Datos Masivos (IIC2440)</li>
                    <li>Reconocimiento de Patrones (IIC3724)</li>
                </ul>
            </p>
        </div>
        </section>
    )
}

const Availability = () => {
    return (
        <section className='info-container' id='horarios'>
            <h1>Horarios Disponibles </h1>
            <p>Idealmente agendar con <span className='bolder'>3 días de anticipación</span>. </p>
            <div className="card">
                <Horario />
            </div>
            
        </section>
    )
}

const Contact = () => {
    const generateWhatsAppLink = (phoneNumber, message) => {
        const encodedMessage = encodeURIComponent(message);
        return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    }
    const phoneNumber = '56952231388';
    const message = '¡Hola! Estoy interesado en tener una clase de programación :)';
    const whatsAppLink = generateWhatsAppLink(phoneNumber, message);

    return (
        <>
        <h1>Contacto </h1>
        <div className='card row' id='contacto'>
            <div className="col">
                <h2>Email</h2>
                
                <a href="mailto:pedropablozavalat@uc.cl">
                    <MdMail size={50} />
                </a>
            </div>
            <div className="col">
                <h2>WhatsApp</h2>
                    <a href={whatsAppLink} target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp size={50} />
                    </a>
            </div>
            <div className="col">
                <h2>Linkedin</h2>
                <a href="https://www.linkedin.com/in/pedro-pablo-zavala-tejos-671203244/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={50} />
                </a>
            </div>

            <div className="col">
                <h2>Github</h2>
                <a href="https://github.com/pedrozavalat"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub size={50} />
                </a>
                

            </div>
        </div>
        </>
    );
}


function Info() {
    return (
        <>
        <Font family='Raleway'>
            <Header />
            
            <AnimationOnScroll animateIn="animate__slideInLeft" animateOnce={true} offset={500}>
                <General />        
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__slideInRight" animateOnce={true} offset={500}>
                <Prices />
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__slideInLeft" animateOnce={true} offset={500}>
                <Availability />
            </AnimationOnScroll>
            
            <AnimationOnScroll animateIn="animate__slideInRight" animateOnce={true} offset={500}>
                <Experience />
            </AnimationOnScroll>
            
            <AnimationOnScroll animateIn="animate__slideInLeft" animateOnce={true} offset={500}>
                <Form />
            </AnimationOnScroll>
            
            
            <AnimationOnScroll animateIn="animate__slideInUp" animateOnce={true} offset={200}>
                <Contact />
            </AnimationOnScroll>


        </Font>
        </>
    )
};

export default Info;